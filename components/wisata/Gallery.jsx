import { useEffect, useState } from "react";
import { getRandomThreeFromArray } from "../../lib/helper";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import Modal from "../modal/Modal";

export default function Gallery({ data }) {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [activePictureId, setActivePictureId] = useState(null);
  const [pictures, setPictures] = useState(data.foto);

  useEffect(() => {
    document.body.style.overflow = isModalOpened ? "hidden" : "visible";
  }, [isModalOpened]);

  return (
    <div className="lg:grid grid-cols-3 gap-4 mt-5 hidden">
      <div
        className="row-span-2 rounded-lg relative overflow-hidden"
        onClick={() => {
          setIsModalOpened(true);
          setActivePictureId(0);
        }}
      >
        <Image src={pictures[0]} alt="0" layout="fill" objectFit="cover" />
      </div>
      {pictures.slice(1, 4).map((item, i) => {
        return (
          <div
            onClick={() => {
              setIsModalOpened(true);
              setActivePictureId(i);
            }}
            className={`relative cursor-pointer h-[30vh] ${i === 0 && "col-span-2"} rounded-lg overflow-hidden`}
            key={i}
          >
            <Image src={item} key={i} alt={data.nama} layout="fill" objectFit="cover" />
          </div>
        );
      })}
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {isModalOpened && (
          <Modal
            closeModal={() => {
              setIsModalOpened(false);
              setActivePictureId(null);
            }}
            activePictureId={activePictureId}
            photos={data.foto}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
