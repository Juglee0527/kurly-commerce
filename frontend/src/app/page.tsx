export default function HomePage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center gap-8 px-6 py-20">
        <div className="inline-flex w-fit rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-medium text-stone-600">
          Kurly Commerce Frontend
        </div>
        <div className="space-y-5">
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
            Next.js frontend scaffold is ready.
          </h1>
          <p className="max-w-2xl text-base leading-7 text-stone-600 sm:text-lg">
            This homepage is a placeholder for the Kurly-style ecommerce platform.
            Product, cart, order, and account features are intentionally not implemented yet.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-stone-900">App Router</p>
            <p className="mt-2 text-sm text-stone-600">Initialized under src/app.</p>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-stone-900">TypeScript</p>
            <p className="mt-2 text-sm text-stone-600">Strict typing is enabled.</p>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-stone-900">Tailwind CSS</p>
            <p className="mt-2 text-sm text-stone-600">Utility-first styling is configured.</p>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-stone-900">Feature Folders</p>
            <p className="mt-2 text-sm text-stone-600">components, features, lib, hooks.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
