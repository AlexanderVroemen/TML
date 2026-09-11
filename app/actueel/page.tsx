import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { news } from "@/data/content";

export const metadata = { title: "Actueel", description: "Nieuws, samenwerkingen en updates van Tennis Management Limburg." };
export default function NewsPage(){return <><PageHero eyebrow="Actueel" title="Nieuws vanaf de baan." intro="Nieuwe samenwerkingen, ontwikkelingen en kansen binnen het TML-netwerk." image="/images/tml/tennis-training.webp"/><section className="content-section"><div className="wrap news-list">{news.map(item=><Reveal className="news-card" key={item.slug}><Link href={`/actueel/${item.slug}`}><div className="news-image"><Image src={item.image} alt="" fill sizes="(max-width: 680px) 100vw, 33vw"/></div><div className="news-copy"><time>{item.date}</time><h3>{item.title}</h3><span className="text-link">Lees het bericht <Arrow/></span></div></Link></Reveal>)}</div></section></>}
