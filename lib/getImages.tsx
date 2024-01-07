const KEY = process.env.API_KEY;

type CustomHeaders = {
  Authorization: string;
};

export default async function getImages(searchTerm: string) {
  // MDN : URLSearchParams

  const res = await fetch(
    `https://api.pexels.com/v1/search?query=${searchTerm}&per_page=1`,
    {
      headers: {
        Authorization: KEY,
      } as CustomHeaders,
    }
  );

  const images = await res.json();
  if (!images || !images.page) return undefined;

  return images;
}
