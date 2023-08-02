import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Black Clover',
  description: 'Aqui puedes encontrar todo sobre Black Clover',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} `}>
        <Providers>
          <Header />
          <main className="w-8/12 mx-auto py-36">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
