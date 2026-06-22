import { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { StatBlock } from "@/components/StatBlock";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Launch Liberia: Donate to Education and Meals",
  description:
    "Heart In Heaven partners with the Liberian Church to fund school meals, savings groups, and digital education at Champion Academy in Paynesville, Liberia. Donate to help children in Liberia today.",
  alternates: {
    canonical: "https://heartinheaven.org/launch-liberia",
  },
};

const programs = [
  {
    title: "Fuel First",
    subtitle: "School lunches at Champion Academy",
    description:
      "Students receive a hot meal so hunger does not pull them out of the classroom. When children eat, they stay. When they stay, futures change.",
    stat: "$50/mo feeds one student for a year",
    image: "/images/school-lunches.jpg",
    imageAlt: "Students receiving lunch at Champion Academy",
  },
  {
    title: "Digital Academy",
    subtitle: "SmartBox-powered learning",
    description:
      "Offline-first digital tools bring curriculum, teacher support, and computer access into classrooms where infrastructure is limited.",
    stat: "130 students across two campuses",
    image: "/images/liberia-digital-class.jpg",
    imageAlt: "Champion Academy students learning with computers in Liberia",
  },
  {
    title: "Savings Groups",
    subtitle: "Economic discipleship",
    description:
      "Local facilitators help families save, budget, build resilience, and move toward lasting independence through church-based training.",
    stat: "$5,000 trains 50 facilitators",
    image: "/images/savings-groups.jpg",
    imageAlt: "A savings group meeting in Paynesville, Liberia",
  },
];

const partners = [
  {
    name: "ELWA",
    desc: "A trusted Christian institution serving Liberia through education, media, health, and community ministry.",
  },
  {
    name: "Peachtree UMC",
    desc: "A church partner providing infrastructure support, prayer, and coordination for work in Monrovia.",
  },
  {
    name: "Red Meets Green",
    desc: "A social enterprise helping connect Liberian agriculture and community development with broader opportunity.",
  },
];

const fieldNotes = [
  "Champion Academy is fully accredited with the Liberian Ministry of Education.",
  "SmartBox technology supports digital learning even when internet access is limited.",
  "Local pastors, teachers, and facilitators lead the work on the ground.",
];

export default function LaunchLiberiaPage() {
  return (
    <>
      <section className="relative min-h-[82vh] overflow-hidden bg-night flex items-end">
        <Image
          src="/images/liberia-school-wall.jpg"
          alt="Champion Academy students and Heart In Heaven leaders in Paynesville, Liberia"
          fill
          className="object-cover opacity-70"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-night via-indigo-900/70 to-night/10" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-night to-transparent" />
        <div className="relative z-10 container-main py-12u md:py-16u">
          <div className="max-w-3xl">
            <p className="font-body font-medium text-eyebrow tracking-[0.18em] uppercase text-gold-400 mb-3">
              Where we work
            </p>
            <h1 className="font-display font-semibold text-display text-cream mb-5 text-balance">
              Launch Liberia is where strategy becomes a classroom.
            </h1>
            <p className="font-body text-lead text-cream/80 max-w-2xl">
              In Paynesville, Heart In Heaven helps fund meals, digital
              education, and economic discipleship through trusted Liberian
              leaders.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button href="/give?campaign=liberia" variant="primary">
                Fund Launch Liberia
              </Button>
              <Button href="#programs" variant="light">
                Explore programs
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-night pb-12u">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 -mt-12 relative z-10">
            {[
              ["Paynesville", "Monrovia suburb"],
              ["130", "students served"],
              ["3", "program pillars"],
            ].map(([value, label]) => (
              <div key={value} className="rounded-[1.5rem] border border-cream/10 bg-cream/10 p-6 text-cream backdrop-blur-md">
                <p className="font-display text-4xl font-semibold">{value}</p>
                <p className="font-body text-sm uppercase tracking-[0.16em] text-cream/55">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_420px] gap-12 items-center">
            <div>
              <SectionHeading
                eyebrow="The need"
                title="Liberia by the numbers"
                subtitle="The numbers are sobering, but they are not the whole story. The Church, local educators, and families are ready for durable partnership."
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <StatBlock value="80%" label="unemployment rate" source="World Bank, 2024" />
                <StatBlock value="64%" label="living below the poverty line" source="UNDP" />
                <StatBlock value="44%" label="children affected by stunting" source="UNICEF" />
              </div>
            </div>
            <div className="rounded-[2rem] bg-paper border border-warm-100 p-6 shadow-sm">
              <p className="font-display text-h3 font-semibold text-indigo-700 mb-4">
                The opportunity is local leadership.
              </p>
              <div className="space-y-4 font-body text-sm leading-relaxed text-warm-500">
                <p>
                  After civil war and the Ebola crisis, an entire generation
                  grew up without reliable access to education, food, or
                  economic opportunity.
                </p>
                <p>
                  Heart In Heaven does not replace Liberian leadership. We fuel
                  it with resources, technology, training, and steady donor
                  partnership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream-2 section-padding" id="programs">
        <div className="container-main">
          <SectionHeading
            eyebrow="Our programs"
            title="Three pillars of transformation"
            subtitle="Each pillar addresses a pressure point that keeps children and families from flourishing."
            align="center"
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {programs.map((program) => (
              <ProgramCard key={program.title} {...program} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8 items-stretch">
            <div className="rounded-[2rem] bg-indigo-600 p-7 md:p-8 text-cream shadow-lg">
              <p className="font-body text-xs uppercase tracking-[0.18em] text-gold-300 mb-4">
                Field notes
              </p>
              <h2 className="font-display text-h2 font-semibold mb-6">
                What makes this work different
              </h2>
              <div className="space-y-4">
                {fieldNotes.map((note) => (
                  <div key={note} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-gold-400 shrink-0" />
                    <p className="font-body text-sm leading-relaxed text-cream/75">
                      {note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative min-h-64 overflow-hidden rounded-[2rem]">
                <Image
                  src="/images/liberia-assembly.jpg"
                  alt="Students gathered for school assembly in Liberia"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 30vw"
                />
              </div>
              <div className="relative min-h-64 overflow-hidden rounded-[2rem] translate-y-8">
                <Image
                  src="/images/smartbox-laptops.jpg"
                  alt="SmartBox equipment and laptops for digital learning"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 30vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream-2 section-padding">
        <div className="container-main">
          <SectionHeading
            eyebrow="Local partners"
            title="Trusted partners on the ground"
            subtitle="The strongest work in Liberia is led by people who know the place, the language, and the daily realities families face."
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {partners.map((partner) => (
              <article
                key={partner.name}
                className="group rounded-[1.5rem] border border-warm-100 bg-paper p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold-300 hover:shadow-md"
              >
                <div className="w-16 h-16 rounded-full bg-indigo-50 flex items-center justify-center mx-auto mb-5 group-hover:bg-gold-400">
                  <span className="font-display font-semibold text-lg text-indigo-600 group-hover:text-charcoal">
                    {partner.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-lg text-indigo-700 mb-2">
                  {partner.name}
                </h3>
                <p className="font-body text-sm leading-relaxed text-warm-500">
                  {partner.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-indigo-700 section-padding">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/liberia-team-group.jpg"
            alt="Heart In Heaven leaders and partners in Liberia"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="relative container-narrow text-center">
          <p className="font-body font-medium text-eyebrow tracking-[0.18em] uppercase text-gold-400 mb-3">
            Why Liberia
          </p>
          <h2 className="font-display font-semibold text-h2 text-cream mb-6">
            A nation ready for renewal
          </h2>
          <p className="font-body text-base text-cream/70 leading-relaxed">
            Liberia was founded by freed American slaves in 1847. Its ties to
            the United States are deep, English is its official language, and
            the Church remains one of the most trusted institutions in the
            country. Heart In Heaven chose Liberia as a long-term family
            commitment to walk beside local leaders as they build.
          </p>
        </div>
      </section>

      <section className="bg-cream section-padding-tight">
        <div className="container-main text-center">
          <h2 className="font-display font-semibold text-h2 text-indigo-700 mb-4">
            Fund the future of Liberia
          </h2>
          <p className="font-body text-lead text-warm-500 mb-8 max-w-xl mx-auto">
            Every gift fuels education, economic development, and dignity for
            families in Paynesville.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/give?campaign=liberia" variant="primary">
              Fuel a Student: $50/mo
            </Button>
            <Button href="/give" variant="secondary">
              Give to all 20+ ministries
            </Button>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://heartinheaven.org",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Launch Liberia",
                item: "https://heartinheaven.org/launch-liberia",
              },
            ],
          }),
        }}
      />
    </>
  );
}

function ProgramCard({
  title,
  subtitle,
  description,
  stat,
  image,
  imageAlt,
}: {
  title: string;
  subtitle: string;
  description: string;
  stat: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-warm-100 bg-paper shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-night/80 to-transparent p-5">
          <p className="font-body text-xs uppercase tracking-[0.18em] text-gold-300">
            {subtitle}
          </p>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-display font-semibold text-h3 text-indigo-700 mb-3">
          {title}
        </h3>
        <p className="font-body text-sm leading-relaxed text-warm-500 mb-5">
          {description}
        </p>
        <p className="rounded-2xl bg-gold-50 px-4 py-3 font-body text-sm font-semibold text-gold-700">
          {stat}
        </p>
      </div>
    </article>
  );
}
