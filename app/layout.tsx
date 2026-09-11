import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tm-limburg.nl"),
  title: { default: "TML — Tennis & padel in beweging", template: "%s | TML" },
  description: "Tennis Management Limburg ondersteunt verenigingen met gekwalificeerde tennis- en padeltrainers, advies en sportieve activiteiten.",
  openGraph: { title: "Tennis Management Limburg", description: "Tennis & padel detachering binnen Midden-Limburg", locale: "nl_NL", type: "website", images: ["/images/tml/hero.webp"] },
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="nl"><body><a className="skip-link" href="#main">Direct naar inhoud</a><Header /><main id="main" tabIndex={-1}>{children}</main><Footer /></body></html>;
}
