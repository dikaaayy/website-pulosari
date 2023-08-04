import React from "react";
import Backdrop from "./Backdrop";
import { motion } from "framer-motion";
import Slider from "react-slick";
import Card from "../main/carousel/Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarouselModalSetting, CarouselSetting, rearrangeArray } from "../../lib/helper";
import ModalCard from "./ModalCard";

export default function Modal({ closeModal, activePictureId, photos }) {
  const rearranged = rearrangeArray(photos, activePictureId);
  return (
    <Backdrop onClick={closeModal}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="relative m-auto h-[50vh] w-1/2 rounded-lg bg-[#080c0d] pb-5"
        variants={{
          hidden: {
            opacity: 1,
          },
          visible: {
            transition: {
              duration: 0.1,
            },
            opacity: 1,
          },
          exit: {
            opacity: 1,
          },
        }}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Slider {...CarouselModalSetting}>
          {rearranged.map((item, i) => {
            return <ModalCard item={item} key={i} />;
          })}
        </Slider>
      </motion.div>
    </Backdrop>
  );
}
