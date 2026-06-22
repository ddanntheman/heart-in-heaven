import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description: "Heart In Heaven's commitment to web accessibility.",
};

export default function AccessibilityPage() {
  return (
    <div className="bg-cream min-h-screen py-16u md:py-20">
      <div className="container-narrow">
        <h1 className="font-display font-semibold text-h1 text-indigo-700 mb-8">
          Accessibility Statement
        </h1>
        <div className="prose-custom space-y-6 font-body text-base text-warm-700 leading-relaxed">
          <p>
            Heart In Heaven is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
          </p>
          
          <h2 className="font-display font-semibold text-xl text-indigo-700 mt-8 mb-4">
            Conformance Status
          </h2>
          <p>
            The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA.
          </p>
          <p>
            Heart In Heaven is partially conformant with WCAG 2.1 level AA. Partially conformant means that some parts of the content do not fully conform to the accessibility standard.
          </p>

          <h2 className="font-display font-semibold text-xl text-indigo-700 mt-8 mb-4">
            Feedback
          </h2>
          <p>
            We welcome your feedback on the accessibility of Heart In Heaven. Please let us know if you encounter accessibility barriers:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Email: info@heartinheaven.org</li>
            <li>Phone: +1 (540) 316-0679</li>
            <li>Postal address: P.O. Box 86624, Vint Hill Farms, VA 20187</li>
          </ul>

          <h2 className="font-display font-semibold text-xl text-indigo-700 mt-8 mb-4">
            Technical Specifications
          </h2>
          <p>
            Accessibility of Heart In Heaven relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>HTML</li>
            <li>WAI-ARIA</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>

          <h2 className="font-display font-semibold text-xl text-indigo-700 mt-8 mb-4">
            Assessment Approach
          </h2>
          <p>
            Heart In Heaven assessed the accessibility of our website by the following approaches:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Self-evaluation</li>
          </ul>

          <h2 className="font-display font-semibold text-xl text-indigo-700 mt-8 mb-4">
            Date
          </h2>
          <p>
            This statement was created on June 22, 2026.
          </p>
        </div>
      </div>
    </div>
  );
}
