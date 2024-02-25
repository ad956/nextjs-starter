import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPosts";
import { Post, User } from "@/types";
import { Suspense } from "react";
import UserPosts from "./components/UserPosts";
import type { Metadata } from "next";
import getUsers from "@/lib/getUsers";
import { notFound } from "next/navigation";

type Params = {
  params: {
    userId: string;
  };
};

// export const metadata: Metadata = generateMetaData();

// dynamic metadata
export async function generateMetadata({
  // generateMetadata is the correct name to be used
  params: { userId },
}: Params): Promise<Metadata> {
  // OP feature of NextJS : the above request will be de-duped means the next will call the below line only once even if its called multiple times
  const userData: Promise<User> = getUser(userId);
  const user: User = await userData;

  if (!user || !user.name) {
    return { title: "User not found" };
  }

  return { title: user.name, description: `This is ${user.name} page` };
}

export default async function UserPage({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser(userId);
  const postsData: Promise<Post[]> = getUserPosts(userId);

  // valid approach : parallel one
  // const [user, posts] = await Promise.all([userData, postsData]);

  // to use suspense, loading state , using below approach
  const user = await userData;

  if (!user || !user.name) return notFound();

  return (
    <>
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback={<h2>Loading Data ...</h2>}>
        <UserPosts promise={postsData} />
      </Suspense>
    </>
  );
}

/*
  The generateStaticParams function can be used in combination with dynamic route segments to statically generate routes at build 
  time instead of on-demand at request time. // SSG 
*/

// when below isnt used its a SSR strategy but as its provided its a SSG strategy
export async function generateStaticParams() {
  // will be de-duped by nextjs
  const usersData: Promise<User[]> = getUsers();
  const users = await usersData;

  return users.map((user) => ({
    userId: user.id.toString(),
  }));
}

/*

dynamicParams :- Control what happens when a dynamic segment is visited that was not generated with generateStaticParams.

                  ie. a user with id which doesn't exists

used in :- layout.tsx | page.tsx

usage :
        export const dynamicParams = true // true | false,

true (default): Dynamic segments not included in generateStaticParams are generated on demand.

false: Dynamic segments not included in generateStaticParams will return a 404.

*/
