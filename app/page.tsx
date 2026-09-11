import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/Icons";
import { ClubMotion } from "@/components/ClubMotion";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { news, services } from "@/data/content";

export default function Home() {
  return <>
    <section className="home-hero">
      <Image src="/images/tml/hero.webp" alt="Tennistraining van TML op de baan" fill priority sizes="100vw" />
      <div className="hero-shade" />
      <div className="court-markings" aria-hidden="true"><span /><span /></div>
      <div className="wrap hero-content">
        <p className="eyebrow light hero-kicker">Tennis & padel detachering binnen Midden-Limburg</p>
        <h1><span>Tennis & padel</span><span>in beweging.</span></h1>
        <div className="hero-bottom"><p>Een trainer die bij uw vereniging past. Met vaste managers die voor u klaarstaan.</p><div className="button-row"><Link href="/onze-diensten" className="button button-lime">Bekijk ons aanbod <Arrow /></Link><Link href="/contact" className="button button-ghost">Neem contact op</Link></div></div>
      </div>
      <a className="scroll-cue" href="#intro"><span>Scroll om te ontdekken</span><Arrow direction="down" /></a>
    </section>

    <section className="intro-section" id="intro">
      <div className="wrap intro-grid"><Reveal><p className="eyebrow">Tennis Management Limburg</p><h2>De mensen achter sterk verenigingswerk.</h2></Reveal><Reveal className="intro-copy"><p className="lead">Wij brengen de juiste mensen samen onder leiding van een gekwalificeerde, gemotiveerde trainer die past bij de vereniging.</p><p>Persoonlijke aandacht is geen extraatje, maar de basis van alles wat we doen.</p><Link className="text-link" href="/over-tml">Ontdek wie we zijn <Arrow /></Link></Reveal></div>
      <div className="wrap proof-grid">
        <Reveal className="proof-item"><strong>17<span>+</span></strong><p>jaar ervaring</p></Reveal>
        <Reveal className="proof-item"><strong>20<span>+</span></strong><p>verenigingen geholpen</p></Reveal>
        <Reveal className="proof-item"><strong>2</strong><p>vaste aanspreekpunten</p></Reveal>
        <Reveal className="proof-statement"><p>Continuïteit gewaarborgd.<br />Persoonlijk georganiseerd.</p></Reveal>
      </div>
    </section>

    <section className="services-section">
      <div className="wrap section-head split"><div><p className="eyebrow">Onze diensten</p><h2>Alles voor een club die vooruit wil.</h2></div><p>Van trainer tot totaaladvies. Eén team, één lijn, altijd dichtbij.</p></div>
      <div className="service-stack wrap">
        {services.map((service, index) => <Reveal key={service.slug}><Link href={`/diensten/${service.slug}`} className="service-row"><span className="service-number">0{index + 1}</span><div className="service-image"><Image src={service.image} alt="" fill sizes="(max-width: 760px) 32vw, 190px" /></div><div className="service-copy"><h3>{service.title}</h3><p>{service.eyebrow}</p></div><span className="round-arrow"><Arrow /></span></Link></Reveal>)}
      </div>
      <div className="wrap section-link"><Link className="text-link" href="/onze-diensten">Bekijk alle diensten <Arrow /></Link></div>
    </section>

    <ClubMotion />

    <section className="story-section">
      <div className="story-image"><Image src="/images/tml/yannick-bianca.webp" alt="Yannick Quaedvlieg en Bianca Burhenne van TML" fill sizes="(max-width: 900px) 100vw, 52vw" /></div>
      <div className="story-copy"><Reveal><p className="eyebrow light">Over TML</p><h2>Ervaring op de baan. Rust achter de schermen.</h2><p>Yannick Quaedvlieg en Bianca Burhenne managen TML van A tot Z. Oprichter Geert Quaedvlieg blijft als ervaren adviseur nauw betrokken.</p><Link className="button button-lime" href="/over-tml">Maak kennis met het team <Arrow /></Link></Reveal></div>
    </section>

    <section className="news-section wrap">
      <div className="section-head split"><div><p className="eyebrow">Actueel</p><h2>Vanaf de baan.</h2></div><Link className="text-link" href="/actueel">Bekijk alle berichten <Arrow /></Link></div>
      <div className="news-grid"><NewsCard item={news[0]} featured />{news.slice(1).map(item => <NewsCard item={item} key={item.slug} />)}</div>
    </section>

    <section className="career-banner">
      <Image src="/images/tml/yannick-training.webp" alt="TML-trainer tijdens een training" fill sizes="100vw" />
      <div className="career-shade" />
      <Reveal className="wrap career-content"><p className="eyebrow light">Werken bij TML</p><h2>Geef je talent door.</h2><p>Ben je gedreven, heb je passie voor de sport en geef je graag training aan jeugd en senioren?</p><Link href="/werken-bij-tml" className="button button-lime">Bekijk onze vacatures <Arrow /></Link></Reveal>
    </section>

    <section className="home-contact"><div className="wrap contact-grid"><Reveal><p className="eyebrow">Kennismaken</p><h2>Zullen we samen iets in beweging zetten?</h2><p>Vertel ons kort waar uw vereniging naar zoekt. Yannick of Bianca neemt persoonlijk contact met u op.</p></Reveal><Reveal><ContactForm compact /></Reveal></div></section>
  </>;
}

function NewsCard({ item, featured = false }: { item: (typeof news)[number]; featured?: boolean }) {
  return <Reveal className={featured ? "news-card featured" : "news-card"}><Link href={`/actueel/${item.slug}`}><div className="news-image"><Image src={item.image} alt="" fill sizes={featured ? "(max-width: 900px) 100vw, 60vw" : "(max-width: 900px) 100vw, 30vw"} /></div><div className="news-copy"><time>{item.date}</time><h3>{item.title}</h3><span className="text-link">Lees het bericht <Arrow /></span></div></Link></Reveal>;
}
