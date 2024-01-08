import getFormattedDate from "@/lib/getFormattedDate";
import { getPostData, getSortedPostsData } from "@/lib/getPosts";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../components/Header";

export function generateStaticParams() {
  const posts = getSortedPostsData(); // de-duped

  return posts.map((post) => ({
    postID: post.id,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { postID: string };
}): Metadata {
  // if async than Promise<Metadata>
  const posts = getSortedPostsData(); // de-duped
  const { postID } = params;

  const post = posts.find((post) => post.id === postID);

  if (!post) return { title: "Post not found" };

  return { title: post.title, description: `This is a ${postID} blog post` };
}

export default async function Post({ params }: { params: { postID: string } }) {
  const post = getSortedPostsData(); // de-duped
  const { postID } = params;

  if (!post.find((post) => post.id === postID)) return notFound();

  const { title, date, contentHtml } = await getPostData(postID);

  const formattedDate = getFormattedDate(date);

  return (
    <>
      <Header />
      <div className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
        <h1 className="text-3xl mt-4 mb-0">{title}</h1>
        <p className="mt-0">{formattedDate}</p>
        <article>
          <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
          <p>
            <Link href="/blog"> Back to home</Link>
          </p>
        </article>
      </div>
    </>
  );
}
