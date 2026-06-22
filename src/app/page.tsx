import { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { StatBlock } from "@/components/StatBlock";
import { TrustStrip } from "@/components/TrustStrip";
import { SectionHeading } from "@/components/SectionHeading";
import { Newsletter } from "@/components/Newsletter";

export const metadata: Metadata = {
  title: "Heart In Heaven — One gift. Twenty ministries. Eternal impact.",
  description:
    "Heart In Heaven pools your monthly giving across 20+ vetted Christian relief partners so every dollar reaches more of the least of these.",
};

export default function HomePage() {
  return (
    <>
      {/* SECTION 1 — Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-indigo-800">
        <Image
          src="/images/hero-liberia.jpg"
          alt="Children at Champion Academy in Paynesville, Liberia"
          fill
          className="object-cover opacity-60"
          priority
          sizes="100vw"
        />
        <div className="relative z-10 container-main py-16u md:py-20">
          <div className="max-w-2xl">
            <h1 className="font-display font-semibold text-display text-cream tracking-tight text-balance">
              One gift. Twenty ministries. Eternal impact.
            </h1>
            <p className="font-body text-lead text-cream/80 mt-6 max-w-xl">
              Heart In Heaven pools your monthly giving across 20+ vetted
              Christian relief partners so every dollar reaches more of the
              least of these.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Button href="/give" variant="primary">
                Become a Heart Partner — $40/mo
              </Button>
              <Button href="/give?frequency=once" variant="ghost" className="text-cream hover:text-gold-400 border-transparent">
                or give once &rarr;
              </Button>
            </div>
          </div>
        </div>
        {/* Subject attribution */}
        <p className="absolute bottom-4 left-6 font-body text-xs text-cream/50 z-10">
          Champion Academy, Paynesville, Liberia
        </p>
      </section>

      {/* Trust Strip */}
      <div className="bg-cream">
        <div className="container-main">
          <TrustStrip />
        </div>
      </div>

      {/* SECTION 2 — The Problem */}
      <section className="bg-cream section-padding">
        <div className="container-main">
          <SectionHeading
            eyebrow="The need"
            title="The world's most vulnerable are waiting"
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            <StatBlock
              value="80%"
              label="unemployment in Liberia"
              source="World Bank, 2024"
            />
            <StatBlock
              value="1 in 4"
              label="children under 5 face malnutrition globally"
              source="UNICEF, 2024"
            />
            <StatBlock
              value="1.4"
              label="average charities per US Christian donor — leaving thousands of ministries unreached"
              source="Barna Group"
            />
          </div>
        </div>
      </section>

      {/* SECTION 3 — How Leveraged Giving Works */}
      <section className="bg-cream-2 section-padding">
        <div className="container-main">
          <SectionHeading
            eyebrow="How it works"
            title="Your generosity, multiplied"
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 max-w-4xl mx-auto">
            <Step
              number={1}
              icon={<HeartIcon />}
              title="You give $40/mo"
              description="A simple monthly gift from your heart to the world."
            />
            <Step
              number={2}
              icon={<PoolIcon />}
              title="We pool it together"
              description="Your gift joins thousands of other Heart Partners."
            />
            <Step
              number={3}
              icon={<BranchIcon />}
              title="20+ ministries receive equal shares"
              description="Reaching orphans, widows, clean water, Bible translation, medical aid, and more."
            />
          </div>
          <p className="font-body text-base text-warm-500 text-center mt-10 max-w-xl mx-auto">
            Like a mutual fund for giving — one gift does the work of twenty.
            Every dollar is split evenly across vetted Christian relief partners
            serving the global poor.
          </p>
          <div className="text-center mt-6">
            <Button href="/how-it-works" variant="ghost">
              See how it works &rarr;
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 4 — Where Your Money Goes */}
      <section className="bg-cream section-padding">
        <div className="container-main">
          <SectionHeading
            eyebrow="Transparency"
            title="Where your money goes"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Donut chart */}
            <div className="flex justify-center">
              <DonutChart />
            </div>
            {/* Partner grid */}
            <div>
              <p className="font-body text-sm text-warm-500 mb-6">
                20+ vetted partner ministries receive equal shares each month:
              </p>
              <div className="grid grid-cols-4 sm:grid-cols-5 gap-4">
                {partnerMinistries.map((partner) => (
                  <div
                    key={partner}
                    className="aspect-square bg-paper rounded-lg border border-warm-100 flex items-center justify-center p-2 grayscale hover:grayscale-0 transition-all duration-200"
                    title={partner}
                  >
                    <span className="font-body text-xs text-warm-300 text-center leading-tight">
                      {partner}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Button href="/about#financials" variant="ghost">
                  Read our latest 990 &rarr;
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — Spotlight: Launch Liberia */}
      <section className="bg-indigo-600 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative min-h-[400px] lg:min-h-[500px]">
            <Image
              src="/images/champion-academy.jpg"
              alt="Students at Champion Academy receiving lunch in Paynesville, Liberia"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex items-center p-8 md:p-12 lg:p-16">
            <div>
              <p className="font-body font-medium text-eyebrow tracking-[0.18em] uppercase text-gold-400 mb-3">
                Launch Liberia
              </p>
              <h2 className="font-display font-semibold text-h2 text-cream mb-4">
                Meet Mawolo, age 9.
              </h2>
              <p className="font-body text-lead text-cream/80 mb-6">
                He eats lunch every weekday at Champion Academy because 32
                monthly Heart Partners said yes. One meal at a time, one family
                at a time, the cycle of poverty breaks.
              </p>
              <Button href="/give?campaign=liberia" variant="primary">
                Fuel a Student — $50/mo feeds one child for a year
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — Heart Partner Testimonial */}
      <section className="bg-cream section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 items-center max-w-3xl mx-auto">
            <div className="relative w-48 h-48 mx-auto md:mx-0 rounded-full overflow-hidden border-4 border-gold-100 shrink-0">
              <Image
                src="/images/donor-placeholder.jpg"
                alt="Sarah M., Heart Partner since 2024"
                fill
                className="object-cover"
                sizes="200px"
              />
            </div>
            <blockquote>
              <p className="font-display font-medium text-xl md:text-2xl text-indigo-700 italic leading-relaxed border-l-4 border-gold-400 pl-6">
                &ldquo;I used to give to one charity and hope for the best.
                Heart In Heaven lets me reach twenty ministries with one gift.
                It&rsquo;s the smartest giving decision I&rsquo;ve ever
                made.&rdquo;
              </p>
              <footer className="mt-4 pl-6">
                <p className="font-body font-semibold text-sm text-charcoal">
                  Sarah M.
                </p>
                <p className="font-body text-sm text-warm-500">
                  Heart Partner since 2024
                </p>
              </footer>
            </blockquote>
          </div>
          <div className="text-center mt-8">
            <Button href="/stories" variant="ghost">
              Meet more Heart Partners &rarr;
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 7 — Founder's Invitation */}
      <section className="bg-cream-2 section-padding">
        <div className="container-narrow text-center">
          <SectionHeading
            eyebrow="From the founder"
            title="A personal invitation"
            align="center"
          />
          <div className="relative aspect-video max-w-[720px] mx-auto rounded-xl overflow-hidden bg-indigo-800 shadow-lg">
            {/* Placeholder for founder video */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-gold-400 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#1A1A1A"
                  aria-hidden="true"
                >
                  <polygon points="8,5 20,12 8,19" />
                </svg>
              </div>
            </div>
            <Image
              src="/images/founder-video-thumb.jpg"
              alt="Watch the founder's message about Heart In Heaven's mission"
              fill
              className="object-cover opacity-70"
              sizes="720px"
            />
          </div>
          <div className="mt-6">
            <Button href="/our-mission" variant="ghost">
              Read our founding story &rarr;
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 8 — Final Ask */}
      <section className="relative bg-indigo-700 section-padding overflow-hidden">
        <Image
          src="/images/community-liberia.jpg"
          alt="Community gathering in Liberia"
          fill
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="relative z-10 container-main text-center">
          <h2 className="font-display font-semibold text-h1 text-cream mb-4 text-balance">
            Will you be one of the next 100 Heart Partners?
          </h2>
          <p className="font-body text-lead text-cream/70 mb-8 max-w-xl mx-auto">
            Your $40/month reaches 20+ ministries — feeding students, training
            leaders, and bringing clean water to communities.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/give" variant="primary">
              Start your monthly gift — $40/mo
            </Button>
          </div>
          <div className="mt-6">
            <Newsletter variant="card" dark />
          </div>
        </div>
      </section>

      {/* DonateAction Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DonateAction",
            name: "Become a Heart Partner",
            description:
              "Monthly giving that reaches 20+ vetted Christian relief ministries.",
            recipient: {
              "@type": "NGO",
              name: "Heart In Heaven",
              url: "https://heartinheaven.org",
            },
            target: {
              "@type": "EntryPoint",
              urlTemplate: "https://heartinheaven.org/give",
            },
          }),
        }}
      />
    </>
  );
}

/* --- Helper components --- */

function Step({
  number,
  icon,
  title,
  description,
}: {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center px-4">
      <div className="flex items-center justify-center mb-4">
        <div className="w-16 h-16 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
          {icon}
        </div>
      </div>
      <p className="font-body text-xs font-medium text-warm-300 uppercase tracking-wider mb-1">
        Step {number}
      </p>
      <h3 className="font-display font-semibold text-h3 text-indigo-700 mb-2">
        {title}
      </h3>
      <p className="font-body text-sm text-warm-500">{description}</p>
      {number < 3 && (
        <div className="hidden md:block mt-4 text-warm-300" aria-hidden="true">
          <svg width="40" height="12" viewBox="0 0 40 12" className="mx-auto rotate-0 md:rotate-0">
            <path
              d="M2 6h34M30 2l6 4-6 4"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
    </div>
  );
}

function HeartIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function PoolIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4l8 8M20 4l-8 8M12 12v8" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function BranchIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 4v8M12 12l-6 6M12 12l6 6M12 12l-3 6M12 12l3 6" />
    </svg>
  );
}

function DonutChart() {
  const programPct = 92;
  const adminPct = 5;
  const fundraisingPct = 3;

  const radius = 80;
  const circumference = 2 * Math.PI * radius;

  const programDash = (programPct / 100) * circumference;
  const adminDash = (adminPct / 100) * circumference;
  const fundraisingDash = (fundraisingPct / 100) * circumference;

  const programOffset = 0;
  const adminOffset = -programDash;
  const fundraisingOffset = -(programDash + adminDash);

  return (
    <div className="relative">
      <svg viewBox="0 0 200 200" className="w-64 h-64 -rotate-90">
        {/* Programs */}
        <circle
          cx="100"
          cy="100"
          r={radius}
          fill="none"
          stroke="#1F2A5C"
          strokeWidth="24"
          strokeDasharray={`${programDash} ${circumference}`}
          strokeDashoffset={programOffset}
        />
        {/* Admin */}
        <circle
          cx="100"
          cy="100"
          r={radius}
          fill="none"
          stroke="#D4A24C"
          strokeWidth="24"
          strokeDasharray={`${adminDash} ${circumference}`}
          strokeDashoffset={adminOffset}
        />
        {/* Fundraising */}
        <circle
          cx="100"
          cy="100"
          r={radius}
          fill="none"
          stroke="#A39E92"
          strokeWidth="24"
          strokeDasharray={`${fundraisingDash} ${circumference}`}
          strokeDashoffset={fundraisingOffset}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-display font-semibold text-4xl text-indigo-700">
          92%
        </span>
        <span className="font-body text-sm text-warm-500">to programs</span>
      </div>
      <div className="mt-4 flex justify-center gap-6 text-sm">
        <Legend color="bg-indigo-600" label={`Programs ${programPct}%`} />
        <Legend color="bg-gold-400" label={`Admin ${adminPct}%`} />
        <Legend color="bg-warm-300" label={`Fundraising ${fundraisingPct}%`} />
      </div>
    </div>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <span className="flex items-center gap-1.5 font-body text-xs text-warm-500">
      <span className={`w-2.5 h-2.5 rounded-full ${color}`} />
      {label}
    </span>
  );
}

const partnerMinistries = [
  "Compassion",
  "charity:water",
  "Samaritan's Purse",
  "Wycliffe",
  "Voice of the Martyrs",
  "Gospel for Asia",
  "Food for the Hungry",
  "World Relief",
  "International Justice Mission",
  "Mercy Ships",
  "CURE International",
  "Water Mission",
  "Bible League",
  "HCJB Global",
  "Ethnos360",
  "ReachGlobal",
  "SIM",
  "TEAM",
  "Pioneers",
  "Medical Teams",
];
