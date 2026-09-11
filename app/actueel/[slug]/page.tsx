import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";
import { news } from "@/data/content";

export function generateStaticParams(){return news.map(({slug})=>({slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const item=news.find(n=>n.slug===slug);return item?{title:item.title,description:item.intro}:{} }
export default async function NewsDetail({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const item=news.find(n=>n.slug===slug);if(!item)notFound();return <><PageHero eyebrow={item.date} title={item.title} intro={item.intro} image={item.image}/><section className="content-section white"><article className="wrap service-detail-grid"><div className="prose"><p className="eyebrow">TML actueel</p>{item.body.map(p=><p className="lead" key={p}>{p}</p>)}<Link className="text-link" href="/actueel">Terug naar actueel <Arrow/></Link></div><div className="service-side-image"><Image src={item.image} alt="" fill sizes="(max-width:980px) 100vw,50vw" style={{objectFit:item.image.includes("clubs")?"contain":"cover",background:item.image.includes("clubs")?"#eef0eb":undefined,padding:item.image.includes("clubs")?"60px":undefined}}/></div></article></section></>}
