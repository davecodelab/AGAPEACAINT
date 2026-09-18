import type { Metadata } from "next";
import StudentLifeSubpage, {
  StudentLifeSubpageData,
} from "@/components/StudentLifeSubpage";

export const metadata: Metadata = {
  title: "Student Union | Agape Academy International",
  description:
    "Learn about the Student Union at Agape Academy International and opportunities for students to represent, organise and contribute to school life.",
};

const data: StudentLifeSubpageData = {
  eyebrow: "Student Union",
  title: "Your voice",
  highlight: "matters.",
  description:
    "The Student Union creates opportunities for students to participate in school life, represent their peers, organise initiatives and practise leadership.",
  heroImage:
    "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=2400&q=90",
  heroAlt: "Students together in a school community",

  stats: [
    { value: "01", label: "Voice" },
    { value: "02", label: "Service" },
    { value: "03", label: "Leadership" },
    { value: "04", label: "Community" },
  ],

  introEyebrow: "Student voice",
  introTitle: "Belonging means participating.",
  introText:
    "A strong school community gives students opportunities to contribute to the environment they share. The Student Union provides a space for ideas, representation, organisation and student-led initiatives.",

  features: [
    {
      number: "01",
      title: "Represent",
      text:
        "Students develop communication and responsibility by representing their peers and contributing ideas to the wider school community.",
      image:
        "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1800&q=90",
      imageAlt: "Students discussing ideas",
    },
    {
      number: "02",
      title: "Organise",
      text:
        "Planning events and initiatives gives students practical experience in teamwork, communication and follow-through.",
      image:
        "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1800&q=90",
      imageAlt: "Students organising an event",
    },
    {
      number: "03",
      title: "Contribute",
      text:
        "Student-led ideas can strengthen community life and give learners a sense of ownership over their school experience.",
      image:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1800&q=90",
      imageAlt: "Students working together",
    },
  ],

  experienceEyebrow: "Community in action",
  experienceTitle: "Students become contributors.",
  experienceText:
    "The Student Union connects student voice with responsibility, giving young people opportunities to practise leadership in a real community.",

  listTitle: "Student Union opportunities",
  listItems: [
    "Student representation",
    "Events & activities",
    "Student initiatives",
    "Community building",
    "Peer collaboration",
    "Leadership experience",
    "Communication",
    "Service",
  ],

  quote:
    "A school community becomes stronger when students know that their ideas, effort and contribution have a place.",
  quoteLabel: "Student Union at Agape",

  ctaTitle: "Be part of the community.",
  ctaText:
    "Discover an environment where students are encouraged to participate, contribute and grow together.",
};

export default function StudentUnionPage() {
  return <StudentLifeSubpage data={data} />;
}