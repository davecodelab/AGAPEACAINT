import type { Metadata } from "next";
import StudentLifeSubpage, {
  StudentLifeSubpageData,
} from "@/components/StudentLifeSubpage";

export const metadata: Metadata = {
  title: "Clubs | Agape Academy International",
  description:
    "Discover clubs and student interests at Agape Academy International, where students explore curiosity, creativity, leadership and collaboration beyond the classroom.",
};

const data: StudentLifeSubpageData = {
  eyebrow: "Clubs & Societies",
  title: "Find something",
  highlight: "worth pursuing.",
  description:
    "Clubs give students room to explore interests, develop new skills, build friendships and discover passions that may stay with them for years.",
  heroImage:
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=2400&q=90",
  heroAlt: "Students collaborating together",

  stats: [
    { value: "01", label: "Explore" },
    { value: "02", label: "Create" },
    { value: "03", label: "Connect" },
    { value: "04", label: "Lead" },
  ],

  introEyebrow: "A place for curiosity",
  introTitle: "Interests become experiences.",
  introText:
    "School is more than completing lessons. Clubs give students opportunities to follow questions, experiment with ideas and spend time with people who share their interests. Whether a student is drawn to academics, creativity, technology, service or leadership, there should be space to explore.",

  features: [
    {
      number: "01",
      title: "Academic clubs",
      text:
        "Students can extend classroom learning through communities built around subjects, ideas and intellectual curiosity.",
      image:
        "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1800&q=90",
      imageAlt: "Students learning together",
    },
    {
      number: "02",
      title: "Creative spaces",
      text:
        "Creative clubs provide opportunities for students to experiment, perform, design and express themselves in different ways.",
      image:
        "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1800&q=90",
      imageAlt: "Students participating in creative activities",
    },
    {
      number: "03",
      title: "Student-led ideas",
      text:
        "Students can learn valuable responsibility by helping organise activities, collaborate with peers and contribute ideas.",
      image:
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1800&q=90",
      imageAlt: "Students working together",
    },
  ],

  experienceEyebrow: "Explore",
  experienceTitle: "There is room to discover.",
  experienceText:
    "The goal is not simply to fill an afternoon. Clubs should give students meaningful opportunities to practise communication, teamwork, creativity and initiative.",

  listTitle: "Club possibilities",
  listItems: [
    "Academic & subject societies",
    "STEM & technology",
    "Creative arts",
    "Music & performance",
    "Reading & communication",
    "Faith & service",
    "Leadership & community",
    "Student-led initiatives",
  ],

  quote:
    "The right club can turn an interest into a confidence, a friendship or even a future ambition.",
  quoteLabel: "The Agape student experience",

  ctaTitle: "Give curiosity somewhere to go.",
  ctaText:
    "Discover a school environment where students are encouraged to explore who they are becoming.",
};

export default function ClubsPage() {
  return <StudentLifeSubpage data={data} />;
}