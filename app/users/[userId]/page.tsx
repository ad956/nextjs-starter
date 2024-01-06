import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPosts";
import { Post, User } from "@/types";
import { Suspense } from "react";
import UserPosts from "./components/UserPosts";
import type { Metadata } from "next";

type Params = {
  params: {
    userId: string;
  };
};

// export const metadata: Metadata = genrateMetaData();

// dynamic metadata
export async function genrateMetaData({
  params: { userId },
}: Params): Promise<Metadata> {
  // OP feature of NextJS : the above request will be de-duped means the next will call the below line only omce even if its called multiple times
  const userData: Promise<User> = getUser(userId);

  const user = await userData;

  return { title: user.name, description: `This is ${user.name} page` };
}

export default async function UserPage({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser(userId);
  const postsData: Promise<Post[]> = getUserPosts(userId);

  // valid approach : parallel one
  // const [user, posts] = await Promise.all([userData, postsData]);

  // to use suspense, loading state , using below approach
  const user = await userData;

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
