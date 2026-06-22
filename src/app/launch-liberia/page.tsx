import { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { StatBlock } from "@/components/StatBlock";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Launch Liberia",
  description:
    "80% unemployment. Generations without lunch. Heart In Heaven is partnering with the Liberian Church to change that — one student, one savings group, one family at a time.",
};

export default function LaunchLiberiaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden bg-indigo-800">
        <Image
          src="/images/champion-academy.jpg"
          alt="Champion Academy campus in Paynesville, Liberia"
          fill
          className="object-cover opacity-50"
          priority
          sizes="100vw"
        />
        <div className="relative z-10 container-main py-12u md:py-16u">
          <div className="max-w-2xl">
            <p className="font-body font-medium text-eyebrow tracking-[0.18em] uppercase text-gold-400 mb-3">
              Where we work
            </p>
            <h1 className="font-display font-semibold text-h1 text-cream mb-4">
              Launch Liberia
            </h1>
            <p className="font-body text-lead text-cream/80">
              80% unemployment. Generations without lunch. We&rsquo;re
              partnering with the Liberian Church to change that — one
              student, one savings group, one family at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1 — The Need */}
      <section className="bg-cream section-padding">
        <div className="container-main">
          <SectionHeading
            eyebrow="The need"
            title="Liberia by the numbers"
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-12">
            <StatBlock
              value="80%"
              label="unemployment rate"
              source="World Bank, 2024"
            />
            <StatBlock
              value="64%"
              label="of the population lives below the poverty line"
              source="UNDP"
            />
            <StatBlock
              value="44%"
              label="of children are stunted from malnutrition"
              source="UNICEF"
            />
          </div>
          <div className="container-narrow">
            <p className="font-body text-base text-warm-500 leading-relaxed">
              Liberia is one of the poorest countries on earth. After 14 years
              of civil war and the Ebola crisis, an entire generation grew up
              without reliable access to education, food, or economic
              opportunity. In Paynesville — Monrovia&rsquo;s most densely
              populated suburb — families scrape by on less than $2 a day.
              Children come to school hungry, if they come at all.
            </p>
            <p className="font-body text-base text-warm-500 leading-relaxed mt-4">
              But the Liberian Church is strong. Local leaders, pastors, and
              teachers are the backbone of community life. What they need is
              not another foreign program — it&rsquo;s fuel. Resources.
              Partnership. Heart In Heaven provides exactly that.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 — What We're Doing */}
      <section className="bg-cream-2 section-padding">
        <div className="container-main">
          <SectionHeading
            eyebrow="Our programs"
            title="Three pillars of transformation"
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <ProgramCard
              title="Fuel First"
              subtitle="School lunches at Champion Academy"
              description="Every weekday, students at Champion Academy receive a hot meal — for many, their only meal of the day. When children eat, they stay in school. When they stay in school, futures change."
              stat="$50/mo feeds one student for a year"
              image="/images/school-lunches.jpg"
              imageAlt="Students eating lunch at Champion Academy"
            />
            <ProgramCard
              title="Chalmers Savings Groups"
              subtitle="Financial discipleship training"
              description="Based on the Chalmers Center model, we train local facilitators to lead savings groups. Families learn to save, budget, and invest — breaking the cycle of dependency and building lasting economic resilience."
              stat="$5,000 trains 50 facilitators"
              image="/images/savings-groups.jpg"
              imageAlt="A savings group meeting in Paynesville, Liberia"
            />
            <ProgramCard
              title="Founder's Vision"
              subtitle="The long-arc plan for Liberia"
              description="Beyond immediate relief, Heart In Heaven is working toward a self-sustaining ecosystem in Liberia: local leadership development, vocational training, and church-based community care."
              stat="A 10-year partnership commitment"
              image="/images/founders-vision.jpg"
              imageAlt="Community leaders meeting in Paynesville"
            />
          </div>
        </div>
      </section>

      {/* Section 3 — Partners on the ground */}
      <section className="bg-cream section-padding">
        <div className="container-main">
          <SectionHeading
            eyebrow="Local partners"
            title="Partners on the ground"
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              {
                name: "ELWA",
                desc: "Eternal Love Winning Africa — one of West Africa's oldest and most trusted Christian organizations.",
              },
              {
                name: "Peachtree UMC",
                desc: "Providing infrastructure support and partnership coordination in Monrovia.",
              },
              {
                name: "Red Meets Green",
                desc: "Social enterprise connecting Liberian agriculture with international markets.",
              },
            ].map((partner) => (
              <div
                key={partner.name}
                className="bg-paper rounded-xl border border-warm-100 p-6 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-indigo-50 flex items-center justify-center mx-auto mb-4">
                  <span className="font-display font-semibold text-lg text-indigo-600">
                    {partner.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-base text-indigo-700 mb-2">
                  {partner.name}
                </h3>
                <p className="font-body text-sm text-warm-500">
                  {partner.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Why Liberia */}
      <section className="bg-indigo-600 section-padding">
        <div className="container-narrow text-center">
          <p className="font-body font-medium text-eyebrow tracking-[0.18em] uppercase text-gold-400 mb-3">
            Why Liberia
          </p>
          <h2 className="font-display font-semibold text-h2 text-cream mb-6">
            A nation ready for renewal
          </h2>
          <p className="font-body text-base text-cream/70 leading-relaxed">
            Liberia was founded by freed American slaves in 1847. Its ties to
            the United States are deep — its flag mirrors the Stars and
            Stripes, and English is its official language. After devastating
            civil wars and the Ebola crisis, Liberia is rebuilding. The Church
            is the most trusted institution in the country, and local leaders
            are ready for partnership. Heart In Heaven chose Liberia not as a
            project, but as a family — a long-term commitment to walk
            alongside the Liberian Church as it leads its own transformation.
          </p>
        </div>
      </section>

      {/* Section 5 — Give to Launch Liberia */}
      <section className="bg-cream section-padding">
        <div className="container-main text-center">
          <h2 className="font-display font-semibold text-h2 text-indigo-700 mb-4">
            Fund the future of Liberia
          </h2>
          <p className="font-body text-lead text-warm-500 mb-8 max-w-xl mx-auto">
            Every gift fuels education, economic development, and dignity for
            families in Paynesville.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/give?campaign=liberia" variant="primary">
              Fuel a Student — $50/mo
            </Button>
            <Button href="/give" variant="secondary">
              Give to all 20+ ministries
            </Button>
          </div>
        </div>
      </section>

      {/* BreadcrumbList Schema */}
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
    <div className="bg-paper rounded-xl border border-warm-100 overflow-hidden">
      <div className="relative aspect-[4/3]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="font-display font-semibold text-lg text-indigo-700 mb-1">
          {title}
        </h3>
        <p className="font-body text-xs text-warm-300 uppercase tracking-wider mb-3">
          {subtitle}
        </p>
        <p className="font-body text-sm text-warm-500 mb-4">{description}</p>
        <p className="font-body text-sm font-semibold text-gold-600">
          {stat}
        </p>
      </div>
    </div>
  );
}
