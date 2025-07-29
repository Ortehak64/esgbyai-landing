import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/logo.png'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <header className="flex items-center justify-between p-4 max-w-6xl mx-auto">
        <div className="flex items-center space-x-3">
          <Image src={logo} alt="ESGbyAI Logo" width={60} height={60} />
          <h1 className="text-2xl font-bold">ESGbyAI</h1>
        </div>
        <nav className="space-x-6">
          <Link href="#features" className="hover:text-green-400">Features</Link>
          <Link href="#about" className="hover:text-green-400">About</Link>
          <Link href="#contact" className="hover:text-green-400">Contact</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="text-center px-4 py-20 max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Welcome to ESGbyAI</h2>
        <p className="text-lg text-gray-300 mb-8">
          AI-powered ESG reporting tools for businesses striving to meet tomorrow’s standards today.
        </p>
        <ul className="text-left list-disc list-inside space-y-2 text-gray-200">
          <li>Automated ESG data collection</li>
          <li>Real-time analytics dashboards</li>
          <li>AI-assisted report generation</li>
          <li>Sustainability KPI tracking</li>
          <li>Regulatory compliance checks</li>
          <li>Benchmarking & peer analysis</li>
          <li>Audit-ready documentation</li>
          <li>Carbon footprint calculations</li>
          <li>Risk & materiality assessments</li>
          <li>Integrated stakeholder dashboards</li>
        </ul>
      </main>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-6">
        © 2025 ESGbyAI. All rights reserved.
      </footer>
    </div>
  )
}
