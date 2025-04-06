import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Baking with Justin",
  description: "Learn baking techniques, get recipes, and watch baking tutorials",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-baking-cream bg-pattern`}>
        <nav className="bg-baking-sugar/95 backdrop-blur-sm shadow-md border-b border-baking-butter sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/" className={`${playfair.className} text-3xl font-bold text-baking-chocolate hover:text-baking-caramel transition-colors`}>
                    Baking with Justin
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link
                    href="/"
                    className="border-transparent text-baking-chocolate hover:border-baking-cinnamon hover:text-baking-caramel inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors"
                  >
                    Home
                  </Link>
                  <Link
                    href="/recipes"
                    className="border-transparent text-baking-chocolate hover:border-baking-cinnamon hover:text-baking-caramel inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors"
                  >
                    Recipes
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          {children}
        </main>
        <footer className="bg-baking-sugar/95 backdrop-blur-sm border-t border-baking-butter mt-12">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-baking-chocolate text-sm">
              © {new Date().getFullYear()} Baking with Justin. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
