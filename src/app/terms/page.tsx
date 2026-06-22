import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for donating to and interacting with Heart In Heaven.",
};

export default function TermsPage() {
  return (
    <div className="bg-cream min-h-screen py-16u md:py-20">
      <div className="container-narrow">
        <h1 className="font-display font-semibold text-h1 text-indigo-700 mb-8">
          Terms of Service
        </h1>
        <div className="prose-custom space-y-6 font-body text-base text-warm-700 leading-relaxed">
          <p>
            Last updated: June 22, 2026
          </p>
          <p>
            Please read these Terms of Service (&ldquo;Terms&rdquo;) carefully before using the heartinheaven.org website (the &ldquo;Service&rdquo;) operated by Heart In Heaven (&ldquo;us,&rdquo; &ldquo;we,&rdquo; or &ldquo;our&rdquo;).
          </p>
          
          <h2 className="font-display font-semibold text-xl text-indigo-700 mt-8 mb-4">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
          </p>

          <h2 className="font-display font-semibold text-xl text-indigo-700 mt-8 mb-4">
            2. Donations
          </h2>
          <p>
            All donations made through the Service are voluntary and non-refundable. Heart In Heaven is a registered 501(c)(3) nonprofit organization. Donations are tax-deductible to the extent permitted by law in the United States.
          </p>
          <p>
            Heart In Heaven retains full discretion and control over the use of all donated funds to ensure they are used in furtherance of our mission and in compliance with IRS regulations.
          </p>

          <h2 className="font-display font-semibold text-xl text-indigo-700 mt-8 mb-4">
            3. Use of Content
          </h2>
          <p>
            The Service and its original content, features, and functionality are and will remain the exclusive property of Heart In Heaven and its licensors. Our trademarks and brand elements may not be used in connection with any product or service without our prior written consent.
          </p>

          <h2 className="font-display font-semibold text-xl text-indigo-700 mt-8 mb-4">
            4. External Links
          </h2>
          <p>
            Our Service may contain links to third-party web sites or services that are not owned or controlled by Heart In Heaven. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party sites or services.
          </p>

          <h2 className="font-display font-semibold text-xl text-indigo-700 mt-8 mb-4">
            5. Limitation of Liability
          </h2>
          <p>
            In no event shall Heart In Heaven, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
          </p>

          <h2 className="font-display font-semibold text-xl text-indigo-700 mt-8 mb-4">
            6. Changes
          </h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any material changes by posting the new Terms on this page.
          </p>

          <h2 className="font-display font-semibold text-xl text-indigo-700 mt-8 mb-4">
            7. Contact Us
          </h2>
          <p>
            If you have any questions about these Terms, please contact us at info@heartinheaven.org.
          </p>
        </div>
      </div>
    </div>
  );
}
