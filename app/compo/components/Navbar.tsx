import Link from "next/link";
import Search from "./Search";

// Navbar won't be a client component even if we import Search Component which is indeed a client component

export default function NavBar() {
  return (
    <nav className="flex flex-col items-center justify-between p-24">
      <h2>Components Page NavBar</h2>
      <br />
      <ul className="flex flex-col sm:flex-row gap-5 items-center">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/users">Users</Link>
        <Search />
      </ul>
    </nav>
  );
}
