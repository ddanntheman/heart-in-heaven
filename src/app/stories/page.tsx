import { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { StoriesExplorer } from "@/components/StoriesExplorer";

export const metadata: Metadata = {
  title: "Impact Stories from Liberia and Relief Partners",
  description:
    "Read real stories of how Heart In Heaven donors are funding education, meals, and economic development in Liberia and through 20+ Christian relief partners worldwide.",
  alternates: {
    canonical: "https://heartinheaven.org/stories",
  },
};

const categories = ["All", "Liberia", "Heart Partner", "Partner Ministry", "Devotional"];

const stories = [
  {
    slug: "mawolo-champion-academy",
    title: "How one meal a day keeps Mawolo in school",
    excerpt:
      "Nine-year-old Mawolo walks 45 minutes each way to Champion Academy. The hot lunch waiting for him is the reason he keeps coming.",
    category: "Liberia",
    date: "2026-06-01",
    image: "/images/story-mawolo.jpg",
    imageAlt: "Mawolo, age 9, eating lunch at Champion Academy",
  },
  {
    slug: "digital-academy-paynesville",
    title: "Inside a digital classroom powered by SmartBox",
    excerpt:
      "Students gather around offline-first technology that brings lessons, tools, and digital confidence into a classroom without reliable infrastructure.",
    category: "Liberia",
    date: "2026-05-24",
    image: "/images/liberia-digital-class.jpg",
    imageAlt: "Champion Academy students learning with digital education tools",
  },
  {
    slug: "savings-group-paynesville",
    title: "47 facilitators trained. 500 families saving.",
    excerpt:
      "Chalmers savings groups are transforming economic life in Paynesville. Here is what two years of faithful training looks like.",
    category: "Liberia",
    date: "2026-05-15",
    image: "/images/story-savings.jpg",
    imageAlt: "Women in a savings group meeting in Paynesville",
  },
  {
    slug: "sarah-heart-partner",
    title: "Why Sarah gives to 20 ministries with one gift",
    excerpt:
      "Sarah was tired of choice fatigue. Heart In Heaven gave her a strategic way to reach the whole world with one monthly gift.",
    category: "Heart Partner",
    date: "2026-04-22",
    image: "/images/story-sarah.jpg",
    imageAlt: "Sarah M., Heart Partner since 2024",
  },
  {
    slug: "water-mission-update",
    title: "Clean water reaches 3 new communities",
    excerpt:
      "Thanks to Heart Partner giving, Water Mission installed three new well systems in East Africa this quarter.",
    category: "Partner Ministry",
    date: "2026-04-10",
    image: "/images/story-water.jpg",
    imageAlt: "Children drinking clean water from a new well",
  },
  {
    slug: "generosity-as-worship",
    title: "Generosity as worship: a reflection on 2 Corinthians 9",
    excerpt:
      "What does it mean to give cheerfully? A short devotional on the theology of generosity.",
    category: "Devotional",
    date: "2026-03-28",
    image: "/images/story-devotional.jpg",
    imageAlt: "Open Bible on a wooden table",
  },
  {
    slug: "champion-academy-update-q1",
    title: "Q1 2026: Champion Academy enrolls 24 new students",
    excerpt:
      "Enrollment at Champion Academy continues to grow. Here is an update from the first quarter of 2026.",
    category: "Liberia",
    date: "2026-03-15",
    image: "/images/liberia-assembly.jpg",
    imageAlt: "Students gathered for an assembly at Champion Academy",
  },
];

export default function StoriesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-night section-padding-tight">
        <div className="absolute inset-0 opacity-45">
          <Image
            src="/images/liberia-assembly.jpg"
            alt="Champion Academy students gathered for an assembly in Liberia"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-night via-indigo-900/80 to-night/20" />
        <div className="relative container-main">
          <div className="max-w-3xl">
            <p className="font-body font-medium text-eyebrow tracking-[0.18em] uppercase text-gold-400 mb-3">
              Stories
            </p>
            <h1 className="font-display font-semibold text-display text-cream mb-5 text-balance">
              The field reports behind the numbers
            </h1>
            <p className="font-body text-lead text-cream/75">
              Follow the students, local leaders, donors, and ministry partners
              who show what leveraged generosity looks like in real life.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream section-padding">
        <div className="container-main">
          <SectionHeading
            eyebrow="Explore the archive"
            title="Stories that make the model tangible"
            subtitle="Use the filters to move between Liberia field updates, donor perspectives, ministry reports, and reflections."
            align="center"
          />
          <StoriesExplorer categories={categories} stories={stories} />
        </div>
      </section>
    </>
  );
}
