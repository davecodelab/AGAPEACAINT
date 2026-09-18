"use client";

import React, { useState, useRef } from "react";
import { X, UploadCloud, CheckCircle2, AlertCircle, Sparkles, ArrowRight, Loader2 } from "lucide-react";
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
}: ImageUploadModalProps) {
  const [dragActive, setDragActive] = useState(false);
  const [optimizing, setOptimizing] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [optResult, setOptResult] = useState<OptimizationResult | null>(null);
  const [altText, setAltText] = useState(initialAltText);
  const [customTitle, setCustomTitle] = useState(title);

  const fileInputRef = useRef<HTMLInputElement>(null);

  React.useEffect(() => {
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

  if (!isOpen) return null;

  const handleFile = async (file: File) => {
    if (!file.type.startsWith("image/")) {
      setError("Please select a valid image file (JPEG, PNG, WebP).");
      return;
    }

    setError(null);
    setOptimizing(true);
    setOptResult(null);

    try {
      // Determine max dimensions based on target aspect
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
      setError(err.message || "Failed to optimize image");
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
    if (!optResult) return;

    setUploading(true);
    setError(null);

    try {
      const uploadRes = await uploadToCloudinary(optResult.file, {
        section,
        slotId,
        tags: [section, targetAspectRatio],
      });

      onSuccess({
        cloudinaryUrl: uploadRes.secure_url,
        cloudinaryPublicId: uploadRes.public_id,
        altText: altText || customTitle,
        title: customTitle,
      });

      onClose();
    } catch (err: any) {
      setError(
        err.message || "Upload failed. Please check your Cloudinary settings in .env.local"
      );
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm sm:p-6">
      <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#19151C]/10 bg-[#FAF8F9] px-6 py-5">
          <div>
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#6C0798]">
              {section} · {targetAspectRatio}
            </span>
            <h3 className="mt-0.5 font-serif text-xl text-[#19151C]">{title}</h3>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-[#19151C]/50 hover:bg-[#19151C]/5 hover:text-[#19151C]"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="max-h-[75vh] overflow-y-auto p-6">
          {description && (
            <p className="mb-4 font-sans text-xs text-[#19151C]/60">{description}</p>
          )}

          {error && (
            <div className="mb-5 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-xs text-red-800">
              <AlertCircle size={18} className="shrink-0 text-red-600" />
              <div>
                <p className="font-semibold">Notice</p>
                <p className="mt-0.5 leading-relaxed">{error}</p>
              </div>
            </div>
          )}

          {/* File Dropzone */}
          {!optResult && !optimizing && (
            <div
              onDragEnter={onDrag}
              onDragLeave={onDrag}
              onDragOver={onDrag}
              onDrop={onDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed p-10 text-center transition-all ${
                dragActive
                  ? "border-[#6C0798] bg-[#6C0798]/5"
                  : "border-[#19151C]/15 hover:border-[#6C0798]/40 hover:bg-[#FAF8F9]"
              }`}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#6C0798]/10 text-[#6C0798]">
                <UploadCloud size={28} />
              </div>
              <p className="mt-4 font-sans text-sm font-medium text-[#19151C]">
                Drag & drop, <span className="text-[#6C0798] underline">browse</span>, or paste (<kbd className="rounded bg-[#19151C]/5 px-1.5 py-0.5 font-mono text-[11px] text-[#19151C]/70">Ctrl+V</kbd>)
              </p>
              <p className="mt-1 font-sans text-xs text-[#19151C]/45">
                Recommended size: {recommendedDimensions} · JPG, PNG, WebP up to 25MB
              </p>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files?.[0]) handleFile(e.target.files[0]);
                }}
              />
            </div>
          )}

          {/* Optimizing state */}
          {optimizing && (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <Loader2 size={36} className="animate-spin text-[#6C0798]" />
              <p className="mt-4 font-sans text-sm font-medium text-[#19151C]">
                Optimizing image in browser...
              </p>
              <p className="mt-1 font-sans text-xs text-[#19151C]/50">
                Scaling dimensions & converting to high-efficiency WebP
              </p>
            </div>
          )}

          {/* Optimized Result & Preview */}
          {optResult && (
            <div className="space-y-6">
              {/* Optimization Stats Card */}
              <div className="flex items-center justify-between rounded-xl border border-emerald-200 bg-emerald-50/70 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-white">
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-emerald-800">
                      Browser Optimized
                    </span>
                    <p className="font-sans text-xs text-emerald-900">
                      {formatBytes(optResult.originalSize)} →{" "}
                      <span className="font-bold">{formatBytes(optResult.optimizedSize)}</span>{" "}
                      ({optResult.reductionPercentage}% smaller in {optResult.processingTimeMs}ms)
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setOptResult(null);
                    if (fileInputRef.current) fileInputRef.current.value = "";
                  }}
                  className="font-sans text-xs font-medium text-emerald-800 underline hover:text-emerald-950"
                >
                  Change file
                </button>
              </div>

              {/* Preview Image */}
              <div className="overflow-hidden rounded-xl border border-[#19151C]/10 bg-[#19151C]">
                <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden">
                  <img
                    src={optResult.previewUrl}
                    alt="Optimized preview"
                    className="max-h-full max-w-full object-contain"
                  />
                  <div className="absolute bottom-2 right-2 rounded-md bg-black/60 px-2 py-1 font-mono text-[10px] text-white backdrop-blur-sm">
                    {optResult.optimizedDimensions.width} × {optResult.optimizedDimensions.height}px
                  </div>
                </div>
              </div>

              {/* Form details */}
              <div className="space-y-3">
                <div>
                  <label className="block font-sans text-xs font-semibold text-[#19151C]">
                    Alt Text (Accessibility & SEO)
                  </label>
                  <input
                    type="text"
                    value={altText}
                    onChange={(e) => setAltText(e.target.value)}
                    placeholder="Describe this photo for screen readers..."
                    className="mt-1 h-10 w-full rounded-lg border border-[#19151C]/15 bg-[#FAF8F9] px-3 font-sans text-xs text-[#19151C] outline-none focus:border-[#6C0798] focus:bg-white"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="flex items-center justify-between border-t border-[#19151C]/10 bg-[#FAF8F9] px-6 py-4">
          <button
            type="button"
            onClick={onClose}
            disabled={uploading}
            className="rounded-full border border-[#19151C]/15 px-5 py-2 font-sans text-xs font-medium text-[#19151C] hover:bg-white disabled:opacity-50"
          >
            Cancel
          </button>

          {optResult && (
            <button
              type="button"
              onClick={handleUpload}
              disabled={uploading}
              className="inline-flex items-center gap-2 rounded-full bg-[#6C0798] px-6 py-2.5 font-sans text-xs font-semibold text-white transition-all hover:bg-[#4B075F] disabled:opacity-50"
            >
              {uploading ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Uploading to Cloudinary...
                </>
              ) : (
                <>
                  Save & Update Image
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
