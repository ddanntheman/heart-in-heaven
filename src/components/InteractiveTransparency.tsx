"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/Button";

const allocation = [
  {
    key: "programs",
    label: "Programs",
    percent: 92,
    color: "bg-indigo-600",
    textColor: "text-indigo-700",
    description: "Funds education, meals, clean water, medical care, Bible translation, and direct relief through trusted partners.",
  },
  {
    key: "admin",
    label: "Admin",
    percent: 5,
    color: "bg-gold-400",
    textColor: "text-gold-600",
    description: "Keeps operations lean, accountable, and ready to support donors and ministry partners.",
  },
  {
    key: "fundraising",
    label: "Fundraising",
    percent: 3,
    color: "bg-warm-300",
    textColor: "text-warm-500",
    description: "Helps more givers discover leveraged giving and join the monthly Heart Partner community.",
  },
];

const partnerMinistries = [
  { name: "Compassion", focus: "Child development", region: "Global" },
  { name: "charity:water", focus: "Clean water", region: "Global" },
  { name: "Samaritan's Purse", focus: "Crisis relief", region: "Global" },
  { name: "Wycliffe", focus: "Bible translation", region: "Global" },
  { name: "Voice of the Martyrs", focus: "Persecuted church", region: "Global" },
  { name: "Gospel for Asia", focus: "Local ministry", region: "Asia" },
  { name: "Food for the Hungry", focus: "Food security", region: "Global" },
  { name: "World Relief", focus: "Church-led relief", region: "Global" },
  { name: "International Justice Mission", focus: "Justice", region: "Global" },
  { name: "Mercy Ships", focus: "Surgery", region: "Africa" },
  { name: "CURE International", focus: "Medical care", region: "Global" },
  { name: "Water Mission", focus: "Safe water", region: "Global" },
  { name: "Bible League", focus: "Scripture access", region: "Global" },
  { name: "HCJB Global", focus: "Media and health", region: "Global" },
  { name: "Ethnos360", focus: "Missions", region: "Global" },
  { name: "ReachGlobal", focus: "Church planting", region: "Global" },
  { name: "SIM", focus: "Mission teams", region: "Global" },
  { name: "TEAM", focus: "Church ministry", region: "Global" },
  { name: "Pioneers", focus: "Unreached people", region: "Global" },
  { name: "Medical Teams", focus: "Health care", region: "Global" },
];

const giftOptions = [40, 100, 250];

export function InteractiveTransparency() {
  const [giftAmount, setGiftAmount] = useState(40);
  const [activeAllocation, setActiveAllocation] = useState(allocation[0]);
  const [activePartner, setActivePartner] = useState(partnerMinistries[0]);

  const monthly = useMemo(() => {
    const programs = giftAmount * 0.92;
    return {
      programs,
      admin: giftAmount * 0.05,
      fundraising: giftAmount * 0.03,
      partnerShare: programs / partnerMinistries.length,
      annualPrograms: programs * 12,
    };
  }, [giftAmount]);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-stretch">
      <div className="rounded-[2rem] bg-indigo-700 text-cream p-6 md:p-8 shadow-xl shadow-indigo-900/10 overflow-hidden relative">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold-400 via-cream to-gold-400" />
        <p className="font-body font-medium text-eyebrow tracking-[0.18em] uppercase text-gold-400 mb-3">
          Interactive giving path
        </p>
        <h3 className="font-display font-semibold text-3xl md:text-4xl tracking-tight mb-4">
          Pick a monthly gift and watch it move.
        </h3>
        <p className="font-body text-cream/75 mb-8 max-w-xl">
          This is the difference between a static finance chart and an accountable giving engine: every gift is split, tracked, and sent to vetted work.
        </p>

        <div className="flex flex-wrap gap-3 mb-8" aria-label="Choose monthly gift amount">
          {giftOptions.map((amount) => (
            <button
              key={amount}
              type="button"
              onClick={() => setGiftAmount(amount)}
              className={`rounded-pill px-5 py-3 font-body font-semibold transition-all ${
                giftAmount === amount
                  ? "bg-gold-400 text-charcoal shadow-lg shadow-gold-800/20"
                  : "bg-cream/10 text-cream hover:bg-cream/20"
              }`}
            >
              ${amount}/mo
            </button>
          ))}
        </div>

        <label htmlFor="gift-slider" className="font-body text-sm text-cream/70">
          Or adjust the gift amount: ${giftAmount}/mo
        </label>
        <input
          id="gift-slider"
          type="range"
          min="20"
          max="500"
          step="10"
          value={giftAmount}
          onChange={(event) => setGiftAmount(Number(event.target.value))}
          className="w-full accent-gold-400 mt-3 mb-8"
        />

        <div className="rounded-2xl bg-cream/10 p-4 md:p-5 mb-6">
          <div className="h-5 rounded-full overflow-hidden flex bg-cream/10" aria-label="Gift allocation">
            {allocation.map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => setActiveAllocation(item)}
                style={{ width: `${item.percent}%` }}
                className={`${item.color} h-full transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-cream focus:ring-offset-2 focus:ring-offset-indigo-700`}
                aria-label={`${item.label} ${item.percent}%`}
              />
            ))}
          </div>
          <div className="grid grid-cols-3 gap-3 mt-5">
            {allocation.map((item) => {
              const value = item.key === "programs" ? monthly.programs : item.key === "admin" ? monthly.admin : monthly.fundraising;
              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setActiveAllocation(item)}
                  className={`text-left rounded-xl p-3 transition-all ${
                    activeAllocation.key === item.key ? "bg-cream text-indigo-700" : "bg-cream/5 text-cream/75 hover:bg-cream/10"
                  }`}
                >
                  <span className="font-body text-xs uppercase tracking-[0.12em] block mb-1">
                    {item.label}
                  </span>
                  <span className="font-display font-semibold text-2xl">
                    ${value.toFixed(2)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="rounded-2xl bg-cream text-indigo-700 p-5">
          <p className={`font-display font-semibold text-3xl ${activeAllocation.textColor}`}>
            {activeAllocation.percent}% to {activeAllocation.label.toLowerCase()}
          </p>
          <p className="font-body text-warm-500 mt-2">
            {activeAllocation.description}
          </p>
        </div>
      </div>

      <div className="rounded-[2rem] bg-paper border border-warm-100 p-6 md:p-8 shadow-xl shadow-warm-700/5 min-w-0 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto] gap-6 lg:items-end mb-8 min-w-0">
          <div className="min-w-0">
            <p className="font-body font-medium text-eyebrow tracking-[0.18em] uppercase text-gold-500 mb-3">
              Partner map
            </p>
            <h3 className="font-display font-semibold text-3xl md:text-4xl text-indigo-700 tracking-tight">
              One monthly gift reaches many mission fronts.
            </h3>
          </div>
          <div className="rounded-2xl bg-cream px-5 py-4 lg:min-w-44">
            <p className="font-body text-xs uppercase tracking-[0.14em] text-warm-300 mb-1">
              Equal share
            </p>
            <p className="font-display font-semibold text-3xl text-indigo-700">
              ${monthly.partnerShare.toFixed(2)}
            </p>
            <p className="font-body text-xs text-warm-500">per partner each month</p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3 mb-6">
          {partnerMinistries.map((partner) => (
            <button
              key={partner.name}
              type="button"
              onMouseEnter={() => setActivePartner(partner)}
              onFocus={() => setActivePartner(partner)}
              onClick={() => setActivePartner(partner)}
              className={`min-h-28 min-w-0 overflow-hidden rounded-2xl border p-3.5 text-left transition-all duration-200 ${
                activePartner.name === partner.name
                  ? "border-gold-400 bg-gold-50 shadow-md -translate-y-1"
                  : "border-warm-100 bg-white hover:border-gold-200 hover:-translate-y-0.5"
              }`}
            >
              <span className="block max-w-full font-body text-[0.82rem] font-semibold leading-[1.15] text-indigo-700 [overflow-wrap:anywhere] hyphens-auto">
                {partner.name}
              </span>
              <span className="mt-2 block max-w-full font-body text-[0.72rem] leading-snug text-warm-300 [overflow-wrap:anywhere] hyphens-auto">
                {partner.focus}
              </span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_auto] gap-6 items-center rounded-2xl bg-cream p-5 md:p-6 min-w-0 overflow-hidden">
          <div className="min-w-0">
            <p className="font-body text-xs uppercase tracking-[0.14em] text-gold-500 mb-2">
              Active partner
            </p>
            <p className="font-display font-semibold text-2xl text-indigo-700">
              {activePartner.name}
            </p>
            <p className="font-body text-warm-500 mt-1 break-words">
              Focus: {activePartner.focus}. Region: {activePartner.region}. Estimated monthly share from your gift: ${monthly.partnerShare.toFixed(2)}.
            </p>
          </div>
          <div className="flex flex-col gap-3 w-full xl:w-48">
            <Button href="/about#financials" variant="ghost" className="w-full whitespace-normal text-center">
              Latest 990 &rarr;
            </Button>
            <Button href="/how-it-works" variant="secondary" className="w-full whitespace-normal text-center">
              Vetting process
            </Button>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
          <Metric value={`$${monthly.programs.toFixed(0)}`} label="to programs monthly" />
          <Metric value={`$${monthly.annualPrograms.toFixed(0)}`} label="to programs yearly" />
          <Metric value="20+" label="vetted partners" />
        </div>
      </div>
    </div>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl bg-white border border-warm-100 p-4">
      <p className="font-display font-semibold text-2xl text-indigo-700">{value}</p>
      <p className="font-body text-xs text-warm-500 mt-1">{label}</p>
    </div>
  );
}
