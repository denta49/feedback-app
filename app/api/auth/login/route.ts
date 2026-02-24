import { NextResponse } from "next/server";

import { createSession } from "@/lib/auth/session";

import { mockUsers } from "../../../../data/mock";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = body.email;
    if (!email) {
      return (NextResponse.json({ error: "Email is required" }), { status: 400 });
    }
    const user = mockUsers.find((u) => u.email === email);
    if (!user) {
      return (NextResponse.json({ error: "Unauthorized" }), { status: 401 });
    }
    await createSession(user);
    return (NextResponse.json({ message: "Login successful" }), { status: 200 });
  } catch (e) {
    console.error("Login error:", e);
    return (NextResponse.json({ error: "Internal server error" }), { status: 500 });
  }
}
