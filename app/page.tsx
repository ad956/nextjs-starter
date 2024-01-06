import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>NextJS Application Starter</h1>

      <Link href="/about">AboutPage</Link>
      <Link href="/users">UsersPage</Link>
    </main>
  );
}
