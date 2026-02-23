export type CommentType = {
  id: number;
  feedbackId: number;
  userId: number;
  content: string;
};

export type FeedbackStatusType = "new" | "in-progress" | "done";

export type FeedbackType = {
  id: number;
  status: FeedbackStatusType;
  title: string;
  description: string;
  comments: CommentType[];
};
