import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Heart In Heaven's privacy policy and data protection practices.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-cream min-h-screen py-16u md:py-20">
      <div className="container-narrow">
        <h1 className="font-display font-semibold text-h1 text-indigo-700 mb-8">
          Privacy Policy
        </h1>
        <div className="prose-custom space-y-6 font-body text-base text-warm-700 leading-relaxed">
          <p>
            Last updated: June 22, 2026
          </p>
          <p>
            Heart In Heaven (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website heartinheaven.org or make a donation.
          </p>
          
          <h2 className="font-display font-semibold text-xl text-indigo-700 mt-8 mb-4">
            1. Information We Collect
          </h2>
          <p>
            We collect information you provide directly to us when you make a donation, sign up for our newsletter, or contact us. This may include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Name and contact information (email, phone number, address)</li>
            <li>Payment information (processed securely through our third-party payment processors)</li>
            <li>Communication preferences</li>
          </ul>

          <h2 className="font-display font-semibold text-xl text-indigo-700 mt-8 mb-4">
            2. How We Use Your Information
          </h2>
          <p>
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Process and acknowledge your donations</li>
            <li>Send tax receipts and impact reports</li>
            <li>Respond to your inquiries</li>
            <li>Improve our website and services</li>
            <li>Comply with legal and regulatory requirements</li>
          </ul>

          <h2 className="font-display font-semibold text-xl text-indigo-700 mt-8 mb-4">
            3. Data Sharing
          </h2>
          <p>
            We do not sell, rent, or trade your personal information. We may share your information with trusted third-party service providers who assist us in operating our website and conducting our mission, such as payment processors and email service providers, provided those parties agree to keep this information confidential.
          </p>

          <h2 className="font-display font-semibold text-xl text-indigo-700 mt-8 mb-4">
            4. Security
          </h2>
          <p>
            We implement a variety of security measures to maintain the safety of your personal information. Your personal data is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems.
          </p>

          <h2 className="font-display font-semibold text-xl text-indigo-700 mt-8 mb-4">
            5. Your Rights
          </h2>
          <p>
            You may opt out of receiving future communications from us at any time. You may also request to review, update, or delete your personal information by contacting us at info@heartinheaven.org.
          </p>

          <h2 className="font-display font-semibold text-xl text-indigo-700 mt-8 mb-4">
            6. Contact Us
          </h2>
          <p>
            If you have any questions regarding this privacy policy, you may contact us using the information below:
          </p>
          <p>
            Heart In Heaven<br />
            P.O. Box 86624, Vint Hill Farms, VA 20187<br />
            info@heartinheaven.org
          </p>
        </div>
      </div>
    </div>
  );
}
