"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/Button";

const suggestedAmounts = [25, 40, 75, 150];
const impactChannels = [
  { label: "Programs", value: 92, color: "bg-gold-400" },
  { label: "Admin", value: 5, color: "bg-indigo-300" },
  { label: "Fundraising", value: 3, color: "bg-coral-300" },
];

export function GivingPathSimulator() {
  const [amount, setAmount] = useState(40);

  const impact = useMemo(() => {
    const programs = amount * 0.92;
    return {
      monthlyPrograms: programs,
      annualPrograms: programs * 12,
      monthlyPerPartner: programs / 20,
      annualGift: amount * 12,
    };
  }, [amount]);

  return (
    <div className="rounded-[2rem] border border-warm-100 bg-paper p-5 md:p-7 shadow-lg shadow-warm-700/5">
      <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_320px] gap-8">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-5">
            {suggestedAmounts.map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setAmount(value)}
                className={`rounded-pill px-4 py-2 font-body text-sm font-semibold transition-colors ${
                  amount === value
                    ? "bg-indigo-600 text-cream"
                    : "bg-cream border border-warm-100 text-warm-500 hover:border-gold-300"
                }`}
              >
                ${value}/mo
              </button>
            ))}
          </div>
          <label className="block font-body text-sm font-semibold text-charcoal mb-3" htmlFor="how-it-works-amount">
            Explore a monthly gift
          </label>
          <input
            id="how-it-works-amount"
            type="range"
            min="10"
            max="250"
            step="5"
            value={amount}
            onChange={(event) => setAmount(Number(event.target.value))}
            className="w-full accent-gold-400"
          />
          <div className="mt-6 overflow-hidden rounded-2xl bg-cream">
            <div className="flex h-4 w-full">
              {impactChannels.map((channel) => (
                <div
                  key={channel.label}
                  className={channel.color}
                  style={{ width: `${channel.value}%` }}
                />
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-warm-100">
              {impactChannels.map((channel) => (
                <div key={channel.label} className="p-4">
                  <p className="font-display font-semibold text-2xl text-indigo-700">
                    {channel.value}%
                  </p>
                  <p className="font-body text-xs uppercase tracking-[0.16em] text-warm-300">
                    {channel.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="rounded-[1.5rem] bg-indigo-600 p-5 text-cream">
          <p className="font-body text-xs uppercase tracking-[0.18em] text-gold-300 mb-4">
            Live estimate
          </p>
          <p className="font-display text-5xl font-semibold mb-2">${amount}</p>
          <p className="font-body text-sm text-cream/65 mb-6">per month</p>
          <div className="space-y-3 font-body text-sm">
            <div className="flex justify-between gap-4 border-b border-cream/10 pb-3">
              <span className="text-cream/65">Annual giving</span>
              <span className="font-semibold">${impact.annualGift.toFixed(0)}</span>
            </div>
            <div className="flex justify-between gap-4 border-b border-cream/10 pb-3">
              <span className="text-cream/65">Annual programs</span>
              <span className="font-semibold">${impact.annualPrograms.toFixed(0)}</span>
            </div>
            <div className="flex justify-between gap-4 border-b border-cream/10 pb-3">
              <span className="text-cream/65">Per partner monthly</span>
              <span className="font-semibold">${impact.monthlyPerPartner.toFixed(2)}</span>
            </div>
          </div>
          <Button href={`/give?amount=${amount}`} variant="primary" className="mt-6 w-full whitespace-normal text-center">
            Start with ${amount}/mo
          </Button>
        </div>
      </div>
    </div>
  );
}
