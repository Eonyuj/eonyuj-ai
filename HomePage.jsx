export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-gray-900 text-white px-6 py-12">
      <section className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-fuchsia-500">
          Learn English with AI
        </h1>
        <p className="text-lg text-zinc-300 mb-6">
          Unlock the power of fluent English and smart AI tools — all in one platform.
        </p>
        <a href="#start" className="bg-gradient-to-r from-blue-500 to-fuchsia-500 hover:opacity-90 text-white px-6 py-3 rounded-full text-lg">
          Get Started
        </a>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          {
            title: "AI Writing Practice",
            description: "Improve your writing with instant feedback and grammar suggestions.",
          },
          {
            title: "AI Speaking Assistant",
            description: "Practice speaking with a virtual AI partner who corrects and coaches you.",
          },
          {
            title: "Travel & Chat AI",
            description: "Explore English through travel scenarios and fun conversations with AI.",
          },
        ].map((feature) => (
          <div
            key={feature.title}
            className="bg-zinc-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300"
          >
            <h2 className="text-2xl font-semibold mb-2 text-blue-400">
              {feature.title}
            </h2>
            <p className="text-zinc-300">{feature.description}</p>
          </div>
        ))}
      </section>

      <section className="text-center mt-24">
        <h3 className="text-3xl font-bold text-fuchsia-500 mb-4">
          Ready to start your journey?
        </h3>
        <a href="#" className="bg-fuchsia-600 hover:bg-fuchsia-700 px-6 py-3 text-white rounded-full">
          Create Free Account
        </a>
      </section>
    </main>
  );
}