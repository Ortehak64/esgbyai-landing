import './globals.css';

export const metadata = {
  title: 'ESGbyAI',
  description: 'AI-powered ESG reporting made simple and accurate.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-sans">{children}</body>
    </html>
  );
}
