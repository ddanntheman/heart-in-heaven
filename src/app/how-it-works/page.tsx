import { Metadata } from "next";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "How Leveraged Giving Works | Heart In Heaven",
  description:
    "Leveraged giving explained: your monthly gift is pooled with other Heart Partners and distributed across 20+ vetted Christian ministries. Like a mutual fund for generosity.",
  alternates: {
    canonical: "https://heartinheaven.org/how-it-works",
  },
};

const faqs = [
  {
    q: "What is leveraged giving?",
    a: "Leveraged giving pools many small monthly donations into one fund, then distributes them evenly across 20+ vetted ministries. Like a mutual fund for generosity: one gift reaches more of the world's most vulnerable.",
  },
  {
    q: "How are partner ministries chosen?",
    a: "Each partner undergoes a thorough vetting process: financial transparency, demonstrated impact, alignment with our mission, and on-the-ground track record. We review each partner annually.",
  },
  {
    q: "How much goes to programs?",
    a: "92% of every dollar goes directly to programs. Our administrative costs are kept under 5%, and fundraising is under 3%. We publish audited financials annually.",
  },
  {
    q: "Can I choose which ministry gets my money?",
    a: "Heart In Heaven distributes funds evenly across all partners. This is by design: it's what makes leveraged giving powerful. If you want to give to a specific program like Launch Liberia, we offer campaign-specific giving too.",
  },
  {
    q: "Is my donation tax-deductible?",
    a: "Yes. Heart In Heaven is a registered 501(c)(3) nonprofit (EIN 87-4020929). You'll receive a tax receipt for every gift.",
  },
  {
    q: "Can I cancel or change my monthly gift?",
    a: "Absolutely. You can adjust or cancel your recurring gift at any time by emailing hello@heartinheaven.org. No questions asked.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept credit/debit cards, Apple Pay, Google Pay, PayPal, and ACH bank transfers. Monthly giving via ACH has the lowest processing fees, so more of your gift reaches the field.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-indigo-600 section-padding-tight">
        <div className="container-main">
          <div className="max-w-2xl">
            <p className="font-body font-medium text-eyebrow tracking-[0.18em] uppercase text-gold-400 mb-3">
              How it works
            </p>
            <h1 className="font-display font-semibold text-h1 text-cream mb-4">
              The mutual fund of Christian giving
            </h1>
            <p className="font-body text-lead text-cream/70">
              One gift. Twenty ministries. Every dollar reaches more of the
              least of these. Here&rsquo;s exactly how leveraged giving works.
            </p>
          </div>
        </div>
      </section>

      {/* 3-step diagram expanded */}
      <section className="bg-cream section-padding">
        <div className="container-main">
          <SectionHeading
            eyebrow="Three simple steps"
            title="From your heart to the world"
            align="center"
          />
          <div className="max-w-4xl mx-auto space-y-16">
            <StepExpanded
              number={1}
              title="You give $40/mo"
              description="Sign up as a Heart Partner with a simple monthly gift. $40 is the benchmark: it represents a full share across all 20+ ministries. But any amount helps. Whether $25 or $150, your gift is pooled with thousands of others."
            />
            <StepExpanded
              number={2}
              title="We pool it with thousands of Heart Partners"
              description="Every month, gifts from all Heart Partners are collected into a single fund. This pooling creates purchasing power and reach that no individual gift could achieve alone. Think of it like a mutual fund: diversification amplifies impact."
            />
            <StepExpanded
              number={3}
              title="20+ vetted ministries each receive an equal share"
              description="The pooled fund is distributed evenly across our full roster of vetted Christian relief organizations. Orphan care. Clean water. Bible translation. Medical aid. Savings groups. Persecution relief. Every partner gets a fair share, every month."
            />
          </div>
        </div>
      </section>

      {/* Worked example */}
      <section className="bg-cream-2 section-padding">
        <div className="container-narrow">
          <SectionHeading
            eyebrow="Example"
            title="Here's what $40/month looks like across 12 months"
            align="center"
          />
          <div className="bg-paper rounded-xl border border-warm-100 p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-display font-semibold text-lg text-indigo-700 mb-3">
                  Your investment
                </h3>
                <ul className="space-y-2 font-body text-sm text-warm-500">
                  <li className="flex justify-between">
                    <span>Monthly gift</span>
                    <span className="font-semibold text-charcoal">$40</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Annual total</span>
                    <span className="font-semibold text-charcoal">$480</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Ministries reached</span>
                    <span className="font-semibold text-charcoal">20+</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg text-indigo-700 mb-3">
                  Collective impact (illustrative)
                </h3>
                <ul className="space-y-2 font-body text-sm text-warm-500">
                  <li>240+ students fed school lunches</li>
                  <li>10+ families with clean water access</li>
                  <li>50+ Bible translation projects supported</li>
                  <li>30+ savings group participants trained</li>
                  <li>Medical care for 100+ patients</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-cream section-padding">
        <div className="container-main">
          <SectionHeading
            eyebrow="Comparison"
            title="Leveraged giving vs. traditional giving"
            align="center"
          />
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-paper rounded-xl border border-warm-100 p-6">
              <h3 className="font-display font-semibold text-lg text-warm-500 mb-4">
                Traditional giving
              </h3>
              <ul className="space-y-3 font-body text-sm text-warm-500">
                <li className="flex gap-2">
                  <span className="text-warm-300 shrink-0">&bull;</span>
                  One gift to one organization
                </li>
                <li className="flex gap-2">
                  <span className="text-warm-300 shrink-0">&bull;</span>
                  Research each charity individually
                </li>
                <li className="flex gap-2">
                  <span className="text-warm-300 shrink-0">&bull;</span>
                  Limited reach and diversification
                </li>
                <li className="flex gap-2">
                  <span className="text-warm-300 shrink-0">&bull;</span>
                  Multiple receipts and logins
                </li>
              </ul>
            </div>
            <div className="bg-indigo-600 rounded-xl p-6 text-cream">
              <h3 className="font-display font-semibold text-lg text-gold-400 mb-4">
                Leveraged giving
              </h3>
              <ul className="space-y-3 font-body text-sm text-cream/80">
                <li className="flex gap-2">
                  <span className="text-gold-400 shrink-0">&bull;</span>
                  One gift reaches 20+ vetted ministries
                </li>
                <li className="flex gap-2">
                  <span className="text-gold-400 shrink-0">&bull;</span>
                  We vet every partner for you
                </li>
                <li className="flex gap-2">
                  <span className="text-gold-400 shrink-0">&bull;</span>
                  Maximum reach with minimum effort
                </li>
                <li className="flex gap-2">
                  <span className="text-gold-400 shrink-0">&bull;</span>
                  One receipt, one dashboard, one partner
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vetting criteria */}
      <section className="bg-cream-2 section-padding">
        <div className="container-narrow">
          <SectionHeading
            eyebrow="Accountability"
            title="How we vet partner ministries"
            align="center"
          />
          <div className="space-y-6">
            {[
              {
                title: "Financial transparency",
                desc: "Publicly available financials, audited statements, and a track record of responsible stewardship.",
              },
              {
                title: "Demonstrated impact",
                desc: "Measurable outcomes with clear reporting. We look for organizations that can tell you exactly what a dollar does.",
              },
              {
                title: "Mission alignment",
                desc: "A commitment to Christian relief and development that aligns with Heart In Heaven's core beliefs and values.",
              },
              {
                title: "On-the-ground presence",
                desc: "Active programs with local staff and community trust. No paper charities.",
              },
              {
                title: "Annual review",
                desc: "Every partner is re-evaluated annually. If standards aren't met, we redirect those funds to partners who are delivering.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-paper rounded-lg border border-warm-100 p-5"
              >
                <h3 className="font-display font-semibold text-base text-indigo-700 mb-1">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-warm-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream section-padding" id="faq">
        <div className="container-narrow">
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions"
            align="center"
          />
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group bg-paper rounded-lg border border-warm-100 overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer p-5 font-body font-semibold text-sm text-charcoal hover:bg-warm-100/50 transition-colors">
                  {faq.q}
                  <svg
                    className="w-5 h-5 text-warm-300 shrink-0 ml-4 group-open:rotate-180 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-5 pb-5">
                  <p className="font-body text-sm text-warm-500 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-indigo-700 section-padding-tight">
        <div className="container-main text-center">
          <h2 className="font-display font-semibold text-h2 text-cream mb-4">
            Ready to become a Heart Partner?
          </h2>
          <p className="font-body text-lead text-cream/70 mb-8 max-w-xl mx-auto">
            One gift. Twenty ministries. Start making an eternal impact today.
          </p>
          <Button href="/give" variant="primary">
            Become a Heart Partner: $40/mo
          </Button>
        </div>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />
    </>
  );
}

function StepExpanded({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-6 md:gap-8">
      <div className="shrink-0">
        <div className="w-12 h-12 rounded-full bg-indigo-600 text-cream flex items-center justify-center font-display font-semibold text-lg">
          {number}
        </div>
      </div>
      <div>
        <h3 className="font-display font-semibold text-h3 text-indigo-700 mb-2">
          {title}
        </h3>
        <p className="font-body text-base text-warm-500 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
