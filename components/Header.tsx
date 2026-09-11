"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Arrow, MenuIcon } from "./Icons";

const links = [
  ["Over TML", "/over-tml"],
  ["Diensten", "/onze-diensten"],
  ["Verenigingen", "/verenigingen"],
  ["Tenniskamp 2026", "/tenniskamp-2026"],
  ["Actueel", "/actueel"],
  ["Werken bij", "/werken-bij-tml"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = previous; window.removeEventListener("keydown", onKey); };
  }, [open]);

  return (
    <header className={`site-header ${scrolled || pathname !== "/" ? "is-scrolled" : ""}`}>
      <div className="header-inner">
        <Logo inverse={!scrolled && pathname === "/"} />
        <nav id="main-navigation" className={`main-nav ${open ? "is-open" : ""}`} aria-label="Hoofdnavigatie">
          {links.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)} className={pathname.startsWith(href) ? "active" : ""}>{label}</Link>
          ))}
          <Link className="nav-cta" href="/contact" onClick={() => setOpen(false)}>Neem contact op <Arrow /></Link>
        </nav>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-navigation" aria-label={open ? "Menu sluiten" : "Menu openen"}>
          <MenuIcon open={open} />
        </button>
      </div>
    </header>
  );
}
