export default async function getUser(userId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  // if (!res.ok) throw new Error("Fetching Single User failed");

  // used when working with dynamicParams and notFound() from next/navigation
  if (!res.ok) return undefined;

  return res.json();
}
