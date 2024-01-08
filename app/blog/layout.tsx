import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const monte = Montserrat({ subsets: ["latin"] });
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blog App",
  description: "This is blog app",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main
        className={`bg-[url('/bg.jpg')] bg-cover bg-center ${inter.className}`}
      >
        {children}
      </main>
    </>
  );
}
