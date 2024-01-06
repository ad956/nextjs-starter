import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
        <nav>Navbar</nav>
        {children}
      </body>
    </html>
  );
}
