import Link from "next/link";
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost" | "light";

interface BaseProps {
  variant?: Variant;
  className?: string;
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };

type ButtonAsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-gold-400 text-charcoal border-gold-400 hover:bg-gold-500 hover:scale-[1.02]",
  secondary:
    "bg-transparent text-indigo-700 border-indigo-700 hover:bg-indigo-700 hover:text-cream",
  ghost:
    "bg-transparent text-indigo-700 border-transparent hover:text-indigo-600 underline-offset-4 hover:underline",
  light:
    "bg-transparent text-cream border-cream hover:bg-cream hover:text-indigo-700",
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 px-6 py-3 font-body font-semibold text-sm rounded-md border-[1.5px] transition-all duration-100 ease-out-custom whitespace-nowrap disabled:opacity-40 disabled:cursor-not-allowed";

export function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  const classes = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...rest } = props as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...rest} />
    );
  }

  return <button className={classes} {...(props as ButtonAsButton)} />;
}
