import InstallButton from './components/InstallButton'

const page = () => {
  return (
        <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
        <h1 className="text-xl font-bold">PWAApp</h1>
        <InstallButton />
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 mt-16">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Build Fast <span className="text-gray-400">PWA Apps</span>
        </h1>

        <p className="mt-4 text-gray-300 max-w-xl text-lg">
          Experience lightning-fast performance, offline support, and native app feel — all powered by Next.js.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="px-6 py-3 bg-white text-black rounded-xl font-semibold hover:scale-105 transition">
            Get Started
          </button>
          <button className="px-6 py-3 border border-white rounded-xl hover:bg-white hover:text-black transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="mt-20 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        
        <div className="p-6 bg-gray-900 rounded-2xl shadow-md hover:scale-105 transition">
          <h3 className="text-xl font-semibold">⚡ Fast</h3>
          <p className="mt-2 text-gray-400">
            Optimized performance with Next.js and caching.
          </p>
        </div>

        <div className="p-6 bg-gray-900 rounded-2xl shadow-md hover:scale-105 transition">
          <h3 className="text-xl font-semibold">📱 Installable</h3>
          <p className="mt-2 text-gray-400">
            Add to home screen like a native mobile app.
          </p>
        </div>

        <div className="p-6 bg-gray-900 rounded-2xl shadow-md hover:scale-105 transition">
          <h3 className="text-xl font-semibold">🌐 Offline</h3>
          <p className="mt-2 text-gray-400">
            Works even without internet connection.
          </p>
        </div>

      </section>

      {/* CTA Section */}
      <section className="mt-20 text-center px-6">
        <h2 className="text-3xl font-bold">Ready to build your PWA?</h2>
        <button className="mt-6 px-8 py-3 bg-white text-black rounded-xl font-semibold hover:scale-105 transition">
          Start Now
        </button>
      </section>

      {/* Footer */}
      <footer className="mt-20 text-center text-gray-500 pb-6">
        © 2026 PWAApp. All rights reserved.
      </footer>

    </main>
  )
}

export default page


