export function TrustStrip() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 py-4 md:py-6 border-t border-warm-200">
      <TrustBadge label="501(c)(3) Nonprofit" />
      <span className="hidden md:block w-px h-4 bg-warm-200" aria-hidden="true" />
      <TrustBadge label="Candid Seal of Transparency" />
      <span className="hidden md:block w-px h-4 bg-warm-200" aria-hidden="true" />
      <TrustBadge label="100% of public donations go to programs" />
    </div>
  );
}

function TrustBadge({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        className="text-success shrink-0"
        aria-hidden="true"
      >
        <path
          d="M8 1l2 2.5h3l-.5 3L15 8l-2.5 1.5.5 3h-3L8 15l-2-2.5H3l.5-3L1 8l2.5-1.5L3 3.5h3L8 1z"
          fill="currentColor"
        />
        <path
          d="M6 8l1.5 1.5L11 6"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="font-body text-small text-warm-500">{label}</span>
    </div>
  );
}
