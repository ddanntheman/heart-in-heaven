"use client";

import { useState } from "react";

const amounts = [
  { value: 25, label: "$25", outcome: "One student fed for a school week." },
  {
    value: 40,
    label: "$40",
    outcome: "A full Heart Partner share funding all 20+ ministries.",
  },
  { value: 75, label: "$75", outcome: "A month of clean water for a family." },
  { value: 150, label: "$150", outcome: "A new savings group launch kit." },
];

export function DonationForm() {
  const [frequency, setFrequency] = useState<"monthly" | "once">("monthly");
  const [selectedAmount, setSelectedAmount] = useState(40);
  const [customAmount, setCustomAmount] = useState("");
  const [coverFees, setCoverFees] = useState(true);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const amount =
    selectedAmount === 0 ? parseFloat(customAmount) || 0 : selectedAmount;
  const buttonLabel =
    frequency === "monthly"
      ? `Give $${amount}/mo`
      : `Give $${amount} today`;

  return (
    <form
      className="space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      {/* Frequency tabs */}
      <div className="flex rounded-lg overflow-hidden border border-warm-200">
        <button
          type="button"
          onClick={() => setFrequency("monthly")}
          className={`flex-1 py-3 font-body font-semibold text-sm text-center transition-colors ${
            frequency === "monthly"
              ? "bg-indigo-600 text-cream"
              : "bg-paper text-warm-500 hover:bg-warm-100"
          }`}
        >
          Monthly
        </button>
        <button
          type="button"
          onClick={() => setFrequency("once")}
          className={`flex-1 py-3 font-body font-semibold text-sm text-center transition-colors ${
            frequency === "once"
              ? "bg-indigo-600 text-cream"
              : "bg-paper text-warm-500 hover:bg-warm-100"
          }`}
        >
          One-Time
        </button>
      </div>

      {/* Amount selector */}
      <fieldset>
        <legend className="font-body font-semibold text-sm text-charcoal mb-3">
          Choose your gift
        </legend>
        <div className="grid grid-cols-2 gap-3">
          {amounts.map((amt) => (
            <button
              key={amt.value}
              type="button"
              onClick={() => {
                setSelectedAmount(amt.value);
                setCustomAmount("");
              }}
              className={`py-4 px-3 rounded-lg border-2 text-center transition-all ${
                selectedAmount === amt.value
                  ? "border-gold-400 bg-gold-50"
                  : "border-warm-200 bg-paper hover:border-warm-300"
              }`}
            >
              <span className="font-display font-semibold text-xl text-indigo-700 block">
                {amt.label}
              </span>
              <span className="font-body text-xs text-warm-500 mt-1 block">
                {amt.outcome}
              </span>
            </button>
          ))}
        </div>

        {/* Custom amount */}
        <div className="mt-3">
          <label
            htmlFor="custom-amount"
            className="font-body text-sm text-warm-500 block mb-1"
          >
            Other amount
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 font-body text-warm-300">
              $
            </span>
            <input
              id="custom-amount"
              type="number"
              min="1"
              step="1"
              placeholder="Enter amount"
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value);
                setSelectedAmount(0);
              }}
              onFocus={() => setSelectedAmount(0)}
              className="w-full pl-7 pr-4 py-3 bg-paper border border-warm-200 rounded-lg font-body text-sm text-charcoal placeholder:text-warm-300 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-400"
            />
          </div>
        </div>
      </fieldset>

      {/* Personal info */}
      <div className="space-y-4">
        <div>
          <label
            htmlFor="donor-email"
            className="font-body text-sm font-medium text-charcoal block mb-1"
          >
            Your email
          </label>
          <input
            id="donor-email"
            type="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 bg-paper border border-warm-200 rounded-lg font-body text-sm text-charcoal placeholder:text-warm-300 focus:outline-none focus:ring-2 focus:ring-gold-400"
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label
              htmlFor="donor-first"
              className="font-body text-sm font-medium text-charcoal block mb-1"
            >
              First name
            </label>
            <input
              id="donor-first"
              type="text"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-4 py-3 bg-paper border border-warm-200 rounded-lg font-body text-sm text-charcoal placeholder:text-warm-300 focus:outline-none focus:ring-2 focus:ring-gold-400"
            />
          </div>
          <div>
            <label
              htmlFor="donor-last"
              className="font-body text-sm font-medium text-charcoal block mb-1"
            >
              Last name
            </label>
            <input
              id="donor-last"
              type="text"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-4 py-3 bg-paper border border-warm-200 rounded-lg font-body text-sm text-charcoal placeholder:text-warm-300 focus:outline-none focus:ring-2 focus:ring-gold-400"
            />
          </div>
        </div>
      </div>

      {/* Payment placeholder */}
      <div className="p-4 bg-paper border border-warm-200 rounded-lg">
        <p className="font-body text-sm text-warm-500 text-center">
          Payment integration (Stripe) will be connected here.
          <br />
          Supports Card, Apple Pay, Google Pay, PayPal, and ACH.
        </p>
      </div>

      {/* Cover fees */}
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={coverFees}
          onChange={(e) => setCoverFees(e.target.checked)}
          className="mt-1 w-4 h-4 rounded border-warm-300 text-gold-400 focus:ring-gold-400"
        />
        <span className="font-body text-sm text-warm-500">
          I&rsquo;ll cover the processing fee so 100% goes to programs
        </span>
      </label>

      {/* Submit */}
      <button
        type="submit"
        disabled={amount <= 0}
        className="w-full py-4 bg-gold-400 text-charcoal font-body font-bold text-base rounded-lg hover:bg-gold-500 hover:scale-[1.01] transition-all duration-100 disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {amount > 0 ? buttonLabel : "Pick or enter a gift amount to continue"}
      </button>

      <p className="font-body text-xs text-warm-300 text-center">
        Heart In Heaven is a 501(c)(3) nonprofit, EIN 87-4020929. Your gift is
        tax-deductible.
      </p>
    </form>
  );
}
