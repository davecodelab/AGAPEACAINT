"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Placeholder gallery data.
 * Replace `src` with real photography paths once supplied by the school
 * (e.g. "/images/gallery/chapel-01.jpg"). Nothing here is fabricated
 * beyond the labels themselves — swap freely.
 */
type GalleryCategory =
  | "Classrooms"
  | "Science"
  | "Graduation"
  | "Library"
  | "Sport"
  | "Creative Spaces"
  | "Chapel"
  | "Outdoor"
  | "Student Life"
  | "Graduation";

type GalleryImage = {
  id: string;
  category: GalleryCategory;
  title: string;
  caption: string;
  src?: string;
};

const CATEGORIES: GalleryCategory[] = [
  "Classrooms",
  "Science",
  "Library",
  "Graduation",
  "Sport",
  "Creative Spaces",
  "Chapel",
  "Outdoor",
  "Student Life",
  "Graduation",
];

const IMAGES: GalleryImage[] = [
  { id: "g_grad1", category: "Graduation", title: "Commencement Day", caption: "Senior students celebrating graduation at Agape Academy International.", src: "/grad_01.jpg" },
  { id: "g_grad2", category: "Graduation", title: "Honouring Our Graduates", caption: "Academic achievement and character recognised on graduation day.", src: "/girl_grad.jpg" },
  { id: "g1", category: "Classrooms", title: "Middle School classroom", caption: "Students collaborating during a Grade 7 lesson." },
  { id: "g2", category: "Science", title: "Science laboratory", caption: "Hands-on experimentation in the senior science lab." },
  { id: "g3", category: "Chapel", title: "Morning chapel", caption: "The school community gathers for weekly chapel." },
  { id: "g4", category: "Sport", title: "Sports field", caption: "Inter-house competition on the main field." },
  { id: "g5", category: "Library", title: "Reading room", caption: "A quiet corner of the school library." },
  { id: "g6", category: "Creative Spaces", title: "Art studio", caption: "Student work on display in the art studio." },
  { id: "g7", category: "Student Life", title: "Break time", caption: "Students between classes on the main courtyard." },
  { id: "g8", category: "Outdoor", title: "Campus grounds", caption: "The walkway connecting the primary and middle school blocks." },
  { id: "g9", category: "Classrooms", title: "Early Years room", caption: "A Kindergarten classroom set up for the day." },
  { id: "g10", category: "Sport", title: "Basketball court", caption: "After-school basketball practice." },
  { id: "g11", category: "Creative Spaces", title: "Music room", caption: "Rehearsal ahead of the term's music showcase." },
  { id: "g12", category: "Student Life", title: "Student Union", caption: "Student Union members planning a community project." },
];

const CATEGORY_TINT: Record<GalleryCategory, string> = {
  Classrooms: "#6C0798",
  Science: "#4B075F",
  Library: "#19151C",
  Sport: "#E12F41",
  "Creative Spaces": "#8B176F",
  Chapel: "#4B075F",
  Outdoor: "#6C0798",
  "Student Life": "#6C0798",
  Graduation: "#8B176F",
};

function PatternPlaceholder({ image }: { image: GalleryImage }) {
  const tint = CATEGORY_TINT[image.category];
  return (
    <div
      className="flex h-full w-full items-end justify-start p-5"
      style={{
        background: `linear-gradient(160deg, ${tint}1A 0%, #19151C0D 100%)`,
      }}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full opacity-[0.06]"
        preserveAspectRatio="none"
      >
        <g fill="none" stroke={tint} strokeWidth="0.6">
          <rect x="10" y="10" width="80" height="80" transform="rotate(45 50 50)" />
          <rect x="25" y="25" width="50" height="50" transform="rotate(45 50 50)" />
        </g>
      </svg>
      <span className="relative font-sans text-xs font-medium uppercase tracking-wide text-[#19151C]/50">
        {image.category}
      </span>
    </div>
  );
}

export default function CampusGallery() {
  const [active, setActive] = useState<GalleryCategory | "All">("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>(IMAGES);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    fetch("/api/admin/gallery")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && Array.isArray(data.photos) && data.photos.length > 0) {
          const dynamicList: GalleryImage[] = data.photos.map((p: any) => ({
            id: p.id,
            category: p.category as GalleryCategory,
            title: p.title || "Campus Life",
            caption: p.caption || "",
            src: p.cloudinary_url,
          }));
          setGalleryImages([...dynamicList, ...IMAGES]);
        }
      })
      .catch(() => {});
  }, []);

  const filtered = useMemo(
    () => (active === "All" ? galleryImages : galleryImages.filter((img) => img.category === active)),
    [active, galleryImages]
  );

  const openImage = filtered[openIndex ?? -1] ?? null;

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") setOpenIndex((i) => (i === null ? i : (i + 1) % filtered.length));
      if (e.key === "ArrowLeft") setOpenIndex((i) => (i === null ? i : (i - 1 + filtered.length) % filtered.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, filtered.length]);

  return (
    <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
      {/* Category filter */}
      <div className="mx-auto mb-10 flex max-w-6xl flex-wrap gap-2">
        <button
          onClick={() => setActive("All")}
          className={`rounded-full border px-4 py-2 font-sans text-sm transition-colors ${
            active === "All"
              ? "border-[#6C0798] bg-[#6C0798] text-white"
              : "border-[#19151C]/15 text-[#19151C]/70 hover:border-[#6C0798]/40"
          }`}
        >
          All
        </button>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full border px-4 py-2 font-sans text-sm transition-colors ${
              active === cat
                ? "border-[#6C0798] bg-[#6C0798] text-white"
                : "border-[#19151C]/15 text-[#19151C]/70 hover:border-[#6C0798]/40"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
        {filtered.map((image, i) => (
          <motion.button
            key={image.id}
            layout
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: prefersReducedMotion ? 0 : (i % 8) * 0.03 }}
            onClick={() => setOpenIndex(i)}
            className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-[#19151C]/5 text-left"
          >
            {image.src ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={image.src}
                alt={image.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <PatternPlaceholder image={image} />
            )}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#19151C]/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="pointer-events-none absolute bottom-3 left-3 font-sans text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {image.title}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {openImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#19151C]/90 px-4"
            onClick={() => setOpenIndex(null)}
          >
            <button
              aria-label="Close gallery"
              onClick={() => setOpenIndex(null)}
              className="absolute right-5 top-5 text-white/80 hover:text-white"
            >
              <X size={28} />
            </button>

            <button
              aria-label="Previous image"
              onClick={(e) => {
                e.stopPropagation();
                setOpenIndex((i) => (i === null ? i : (i - 1 + filtered.length) % filtered.length));
              }}
              className="absolute left-4 text-white/70 hover:text-white sm:left-8"
            >
              <ChevronLeft size={32} />
            </button>

            <motion.div
              initial={prefersReducedMotion ? false : { scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl overflow-hidden rounded-sm bg-[#FAF8F9]"
            >
              <div className="relative aspect-[4/3] w-full">
                {openImage.src ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={openImage.src} alt={openImage.title} className="h-full w-full object-cover" />
                ) : (
                  <PatternPlaceholder image={openImage} />
                )}
              </div>
              <div className="p-6">
                <p className="font-sans text-xs font-medium uppercase tracking-wide text-[#E12F41]">
                  {openImage.category}
                </p>
                <h3 className="mt-1 font-serif text-2xl text-[#19151C]">{openImage.title}</h3>
                <p className="mt-2 font-sans text-[#19151C]/70">{openImage.caption}</p>
              </div>
            </motion.div>

            <button
              aria-label="Next image"
              onClick={(e) => {
                e.stopPropagation();
                setOpenIndex((i) => (i === null ? i : (i + 1) % filtered.length));
              }}
              className="absolute right-4 text-white/70 hover:text-white sm:right-8"
            >
              <ChevronRight size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
