import { z } from "zod";

export const commentSchema = z.object({
  id: z.number(),
  feedbackId: z.number(),
  userId: z.string(),
  content: z.string(),
  createdAt: z.date(),
});

export type Comment = z.infer<typeof commentSchema>;
export const feedbackStatusSchema = z.enum(["new", "in-progress", "done"]);

export const feedbackSchema = z.object({
  id: z.number(),
  userId: z.string(),
  status: feedbackStatusSchema,
  title: z.string(),
  description: z.string(),
  comments: z.array(commentSchema),
  createdAt: z.date(),
});
export type Feedback = z.infer<typeof feedbackSchema>;

export type FeedbackStatus = z.infer<typeof feedbackStatusSchema>;
