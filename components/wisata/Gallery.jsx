import React from "react";
import { getRandomThreeFromArray } from "../../lib/helper";
import Image from "next/image";

export default function Gallery({ data }) {
  return (
    <div className="lg:grid grid-cols-3 gap-4 mt-5 hidden">
      <div className="border-2 row-span-2 rounded-lg">
        <p>maps</p>
      </div>
      {getRandomThreeFromArray(data.foto).map((item, i) => {
        return (
          <div className={`relative h-[30vh] ${i === 0 && "col-span-2"} rounded-lg overflow-hidden`} key={i}>
            <Image src={item} key={i} alt={data.nama} layout="fill" objectFit="cover" />
          </div>
        );
      })}
    </div>
  );
}
