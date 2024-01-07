"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

// to make it a client component
// used it in about/error.tsx as well, bcoz errors page must be always client components...

export default function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/compo/${search}`);
  };

  return (
    <form className="h-10 w-50 flex justify-center" onSubmit={handleSubmit}>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 w-80 text-xl rounded-xl bg-transparent border-2 border-teal-300"
        placeholder="Search"
      />

      <button className="p-2 text-xl rounded-xl ml-2 font-bold bg-slate-900">
        🔍
      </button>
    </form>
  );
}
