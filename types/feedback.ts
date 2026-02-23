export type Comment = {
  id: number;
  feedbackId: number;
  userId: string;
  content: string;
  createdAt: Date;
};

export type FeedbackStatus = "new" | "in-progress" | "done";

export type Feedback = {
  id: number;
  userId: string;
  status: FeedbackStatus;
  title: string;
  description: string;
  comments: Comment[];
  createdAt: Date;
};
