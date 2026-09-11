import { NextResponse } from "next/server";
export async function POST(request: Request) { const body = await request.json().catch(() => null) as Record<string,string> | null; if (!body || body.name?.trim().length < 2 || !/^\S+@\S+\.\S+$/.test(body.email || "") || body.message?.trim().length < 10) return NextResponse.json({ ok: false }, { status: 400 }); return NextResponse.json({ ok: true }); }
