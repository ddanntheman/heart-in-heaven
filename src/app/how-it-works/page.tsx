import { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { GivingPathSimulator } from "@/components/GivingPathSimulator";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "How Leveraged Giving Works",
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
    a: "Absolutely. You can adjust or cancel your recurring gift at any time by emailing info@heartinheaven.org. No questions asked.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept credit and debit cards, Apple Pay, Google Pay, PayPal, and ACH bank transfers. Monthly giving via ACH has the lowest processing fees, so more of your gift reaches the field.",
  },
];

const steps = [
  {
    number: 1,
    title: "Choose a monthly rhythm",
    desc: "Start with a recurring gift that fits your household. $40/mo is the benchmark for a full share across the partner network, but every gift is pooled for reach.",
    detail: "Donor action",
  },
  {
    number: 2,
    title: "Your gift joins the fund",
    desc: "Heart Partner gifts are gathered into one transparent monthly fund. The pool creates scale, consistency, and stronger support for vetted ministries.",
    detail: "Leverage point",
  },
  {
    number: 3,
    title: "20+ partners receive support",
    desc: "Funds move to education, meals, clean water, Bible translation, medical care, savings groups, orphan care, and relief for persecuted Christians.",
    detail: "Monthly impact",
  },
];

const vetting = [
  {
    title: "Financial transparency",
    desc: "Public financials, audited statements, clear reporting, and a track record of responsible stewardship.",
  },
  {
    title: "Demonstrated impact",
    desc: "Measured outcomes with field-level evidence. We look for organizations that can explain what a dollar does.",
  },
  {
    title: "Mission alignment",
    desc: "Christian relief and development that honors dignity, local leadership, and long-term transformation.",
  },
  {
    title: "On-the-ground presence",
    desc: "Local staff, community trust, and operational history. No paper charities.",
  },
  {
    title: "Annual review",
    desc: "Every partner is re-evaluated annually. If standards are not met, funds are redirected to partners who are delivering.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-night section-padding-tight">
        <div className="absolute inset-0 opacity-35">
          <Image
            src="/images/smartbox-laptops.jpg"
            alt="Laptops and SmartBox digital education tools charging in Liberia"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-night via-indigo-900/85 to-night/30" />
        <div className="relative container-main">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_420px] gap-10 items-end">
            <div className="max-w-3xl">
              <p className="font-body font-medium text-eyebrow tracking-[0.18em] uppercase text-gold-400 mb-3">
                How it works
              </p>
              <h1 className="font-display font-semibold text-display text-cream mb-5 text-balance">
                The mutual fund of Christian giving
              </h1>
              <p className="font-body text-lead text-cream/75">
                One gift is pooled, allocated, vetted, and sent across a broad
                family of ministries. The result is a simple giving experience
                with a wider impact footprint.
              </p>
            </div>
            <div className="rounded-[2rem] border border-cream/10 bg-cream/10 p-6 backdrop-blur-md">
              <p className="font-body text-xs uppercase tracking-[0.18em] text-gold-300 mb-5">
                Monthly flow
              </p>
              <div className="space-y-4">
                {steps.map((step) => (
                  <div key={step.title} className="flex items-center gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-400 font-display font-semibold text-charcoal">
                      {step.number}
                    </span>
                    <div>
                      <p className="font-body text-sm font-semibold text-cream">
                        {step.title}
                      </p>
                      <p className="font-body text-xs text-cream/55">
                        {step.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream section-padding">
        <div className="container-main">
          <SectionHeading
            eyebrow="Interactive model"
            title="See what your monthly gift can do"
            subtitle="Adjust the amount and watch how it flows through the Heart Partner model."
            align="center"
          />
          <GivingPathSimulator />
        </div>
      </section>

      <section className="bg-cream-2 section-padding">
        <div className="container-main">
          <SectionHeading
            eyebrow="Three simple steps"
            title="From your heart to the field"
            align="center"
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {steps.map((step) => (
              <article
                key={step.title}
                className="group relative overflow-hidden rounded-[2rem] border border-warm-100 bg-paper p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-indigo-50 transition-transform duration-300 group-hover:scale-125" />
                <p className="relative mb-10 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-600 font-display text-xl font-semibold text-cream">
                  {step.number}
                </p>
                <p className="font-body text-xs uppercase tracking-[0.18em] text-gold-500 mb-3">
                  {step.detail}
                </p>
                <h2 className="font-display font-semibold text-h3 text-indigo-700 mb-3">
                  {step.title}
                </h2>
                <p className="font-body text-sm leading-relaxed text-warm-500">
                  {step.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-8 items-stretch">
            <div className="rounded-[2rem] border border-warm-100 bg-paper p-6 md:p-8">
              <p className="font-body font-medium text-eyebrow tracking-[0.18em] uppercase text-warm-300 mb-4">
                Traditional giving
              </p>
              <h2 className="font-display text-h2 font-semibold text-warm-700 mb-6">
                One cause at a time
              </h2>
              <ul className="space-y-4 font-body text-sm text-warm-500">
                {[
                  "One gift to one organization",
                  "Research each charity individually",
                  "Limited diversification across urgent needs",
                  "Multiple receipts, updates, and logins",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-warm-300 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative overflow-hidden rounded-[2rem] bg-indigo-600 p-6 md:p-8 text-cream shadow-lg">
              <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-gold-400/20" />
              <p className="relative font-body font-medium text-eyebrow tracking-[0.18em] uppercase text-gold-300 mb-4">
                Leveraged giving
              </p>
              <h2 className="relative font-display text-h2 font-semibold mb-6">
                One gift reaches 20+ ministries
              </h2>
              <ul className="relative space-y-4 font-body text-sm text-cream/80">
                {[
                  "One monthly gift supports a broad ministry portfolio",
                  "Heart In Heaven handles partner vetting and annual review",
                  "Donors reach education, clean water, relief, Bible translation, and more",
                  "One receipt, one giving relationship, one clear model",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-gold-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream-2 section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-[360px_minmax(0,1fr)] gap-10 items-start">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                eyebrow="Accountability"
                title="How partners earn trust"
                subtitle="Vetting is not a one-time checkbox. It is the operating system behind the Heart Partner model."
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {vetting.map((item, index) => (
                <details
                  key={item.title}
                  className="group rounded-[1.5rem] border border-warm-100 bg-paper p-5 open:border-gold-300 open:shadow-md"
                  open={index === 0}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold text-indigo-700">
                    {item.title}
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-50 font-body text-sm text-indigo-600 transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 font-body text-sm leading-relaxed text-warm-500">
                    {item.desc}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream section-padding" id="faq">
        <div className="container-narrow">
          <SectionHeading eyebrow="FAQ" title="Common questions" align="center" />
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
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
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
