"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Layers,
  Image as ImageIcon,
  UploadCloud,
  CheckCircle2,
  AlertTriangle,
  RefreshCw,
  Plus,
  Trash2,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import ImageUploadModal from "@/components/admin/ImageUploadModal";
import { MediaSlot, GalleryPhoto, DEFAULT_SLOTS } from "@/lib/media-slots";
import { invalidateSlotsCache } from "@/lib/use-media-slots";

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<"slots" | "gallery">("slots");
  const [selectedSection, setSelectedSection] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const [slots, setSlots] = useState<MediaSlot[]>(Object.values(DEFAULT_SLOTS));
  const [galleryPhotos, setGalleryPhotos] = useState<GalleryPhoto[]>([]);
  const [isSupabaseConnected, setIsSupabaseConnected] = useState(false);
  const [loading, setLoading] = useState(true);

  // Modal State
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [targetSlot, setTargetSlot] = useState<MediaSlot | null>(null);
  const [isGalleryUpload, setIsGalleryUpload] = useState(false);
  const [newGalleryCategory, setNewGalleryCategory] = useState<any>("Classrooms");

  const [notification, setNotification] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const fetchSlotsAndGallery = async () => {
    setLoading(true);
    try {
      // Fetch Slots
      const slotsRes = await fetch("/api/admin/slots");
      const slotsData = await slotsRes.json();
      if (slotsData.success && slotsData.slots) {
        setSlots(slotsData.slots);
        setIsSupabaseConnected(slotsData.isSupabaseConnected);
      }

      // Fetch Gallery
      const galRes = await fetch("/api/admin/gallery");
      const galData = await galRes.json();
      if (galData.success && galData.photos) {
        setGalleryPhotos(galData.photos);
      }
    } catch (e) {
      console.error("Failed to load CMS data", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSlotsAndGallery();
  }, []);

  const triggerNotification = (type: "success" | "error", message: string) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 5000);
  };

  const handleSlotUploadSuccess = async (data: {
    cloudinaryUrl: string;
    cloudinaryPublicId: string;
    altText: string;
  }) => {
    if (!targetSlot) return;

    // Optimistically update UI
    setSlots((prev) =>
      prev.map((s) =>
        s.id === targetSlot.id
          ? {
              ...s,
              currentUrl: data.cloudinaryUrl,
              altText: data.altText,
              updatedAt: new Date().toISOString(),
            }
          : s
      )
    );

    try {
      const res = await fetch("/api/admin/slots", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: targetSlot.id,
          cloudinary_url: data.cloudinaryUrl,
          cloudinary_public_id: data.cloudinaryPublicId,
          alt_text: data.altText,
        }),
      });

      const resData = await res.json();
      if (!res.ok || !resData.success) {
        throw new Error(resData.error || "Failed to update slot in database");
      }

      invalidateSlotsCache();
      triggerNotification(
        "success",
        `Successfully updated "${targetSlot.label}" with optimized Cloudinary image.`
      );
    } catch (err: any) {
      triggerNotification(
        "error",
        err.message || "Failed to save update to database"
      );
    }
  };

  const handleGalleryUploadSuccess = async (data: {
    cloudinaryUrl: string;
    cloudinaryPublicId: string;
    title?: string;
    altText: string;
  }) => {
    try {
      const res = await fetch("/api/admin/gallery", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category: newGalleryCategory,
          title: data.title || "Campus Photograph",
          caption: data.altText || "",
          cloudinary_url: data.cloudinaryUrl,
          cloudinary_public_id: data.cloudinaryPublicId,
        }),
      });

      const resData = await res.json();
      if (!res.ok || !resData.success) {
        throw new Error(resData.error || "Failed to save photo to gallery");
      }

      setGalleryPhotos((prev) => [resData.photo, ...prev]);
      triggerNotification(
        "success",
        `Added new photo to "${newGalleryCategory}" gallery.`
      );
    } catch (err: any) {
      triggerNotification("error", err.message || "Failed to add to gallery");
    }
  };

  const handleDeleteGalleryPhoto = async (id: string) => {
    if (!confirm("Are you sure you want to remove this photo from the gallery?"))
      return;

    try {
      const res = await fetch(`/api/admin/gallery?id=${id}`, {
        method: "DELETE",
      });

      const resData = await res.json();
      if (!res.ok || !resData.success) {
        throw new Error(resData.error || "Failed to delete photo");
      }

      setGalleryPhotos((prev) => prev.filter((p) => p.id !== id));
      triggerNotification("success", "Photo removed from gallery.");
    } catch (err: any) {
      triggerNotification("error", err.message || "Failed to delete photo");
    }
  };

  const filteredSlots =
    selectedSection === "all"
      ? slots
      : slots.filter((s) => s.section === selectedSection);

  const filteredGallery =
    selectedCategory === "all"
      ? galleryPhotos
      : galleryPhotos.filter((p) => p.category === selectedCategory);

  const sections = [
    { id: "all", label: "All Slots" },
    { id: "homepage", label: "Homepage" },
    { id: "about", label: "About" },
    { id: "academics", label: "Academics" },
    { id: "admissions", label: "Admissions" },
    { id: "student_life", label: "Student Life" },
    { id: "brand", label: "Brand / Logo" },
  ];

  const galleryCategories = [
    "all",
    "Classrooms",
    "Science",
    "Library",
    "Sport",
    "Creative Spaces",
    "Chapel",
    "Outdoor",
    "Student Life",
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-8 sm:px-8">
      {/* Toast Notification */}
      {notification && (
        <div
          className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-xl border p-4 shadow-xl backdrop-blur-md ${
            notification.type === "success"
              ? "border-emerald-300 bg-emerald-50 text-emerald-900"
              : "border-red-300 bg-red-50 text-red-900"
          }`}
        >
          {notification.type === "success" ? (
            <CheckCircle2 className="text-emerald-600" size={18} />
          ) : (
            <AlertTriangle className="text-red-600" size={18} />
          )}
          <span className="font-sans text-xs font-medium">
            {notification.message}
          </span>
        </div>
      )}

      {/* Hero Banner */}
      <div className="flex flex-col justify-between gap-6 border-b border-[#19151C]/10 pb-8 sm:flex-row sm:items-end">
        <div>
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#6C0798]">
            Administration Panel
          </span>
          <h1 className="mt-1 font-serif text-3xl text-[#19151C] sm:text-4xl">
            Media & Image Management
          </h1>
          <p className="mt-2 max-w-2xl font-sans text-sm text-[#19151C]/60">
            Upload, optimize, and organize high-resolution photography for Agape
            Academy. All uploads are compressed in your browser before saving to
            Cloudinary.
          </p>
        </div>

        {/* Database Status Indicator */}
        <div className="flex items-center gap-3">
          <div
            className={`flex items-center gap-2 rounded-full border px-3.5 py-1.5 font-sans text-xs font-medium ${
              isSupabaseConnected
                ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                : "border-amber-200 bg-amber-50 text-amber-800"
            }`}
          >
            <div
              className={`h-2 w-2 rounded-full ${
                isSupabaseConnected ? "bg-emerald-500" : "bg-amber-500"
              }`}
            />
            <span>
              {isSupabaseConnected
                ? "Supabase Connected"
                : "Local Fallback Mode"}
            </span>
          </div>

          <button
            onClick={fetchSlotsAndGallery}
            className="rounded-full border border-[#19151C]/10 p-2 text-[#19151C]/60 hover:bg-white hover:text-[#19151C]"
            title="Refresh CMS data"
          >
            <RefreshCw size={15} />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-8 flex items-center gap-4 border-b border-[#19151C]/10">
        <button
          onClick={() => setActiveTab("slots")}
          className={`flex items-center gap-2 border-b-2 pb-3 font-sans text-sm font-semibold transition-colors ${
            activeTab === "slots"
              ? "border-[#6C0798] text-[#6C0798]"
              : "border-transparent text-[#19151C]/50 hover:text-[#19151C]"
          }`}
        >
          <Layers size={16} />
          <span>Website Slots ({slots.length})</span>
        </button>

        <button
          onClick={() => setActiveTab("gallery")}
          className={`flex items-center gap-2 border-b-2 pb-3 font-sans text-sm font-semibold transition-colors ${
            activeTab === "gallery"
              ? "border-[#6C0798] text-[#6C0798]"
              : "border-transparent text-[#19151C]/50 hover:text-[#19151C]"
          }`}
        >
          <ImageIcon size={16} />
          <span>Campus Gallery ({galleryPhotos.length})</span>
        </button>
      </div>

      {/* TAB 1: WEBSITE SLOTS */}
      {activeTab === "slots" && (
        <div className="mt-8">
          {/* Section Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {sections.map((sec) => (
              <button
                key={sec.id}
                onClick={() => setSelectedSection(sec.id)}
                className={`rounded-full px-4 py-1.5 font-sans text-xs font-medium transition-all ${
                  selectedSection === sec.id
                    ? "bg-[#6C0798] text-white"
                    : "border border-[#19151C]/10 bg-white text-[#19151C]/70 hover:border-[#6C0798]/30"
                }`}
              >
                {sec.label}
              </button>
            ))}
          </div>

          {/* Slots Grid */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredSlots.map((slot) => (
              <div
                key={slot.id}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-[#19151C]/10 bg-white shadow-sm transition-all hover:border-[#6C0798]/30 hover:shadow-md"
              >
                {/* Image Preview */}
                <div className="relative aspect-video w-full overflow-hidden bg-[#19151C]/5">
                  <img
                    src={slot.currentUrl}
                    alt={slot.altText || slot.label}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-md bg-black/60 px-2.5 py-1 font-sans text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                    <span>{slot.section}</span>
                    <span>·</span>
                    <span>{slot.aspectRatio}</span>
                  </div>

                  {slot.currentUrl.includes("cloudinary") && (
                    <div className="absolute right-3 top-3 rounded-full bg-[#6C0798] p-1 text-white shadow-lg">
                      <Sparkles size={12} />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <h3 className="font-serif text-lg text-[#19151C]">
                      {slot.label}
                    </h3>
                    <p className="mt-1 font-sans text-xs text-[#19151C]/60">
                      {slot.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-[#19151C]/5 pt-4">
                    <span className="font-sans text-[11px] text-[#19151C]/45">
                      Rec: {slot.recommendedDimensions}
                    </span>

                    <button
                      onClick={() => {
                        setTargetSlot(slot);
                        setIsGalleryUpload(false);
                        setUploadModalOpen(true);
                      }}
                      className="inline-flex items-center gap-1.5 rounded-full bg-[#6C0798]/10 px-4 py-1.5 font-sans text-xs font-semibold text-[#6C0798] transition-colors hover:bg-[#6C0798] hover:text-white"
                    >
                      <UploadCloud size={13} />
                      <span>Update Photo</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: CAMPUS GALLERY */}
      {activeTab === "gallery" && (
        <div className="mt-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {galleryCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-full px-3.5 py-1.5 font-sans text-xs font-medium capitalize transition-all ${
                    selectedCategory === cat
                      ? "bg-[#6C0798] text-white"
                      : "border border-[#19151C]/10 bg-white text-[#19151C]/70 hover:border-[#6C0798]/30"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Add Photo Button */}
            <button
              onClick={() => {
                setTargetSlot({
                  id: "gallery_photo",
                  section: "about",
                  label: "New Gallery Photo",
                  description: "Campus gallery photograph",
                  aspectRatio: "4:3",
                  recommendedDimensions: "1600x1200",
                  currentUrl: "",
                  altText: "",
                });
                setIsGalleryUpload(true);
                setUploadModalOpen(true);
              }}
              className="inline-flex items-center gap-2 rounded-full bg-[#6C0798] px-5 py-2 font-sans text-xs font-semibold text-white shadow-md transition-all hover:bg-[#4B075F]"
            >
              <Plus size={15} />
              <span>Add Gallery Photo</span>
            </button>
          </div>

          {/* Gallery Grid */}
          {filteredGallery.length === 0 ? (
            <div className="mt-12 flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#19151C]/10 bg-white py-16 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#6C0798]/10 text-[#6C0798]">
                <ImageIcon size={28} />
              </div>
              <h3 className="mt-4 font-serif text-lg text-[#19151C]">
                No photos in this category yet
              </h3>
              <p className="mt-1 font-sans text-xs text-[#19151C]/50">
                Click "Add Gallery Photo" to optimize and upload a photograph to
                Cloudinary.
              </p>
            </div>
          ) : (
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {filteredGallery.map((photo) => (
                <div
                  key={photo.id}
                  className="group relative overflow-hidden rounded-2xl border border-[#19151C]/10 bg-white shadow-sm transition-all hover:shadow-md"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#19151C]/5">
                    <img
                      src={photo.cloudinaryUrl}
                      alt={photo.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute left-3 top-3 rounded-md bg-black/60 px-2 py-0.5 font-sans text-[10px] font-semibold text-white backdrop-blur-md">
                      {photo.category}
                    </div>

                    <button
                      onClick={() => handleDeleteGalleryPhoto(photo.id)}
                      className="absolute right-3 top-3 rounded-full bg-red-600/80 p-1.5 text-white opacity-0 transition-all hover:bg-red-600 group-hover:opacity-100"
                      title="Delete photo"
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>

                  <div className="p-4">
                    <h4 className="font-serif text-base text-[#19151C]">
                      {photo.title}
                    </h4>
                    {photo.caption && (
                      <p className="mt-1 line-clamp-2 font-sans text-xs text-[#19151C]/60">
                        {photo.caption}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Upload & Optimizer Modal */}
      {uploadModalOpen && targetSlot && (
        <ImageUploadModal
          isOpen={uploadModalOpen}
          onClose={() => {
            setUploadModalOpen(false);
            setTargetSlot(null);
          }}
          onSuccess={(data) => {
            if (isGalleryUpload) {
              handleGalleryUploadSuccess(data);
            } else {
              handleSlotUploadSuccess(data);
            }
          }}
          title={targetSlot.label}
          description={targetSlot.description}
          section={targetSlot.section}
          slotId={targetSlot.id}
          targetAspectRatio={targetSlot.aspectRatio}
          recommendedDimensions={targetSlot.recommendedDimensions}
          initialAltText={targetSlot.altText}
        />
      )}
    </div>
  );
}
