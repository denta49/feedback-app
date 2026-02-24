import { Feedback } from "../../../types/feedback"; // Zaktualizuj ścieżkę jeśli trzeba

type Props = {
  feedback: Feedback;
};

export default function FeedbackItem({ feedback }: Props) {
  return (
    <li className="flex flex-col gap-3 rounded-xl border border-slate-800 bg-slate-900 p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <h2 className="text-xl font-semibold text-white">{feedback.title}</h2>
        <span className="rounded-full border border-blue-800/50 bg-blue-900/50 px-2.5 py-1 text-xs font-medium text-blue-300">
          {feedback.status}
        </span>
      </div>

      <p className="text-sm text-slate-300">{feedback.description}</p>

      <div className="mt-2 flex gap-4 text-xs text-slate-500">
        <span>ID: {feedback.id}</span>
        <span>User ID: {feedback.userId}</span>
      </div>

      {feedback.comments.length > 0 && (
        <div className="mt-4 border-t border-slate-800 pt-4">
          <h4 className="mb-2 text-sm font-medium text-slate-400">Comments:</h4>
          <ul className="flex flex-col gap-2">
            {feedback.comments.map((comment) => (
              <li
                key={comment.id}
                className="rounded-lg border border-slate-800 bg-slate-950 p-3 text-sm text-slate-300"
              >
                {comment.content}
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
}
