"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  UploadCloud,
  CheckCircle2,
  AlertTriangle,
  RefreshCw,
  Plus,
  Trash2,
  Camera,
  Video,
  LayoutGrid,
  List,
} from "lucide-react";
import ImageUploadModal from "@/components/admin/ImageUploadModal";
import { MediaSlot, GalleryPhoto, DEFAULT_SLOTS } from "@/lib/media-slots";
import { invalidateSlotsCache } from "@/lib/use-media-slots";
import { isCloudinaryVideoUrl } from "@/lib/cloudinary";

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<"slots" | "gallery">("slots");
  const [selectedSection, setSelectedSection] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

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

  useEffect(() => {
    try {
      const saved = localStorage.getItem("agape_admin_view_mode");
      if (saved === "grid" || saved === "list") {
        setViewMode(saved);
      }
    } catch (_) {}
  }, []);

  const handleViewModeChange = (mode: "grid" | "list") => {
    setViewMode(mode);
    try {
      localStorage.setItem("agape_admin_view_mode", mode);
    } catch (_) {}
  };

  const fetchSlotsAndGallery = async () => {
    setLoading(true);
    try {
      const slotsRes = await fetch("/api/admin/slots");
      const slotsData = await slotsRes.json();
      if (slotsData.success && slotsData.slots) {
        setSlots(slotsData.slots);
        setIsSupabaseConnected(slotsData.isSupabaseConnected);
      }

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
    setTimeout(() => setNotification(null), 4000);
  };

  const handleSlotUploadSuccess = async (data: {
    cloudinaryUrl: string;
    cloudinaryPublicId: string;
    altText: string;
  }) => {
    if (!targetSlot) return;

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
        throw new Error(resData.error || "Failed to save update to database");
      }

      invalidateSlotsCache();
      triggerNotification("success", `Updated "${targetSlot.label}" successfully.`);
    } catch (err: any) {
      triggerNotification("error", err.message || "Failed to update photo");
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
          title: data.title || "Campus Photo",
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
        `Added new photo to "${newGalleryCategory}".`
      );
    } catch (err: any) {
      triggerNotification("error", err.message || "Failed to add photo");
    }
  };

  const handleDeleteGalleryPhoto = async (id: string) => {
    if (!confirm("Are you sure you want to delete this photo from the gallery?"))
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
    { id: "all", label: "All" },
    { id: "homepage", label: "Homepage" },
    { id: "about", label: "About" },
    { id: "academics", label: "Academics" },
    { id: "admissions", label: "Admissions" },
    { id: "student_life", label: "Student Life" },
    { id: "brand", label: "Brand" },
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
    "Graduation",
  ];

  return (
    <div className="mx-auto max-w-7xl px-3.5 py-6 sm:px-8 sm:py-10 lg:px-12">
      {/* Toast Notification */}
      {notification && (
        <div
          className={`fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-50 flex max-w-sm items-center gap-3 rounded-xl border p-3.5 sm:p-4 shadow-lg transition-all ${
            notification.type === "success"
              ? "border-emerald-200 bg-white text-[#19151C]"
              : "border-red-200 bg-white text-red-900"
          }`}
        >
          {notification.type === "success" ? (
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
              <CheckCircle2 size={16} />
            </div>
          ) : (
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-700">
              <AlertTriangle size={16} />
            </div>
          )}
          <p className="font-sans text-xs leading-relaxed">
            {notification.message}
          </p>
        </div>
      )}

      {/* Page Header */}
      <section className="border-b border-[#19151C]/10 pb-6 sm:pb-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-sans text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#6C0798]">
              Admin Panel
            </p>
            <h1 className="mt-1 font-serif text-2xl sm:text-3xl lg:text-4xl text-[#19151C]">
              Website Photos
            </h1>
            <p className="mt-1.5 max-w-2xl font-sans text-xs sm:text-sm leading-relaxed text-[#19151C]/65">
              Review and update images across the school website. Uploaded photos are automatically resized and compressed in your browser for fast page loading.
            </p>
          </div>

          {/* Database status pill */}
          <div className="flex shrink-0 items-center gap-2.5 rounded-full border border-[#19151C]/10 bg-white px-3.5 py-1.5 shadow-xs self-start sm:self-auto">
            <span
              className={`h-2 w-2 rounded-full ${
                isSupabaseConnected ? "bg-emerald-500" : "bg-amber-500"
              }`}
            />
            <span className="font-sans text-[11px] sm:text-xs font-medium text-[#19151C]/80">
              {isSupabaseConnected ? "Connected to Supabase" : "Local mode (in memory)"}
            </span>
            <button
              onClick={fetchSlotsAndGallery}
              title="Refresh"
              className="text-[#19151C]/40 transition-colors hover:text-[#6C0798]"
            >
              <RefreshCw size={12} className={loading ? "animate-spin" : ""} />
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mt-6 sm:mt-8 flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => setActiveTab("slots")}
            className={`rounded-full px-4 py-1.5 sm:px-5 sm:py-2 font-sans text-xs sm:text-sm font-medium transition-colors ${
              activeTab === "slots"
                ? "bg-[#6C0798] text-white shadow-xs"
                : "bg-white text-[#19151C]/70 border border-[#19151C]/10 hover:border-[#6C0798]/40 hover:text-[#19151C]"
            }`}
          >
            Website Pages ({slots.length})
          </button>

          <button
            onClick={() => setActiveTab("gallery")}
            className={`rounded-full px-4 py-1.5 sm:px-5 sm:py-2 font-sans text-xs sm:text-sm font-medium transition-colors ${
              activeTab === "gallery"
                ? "bg-[#6C0798] text-white shadow-xs"
                : "bg-white text-[#19151C]/70 border border-[#19151C]/10 hover:border-[#6C0798]/40 hover:text-[#19151C]"
            }`}
          >
            Campus Gallery ({galleryPhotos.length})
          </button>
        </div>
      </section>

      {/* TAB 1: WEBSITE PAGE SLOTS */}
      {activeTab === "slots" && (
        <div className="mt-6 sm:mt-8">
          {/* Controls Bar: Section Filter Pills + View Switcher */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-1">
            {/* Scrollable Section Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none -mx-3.5 px-3.5 sm:mx-0 sm:px-0">
              {sections.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => setSelectedSection(sec.id)}
                  className={`shrink-0 rounded-full border px-3 py-1 sm:px-3.5 sm:py-1.5 font-sans text-[11px] sm:text-xs transition-colors ${
                    selectedSection === sec.id
                      ? "border-[#6C0798] bg-[#6C0798] text-white shadow-xs"
                      : "border-[#19151C]/15 bg-white text-[#19151C]/70 hover:border-[#6C0798]/40 hover:text-[#19151C]"
                  }`}
                >
                  {sec.label}
                </button>
              ))}
            </div>

            {/* View Mode Toggle: Grid vs List */}
            <div className="flex items-center gap-1 self-end sm:self-auto rounded-xl border border-[#19151C]/10 bg-white p-1 shadow-xs">
              <button
                onClick={() => handleViewModeChange("grid")}
                title="Card grid view"
                className={`flex h-7 w-7 items-center justify-center rounded-lg transition-colors ${
                  viewMode === "grid"
                    ? "bg-[#6C0798] text-white"
                    : "text-[#19151C]/50 hover:text-[#19151C]"
                }`}
              >
                <LayoutGrid size={14} />
              </button>
              <button
                onClick={() => handleViewModeChange("list")}
                title="Compact list view"
                className={`flex h-7 w-7 items-center justify-center rounded-lg transition-colors ${
                  viewMode === "list"
                    ? "bg-[#6C0798] text-white"
                    : "text-[#19151C]/50 hover:text-[#19151C]"
                }`}
              >
                <List size={15} />
              </button>
            </div>
          </div>

          {/* VIEW MODE: COMPACT CARDS GRID */}
          {viewMode === "grid" ? (
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 sm:gap-4">
              {filteredSlots.map((slot) => {
                const isVideo = isCloudinaryVideoUrl(slot.currentUrl);
                const isHero =
                  slot.id === "home_hero" ||
                  slot.id === "academics_hero" ||
                  slot.id === "student_life_hero";

                return (
                  <div
                    key={slot.id}
                    className="group flex flex-col justify-between overflow-hidden rounded-xl border border-[#19151C]/10 bg-white shadow-xs transition-all duration-200 hover:border-[#6C0798]/30 hover:shadow-md"
                  >
                    {/* Media Presentation */}
                    <div
                      onClick={() => {
                        setTargetSlot(slot);
                        setIsGalleryUpload(false);
                        setUploadModalOpen(true);
                      }}
                      className="relative aspect-[16/10] w-full cursor-pointer overflow-hidden bg-[#FAF8F9]"
                    >
                      {isVideo ? (
                        <video
                          src={slot.currentUrl}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <img
                          src={slot.currentUrl}
                          alt={slot.altText || slot.label}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                        />
                      )}

                      {/* Gentle hover prompt */}
                      <div className="absolute inset-0 flex items-center justify-center bg-[#19151C]/35 opacity-0 backdrop-blur-[1px] transition-opacity duration-200 group-hover:opacity-100">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 font-sans text-xs font-semibold text-[#19151C] shadow-md">
                          {isHero ? <Video size={12} /> : <Camera size={12} />}
                          <span>{isHero ? "Change media" : "Change photo"}</span>
                        </span>
                      </div>

                      {/* Video badge */}
                      {isVideo && (
                        <span className="absolute left-2.5 top-2.5 flex items-center gap-1 rounded-full bg-white/95 px-2 py-0.5 font-sans text-[10px] font-semibold text-[#6C0798] shadow-xs backdrop-blur-sm">
                          <Video size={10} />
                          <span>Video</span>
                        </span>
                      )}

                      {/* Status chip if updated */}
                      {slot.currentUrl.includes("cloudinary") && !isVideo && (
                        <span className="absolute right-2.5 top-2.5 rounded-full bg-white/95 px-2 py-0.5 font-sans text-[10px] font-medium text-[#6C0798] shadow-xs backdrop-blur-sm">
                          Updated
                        </span>
                      )}
                    </div>

                    {/* Card Information */}
                    <div className="flex flex-1 flex-col justify-between p-3.5 sm:p-4">
                      <div>
                        <div className="flex items-center justify-between gap-1.5">
                          <span className="rounded-full bg-[#6C0798]/10 px-2 py-0.5 font-sans text-[10px] font-semibold text-[#6C0798] uppercase tracking-wider">
                            {slot.section.replace("_", " ")}
                          </span>
                          <span className="font-sans text-[10px] sm:text-[11px] text-[#19151C]/45 truncate max-w-[130px]">
                            {slot.recommendedDimensions}
                          </span>
                        </div>

                        <h2 className="mt-2 font-serif text-sm sm:text-base font-semibold text-[#19151C] line-clamp-1">
                          {slot.label}
                        </h2>

                        <p className="mt-1 font-sans text-[11px] sm:text-xs leading-relaxed text-[#19151C]/60 line-clamp-2 min-h-[32px]">
                          {slot.description}
                        </p>
                      </div>

                      {/* Action Button */}
                      <button
                        onClick={() => {
                          setTargetSlot(slot);
                          setIsGalleryUpload(false);
                          setUploadModalOpen(true);
                        }}
                        className="mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-[#19151C]/15 bg-white py-1.5 font-sans text-xs font-medium text-[#19151C] transition-all hover:border-[#6C0798] hover:bg-[#6C0798] hover:text-white"
                      >
                        {isHero ? <Video size={13} /> : <UploadCloud size={13} />}
                        <span>{isHero ? "Change photo or video" : "Change photo"}</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* VIEW MODE: COMPACT LIST VIEW - ULTRA RESPONSIVE FOR MOBILE */
            <div className="mt-5 space-y-2.5">
              {filteredSlots.map((slot) => {
                const isVideo = isCloudinaryVideoUrl(slot.currentUrl);
                const isHero =
                  slot.id === "home_hero" ||
                  slot.id === "academics_hero" ||
                  slot.id === "student_life_hero";

                return (
                  <div
                    key={slot.id}
                    className="group flex items-center justify-between gap-3 rounded-xl border border-[#19151C]/10 bg-white p-2.5 sm:p-3 shadow-xs transition-all hover:border-[#6C0798]/30 hover:shadow-sm"
                  >
                    {/* Thumbnail preview */}
                    <div
                      onClick={() => {
                        setTargetSlot(slot);
                        setIsGalleryUpload(false);
                        setUploadModalOpen(true);
                      }}
                      className="relative h-14 w-20 sm:h-16 sm:w-24 shrink-0 cursor-pointer overflow-hidden rounded-lg bg-[#FAF8F9]"
                    >
                      {isVideo ? (
                        <video
                          src={slot.currentUrl}
                          muted
                          playsInline
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <img
                          src={slot.currentUrl}
                          alt={slot.altText || slot.label}
                          className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
                        />
                      )}
                      {isVideo && (
                        <span className="absolute bottom-1 right-1 flex items-center justify-center rounded-md bg-[#19151C]/80 p-0.5 text-white">
                          <Video size={10} />
                        </span>
                      )}
                    </div>

                    {/* Details */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="rounded-full bg-[#6C0798]/10 px-1.5 py-0.5 font-sans text-[10px] font-semibold text-[#6C0798] uppercase tracking-wider">
                          {slot.section.replace("_", " ")}
                        </span>
                        <span className="font-sans text-[10px] text-[#19151C]/45 truncate hidden xs:inline">
                          {slot.recommendedDimensions}
                        </span>
                      </div>

                      <h2 className="mt-0.5 font-serif text-xs sm:text-sm font-semibold text-[#19151C] truncate">
                        {slot.label}
                      </h2>

                      <p className="font-sans text-[10px] sm:text-[11px] text-[#19151C]/55 truncate hidden sm:block">
                        {slot.description}
                      </p>
                    </div>

                    {/* Action button */}
                    <button
                      onClick={() => {
                        setTargetSlot(slot);
                        setIsGalleryUpload(false);
                        setUploadModalOpen(true);
                      }}
                      className="shrink-0 inline-flex items-center gap-1.5 rounded-lg border border-[#19151C]/15 bg-white px-3 py-1.5 font-sans text-xs font-medium text-[#19151C] transition-colors hover:border-[#6C0798] hover:bg-[#6C0798] hover:text-white"
                    >
                      {isHero ? <Video size={13} /> : <Camera size={13} />}
                      <span className="hidden xs:inline">Change</span>
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* TAB 2: CAMPUS GALLERY */}
      {activeTab === "gallery" && (
        <div className="mt-6 sm:mt-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            {/* Scrollable Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none -mx-3.5 px-3.5 sm:mx-0 sm:px-0">
              {galleryCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`shrink-0 rounded-full border px-3 py-1 sm:px-3.5 sm:py-1.5 font-sans text-[11px] sm:text-xs capitalize transition-colors ${
                    selectedCategory === cat
                      ? "border-[#6C0798] bg-[#6C0798] text-white shadow-xs"
                      : "border-[#19151C]/15 bg-white text-[#19151C]/70 hover:border-[#6C0798]/40 hover:text-[#19151C]"
                  }`}
                >
                  {cat === "all" ? "All" : cat}
                </button>
              ))}
            </div>

            {/* Add Photo Button */}
            <button
              onClick={() => {
                setTargetSlot({
                  id: "gallery_photo",
                  section: "about",
                  label: "New Campus Photo",
                  description: "Upload a new photo for the campus gallery",
                  aspectRatio: "4:3",
                  recommendedDimensions: "1600x1200",
                  currentUrl: "",
                  altText: "",
                });
                setIsGalleryUpload(true);
                setUploadModalOpen(true);
              }}
              className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full bg-[#6C0798] px-4 py-1.5 sm:px-5 sm:py-2 font-sans text-xs font-medium text-white shadow-xs transition-colors hover:bg-[#4B075F] self-start sm:self-auto"
            >
              <Plus size={14} />
              <span>Add photo</span>
            </button>
          </div>

          {/* Gallery Category Selector for new photo (when uploading) */}
          <div className="mt-3 flex items-center gap-2 font-sans text-xs text-[#19151C]/70">
            <span>Uploading to category:</span>
            <select
              value={newGalleryCategory}
              onChange={(e) => setNewGalleryCategory(e.target.value)}
              className="rounded-lg border border-[#19151C]/15 bg-white px-2.5 py-1 text-xs text-[#19151C] outline-none focus:border-[#6C0798]"
            >
              {galleryCategories
                .filter((c) => c !== "all")
                .map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
            </select>
          </div>

          {/* Gallery Grid */}
          {filteredGallery.length === 0 ? (
            <div className="mt-8 flex flex-col items-center justify-center rounded-xl border border-dashed border-[#19151C]/15 bg-white p-8 sm:p-12 text-center">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#6C0798]/10 text-[#6C0798]">
                <Camera size={20} />
              </div>
              <h3 className="mt-3 font-serif text-lg sm:text-xl text-[#19151C]">
                No photos in this category yet
              </h3>
              <p className="mt-1 max-w-sm font-sans text-xs text-[#19151C]/60">
                Click &quot;Add photo&quot; above to upload a new picture for this category.
              </p>
            </div>
          ) : (
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5">
              {filteredGallery.map((photo) => (
                <div
                  key={photo.id}
                  className="group relative flex flex-col overflow-hidden rounded-xl border border-[#19151C]/10 bg-white shadow-xs transition-all hover:shadow-md"
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#FAF8F9]">
                    <img
                      src={photo.cloudinaryUrl}
                      alt={photo.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* Category badge */}
                    <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-0.5 font-sans text-[10px] font-medium text-[#19151C] shadow-xs backdrop-blur-sm">
                      {photo.category}
                    </span>

                    {/* Delete button (visible on mobile touch, hover on desktop) */}
                    <button
                      onClick={() => handleDeleteGalleryPhoto(photo.id)}
                      className="absolute right-2 top-2 flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-white/90 text-[#19151C]/60 opacity-100 sm:opacity-0 shadow-xs transition-all duration-200 sm:group-hover:opacity-100 hover:bg-red-600 hover:text-white"
                      title="Delete photo"
                    >
                      <Trash2 size={12} />
                    </button>
                  </div>

                  <div className="p-2.5 sm:p-3">
                    <h3 className="font-serif text-xs sm:text-sm font-medium text-[#19151C] truncate">
                      {photo.title}
                    </h3>
                    {photo.caption && (
                      <p className="mt-0.5 line-clamp-1 font-sans text-[11px] text-[#19151C]/60">
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

      {/* Upload Modal */}
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
          allowVideo={
            targetSlot.id === "home_hero" ||
            targetSlot.id === "academics_hero" ||
            targetSlot.id === "student_life_hero"
          }
        />
      )}
    </div>
  );
}

