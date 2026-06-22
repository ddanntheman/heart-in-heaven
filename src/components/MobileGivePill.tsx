"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function MobileGivePill() {
  const pathname = usePathname();

  if (pathname === "/give") return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 sm:hidden">
      <Link
        href="/give"
        className="flex items-center justify-center w-full py-3.5 bg-gold-400 text-charcoal font-body font-semibold text-base rounded-pill shadow-lg hover:bg-gold-500 transition-colors"
      >
        Become a Heart Partner: $40/mo
      </Link>
    </div>
  );
}
