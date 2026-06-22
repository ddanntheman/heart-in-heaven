import { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Our Mission: Christian Nonprofit",
  description:
    "Heart In Heaven channels generosity into education, relief, and dignity for the global poor through 20+ vetted Christian ministries. Founded by Angelique C. McGlotten.",
  alternates: {
    canonical: "https://heartinheaven.org/our-mission",
  },
};

const missionPillars = [
  {
    label: "01",
    title: "Rooted in Liberia",
    desc: "Born from a homecoming, our mission begins with children, teachers, and churches in Paynesville.",
  },
  {
    label: "02",
    title: "Built for leverage",
    desc: "One recurring gift is pooled across 20+ vetted ministries, so donors reach more needs with less friction.",
  },
  {
    label: "03",
    title: "Measured by dignity",
    desc: "Education, meals, savings groups, and relief are designed to restore agency, not create dependency.",
  },
];

const convictions = [
  "God calls every believer to generosity as a joyful response to grace.",
  "The global poor deserve dignity, access, and opportunity.",
  "Strategic giving multiplies impact when faithful donors move together.",
  "Transparency is non-negotiable. Every dollar must be traceable.",
  "Local leaders are the best long-term stewards of community transformation.",
];

const timeline = [
  {
    year: "2021",
    title: "A burden became a calling",
    desc: "Angelique founded Heart In Heaven after returning to Liberia and seeing children locked out of opportunity.",
  },
  {
    year: "2024",
    title: "Champion Academy joined the network",
    desc: "The school became fully accredited with the Liberian Ministry of Education and expanded digital learning access.",
  },
  {
    year: "Today",
    title: "A platform for leveraged giving",
    desc: "Heart Partners now fuel Liberia programs and support a broad family of vetted Christian relief ministries.",
  },
];

export default function OurMissionPage() {
  return (
    <>
      <section className="relative min-h-[78vh] overflow-hidden bg-night flex items-end">
        <Image
          src="/images/founder-classroom.jpg"
          alt="Angelique C. McGlotten speaking with students inside a classroom in Liberia"
          fill
          className="object-cover opacity-55"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-night via-indigo-900/75 to-night/20" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-night to-transparent" />
        <div className="relative z-10 container-main py-12u md:py-16u">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px] gap-10 items-end">
            <div className="max-w-3xl">
              <p className="font-body font-medium text-eyebrow tracking-[0.18em] uppercase text-gold-400 mb-4">
                Our mission
              </p>
              <h1 className="font-display font-semibold text-display text-cream mb-6 text-balance">
                We turn generosity into a global force for dignity.
              </h1>
              <p className="font-body text-lead text-cream/80 max-w-2xl">
                Heart In Heaven exists so one faithful gift can feed students,
                fund education, equip local leaders, and reach 20+ vetted
                Christian ministries every month.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button href="/give" variant="primary">
                  Become a Heart Partner
                </Button>
                <Button href="/launch-liberia" variant="light">
                  See Launch Liberia
                </Button>
              </div>
            </div>
            <div className="rounded-[2rem] border border-cream/15 bg-cream/10 p-5 backdrop-blur-md shadow-lg">
              <p className="font-body text-xs uppercase tracking-[0.18em] text-gold-300 mb-4">
                Mission proof
              </p>
              <div className="grid grid-cols-3 gap-3 text-center">
                {[
                  ["20+", "vetted ministries"],
                  ["92%", "to programs"],
                  ["130", "students served"],
                ].map(([value, label]) => (
                  <div key={value} className="rounded-2xl bg-night/45 p-4">
                    <p className="font-display font-semibold text-2xl text-cream">
                      {value}
                    </p>
                    <p className="font-body text-[0.7rem] uppercase tracking-wide text-cream/55">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-night section-padding-tight">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {missionPillars.map((pillar) => (
              <article
                key={pillar.title}
                className="group rounded-[1.75rem] border border-cream/10 bg-cream/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-cream/10"
              >
                <p className="font-body text-xs uppercase tracking-[0.18em] text-gold-400 mb-6">
                  {pillar.label}
                </p>
                <h2 className="font-display font-semibold text-h3 text-cream mb-3">
                  {pillar.title}
                </h2>
                <p className="font-body text-sm leading-relaxed text-cream/65">
                  {pillar.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-12 items-center">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-lg">
                <Image
                  src="/images/founder-serving-children.jpg"
                  alt="Angelique C. McGlotten serving children in Liberia"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
              <div className="absolute -right-4 -bottom-6 max-w-xs rounded-[1.5rem] bg-indigo-600 p-5 text-cream shadow-lg md:-right-8">
                <p className="font-display text-xl font-semibold leading-snug">
                  A homecoming became a call to rebuild what poverty tried to
                  steal.
                </p>
              </div>
            </div>
            <div>
              <SectionHeading
                eyebrow="Founding story"
                title="Not a boardroom idea. A burden carried home."
              />
              <div className="space-y-5 font-body text-base leading-relaxed text-warm-500">
                <p>
                  Angelique C. McGlotten was born and raised in Liberia, West
                  Africa. She emigrated to the United States after a coup in her
                  home country, but Liberia remained home.
                </p>
                <p>
                  When she returned after thirty-three years, she saw children
                  sitting outside classrooms, teachers doing their best with
                  almost nothing, and families carrying the weight of poverty
                  with quiet strength.
                </p>
                <p>
                  Heart In Heaven was founded in September 2021 with a clear
                  conviction: children in Liberia deserve quality education,
                  daily nourishment, and access to technology that can close the
                  digital divide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream-2 section-padding">
        <div className="container-main">
          <SectionHeading
            eyebrow="The movement"
            title="A mission that moves in three directions"
            subtitle="The work is local, global, and deeply accountable."
            align="center"
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {timeline.map((item) => (
              <article
                key={item.year}
                className="relative overflow-hidden rounded-[2rem] border border-warm-100 bg-paper p-7 shadow-sm transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold-100" />
                <p className="relative font-display text-4xl font-semibold text-gold-500 mb-8">
                  {item.year}
                </p>
                <h3 className="font-display text-h3 font-semibold text-indigo-700 mb-3">
                  {item.title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-warm-500">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-[360px_minmax(0,1fr)] gap-10 items-start">
            <div className="lg:sticky lg:top-28">
              <SectionHeading eyebrow="Our beliefs" title="Convictions that shape every dollar" />
              <p className="font-body text-sm leading-relaxed text-warm-500">
                These principles shape partner selection, program design,
                storytelling, and financial stewardship.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {convictions.map((belief, i) => (
                <div
                  key={belief}
                  className="group rounded-[1.5rem] border border-warm-100 bg-paper p-6 transition-all duration-300 hover:border-gold-300 hover:shadow-md"
                >
                  <span className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-indigo-50 font-display font-semibold text-indigo-600 group-hover:bg-gold-400 group-hover:text-charcoal">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-body text-sm leading-relaxed text-warm-500">
                    {belief}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-indigo-700 section-padding">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/images/liberia-assembly.jpg"
            alt="Students gathered for an assembly in Liberia"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="relative container-narrow text-center">
          <blockquote className="font-display font-medium text-xl md:text-3xl text-cream italic leading-relaxed mb-6">
            &ldquo;Store up for yourselves treasures in heaven. For where your
            treasure is, there your heart will be also.&rdquo;
          </blockquote>
          <p className="font-body text-sm text-cream/55">Matthew 6:20-21</p>
        </div>
      </section>

      <section className="bg-cream section-padding-tight">
        <div className="container-main">
          <div className="rounded-[2rem] bg-indigo-600 p-8 md:p-10 text-center shadow-lg">
            <h2 className="font-display font-semibold text-h2 text-cream mb-4">
              Join the mission behind the movement
            </h2>
            <p className="font-body text-lead text-cream/75 mb-8 max-w-2xl mx-auto">
              Become a Heart Partner and help generosity move farther every
              month.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/give" variant="primary">
                Become a Heart Partner: $40/mo
              </Button>
              <Button href="/about#team" variant="secondary">
                Meet the founder
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
