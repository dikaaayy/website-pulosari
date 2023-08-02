import Image from "next/image";
import React from "react";

export default function ModalCard({ item }) {
  return (
    <div className="relative w-full h-[60vh] rounded-xl overflow-hidden">
      <Image src={item} alt={"destinasi"} layout="fill" loading="eager" objectFit="cover" />;
    </div>
  );
}
