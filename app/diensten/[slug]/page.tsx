import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { services } from "@/data/content";

export function generateStaticParams() { return services.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const service = services.find(s => s.slug === slug); return service ? { title: service.title, description: service.intro } : {}; }

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find(s => s.slug === slug);
  if (!service) notFound();
  return <><PageHero eyebrow="Onze diensten" title={service.title} intro={service.eyebrow} image={service.image} />
    <section className="content-section white"><div className="wrap service-detail-grid"><Reveal><div className="prose"><p className="eyebrow">Wat we doen</p><h2>{service.intro}</h2>{service.body.map(p => <p key={p}>{p}</p>)}<ul className="feature-list">{service.bullets.map(b => <li key={b}>{b}</li>)}</ul><Link href="/contact" className="button button-dark">Bespreek de mogelijkheden <Arrow /></Link></div></Reveal><Reveal><div className="service-side-image"><Image src={service.image} alt={`${service.title} bij Tennis Management Limburg`} fill sizes="(max-width: 980px) 100vw, 50vw" /></div></Reveal></div></section>
    <section className="cta-band"><div className="wrap"><h2>Een trainer die bij uw vereniging past.</h2><Link href="/contact" className="button button-dark">Neem contact op <Arrow /></Link></div></section></>;
}
