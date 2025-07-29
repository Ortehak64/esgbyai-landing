import './globals.css';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'ESGbyAI',
  description: 'AI-powered ESG reporting tools',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 text-white min-h-screen flex flex-col">
        {/* Header/Navbar */}
        <header className="flex items-center justify-between px-6 py-4 border-b border-zinc-700">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/esgbyai_logo_full_light.png"
              alt="ESGbyAI Logo"
              width={160}
              height={40}
              priority
            />
          </Link>
          <nav className="space-x-6 hidden sm:block">
            <Link href="#features" className="hover:underline">Features</Link>
            <Link href="#about" className="hover:underline">About</Link>
            <Link href="#contact" className="hover:underline">Contact</Link>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <footer className="bg-zinc-800 text-center text-sm py-4 border-t border-zinc-700">
          © {new Date().getFullYear()} ESGbyAI. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
