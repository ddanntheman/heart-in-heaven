import { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the Heart In Heaven team, our partner ministries, view financials, read our FAQ, and get in touch.",
};

const team = [
  {
    name: "Angelique C. McGlotten",
    role: "Founder & Executive Director",
    bio: "Born and raised in Liberia, Angelique emigrated to the United States following a coup — but Liberia has always been home. After returning thirty-three years later, she founded Heart In Heaven with a singular conviction: every child in Liberia deserves access to quality education.",
    image: "/images/team-angelique.jpg",
  },
];

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
    a: "Yes. A tax receipt is sent to your email after every transaction. For year-end giving summaries, contact us at hello@heartinheaven.org.",
  },
  {
    q: "How can I volunteer or get involved?",
    a: "We'd love to hear from you. Email us at hello@heartinheaven.org with the subject line 'Get Involved' and we'll connect you with opportunities.",
  },
  {
    q: "Do you accept non-cash gifts?",
    a: "We are working on accepting stock transfers, DAF grants, and cryptocurrency. Contact us for details.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-indigo-600 section-padding-tight">
        <div className="container-main">
          <div className="max-w-2xl">
            <p className="font-body font-medium text-eyebrow tracking-[0.18em] uppercase text-gold-400 mb-3">
              About
            </p>
            <h1 className="font-display font-semibold text-h1 text-cream mb-4">
              About Heart In Heaven
            </h1>
            <p className="font-body text-lead text-cream/70">
              Meet our team, explore our partners, review our financials, and
              get in touch.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-cream section-padding" id="team">
        <div className="container-main">
          <SectionHeading eyebrow="Our team" title="The people behind the mission" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl">
            {team.map((person) => (
              <div
                key={person.name}
                className="bg-paper rounded-xl border border-warm-100 overflow-hidden"
              >
                <div className="relative aspect-[4/3] bg-indigo-50">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-base text-indigo-700">
                    {person.name}
                  </h3>
                  <p className="font-body text-xs text-gold-500 uppercase tracking-wider mb-2">
                    {person.role}
                  </p>
                  <p className="font-body text-sm text-warm-500">{person.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-cream-2 section-padding" id="partners">
        <div className="container-main">
          <SectionHeading
            eyebrow="Our partners"
            title="20+ vetted Christian relief ministries"
            subtitle="Every partner undergoes annual review for financial transparency, demonstrated impact, and mission alignment."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex items-start gap-3 bg-paper rounded-lg border border-warm-100 p-4"
              >
                <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center shrink-0">
                  <span className="font-display font-semibold text-sm text-indigo-600">
                    {partner.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="font-body font-semibold text-sm text-charcoal">
                    {partner.name}
                  </h3>
                  <p className="font-body text-xs text-warm-300">{partner.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financials */}
      <section className="bg-cream section-padding" id="financials">
        <div className="container-narrow">
          <SectionHeading
            eyebrow="Financials"
            title="Full transparency"
            align="center"
          />
          <div className="bg-paper rounded-xl border border-warm-100 p-8 text-center">
            <p className="font-body text-base text-warm-500 mb-6">
              Heart In Heaven publishes audited financials annually. Our most
              recent Form 990 and annual report are available below.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                href="#"
                variant="secondary"
              >
                View Form 990 (PDF)
              </Button>
              <Button
                href="#"
                variant="secondary"
              >
                Annual Report 2025
              </Button>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div>
                <p className="font-display font-semibold text-2xl text-indigo-700">
                  92%
                </p>
                <p className="font-body text-xs text-warm-500">to programs</p>
              </div>
              <div>
                <p className="font-display font-semibold text-2xl text-indigo-700">
                  5%
                </p>
                <p className="font-body text-xs text-warm-500">admin</p>
              </div>
              <div>
                <p className="font-display font-semibold text-2xl text-indigo-700">
                  3%
                </p>
                <p className="font-body text-xs text-warm-500">fundraising</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
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

      {/* Contact */}
      <section className="bg-cream section-padding" id="contact">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl">
            <div>
              <SectionHeading eyebrow="Contact" title="Get in touch" />
              <div className="space-y-4 font-body text-sm text-warm-500">
                <div>
                  <p className="font-semibold text-charcoal mb-1">Email</p>
                  <a
                    href="mailto:info@heartinheaven.org"
                    className="text-indigo-600 hover:text-indigo-700"
                  >
                    info@heartinheaven.org
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-charcoal mb-1">Phone</p>
                  <a
                    href="tel:+15403160679"
                    className="text-indigo-600 hover:text-indigo-700"
                  >
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
            <div>
              <h3 className="font-display font-semibold text-lg text-indigo-700 mb-4">
                Send a message
              </h3>
              <ContactForm />
            </div>
          </div>
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
