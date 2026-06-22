import { Metadata } from "next";
import Image from "next/image";
import { TrustStrip } from "@/components/TrustStrip";
import { DonationForm } from "./DonationForm";

export const metadata: Metadata = {
  title: "Donate | Give to 20+ Christian Nonprofits",
  description:
    "Give monthly or once. Your donation is split evenly across 20+ vetted Christian relief ministries serving vulnerable communities in Liberia and worldwide. 501(c)(3) tax deductible.",
  alternates: {
    canonical: "https://heartinheaven.org/give",
  },
};

export default function GivePage() {
  return (
    <section className="bg-cream min-h-screen">
      <div className="container-main py-12u md:py-16u">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left - Form */}
          <div>
            <h1 className="font-display font-semibold text-h1 text-indigo-700 mb-2">
              Your gift changes lives.
            </h1>
            <p className="font-body text-lead text-warm-500 mb-8">
              Choose your giving amount below. Every dollar is split evenly
              across 20+ vetted ministries.
            </p>
            <DonationForm />
          </div>

          {/* Right - Reinforcement */}
          <div className="hidden lg:block">
            <div className="sticky top-28">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-6">
                <Image
                  src="/images/give-recipient.jpg"
                  alt="A student at Champion Academy eating lunch, made possible by Heart Partners"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
              </div>
              <h3 className="font-display font-semibold text-lg text-indigo-700 mb-2">
                Where your gift goes this month
              </h3>
              <p className="font-body text-sm text-warm-500 leading-relaxed mb-6">
                Your monthly gift is pooled with thousands of other Heart
                Partners and distributed evenly to 20+ vetted Christian relief
                organizations. This month, your gift is helping feed students
                at Champion Academy in Liberia, train savings group
                facilitators, and support Bible translation worldwide.
              </p>
              <TrustStrip />
              <div className="mt-4">
                <a
                  href="/about#faq"
                  className="font-body text-sm text-indigo-600 hover:text-indigo-700 underline underline-offset-4"
                >
                  Questions? See our donor FAQ &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DonateAction",
            name: "Give to Heart In Heaven",
            recipient: {
              "@type": "NGO",
              name: "Heart In Heaven",
            },
            target: {
              "@type": "EntryPoint",
              urlTemplate: "https://heartinheaven.org/give",
            },
          }),
        }}
      />
    </section>
  );
}
