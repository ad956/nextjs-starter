import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

// earlier head.tsx was used, but its deprecated in NextJS 13.2
// so use below
export const metadata: Metadata = {
  title: "Next App",
  description: "NextJS app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex flex-col items-center justify-between p-10">
          <ul className="flex  gap-5">
            <Link href="/about">AboutPage</Link>
            <Link href="/users">UsersPage</Link>
            <Link href="/compo">Components Demo</Link>
            <Link href="/blog">Blog</Link>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
