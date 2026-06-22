"use client";

import { Button } from "@/components/Button";

export function ContactForm() {
  return (
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label
          htmlFor="contact-name"
          className="font-body text-sm font-medium text-charcoal block mb-1"
        >
          Your name
        </label>
        <input
          id="contact-name"
          type="text"
          required
          className="w-full px-4 py-3 bg-paper border border-warm-200 rounded-lg font-body text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-gold-400"
        />
      </div>
      <div>
        <label
          htmlFor="contact-email"
          className="font-body text-sm font-medium text-charcoal block mb-1"
        >
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          required
          className="w-full px-4 py-3 bg-paper border border-warm-200 rounded-lg font-body text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-gold-400"
        />
      </div>
      <div>
        <label
          htmlFor="contact-message"
          className="font-body text-sm font-medium text-charcoal block mb-1"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          rows={4}
          required
          className="w-full px-4 py-3 bg-paper border border-warm-200 rounded-lg font-body text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-gold-400 resize-y"
        />
      </div>
      <Button type="submit" variant="primary">
        Send message
      </Button>
    </form>
  );
}
