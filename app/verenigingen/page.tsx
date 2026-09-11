import Link from "next/link";
import { Arrow } from "@/components/Icons";
import { ClubMotion } from "@/components/ClubMotion";
import { PageHero } from "@/components/PageHero";

export const metadata = { title: "Verenigingen", description: "Ontdek het netwerk van tennis- en padelverenigingen waarmee TML samenwerkt in Midden-Limburg." };
export default function ClubsPage(){return <><PageHero eyebrow="Verenigingen" title="Lokaal verbonden. Samen sterker." intro="TML is vooral actief in Midden-Limburg. Die nabijheid zorgt voor betere binding en samenwerking tussen verenigingen en trainers." image="/images/tml/hero.webp"/><ClubMotion/><section className="cta-band"><div className="wrap"><h2>Ook aansluiten bij het netwerk?</h2><Link href="/contact" className="button button-dark">Neem contact op <Arrow/></Link></div></section></>}
