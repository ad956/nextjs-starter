import Image from "next/image";

type Props = {
  imgLink: string;
};

// item component
export default function Imageview({ imgLink }: Props) {
  return (
    <Image
      className="rounded-md"
      src={imgLink}
      alt="search"
      width={500}
      height={500}
    />
  );
}
