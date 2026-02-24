import Link from "next/link";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <nav className="sticky top-0 z-10 border-b border-slate-800 bg-slate-900">
        <div className="mx-auto flex h-16 max-w-4xl items-center gap-6 px-4">
          <Link href="/" className="font-bold text-white transition-colors hover:text-blue-400">
            Home
          </Link>
          <Link href="/app" className="text-slate-300 transition-colors hover:text-white">
            Dashboard
          </Link>
          <Link href="/admin" className="text-slate-300 transition-colors hover:text-white">
            Admin
          </Link>
        </div>
      </nav>

      <main>{children}</main>
    </div>
  );
}
