import FeedbackList from "@/components/feedback/FeedbackList";
import Container from "@/components/ui/Container";

import { mockFeedbacks } from "../../../data/mock"; // Zaktualizuj ścieżkę

export default function AppPage() {
  return (
    <Container>
      <div className="mb-6">
        <h1 className="mb-2 text-3xl font-bold text-white">Dashboard</h1>
        <p className="text-slate-400">Przeglądaj zgłoszone opinie.</p>
      </div>
      <FeedbackList feedbacks={mockFeedbacks} />
    </Container>
  );
}
