import type { Metadata } from "next";
import StudentLifeSubpage, {
  StudentLifeSubpageData,
} from "@/components/StudentLifeSubpage";

export const metadata: Metadata = {
  title: "Sports | Agape Academy International",
  description:
    "Discover sports and competition at Agape Academy International, where students develop teamwork, discipline, resilience and confidence.",
};

const data: StudentLifeSubpageData = {
  eyebrow: "Sports",
  title: "Compete with",
  highlight: "purpose.",
  description:
    "Sport gives students another classroom — one where discipline, teamwork, resilience and confidence are developed through movement and competition.",
  heroImage: "/games_3.jpg",
  heroAlt: "Students participating in sport at Agape Academy International",

  stats: [
    { value: "01", label: "Teamwork" },
    { value: "02", label: "Discipline" },
    { value: "03", label: "Resilience" },
    { value: "04", label: "Confidence" },
  ],

  introEyebrow: "More than competition",
  introTitle: "Every game teaches something.",
  introText:
    "Winning is only one part of sport. Students learn how to prepare, communicate, respond to setbacks, support teammates and keep improving. These habits extend far beyond the field.",

  features: [
    {
      number: "01",
      title: "Train together",
      text:
        "Training creates opportunities for students to build consistency, responsibility and trust while working towards shared goals.",
      image: "/games_3.jpg",
      imageAlt: "Students taking part in sports",
    },
    {
      number: "02",
      title: "Compete with character",
      text:
        "Competition teaches students how to handle pressure, celebrate others and respond constructively when things do not go their way.",
      image:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1800&q=90",
      imageAlt: "Students competing in sport",
    },
    {
      number: "03",
      title: "Grow beyond the field",
      text:
        "The habits developed through sport — preparation, perseverance and teamwork — become part of a student's wider development.",
      image:
        "https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=1800&q=90",
      imageAlt: "Students participating in athletics",
    },
  ],

  experienceEyebrow: "The sporting experience",
  experienceTitle: "Move. Compete. Grow.",
  experienceText:
    "Agape's sporting environment is designed to give students opportunities to participate, improve and experience the responsibility of being part of a team.",

  listTitle: "What sport develops",
  listItems: [
    "Teamwork",
    "Leadership",
    "Physical confidence",
    "Discipline",
    "Resilience",
    "Communication",
    "Healthy competition",
    "Commitment",
  ],

  quote:
    "The field teaches lessons about preparation, courage and teamwork that no textbook can fully reproduce.",
  quoteLabel: "Sport at Agape",

  ctaTitle: "Find your team.",
  ctaText:
    "Come and experience a school where students have space to learn, compete and grow together.",
};

export default function SportsPage() {
  return <StudentLifeSubpage data={data} />;
}