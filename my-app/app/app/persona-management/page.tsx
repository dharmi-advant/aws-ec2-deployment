export default function PersonaManagementPage() {
  const users = fetch('/api/test').then(res => res.json())
  console.log(users)
  return (
    <main className="p-8">
      <h1 className="text-2xl font-semibold">Persona management</h1>
      <p className="mt-2 text-neutral-600">Manage personas here.</p>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </main>
  )
}
