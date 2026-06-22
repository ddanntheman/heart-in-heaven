import { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About: Team, Partners, and Financials",
  description:
    "Meet founder Angelique C. McGlotten, explore 20+ vetted Christian relief partners, review financials, and read our donor FAQ. Heart In Heaven is a 501(c)(3) nonprofit.",
  alternates: {
    canonical: "https://heartinheaven.org/about",
  },
};

const partners = [
  { name: "Compassion International", desc: "Child sponsorship and development" },
  { name: "charity:water", desc: "Clean water solutions" },
  { name: "Samaritan's Purse", desc: "Emergency relief and community development" },
  { name: "Wycliffe Bible Translators", desc: "Bible translation worldwide" },
  { name: "Voice of the Martyrs", desc: "Support for persecuted Christians" },
  { name: "Food for the Hungry", desc: "Ending poverty together" },
  { name: "International Justice Mission", desc: "Justice for the oppressed" },
  { name: "Mercy Ships", desc: "Hospital ships providing free surgeries" },
  { name: "Water Mission", desc: "Safe water and the Living Water" },
  { name: "CURE International", desc: "Healing for children with disabilities" },
];

const faqs = [
  {
    q: "Is Heart In Heaven a legitimate 501(c)(3)?",
    a: "Yes. Heart In Heaven is a registered 501(c)(3) nonprofit organization with EIN 87-4020929. All donations are tax-deductible to the extent allowed by law.",
  },
  {
    q: "How is my money distributed?",
    a: "Your monthly gift is pooled with all Heart Partner gifts and distributed evenly across our 20+ vetted partner ministries. Each partner receives an equal share every month.",
  },
  {
    q: "Can I get a tax receipt?",
    a: "Yes. A tax receipt is sent to your email after every transaction. For year-end giving summaries, contact us at info@heartinheaven.org.",
  },
  {
    q: "How can I volunteer or get involved?",
    a: "We'd love to hear from you. Email us at info@heartinheaven.org with the subject line 'Get Involved' and we'll connect you with opportunities.",
  },
  {
    q: "Do you accept non-cash gifts?",
    a: "We are working on accepting stock transfers, DAF grants, and cryptocurrency. Contact us for details.",
  },
];

const trustMetrics = [
  ["501(c)(3)", "registered nonprofit"],
  ["87-4020929", "EIN"],
  ["20+", "vetted partners"],
  ["92%", "to programs"],
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-night section-padding-tight">
        <div className="absolute inset-0 opacity-35">
          <Image
            src="/images/liberia-team-group.jpg"
            alt="Heart In Heaven founder Angelique C. McGlotten with ministry partners in Liberia"
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
              About
            </p>
            <h1 className="font-display font-semibold text-display text-cream mb-5 text-balance">
              Built by conviction. Held accountable by trust.
            </h1>
            <p className="font-body text-lead text-cream/75">
              Heart In Heaven connects faithful donors with vetted ministries,
              locally-led Liberia programs, and transparent stewardship.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-night pb-12u">
        <div className="container-main">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 -mt-10 relative z-10">
            {trustMetrics.map(([value, label]) => (
              <div key={value} className="rounded-[1.5rem] border border-cream/10 bg-cream/10 p-5 text-cream backdrop-blur-md">
                <p className="font-display text-2xl md:text-3xl font-semibold">
                  {value}
                </p>
                <p className="font-body text-xs uppercase tracking-[0.16em] text-cream/55">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream section-padding" id="team">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 items-center">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-lg">
                <Image
                  src="/images/team-angelique.jpg"
                  alt="Angelique C. McGlotten, founder of Heart In Heaven"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 rounded-[1.5rem] bg-indigo-600 p-5 text-cream shadow-lg md:-right-8">
                <p className="font-body text-xs uppercase tracking-[0.18em] text-gold-300">
                  Founder
                </p>
                <p className="font-display text-xl font-semibold">
                  Angelique C. McGlotten
                </p>
              </div>
            </div>
            <div>
              <SectionHeading
                eyebrow="Founder story"
                title="A Liberia-born leader carrying a global giving vision"
              />
              <div className="space-y-5 font-body text-base leading-relaxed text-warm-500">
                <p>
                  Angelique C. McGlotten was born and raised in Liberia. After
                  emigrating to the United States following a coup, she carried
                  her home country with her for decades.
                </p>
                <p>
                  When she returned after thirty-three years, she saw children
                  facing barriers that could be changed with the right mix of
                  technology, food, local leadership, and faithful generosity.
                </p>
                <p>
                  Heart In Heaven now serves as both a Liberia-focused education
                  initiative and a leveraged giving platform for donors who want
                  one gift to reach many ministries.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button href="/our-mission" variant="secondary">
                  Read the mission
                </Button>
                <Button href="/launch-liberia" variant="ghost">
                  See Liberia work
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream-2 section-padding" id="partners">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-[360px_minmax(0,1fr)] gap-10 items-start">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                eyebrow="Our partners"
                title="A vetted portfolio of Christian relief ministries"
                subtitle="Heart Partners do not have to research every charity alone. We vet, review, and distribute through a diversified ministry network."
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {partners.map((partner) => (
                <article
                  key={partner.name}
                  className="group flex items-start gap-4 rounded-[1.5rem] border border-warm-100 bg-paper p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold-300 hover:shadow-md"
                >
                  <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center shrink-0 group-hover:bg-gold-400">
                    <span className="font-display font-semibold text-sm text-indigo-600 group-hover:text-charcoal">
                      {partner.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-body font-semibold text-sm text-charcoal">
                      {partner.name}
                    </h3>
                    <p className="font-body text-xs leading-relaxed text-warm-300">
                      {partner.desc}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream section-padding" id="financials">
        <div className="container-main">
          <div className="rounded-[2rem] bg-indigo-600 p-6 md:p-10 text-cream shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-10 items-center">
              <div>
                <p className="font-body font-medium text-eyebrow tracking-[0.18em] uppercase text-gold-300 mb-3">
                  Financials
                </p>
                <h2 className="font-display font-semibold text-h2 mb-4">
                  Transparency should be visual, simple, and verifiable.
                </h2>
                <p className="font-body text-sm leading-relaxed text-cream/70 mb-6">
                  Heart In Heaven publishes financials annually. Our target
                  allocation keeps the overwhelming majority of giving directed
                  to program work.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button href="#" variant="primary">
                    View Form 990
                  </Button>
                  <Button href="#" variant="light">
                    Annual report
                  </Button>
                </div>
              </div>
              <div className="rounded-[1.5rem] bg-cream/10 p-5">
                <div className="mb-5 flex h-5 overflow-hidden rounded-pill bg-night/20">
                  <div className="bg-gold-400" style={{ width: "92%" }} />
                  <div className="bg-indigo-300" style={{ width: "5%" }} />
                  <div className="bg-coral-300" style={{ width: "3%" }} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
                  {[
                    ["92%", "to programs"],
                    ["5%", "admin"],
                    ["3%", "fundraising"],
                  ].map(([value, label]) => (
                    <div key={value} className="rounded-2xl bg-night/25 p-5">
                      <p className="font-display font-semibold text-3xl">
                        {value}
                      </p>
                      <p className="font-body text-xs uppercase tracking-[0.16em] text-cream/55">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream-2 section-padding" id="faq">
        <div className="container-narrow">
          <SectionHeading eyebrow="FAQ" title="Frequently asked questions" align="center" />
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

      <section className="bg-cream section-padding" id="contact">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 max-w-5xl mx-auto">
            <div>
              <SectionHeading eyebrow="Contact" title="Get in touch" />
              <div className="space-y-5 font-body text-sm text-warm-500">
                <div>
                  <p className="font-semibold text-charcoal mb-1">Email</p>
                  <a href="mailto:info@heartinheaven.org" className="text-indigo-600 hover:text-indigo-700">
                    info@heartinheaven.org
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-charcoal mb-1">Phone</p>
                  <a href="tel:+15403160679" className="text-indigo-600 hover:text-indigo-700">
                    +1 (540) 316-0679
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-charcoal mb-1">Mailing address</p>
                  <p>
                    Heart In Heaven
                    <br />
                    P.O. Box 86624
                    <br />
                    Vint Hill Farms, VA 20187
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-[2rem] border border-warm-100 bg-paper p-6 md:p-8 shadow-sm">
              <h3 className="font-display font-semibold text-lg text-indigo-700 mb-4">
                Send a message
              </h3>
              <ContactForm />
            </div>
          </div>
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
