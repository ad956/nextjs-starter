import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPosts";
import { Post, User } from "@/types";
import { Suspense } from "react";
import UserPosts from "./components/UserPosts";

type Params = {
  params: {
    userId: string;
  };
};

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
