import Link from "next/link";
import React from "react";

export default function Card({ item }) {
  return (
    <Link legacyBehavior href={`/wisata/${item.path}`}>
      <a className="rounded-xl group mx-5 h-[50vh] flex flex-col items-center justify-end bg-center bg-cover overflow-hidden" style={{ backgroundImage: `url(${item.foto[0]})` }}>
        <div className="flex justify-center group-hover:bg-gradient-to-b from-transparent to-[#eaac2f] w-full h-1/2">
          <p className="font-medium mt-auto text-center text-xl font-rubik scale-0 group-hover:scale-100 mb-5">{item.nama}</p>
        </div>
      </a>
    </Link>
  );
}
