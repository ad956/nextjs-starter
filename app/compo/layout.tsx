import type { Metadata } from "next";
import NavBar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Components Demo Page",
  description: "This is a Components demonstration page",
};

export default function ComponentsDemoPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
}
