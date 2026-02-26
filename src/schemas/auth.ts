import { z } from "zod";

export const loginSchema = z.object({
  email: z.email().min(1, { message: "Email is required" }),
  password: z.string().min(6),
});

export const registerSchema = loginSchema
  .extend({
    passwordConfirmation: z.string().min(6),
    name: z.string().min(1, { message: "Name is required" }),
  })
  .refine((data) => data.passwordConfirmation === data.password, {
    message: "Passwords do not match",
    path: ["passwordConfirmation"],
  });

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
