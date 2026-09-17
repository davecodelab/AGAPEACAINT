import GeoMark from "./GeoMark";

type Section = { id?: string; title: string; body: string };

type PlaceholderPageProps = {
  eyebrow: string;
  heading: string;
  description: string;
  sections?: Section[];
};

export default function PlaceholderPage({
  eyebrow,
  heading,
  description,
  sections = [],
}: PlaceholderPageProps) {
  return (
    <main className="bg-[#FAF8F9]">
      <section className="relative overflow-hidden bg-[#4B075F] px-6 pb-16 pt-40 text-white sm:px-10 sm:pt-48 lg:px-16">
        <GeoMark className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px]" opacity={0.08} />
        <div className="relative mx-auto max-w-4xl">
          <p className="font-sans text-sm font-medium text-[#E9C7DE]">{eyebrow}</p>
          <h1 className="mt-4 font-serif text-4xl leading-[1.08] sm:text-6xl">{heading}</h1>
          <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-white/80">
            {description}
          </p>
        </div>
      </section>

      {sections.length > 0 && (
        <section className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
          <div className="space-y-14">
            {sections.map((section) => (
              <div key={section.title} id={section.id}>
                <h2 className="font-serif text-2xl text-[#19151C]">{section.title}</h2>
                <p className="mt-3 font-sans leading-relaxed text-[#19151C]/70">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
