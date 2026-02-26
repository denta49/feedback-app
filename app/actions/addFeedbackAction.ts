"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

import requireRole from "@/lib/auth/rbac";
import { Feedback } from "@/schemas/feedback";

import { mockFeedbacks } from "../../data/mock";

const addFeedbackPayloadSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(10),
});
export async function addFeedbackAction(formData: FormData) {
  const auth = await requireRole({ allowedRoles: ["user", "admin"] });
  if (!auth) {
    return;
  }
  if (!auth.isAuthorized || !auth.user) {
    throw new Error("Brak uprawnień do dodania feedbacku");
  }
  const rawTitle = formData.get("title");
  const rawDescription = formData.get("description");
  const validatedData = addFeedbackPayloadSchema.parse({
    title: rawTitle,
    description: rawDescription,
  });
  const newFeedback: Feedback = {
    id: Math.floor(Math.random() * 10000),
    userId: auth.user.id,
    status: "new",
    title: validatedData.title,
    description: validatedData.description,
    createdAt: new Date(),
    comments: [],
  };

  mockFeedbacks.push(newFeedback);
  revalidatePath("/app");
}
