import getImages from "@/lib/getImages";
import { Pexels } from "@/types";
import { Suspense } from "react";
import Imageview from "./components/Imageview";
import { Metadata } from "next";

type Props = {
  params: {
    searchTerm: string;
  };
};

export async function generateMetadata({
  params: { searchTerm },
}: Props): Promise<Metadata> {
  if (!searchTerm) return { title: "Search not found" };
  return {
    title: searchTerm,
    description: `Image of ${searchTerm} is shown.`,
  };
}

export default async function page({ params: { searchTerm } }: Props) {
  const imagesData: Promise<Pexels> = getImages(searchTerm);

  let imgLink: string = "";

  const data = await imagesData;
  const firstPhoto = data.photos[0];
  if (firstPhoto) {
    const imageLinks = firstPhoto.src;
    imgLink = imageLinks?.medium;
  }
  return (
    <div className="flex flex-col justify-center items-center font-extrabold">
      <h2 className="text-[#07c095] text-3xl tracking-[15px] uppercase animate-pulse">
        {searchTerm}
      </h2>
      <br />
      <Suspense fallback={<h2>Loading Data ...</h2>}>
        <Imageview imgLink={imgLink} />
      </Suspense>
    </div>
  );
}
