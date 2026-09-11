import Image from "next/image";
import { Reveal } from "./Reveal";

export function PageHero({ eyebrow, title, intro, image }: { eyebrow: string; title: string; intro?: string; image: string }) {
  return <section className="page-hero"><Image src={image} alt="" fill priority sizes="100vw" /><div className="page-hero-shade" /><div className="wrap page-hero-content"><Reveal><p className="eyebrow light">{eyebrow}</p><h1>{title}</h1>{intro && <p>{intro}</p>}</Reveal></div></section>;
}
