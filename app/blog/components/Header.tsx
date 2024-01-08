import Image from "next/image";
import { Montserrat } from "next/font/google";

const monte = Montserrat({ subsets: ["latin"] });

export default function Header() {
  return (
    <header className={`p-4 ${monte.className}`}>
      <div className="container mx-auto flex items-center gap-5">
        <Image
          src="/profile.jpg"
          height={50}
          width={50}
          alt="home"
          className="rounded-[50%]"
          priority={true} // will be loaded immediately
        />
        <h1 className="text-3xl font-medium">My Blog</h1>
      </div>
    </header>
  );
}
