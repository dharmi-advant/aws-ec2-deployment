import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Welcome
        </h1>
        <p className="mt-4 max-w-xl text-lg text-neutral-600 dark:text-neutral-400">
          Your app dashboard and tools in one place.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/app"
            className="rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-background transition hover:opacity-90"
          >
            Open dashboard
          </Link>
          <Link
            href="/app/persona-management"
            className="rounded-lg border border-neutral-300 dark:border-neutral-600 px-5 py-2.5 text-sm font-medium text-foreground transition hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            Persona management
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 dark:border-neutral-800 py-6 px-6 text-center text-sm text-neutral-500">
        My App
      </footer>
    </main>
  );
}
