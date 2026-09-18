"use client";

import React, { useState, useRef, useEffect } from "react";
import { X, UploadCloud, Loader2, ArrowRight, Video, Image as ImageIcon } from "lucide-react";
import { optimizeImageInBrowser, formatBytes, OptimizationResult } from "@/lib/image-optimizer";
import { uploadToCloudinary } from "@/lib/cloudinary";

interface ImageUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (data: {
    cloudinaryUrl: string;
    cloudinaryPublicId: string;
    altText: string;
    title?: string;
  }) => void;
  title: string;
  description?: string;
  section: string;
  slotId: string;
  targetAspectRatio?: string;
  recommendedDimensions?: string;
  initialAltText?: string;
  allowVideo?: boolean;
}

interface VideoUploadData {
  file: File;
  previewUrl: string;
  size: number;
  name: string;
}

export default function ImageUploadModal({
  isOpen,
  onClose,
  onSuccess,
  title,
  description,
  section,
  slotId,
  targetAspectRatio = "16:9",
  recommendedDimensions = "1920x1080",
  initialAltText = "",
  allowVideo = false,
}: ImageUploadModalProps) {
  const supportsVideo = allowVideo || slotId === "home_hero";

  const [dragActive, setDragActive] = useState(false);
  const [optimizing, setOptimizing] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [optResult, setOptResult] = useState<OptimizationResult | null>(null);
  const [videoData, setVideoData] = useState<VideoUploadData | null>(null);
  const [altText, setAltText] = useState(initialAltText);
  const [customTitle, setCustomTitle] = useState(title);

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handlePaste = (e: ClipboardEvent) => {
      const items = e.clipboardData?.items;
      if (!items) return;

      for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf("image") !== -1) {
          const file = items[i].getAsFile();
          if (file) {
            handleFile(file);
            break;
          }
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("paste", handlePaste);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("paste", handlePaste);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    return () => {
      if (videoData?.previewUrl) {
        URL.revokeObjectURL(videoData.previewUrl);
      }
    };
  }, [videoData]);

  if (!isOpen) return null;

  const handleFile = async (file: File) => {
    const isVideo = file.type.startsWith("video/") || /\.(mp4|webm|mov)$/i.test(file.name);
    const isImage = file.type.startsWith("image/");

    if (!isImage && !isVideo) {
      setError(
        supportsVideo
          ? "Please select a valid image (JPG, PNG, WebP) or video (MP4, WebM)."
          : "Please select a valid image file (JPG, PNG, or WebP)."
      );
      return;
    }

    if (isVideo && !supportsVideo) {
      setError("Video uploads are only supported for the Hero section.");
      return;
    }

    // Video File Handling
    if (isVideo) {
      if (file.size > 100 * 1024 * 1024) {
        setError("Video is too large. Please select a video under 100MB for smooth playback.");
        return;
      }

      setError(null);
      setOptResult(null);
      if (videoData?.previewUrl) {
        URL.revokeObjectURL(videoData.previewUrl);
      }

      setVideoData({
        file,
        previewUrl: URL.createObjectURL(file),
        size: file.size,
        name: file.name,
      });
      return;
    }

    // Image File Handling (Browser Canvas Optimization)
    setError(null);
    setOptimizing(true);
    setOptResult(null);
    if (videoData?.previewUrl) {
      URL.revokeObjectURL(videoData.previewUrl);
      setVideoData(null);
    }

    try {
      let maxWidth = 2560;
      if (slotId.includes("portrait") || slotId.includes("principal")) {
        maxWidth = 1200;
      } else if (slotId.includes("logo")) {
        maxWidth = 800;
      }

      const result = await optimizeImageInBrowser(file, {
        maxWidth,
        maxHeight: maxWidth,
        quality: 0.83,
        targetFormat: "image/webp",
      });

      setOptResult(result);
    } catch (err: any) {
      setError(err.message || "Failed to process the image. Please try again.");
    } finally {
      setOptimizing(false);
    }
  };

  const onDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!optResult && !videoData) return;

    setUploading(true);
    setError(null);

    try {
      if (videoData) {
        // Direct Video Upload to Cloudinary
        const uploadRes = await uploadToCloudinary(videoData.file, {
          section,
          slotId,
          resourceType: "video",
          tags: [section, targetAspectRatio, "hero-video"],
        });

        onSuccess({
          cloudinaryUrl: uploadRes.secure_url,
          cloudinaryPublicId: uploadRes.public_id,
          altText: altText || customTitle,
          title: customTitle,
        });
      } else if (optResult) {
        // Optimized WebP Image Upload
        const uploadRes = await uploadToCloudinary(optResult.file, {
          section,
          slotId,
          resourceType: "image",
          tags: [section, targetAspectRatio],
        });

        onSuccess({
          cloudinaryUrl: uploadRes.secure_url,
          cloudinaryPublicId: uploadRes.public_id,
          altText: altText || customTitle,
          title: customTitle,
        });
      }

      onClose();
    } catch (err: any) {
      setError(
        err.message || "Upload failed. Please check your network connection."
      );
    } finally {
      setUploading(false);
    }
  };

  const clearSelection = () => {
    if (videoData?.previewUrl) {
      URL.revokeObjectURL(videoData.previewUrl);
    }
    setVideoData(null);
    setOptResult(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const hasMediaSelected = Boolean(optResult || videoData);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#19151C]/60 p-4 backdrop-blur-sm sm:p-6">
      <div className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-[#19151C]/10 bg-white shadow-2xl">
        {/* Modal Header */}
        <div className="flex items-start justify-between border-b border-[#19151C]/10 bg-[#FAF8F9] px-6 py-5 sm:px-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-[#6C0798]/10 px-2.5 py-0.5 font-sans text-xs font-semibold text-[#6C0798]">
                {section}
              </span>
              <span className="font-sans text-xs text-[#19151C]/50">
                {supportsVideo ? "Photo or Video (16:9)" : `Recommended: ${recommendedDimensions}`}
              </span>
            </div>
            <h2 className="mt-2 font-serif text-xl text-[#19151C] sm:text-2xl">
              {title}
            </h2>
            {description && (
              <p className="mt-1 font-sans text-xs text-[#19151C]/60">
                {description}
              </p>
            )}
          </div>

          <button
            onClick={onClose}
            aria-label="Close"
            className="flex h-8 w-8 items-center justify-center rounded-full text-[#19151C]/40 transition-colors hover:bg-[#19151C]/5 hover:text-[#19151C]"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content Body */}
        <div className="max-h-[70vh] overflow-y-auto p-6 sm:p-8">
          {error && (
            <div className="mb-5 rounded-xl border border-red-200 bg-red-50 p-3.5 font-sans text-xs text-red-800">
              {error}
            </div>
          )}

          {/* Dropzone */}
          {!hasMediaSelected && !optimizing && (
            <div
              onDragEnter={onDrag}
              onDragLeave={onDrag}
              onDragOver={onDrag}
              onDrop={onDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`group flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed p-10 text-center transition-all ${
                dragActive
                  ? "border-[#6C0798] bg-[#6C0798]/5"
                  : "border-[#19151C]/15 bg-[#FAF8F9] hover:border-[#6C0798]/50 hover:bg-[#6C0798]/[0.02]"
              }`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#6C0798]/10 text-[#6C0798] transition-transform group-hover:scale-105">
                {supportsVideo ? <Video size={24} /> : <UploadCloud size={24} />}
              </div>

              <p className="mt-4 font-sans text-sm font-semibold text-[#19151C]">
                {supportsVideo
                  ? "Choose a photo or video, or drag & drop here"
                  : "Choose a photo or drag & drop here"}
              </p>

              <p className="mt-1 font-sans text-xs text-[#19151C]/50">
                {supportsVideo
                  ? "Photos (JPG, PNG, WebP) or Videos (MP4, WebM up to 100MB)"
                  : "Supports JPG, PNG, or WebP · Paste with Ctrl+V"}
              </p>

              <button
                type="button"
                className="mt-4 rounded-full border border-[#19151C]/15 bg-white px-4 py-1.5 font-sans text-xs font-medium text-[#19151C] transition-colors group-hover:border-[#6C0798] group-hover:text-[#6C0798]"
              >
                Browse files
              </button>

              <input
                ref={fileInputRef}
                type="file"
                accept={supportsVideo ? "image/*,video/mp4,video/webm,video/quicktime" : "image/*"}
                className="hidden"
                onChange={(e) => {
                  if (e.target.files?.[0]) handleFile(e.target.files[0]);
                }}
              />
            </div>
          )}

          {/* Optimizing State */}
          {optimizing && (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <Loader2 size={28} className="animate-spin text-[#6C0798]" />
              <p className="mt-4 font-serif text-lg text-[#19151C]">
                Preparing photo...
              </p>
              <p className="mt-1 font-sans text-xs text-[#19151C]/50">
                Resizing and optimizing for fast browser loading
              </p>
            </div>
          )}

          {/* Video Preview State */}
          {videoData && (
            <div className="space-y-5">
              <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-[#19151C]/10 bg-[#19151C]">
                <video
                  src={videoData.previewUrl}
                  controls
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Video Info Pill */}
              <div className="flex items-center justify-between rounded-xl bg-[#FAF8F9] px-4 py-3 text-xs">
                <div className="flex items-center gap-2 font-sans">
                  <span className="rounded-full bg-[#6C0798]/10 px-2 py-0.5 font-semibold text-[#6C0798]">
                    Video
                  </span>
                  <span className="text-[#19151C]/60 truncate max-w-[180px]">
                    {videoData.name}
                  </span>
                  <span className="text-[#19151C]/40">·</span>
                  <span className="font-semibold text-[#19151C]">
                    {formatBytes(videoData.size)}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={clearSelection}
                  className="font-sans text-xs text-[#19151C]/50 underline hover:text-[#19151C]"
                >
                  Choose another
                </button>
              </div>

              {/* Alt / Caption Text */}
              <div>
                <label className="block font-sans text-xs font-semibold text-[#19151C]">
                  Video description (optional)
                </label>
                <input
                  type="text"
                  value={altText}
                  onChange={(e) => setAltText(e.target.value)}
                  placeholder="e.g. Agape Academy students campus b-roll"
                  className="mt-1.5 h-10 w-full rounded-xl border border-[#19151C]/15 bg-[#FAF8F9] px-3.5 font-sans text-xs text-[#19151C] outline-none transition-colors focus:border-[#6C0798] focus:bg-white focus:ring-1 focus:ring-[#6C0798]"
                />
              </div>
            </div>
          )}

          {/* Image Preview & Info */}
          {optResult && (
            <div className="space-y-5">
              {/* Image Preview Container */}
              <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-[#19151C]/10 bg-[#FAF8F9]">
                <img
                  src={optResult.previewUrl}
                  alt="Preview"
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Optimization summary */}
              <div className="flex items-center justify-between rounded-xl bg-[#FAF8F9] px-4 py-3 text-xs">
                <div className="flex items-center gap-4">
                  <div>
                    <span className="text-[#19151C]/50">Original:</span>{" "}
                    <span className="font-semibold text-[#19151C]">
                      {formatBytes(optResult.originalSize)}
                    </span>
                  </div>
                  <span className="text-[#19151C]/20">→</span>
                  <div>
                    <span className="text-[#19151C]/50">Ready to upload:</span>{" "}
                    <span className="font-semibold text-[#6C0798]">
                      {formatBytes(optResult.optimizedSize)}
                    </span>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-2 py-0.5 font-medium text-emerald-700">
                    {optResult.reductionPercentage}% smaller
                  </span>
                </div>

                <button
                  type="button"
                  onClick={clearSelection}
                  className="font-sans text-xs text-[#19151C]/50 underline hover:text-[#19151C]"
                >
                  Choose another
                </button>
              </div>

              {/* Alt Text */}
              <div>
                <label className="block font-sans text-xs font-semibold text-[#19151C]">
                  Photo description (alt text)
                </label>
                <input
                  type="text"
                  value={altText}
                  onChange={(e) => setAltText(e.target.value)}
                  placeholder="e.g. Students in modern science lab"
                  className="mt-1.5 h-10 w-full rounded-xl border border-[#19151C]/15 bg-[#FAF8F9] px-3.5 font-sans text-xs text-[#19151C] outline-none transition-colors focus:border-[#6C0798] focus:bg-white focus:ring-1 focus:ring-[#6C0798]"
                />
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between border-t border-[#19151C]/10 bg-[#FAF8F9] px-6 py-4 sm:px-8">
          <button
            type="button"
            onClick={onClose}
            disabled={uploading}
            className="rounded-full border border-[#19151C]/15 bg-white px-4 py-2 font-sans text-xs font-medium text-[#19151C]/70 transition-colors hover:border-[#19151C]/30 hover:text-[#19151C] disabled:opacity-40"
          >
            Cancel
          </button>

          {hasMediaSelected && (
            <button
              type="button"
              onClick={handleUpload}
              disabled={uploading}
              className="inline-flex items-center gap-2 rounded-full bg-[#6C0798] px-5 py-2 font-sans text-xs font-medium text-white shadow-sm transition-colors hover:bg-[#4B075F] disabled:opacity-50"
            >
              {uploading ? (
                <>
                  <Loader2 size={14} className="animate-spin" />
                  <span>{videoData ? "Uploading video..." : "Uploading photo..."}</span>
                </>
              ) : (
                <>
                  <span>{videoData ? "Save video" : "Save photo"}</span>
                  <ArrowRight size={14} />
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

