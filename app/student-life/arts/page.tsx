import type { Metadata } from "next";
import StudentLifeSubpage, {
  StudentLifeSubpageData,
} from "@/components/StudentLifeSubpage";

export const metadata: Metadata = {
  title: "Arts & Music | Agape Academy International",
  description:
    "Explore music, drama and visual arts at Agape Academy International and discover how creativity contributes to student development.",
};

const data: StudentLifeSubpageData = {
  eyebrow: "Arts & Music",
  title: "Make something",
  highlight: "meaningful.",
  description:
    "Music, drama and visual art give students a different language for thinking, communicating and understanding the world around them.",
  heroImage:
    "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=2400&q=90",
  heroAlt: "Students participating in creative arts",

  stats: [
    { value: "01", label: "Create" },
    { value: "02", label: "Express" },
    { value: "03", label: "Perform" },
    { value: "04", label: "Imagine" },
  ],

  introEyebrow: "Creative development",
  introTitle: "Creativity needs room.",
  introText:
    "Students need opportunities to make, perform, experiment and communicate ideas. Arts education develops creative confidence while teaching patience, practice, collaboration and the courage to share something personal.",

  features: [
    {
      number: "01",
      title: "Music",
      text:
        "Music gives students opportunities to develop discipline, listening skills, expression and confidence through practice and performance.",
      image:
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1800&q=90",
      imageAlt: "Student participating in music",
    },
    {
      number: "02",
      title: "Drama",
      text:
        "Drama creates space for storytelling, collaboration and performance while helping students become more confident communicators.",
      image:
        "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1800&q=90",
      imageAlt: "Students performing on stage",
    },
    {
      number: "03",
      title: "Visual art",
      text:
        "Visual art encourages students to observe carefully, experiment with ideas and communicate through colour, shape and form.",
      image:
        "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1800&q=90",
      imageAlt: "Creative artwork and art materials",
    },
  ],

  experienceEyebrow: "Creative life",
  experienceTitle: "Ideas become visible.",
  experienceText:
    "Creative experiences allow students to develop a sense of authorship — the confidence to say, make and perform something that began with their own imagination.",

  listTitle: "Creative opportunities",
  listItems: [
    "Music",
    "Drama & performance",
    "Visual arts",
    "Creative projects",
    "School performances",
    "Student showcases",
    "Collaborative productions",
    "Creative clubs",
  ],

  quote:
    "Creativity teaches students that there can be more than one way to see, solve and express an idea.",
  quoteLabel: "Arts & Music at Agape",

  ctaTitle: "Give creativity a stage.",
  ctaText:
    "Discover an environment where students can explore their creative voice alongside their academic journey.",
};

export default function ArtsPage() {
  return <StudentLifeSubpage data={data} />;
}