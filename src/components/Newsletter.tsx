"use client";

interface NewsletterProps {
  variant?: "inline" | "card";
  dark?: boolean;
}

export function Newsletter({ variant = "inline", dark = false }: NewsletterProps) {
  if (variant === "card") {
    return (
      <div
        className={`rounded-xl p-8 md:p-10 ${
          dark ? "bg-indigo-700" : "bg-cream-2"
        }`}
      >
        <h3
          className={`font-display font-semibold text-h3 mb-2 ${
            dark ? "text-cream" : "text-indigo-700"
          }`}
        >
          Get the Impact Report
        </h3>
        <p
          className={`font-body text-sm mb-5 ${
            dark ? "text-cream/70" : "text-warm-500"
          }`}
        >
          Monthly stories of impact, partner updates, and ways to pray.
        </p>
        <EmailForm dark={dark} />
      </div>
    );
  }

  return (
    <div className="py-6 border-y border-warm-200 my-10">
      <p className="font-display font-semibold text-lg text-indigo-700 mb-3">
        Subscribe for stories like this
      </p>
      <EmailForm dark={false} />
    </div>
  );
}

function EmailForm({ dark }: { dark: boolean }) {
  return (
    <form
      className="flex flex-col sm:flex-row gap-3"
      onSubmit={(e) => e.preventDefault()}
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        placeholder="Your email"
        required
        className={`flex-1 px-4 py-2.5 rounded-md text-sm font-body focus:outline-none focus:ring-2 focus:ring-gold-400 ${
          dark
            ? "bg-indigo-800 border border-indigo-500 text-cream placeholder:text-cream/40"
            : "bg-paper border border-warm-200 text-charcoal placeholder:text-warm-300"
        }`}
      />
      <button
        type="submit"
        className="px-5 py-2.5 bg-gold-400 text-charcoal font-body font-semibold text-sm rounded-md hover:bg-gold-500 transition-colors shrink-0"
      >
        Get the Impact Report
      </button>
    </form>
  );
}
