"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { clubs } from "@/data/content";
import { Arrow } from "./Icons";

export function ClubMotion() {
  const section = useRef<HTMLElement>(null);
  const trackA = useRef<HTMLDivElement>(null);
  const trackB = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const update = () => {
      const rect = section.current?.getBoundingClientRect();
      if (!rect || !trackA.current || !trackB.current) return;
      const progress = Math.max(0, Math.min(1, (innerHeight - rect.top) / (innerHeight + rect.height)));
      const travel = Math.min(innerWidth * (innerWidth < 680 ? .22 : .18), innerWidth < 680 ? 100 : 280);
      const offset = (progress - .5) * 2 * travel;

      trackA.current.style.transform = `translate3d(${-offset}px,0,0) rotate(-1.25deg)`;
      trackB.current.style.transform = `translate3d(${offset}px,0,0) rotate(1.25deg)`;
    };
    const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(update); };
    update();
    addEventListener("scroll", onScroll, { passive: true });
    return () => { removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, []);

  const rowA = clubs.slice(0, 7);
  const rowB = clubs.slice(7);
  return (
    <section className="club-motion" ref={section} aria-labelledby="clubs-title">
      <div className="section-head wrap">
        <p className="eyebrow light">Verenigingen</p>
        <h2 id="clubs-title">Verenigingen waarmee we bewegen.</h2>
        <p>Geen anonieme poule, maar een regionaal netwerk met korte lijnen en echte betrokkenheid.</p>
      </div>
      <div className="club-stage" aria-label="Aangesloten verenigingen">
        <div className="court-line" aria-hidden="true" />
        <div className="club-track-viewport">
          <div className="club-track track-a" ref={trackA}>
            {rowA.map((club, i) => <ClubLogo key={club.name} club={club} index={i} />)}
          </div>
        </div>
        <div className="club-track-viewport">
          <div className="club-track track-b" ref={trackB}>
            {rowB.map((club, i) => <ClubLogo key={club.name} club={club} index={i + 7} />)}
          </div>
        </div>
      </div>
      <div className="club-cta wrap">
        <p>Uw vereniging ook in beweging?</p>
        <Link className="text-link light" href="/contact">Ook samenwerken met TML <Arrow /></Link>
      </div>
    </section>
  );
}

function ClubLogo({ club, index }: { club: (typeof clubs)[number]; index: number }) {
  return (
    <a className="club-logo" href={club.url} target="_blank" rel="noreferrer" style={{ "--i": index } as React.CSSProperties} aria-label={`${club.name}, ${club.place} (opent in nieuw venster)`}>
      <Image src={club.image} alt={`Logo ${club.name}`} width={180} height={130} sizes="(max-width: 720px) 118px, 170px" />
      <span><strong>{club.name}</strong><small>{club.place}</small></span>
    </a>
  );
}
