import Link from "next/link";
import { services } from "@/data/content";
import { Logo } from "./Logo";
import { MailIcon, PhoneIcon } from "./Icons";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-arc" aria-hidden="true" />
      <div className="wrap footer-grid">
        <div className="footer-brand"><Logo inverse /><p>Tennis & padel detachering binnen Midden-Limburg.</p><div className="socials"><a href="https://www.instagram.com/tmltennis/" target="_blank" rel="noreferrer">Instagram</a><a href="https://www.facebook.com/TMLtennismanagement" target="_blank" rel="noreferrer">Facebook</a></div></div>
        <div><h2>Contact</h2><a href="tel:0630193066"><PhoneIcon />06-30193066 <span>Yannick</span></a><a href="tel:0627618190"><PhoneIcon />06-27618190 <span>Bianca</span></a><a href="mailto:tm.limburg@gmail.com"><MailIcon />tm.limburg@gmail.com</a></div>
        <div><h2>Diensten</h2>{services.slice(0, 5).map(s => <Link href={`/diensten/${s.slug}`} key={s.slug}>{s.title}</Link>)}</div>
        <div><h2>TML</h2><Link href="/over-tml">Over ons</Link><Link href="/verenigingen">Verenigingen</Link><Link href="/tenniskamp-2026">Tenniskamp 2026</Link><Link href="/actueel">Actueel</Link><Link href="/werken-bij-tml">Werken bij TML</Link><Link href="/contact">Contact</Link></div>
      </div>
      <div className="wrap footer-bottom"><span>© {new Date().getFullYear()} Tennis Management Limburg</span><div><Link href="/privacyverklaring">Privacy</Link><Link href="/disclaimer">Disclaimer</Link></div></div>
    </footer>
  );
}
