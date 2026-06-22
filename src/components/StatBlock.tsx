"use client";

import { useEffect, useRef, useState } from "react";

interface StatBlockProps {
  value: string;
  label: string;
  source?: string;
}

export function StatBlock({ value, label, source }: StatBlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const numericMatch = value.match(/^([\d.]+)(.*)$/);
  const numericPart = numericMatch ? parseFloat(numericMatch[1]) : null;
  const suffix = numericMatch ? numericMatch[2] : value;

  return (
    <div ref={ref} className="text-center">
      <p className="font-display font-semibold text-display text-indigo-700 tracking-tight">
        {numericPart !== null && isVisible ? (
          <CountUp target={numericPart} suffix={suffix} />
        ) : (
          value
        )}
      </p>
      <p className="font-body text-base text-warm-500 mt-2 max-w-[260px] mx-auto">
        {label}
      </p>
      {source && (
        <p className="font-body text-xs text-warm-300 mt-1">{source}</p>
      )}
    </div>
  );
}

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [current, setCurrent] = useState(0);
  const duration = 1500;
  const isDecimal = target % 1 !== 0;

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setCurrent(target);
      return;
    }

    let start: number | null = null;
    let frameId: number;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(eased * target);
      if (progress < 1) frameId = requestAnimationFrame(step);
    };
    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [target]);

  const formatted = isDecimal ? current.toFixed(1) : Math.round(current);

  return (
    <>
      {formatted}
      {suffix}
    </>
  );
}
