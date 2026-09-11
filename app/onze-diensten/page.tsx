import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Arrow } from "@/components/Icons";
import { services } from "@/data/content";

export const metadata = { title: "Onze diensten", description: "Ontdek alle diensten van Tennis Management Limburg voor tennis- en padelverenigingen." };

export default function ServicesPage() {
  return <><PageHero eyebrow="Onze diensten" title="Van baan tot bestuur." intro="TML werkt graag samen met uw vereniging. Dit is hoe we trainers, leden en bestuur vooruit helpen." image="/images/tml/management.webp" />
    <section className="content-section"><div className="wrap service-overview">{services.map((service, i) => <Link href={`/diensten/${service.slug}`} className="service-tile" key={service.slug}><span>0{i + 1} / DIENST</span><div><h2>{service.title}</h2><p>{service.intro}</p></div><span className="text-link">Ontdek deze dienst <Arrow /></span></Link>)}</div></section>
    <section className="cta-band"><div className="wrap"><h2>Uw vereniging samenwerken met TML?</h2><Link href="/contact" className="button button-dark">Plan een kennismaking <Arrow /></Link></div></section></>;
}
