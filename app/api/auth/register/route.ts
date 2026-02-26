import { NextResponse } from "next/server";

import { mockUsers } from "../../../../data/mock";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name, password } = body;
    if (!email || !name || !password) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }
    if (mockUsers.find((u) => u.email === email)) {
      return NextResponse.json({ error: "User already exists" }, { status: 409 });
    } else {
      mockUsers.push({
        id: (mockUsers.length + 1).toString(),
        email,
        name,
        role: "user",
      });
      return NextResponse.json({ message: "User registered successfully" }, { status: 200 });
    }
  } catch (e) {
    console.error("Registration error:", e);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
