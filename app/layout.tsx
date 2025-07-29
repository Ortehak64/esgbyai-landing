<<<<<<< HEAD

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
    
=======
import './globals.css';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'ESGbyAI',
  description: 'AI-powered ESG reporting tools',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <header className="flex justify-between items-center px-6 py-4 bg-gray-800">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="ESGbyAI Logo" width={40} height={40} />
            <span className="text-xl font-semibold">ESGbyAI</span>
          </div>
          <nav className="space-x-4">
            <Link href="/">Home</Link>
            <Link href="#features">Features</Link>
            <Link href="#contact">Contact</Link>
          </nav>
        </header>
        <main className="p-8">{children}</main>
        <footer className="text-center p-4 bg-gray-800 mt-12">
          © 2025 ESGbyAI. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
>>>>>>> b42dcdbd97e20d9c4725c6be9343eef8ad9f72b8
