import FeedbackItem from "@/components/feedback/FeedbackItem";

import { Feedback } from "../../../types/feedback";

type Props = {
  feedbacks: Feedback[];
};

export default function FeedbackList({ feedbacks }: Props) {
  if (feedbacks.length === 0) {
    return (
      <div className="rounded-lg border border-slate-800 bg-slate-900 p-8 text-center text-slate-400">
        No feedbacks available.
      </div>
    );
  }

  return (
    <ul className="flex flex-col gap-4">
      {feedbacks.map((feedback) => (
        <FeedbackItem feedback={feedback} key={feedback.id} />
      ))}
    </ul>
  );
}
