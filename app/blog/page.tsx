import { Montserrat } from "next/font/google";
import BlogPosts from "./components/BlogPosts";
import Header from "./components/Header";
const monte = Montserrat({ subsets: ["latin"] });
export default function Blog() {
  return (
    <>
      <Header />
      <div className={`container mx-auto mt-8 ${monte.className}`}>
        <BlogPosts />
      </div>
    </>
  );
}
