"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Our Mission", href: "/our-mission" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Where We Work", href: "/launch-liberia" },
  { label: "Stories", href: "/stories" },
  { label: "About", href: "/about" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-shadow duration-200 ${
          isScrolled ? "shadow-sm" : ""
        } bg-cream/95 backdrop-blur-sm`}
      >
        <nav
          className="container-main flex items-center justify-between h-16 md:h-20"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-lg">
              <Image
                src="/logo.png"
                alt=""
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base md:text-lg text-indigo-700 tracking-tight leading-none uppercase">
                Heart In Heaven
              </span>
              <span className="font-body text-[10px] text-warm-500 uppercase tracking-[0.1em] mt-1 leading-none">
                Grateful Generosity
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`font-body text-sm font-medium transition-colors duration-100 hover:text-indigo-600 ${
                    pathname === item.href
                      ? "text-indigo-600"
                      : "text-warm-500"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Give button + mobile hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/give"
              className="hidden sm:inline-flex items-center px-5 py-2.5 bg-gold-400 text-charcoal font-body font-semibold text-sm rounded-md hover:bg-gold-500 hover:scale-[1.02] transition-all duration-100 ease-out-custom"
            >
              Give
            </Link>
            <button
              className="lg:hidden p-2 text-charcoal"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-expanded={isMobileOpen}
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            >
              {isMobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile overlay - rendered outside header to avoid backdrop-blur containing block */}
      {isMobileOpen && (
        <div className="fixed inset-0 top-16 bg-cream z-50 lg:hidden overflow-y-auto">
          <nav className="px-6 py-8" aria-label="Mobile navigation">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block py-4 font-display text-2xl font-semibold border-b border-warm-200 ${
                      pathname === item.href
                        ? "text-indigo-600"
                        : "text-charcoal"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/give"
                  className="block py-4 font-display text-2xl font-semibold text-gold-500 border-b border-warm-200"
                >
                  Give
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}

function MenuIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
