import { Metadata } from "next";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Our Mission | Heart In Heaven Nonprofit",
  description:
    "Heart In Heaven exists to channel generosity into education, relief, and dignity for the global poor through 20+ vetted Christian ministries. Founded by Angelique C. McGlotten.",
  alternates: {
    canonical: "https://heartinheaven.org/our-mission",
  },
};

export default function OurMissionPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-indigo-600 section-padding-tight">
        <div className="container-main">
          <div className="max-w-2xl">
            <p className="font-body font-medium text-eyebrow tracking-[0.18em] uppercase text-gold-400 mb-3">
              Our mission
            </p>
            <h1 className="font-display font-semibold text-h1 text-cream mb-4">
              Why we exist
            </h1>
            <p className="font-body text-lead text-cream/70">
              Heart In Heaven was born from a simple conviction: generosity
              should be strategic, not scattered. One gift can reach the whole
              world.
            </p>
          </div>
        </div>
      </section>

      {/* Founding story */}
      <section className="bg-cream section-padding">
        <div className="container-narrow">
          <SectionHeading
            eyebrow="Our story"
            title="From a burden to a movement"
          />
          <div className="prose-custom space-y-6 font-body text-base text-warm-700 leading-relaxed">
            <p>
              Heart In Heaven was not born in a boardroom. It was born from a
              homecoming.
            </p>
            <p>
              Angelique C. McGlotten was born and raised in Liberia, West
              Africa. She emigrated to the United States following a coup in
              her home country. Liberia has always been home. When she
              returned after thirty-three years, what she encountered broke
              her heart and ignited her purpose. She saw suffering in the
              schools. She saw children sitting outside classrooms, unable to
              enter. She saw teachers doing their best with nothing. She saw a
              generation at risk.
            </p>
            <p>
              In September 2021, Angelique founded Heart In Heaven with a
              singular conviction: that every child in Liberia deserves access
              to quality education, and that the right technology could deliver
              it even where infrastructure had failed.
            </p>
            <p>
              Champions Academy joined the Heart In Heaven Educational Network
              in February 2024 and became fully accredited with the Liberian
              Ministry of Education. Today, Heart In Heaven Digital Academy
              (HIHDA) serves 130 students across two campuses, using
              SmartBox-powered digital education to remove the digital divide
              one heart at a time.
            </p>
            <p>
              Heart In Heaven also operates as a leveraged giving platform,
              pooling monthly donations from Heart Partners and distributing
              them across 20+ vetted Christian relief organizations serving
              the global poor. One gift does the work of twenty.
            </p>
          </div>
        </div>
      </section>

      {/* Mission + Vision */}
      <section className="bg-cream-2 section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-paper rounded-xl border border-warm-100 p-8">
              <p className="font-body font-medium text-eyebrow tracking-[0.18em] uppercase text-gold-500 mb-3">
                Mission
              </p>
              <p className="font-display font-semibold text-lg text-indigo-700 leading-snug">
                To pool generosity and distribute it faithfully across vetted
                Christian relief organizations, so every donor can reach more
                of the world&rsquo;s most vulnerable with a single gift.
              </p>
            </div>
            <div className="bg-paper rounded-xl border border-warm-100 p-8">
              <p className="font-body font-medium text-eyebrow tracking-[0.18em] uppercase text-gold-500 mb-3">
                Vision
              </p>
              <p className="font-display font-semibold text-lg text-indigo-700 leading-snug">
                A world where every monthly gift reaches orphans, widows, the
                persecuted, the hungry, the sick, and the unreached, all at
                once, every month, through one trusted partner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we believe */}
      <section className="bg-cream section-padding">
        <div className="container-narrow">
          <SectionHeading
            eyebrow="Our beliefs"
            title="What we believe"
            align="center"
          />
          <div className="space-y-4">
            {[
              "God calls every believer to generosity, not as an obligation, but as a joyful response to grace.",
              "The global poor deserve dignity, access, and opportunity. Relief and development go hand in hand.",
              "Strategic giving multiplies impact. Pooled generosity reaches further than scattered gifts.",
              "Transparency and accountability are non-negotiable. Every dollar must be traceable.",
              "The local church is the best long-term vehicle for community transformation.",
            ].map((belief, i) => (
              <div
                key={i}
                className="flex gap-4 bg-paper rounded-lg border border-warm-100 p-5"
              >
                <span className="font-display font-semibold text-lg text-gold-400 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-body text-sm text-warm-500">{belief}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Anchor scripture */}
      <section className="bg-indigo-700 section-padding">
        <div className="container-narrow text-center">
          <blockquote className="font-display font-medium text-xl md:text-2xl text-cream italic leading-relaxed mb-6">
            &ldquo;Do not store up for yourselves treasures on earth, where
            moths and vermin destroy, and where thieves break in and steal. But
            store up for yourselves treasures in heaven. For where your
            treasure is, there your heart will be also.&rdquo;
          </blockquote>
          <p className="font-body text-sm text-cream/50">
            Matthew 6:19–21 (NIV)
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream section-padding-tight">
        <div className="container-main text-center">
          <h2 className="font-display font-semibold text-h2 text-indigo-700 mb-4">
            Join the mission
          </h2>
          <p className="font-body text-lead text-warm-500 mb-8 max-w-xl mx-auto">
            Become a Heart Partner and start reaching the world with one
            monthly gift.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/give" variant="primary">
              Become a Heart Partner: $40/mo
            </Button>
            <Button href="/about#team" variant="secondary">
              Meet the team
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
