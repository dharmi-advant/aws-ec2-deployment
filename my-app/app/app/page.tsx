import Link from "next/link";

export default function AppPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-semibold">App</h1>
      <p className="mt-2 text-neutral-600">App dashboard or landing.</p>
      <Link href="/persona-management">Persona Management</Link>
    </main>
  )
}
