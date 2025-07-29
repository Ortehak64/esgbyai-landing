import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <header className="w-full max-w-5xl flex items-center justify-between py-6">
        <div className="flex items-center space-x-4">
          <Image
            src="/logo.png"
            alt="ESGbyAI Logo"
            width={100}
            height={40}
            priority
          />
          <h1 className="text-xl font-semibold">ESGbyAI</h1>
        </div>
        <nav className="space-x-6 hidden md:flex">
          <a href="#features" className="hover:underline">Features</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center text-center space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold">
          ESG Reporting Powered by AI
        </h2>
        <p className="text-lg md:text-xl max-w-xl">
          Automate, streamline, and elevate your ESG disclosures with ESGbyAI. The future of sustainable transparency starts here.
        </p>
        <a
          href="#contact"
          className="mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full text-lg transition"
        >
          Get Started
        </a>
      </main>
    </div>
  );
}
