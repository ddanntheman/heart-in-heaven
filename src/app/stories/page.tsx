import { Metadata } from "next";
import { StoryCard } from "@/components/StoryCard";

export const metadata: Metadata = {
  title: "Stories",
  description:
    "Stories of impact from Heart In Heaven's partner ministries and Heart Partners around the world.",
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
    slug: "savings-group-paynesville",
    title: "47 facilitators trained. 500 families saving.",
    excerpt:
      "Chalmers savings groups are transforming economic life in Paynesville. Here's what two years of faithful training looks like.",
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
      "Enrollment at Champion Academy continues to grow. Here's an update from the first quarter of 2026.",
    category: "Liberia",
    date: "2026-03-15",
    image: "/images/story-academy-q1.jpg",
    imageAlt: "Students in class at Champion Academy",
  },
];

export default function StoriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-indigo-600 section-padding-tight">
        <div className="container-main">
          <div className="max-w-2xl">
            <p className="font-body font-medium text-eyebrow tracking-[0.18em] uppercase text-gold-400 mb-3">
              Stories
            </p>
            <h1 className="font-display font-semibold text-h1 text-cream mb-4">
              Stories of impact
            </h1>
            <p className="font-body text-lead text-cream/70">
              Real stories from Liberia, our Heart Partners, and the ministries
              your giving supports.
            </p>
          </div>
        </div>
      </section>

      {/* Filter + grid */}
      <section className="bg-cream section-padding">
        <div className="container-main">
          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-pill font-body text-sm font-medium transition-colors ${
                  cat === "All"
                    ? "bg-indigo-600 text-cream"
                    : "bg-paper border border-warm-200 text-warm-500 hover:border-warm-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Stories grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story) => (
              <StoryCard key={story.slug} {...story} />
            ))}
          </div>

          {/* Load more */}
          <div className="text-center mt-12">
            <button className="px-6 py-3 bg-paper border border-warm-200 text-warm-500 font-body font-semibold text-sm rounded-md hover:border-warm-300 transition-colors">
              Load more stories
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
