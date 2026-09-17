# Agape Academy International — Website

A Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion build,
following the AAI brand brief.

## Setup

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Structure

- `app/` — routes: homepage, `gallery`, `about`, `academics`, `student-life`,
  `faith-and-character`, `admissions`, `community`, `news`, `events`,
  `contact`, `privacy`, `safeguarding`, `accessibility`.
- `components/` — `Navbar` (mega menu + mobile drawer), `Hero`,
  `SectionHeading`, `IntroStory`, `EducationalJourney`,
  `AcademicExcellence`, `ChristianEducation`, `GlobalPerspective`,
  `StudentLifeMosaic`, `StudentLeadership`, `Wellbeing`, `CampusPreview`,
  `CampusGallery` (full `/gallery` page), `GlobalPathways`,
  `StudentStories`, `ParentStories`, `NewsSection`, `EventsTimeline`,
  `PrincipalMessage`, `AdmissionsCTA`, `Footer`, `MobileApplyBar`,
  `GeoMark` (the recurring geometric brand pattern), `PlaceholderPage`
  (shared shell for routes still awaiting full content).

## Before launch — replace these placeholders

Per the brief, nothing here was invented that shouldn't be. The following
are clearly marked placeholders and need real content from the school:

- **Photography** — every image is a tinted gradient/pattern placeholder.
  Swap in real photography with `next/image` throughout (`Hero`,
  `IntroStory`, `EducationalJourney`, `CampusGallery`, `StudentStories`,
  `ParentStories`, `NewsSection`, `PrincipalMessage`).
- **Statistics** (`AcademicExcellence.tsx`) — student/teacher ratio, years
  of experience, nationalities. Currently shown as `—` until verified.
- **Student & parent stories** — names, quotes, portraits (`StudentStories.tsx`,
  `ParentStories.tsx`). Requires consent before publishing real names/photos.
- **News, events, fees, scholarships, contact details** — all placeholder
  or "to be confirmed."
- **Portal links** in the footer point to `#` until parent/student/staff
  portals exist or are connected to an external system.

## Notes

- Colors are applied as Tailwind arbitrary values (`bg-[#6C0798]`, etc.)
  and mirrored in `tailwind.config.ts` under the `aai` palette if you'd
  rather reference `bg-aai-purple` going forward.
- Fonts: DM Serif Display (headings) and Manrope (body/UI), loaded via
  `next/font/google` in `app/layout.tsx`.
- Motion respects `prefers-reduced-motion` throughout, and is also
  disabled globally in `app/globals.css` as a fallback.
