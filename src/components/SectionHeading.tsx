interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  dark = false,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`max-w-2xl mb-10 md:mb-14 ${alignment}`}>
      {eyebrow && (
        <p
          className={`font-body font-medium text-eyebrow tracking-[0.18em] uppercase mb-3 ${
            dark ? "text-gold-400" : "text-gold-500"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display font-semibold text-h2 tracking-tight ${
          dark ? "text-cream" : "text-indigo-700"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`font-body text-lead mt-4 ${
            dark ? "text-cream/70" : "text-warm-500"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
