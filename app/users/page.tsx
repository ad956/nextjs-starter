import type { Metadata } from "next";
import getUsers from "@/lib/getUsers";
import { User } from "@/types";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Users",
  description: "Get Users",
};

export default async function UsersPage() {
  const usersData: Promise<User[]> = getUsers();
  const users = await usersData;

  // logs in the server terminal
  console.log("Its a server component");

  const content = (
    <section>
      <h2>
        <Link href="/">HomePage</Link>
      </h2>
      <br />
      {users.map((user) => {
        return (
          <>
            <p key={user.id}>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </p>
            <br />
          </>
        );
      })}
    </section>
  );

  return content;
}
