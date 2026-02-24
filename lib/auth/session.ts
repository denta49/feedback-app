import { cookies } from "next/headers";

import { SessionUser } from "../../types/user";

export const encryptSession = (session: SessionUser): string => {
  try {
    return Buffer.from(JSON.stringify(session)).toString("base64");
  } catch (e) {
    console.error("Failed to encrypt session:", e);
    return "";
  }
};

export const decryptSession = (encrypted: string): SessionUser | null => {
  try {
    return JSON.parse(Buffer.from(encrypted, "base64").toString("utf-8"));
  } catch (e) {
    console.error("Failed to decrypt session:", e);
    return null;
  }
};

export async function createSession(user: SessionUser | null) {
  if (!user) {
    return;
  }
  const cookieStore = await cookies();
  cookieStore.set({
    name: "session",
    value: encryptSession(user),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function getSession(): Promise<SessionUser | null> {
  const cookieStore = await cookies();
  const encrypted = cookieStore.get("session")?.value;
  if (!encrypted) {
    return null;
  }
  return decryptSession(encrypted);
}
