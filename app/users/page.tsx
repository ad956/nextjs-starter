import type { Metadata } from "next";
import getUsers from "@/lib/getUsers";
import { User } from "@/types";

export const metadata: Metadata = {
  title: "Users",
  description: "Get Users",
};

export default async function UsersPage() {
  const usersData: Promise<User[]> = getUsers();
  const users = await usersData;
  return <div>UsersPage</div>;
}
