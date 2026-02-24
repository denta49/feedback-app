import Container from "@/components/ui/Container";

export default function AdminPage() {
  return (
    <Container>
      <h1 className="text-3xl font-bold text-white">Panel Admina</h1>
      <p className="mt-2 text-slate-400">Tylko dla użytkowników z rolą admin.</p>
    </Container>
  );
}
