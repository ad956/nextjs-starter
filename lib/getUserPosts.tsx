export default async function getUserPosts(userId: string) {
  // const res = await fetch(
  //   `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
  //   {
  //     cache: "force-cache", // is the default value, no need to specify explicitly
  //   }
  // );

  /*
      NextJS by default caches data, so when we want to change that default behaviour ,
      we add 

      {
        cache : "no-store"
      }
      ,
      so that we can see the newer data instead of previous(cached) data, it is useful when data is changing frequently
      
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
        {
          cache: "no-store",
        }
      );
  */

  // ISR (Incremental Static Regeneration) strategy
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    {
      next: { revalidate: 60 }, // every 60 secs nextjs checks if there's updated data
    }
  );

  /*

    Segment-level Caching :- Segment-level caching allows you to cache and revalidate data used in route segments.
    
    This mechanism allows different segments of a path to control the cache lifetime of a route.
    Each page.tsx and layout.tsx in the route hierarchy can exporta revalidate value that
    sets the revalidation time for the route.

    syntax : export const revalidate = secs;

  */

  if (!res.ok) throw new Error("Fetching Posts of User failed");
  return res.json();
}

/*
1.cache: "no-store":

This option, when used in the fetch API, tells the browser not to use the cache for this request. It fetches the data from the server
every time, ignoring any locally cached data. It doesn't have a direct relationship with Next.js caching but affects the client's 
browser caching behavior.

2. next: { revalidate: 60 }:

This is related to Incremental Static Regeneration (ISR) in Next.js. The revalidate option is part of ISR and specifies the number of
seconds after which a new version of the page should be generated. In your example, it's set to 60 seconds, meaning that every 60 
seconds, Next.js will attempt to re-generate the page with fresh data.


 * These two options serve different purposes. cache: "no-store" affects the client-side caching behavior, 
  while revalidate is part of Next.js's ISR strategy and controls how frequently the server should regenerate the page with 
  updated data.  *

  */
