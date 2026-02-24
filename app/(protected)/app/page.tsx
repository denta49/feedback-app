import FeedbackList from "@/components/feedback/FeedbackList";

import { mockFeedbacks } from "../../../data/mock";

export default function AppPage() {
  return (
    <div>
      <FeedbackList feedbacks={mockFeedbacks} />
    </div>
  );
}
