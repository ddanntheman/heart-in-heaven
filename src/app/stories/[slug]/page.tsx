import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Newsletter } from "@/components/Newsletter";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Story",
  description: "A story of impact from Heart In Heaven.",
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function StoryPostPage({ params }: { params: { slug: string } }) {
  return (
    <article className="bg-cream">
      {/* Featured image */}
      <div className="relative w-full h-[50vh] min-h-[300px]">
        <Image
          src="/images/story-mawolo.jpg"
          alt="Story featured image"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Content */}
      <div className="container-narrow py-12u">
        {/* Meta */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-body text-xs font-medium tracking-wider uppercase text-gold-600 bg-gold-50 px-2 py-0.5 rounded">
            Liberia
          </span>
          <time
            className="font-body text-xs text-warm-300"
            dateTime="2026-06-01"
          >
            June 1, 2026
          </time>
        </div>

        <h1 className="font-display font-semibold text-h1 text-indigo-700 mb-3">
          How one meal a day keeps Mawolo in school
        </h1>
        <p className="font-body text-lead text-warm-500 mb-2">
          Nine-year-old Mawolo walks 45 minutes each way to Champion Academy.
          The hot lunch waiting for him is the reason he keeps coming.
        </p>

        {/* Byline */}
        <div className="flex items-center gap-3 py-4 border-b border-warm-200 mb-8">
          <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center font-body font-semibold text-xs text-indigo-600">
            HH
          </div>
          <div>
            <p className="font-body text-sm font-semibold text-charcoal">
              Heart In Heaven
            </p>
          </div>
          <div className="ml-auto flex gap-2">
            <ShareButton label="Share on X" />
            <ShareButton label="Share on Facebook" />
          </div>
        </div>

        {/* Body copy */}
        <div className="space-y-6 font-body text-base text-warm-700 leading-relaxed">
          <p>
            Mawolo is nine years old. Every morning he wakes before dawn in
            the small room he shares with his grandmother and two younger
            siblings in Paynesville, a dense suburb of Monrovia, Liberia.
            There is rarely breakfast. The walk to Champion Academy takes 45
            minutes, through unpaved roads that flood in the rainy season.
          </p>
          <p>
            But Mawolo keeps coming. He keeps walking. And the reason is
            simple: lunch.
          </p>
          <p>
            Champion Academy, Heart In Heaven&rsquo;s anchor campus in
            Liberia, serves a hot meal to every student every weekday. For
            many students, including Mawolo, it is their only meal of the day.
            The program is called <strong>Fuel First</strong>, and it is funded
            entirely by monthly Heart Partners: ordinary people giving $40 or
            $50 a month, pooled together, to make sure no child in their care
            goes hungry during the school day.
          </p>

          {/* Inline newsletter */}
          <Newsletter variant="inline" />

          <p>
            The impact is measurable. Since Fuel First launched, school
            attendance at Champion Academy has increased by 34%. Students are
            staying longer, scoring higher on exams, and (crucially) coming
            back the next term. Teachers report that students who eat lunch
            are more focused, more engaged, and more likely to complete
            homework. The ripple effects reach families: parents who know
            their child is fed during the day can redirect scarce resources to
            medicine, rent, or savings.
          </p>
          <p>
            Mawolo&rsquo;s grandmother, Ma Korpo, puts it simply: &ldquo;He
            is learning. He is eating. That is enough for now.&rdquo;
          </p>
          <p>
            It costs $50 a month to feed one student like Mawolo for an entire
            school year. One gift. One student. One future.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10 p-6 bg-indigo-600 rounded-xl text-center">
          <h3 className="font-display font-semibold text-lg text-cream mb-2">
            Fund a student like Mawolo
          </h3>
          <p className="font-body text-sm text-cream/70 mb-4">
            $50/mo feeds one student for a full school year.
          </p>
          <Button href="/give?campaign=liberia" variant="primary">
            Fuel a Student: $50/mo
          </Button>
        </div>

        {/* Related posts */}
        <div className="mt-12 pt-8 border-t border-warm-200">
          <h3 className="font-display font-semibold text-lg text-indigo-700 mb-6">
            Related stories
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <RelatedPost
              title="47 facilitators trained. 500 families saving."
              href="/stories/savings-group-paynesville"
            />
            <RelatedPost
              title="Q1 2026: Champion Academy enrolls 24 new students"
              href="/stories/champion-academy-update-q1"
            />
          </div>
        </div>
      </div>

      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "How one meal a day keeps Mawolo in school",
            datePublished: "2026-06-01",
            author: {
              "@type": "Organization",
              name: "Heart In Heaven",
            },
            publisher: {
              "@type": "Organization",
              name: "Heart In Heaven",
              url: "https://heartinheaven.org",
            },
          }),
        }}
      />
    </article>
  );
}

function ShareButton({ label }: { label: string }) {
  return (
    <button
      className="w-8 h-8 rounded-full bg-warm-100 flex items-center justify-center text-warm-500 hover:bg-warm-200 transition-colors"
      aria-label={label}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8" />
        <polyline points="16 6 12 2 8 6" />
        <line x1="12" y1="2" x2="12" y2="15" />
      </svg>
    </button>
  );
}

function RelatedPost({ title, href }: { title: string; href: string }) {
  return (
    <Link
      href={href}
      className="block p-4 bg-paper rounded-lg border border-warm-100 hover:shadow-sm transition-shadow"
    >
      <h4 className="font-display font-semibold text-sm text-indigo-700 hover:text-indigo-600">
        {title}
      </h4>
    </Link>
  );
}
