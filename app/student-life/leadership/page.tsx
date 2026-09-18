import type { Metadata } from "next";
import StudentLifeSubpage, {
  StudentLifeSubpageData,
} from "@/components/StudentLifeSubpage";

export const metadata: Metadata = {
  title: "Student Leadership | Agape Academy International",
  description:
    "Discover student leadership opportunities at Agape Academy International and how responsibility, service and character are developed through school life.",
};

const data: StudentLifeSubpageData = {
  eyebrow: "Student Leadership",
  title: "Learn to",
  highlight: "lead.",
  description:
    "Leadership at Agape is about more than a title. Students learn to take responsibility, serve others, communicate clearly and contribute to their community.",
  heroImage:
    "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=2400&q=90",
  heroAlt: "Students working and leading together",

  stats: [
    { value: "01", label: "Serve" },
    { value: "02", label: "Listen" },
    { value: "03", label: "Act" },
    { value: "04", label: "Inspire" },
  ],

  introEyebrow: "Character in action",
  introTitle: "Leadership begins with responsibility.",
  introText:
    "Students develop leadership by being trusted with real responsibilities. They learn that leadership is not simply about being visible — it is about listening, serving, following through and helping others succeed.",

  features: [
    {
      number: "01",
      title: "Take responsibility",
      text:
        "Students can develop confidence by taking ownership of tasks, projects, events and responsibilities within the school community.",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1800&q=90",
      imageAlt: "Students collaborating in school",
    },
    {
      number: "02",
      title: "Serve others",
      text:
        "Service helps students understand leadership as contribution — using their abilities to make a positive difference for people around them.",
      image:
        "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1800&q=90",
      imageAlt: "Students involved in community service",
    },
    {
      number: "03",
      title: "Find your voice",
      text:
        "Leadership opportunities encourage students to communicate ideas, represent others and become confident contributors to their community.",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1800&q=90",
      imageAlt: "Students communicating in a group",
    },
  ],

  experienceEyebrow: "Leadership in practice",
  experienceTitle: "Character becomes visible.",
  experienceText:
    "Leadership experiences allow students to practise the values that sit behind the Agape educational experience: responsibility, service, confidence and purpose.",

  listTitle: "Leadership opportunities",
  listItems: [
    "Student leadership",
    "Student Union",
    "Event organisation",
    "Peer collaboration",
    "Community service",
    "School representation",
    "Team leadership",
    "Student initiatives",
  ],

  quote:
    "Leadership is not about standing above others. It is about learning how to stand with them and contribute.",
  quoteLabel: "Student leadership at Agape",

  ctaTitle: "Give responsibility a purpose.",
  ctaText:
    "Explore an education where academic growth and character development move together.",
};

export default function LeadershipPage() {
  return <StudentLifeSubpage data={data} />;
}