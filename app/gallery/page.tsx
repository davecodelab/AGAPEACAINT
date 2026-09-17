import type { Metadata } from "next";
import CampusGallery from "@/components/CampusGallery";

export const metadata: Metadata = {
  title: "Gallery | Agape Academy International",
  description:
    "A look inside life at Agape Academy International — classrooms, chapel, sport, the arts and the campus our students call home.",
};

export default function GalleryPage() {
  return (
    <main className="bg-[#FAF8F9]">
      {/* Page header */}
      <section className="relative overflow-hidden bg-[#4B075F] px-6 pb-20 pt-40 text-white sm:px-10 sm:pt-48 lg:px-16">
        {/* Geometric pattern watermark, echoing the AAI logo mark */}
        <svg
          aria-hidden="true"
          viewBox="0 0 400 400"
          className="pointer-events-none absolute -right-24 -top-24 h-[460px] w-[460px] opacity-[0.08]"
        >
          <g fill="none" stroke="#FFFFFF" strokeWidth="1.5">
            {Array.from({ length: 6 }).map((_, i) => (
              <rect
                key={i}
                x={40 + i * 22}
                y={40 + i * 22}
                width={320 - i * 44}
                height={320 - i * 44}
                transform={`rotate(45 200 200)`}
              />
            ))}
          </g>
        </svg>

        <div className="relative mx-auto max-w-5xl">
          <p className="font-sans text-sm font-medium tracking-wide text-[#E9C7DE]">
            Greater Accra · Ghana
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.08] sm:text-6xl lg:text-7xl">
            A place to learn.
            <br />A place to belong.
          </h1>
          <p className="mt-6 max-w-xl font-sans text-lg leading-relaxed text-white/80">
            Classrooms and chapel, science labs and sports fields, quiet
            corners and shared ones — this is what a day at Agape looks like.
          </p>
        </div>
      </section>

      <CampusGallery />
    </main>
  );
}
