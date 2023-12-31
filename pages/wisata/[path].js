import React from "react";
import destinasi from "../../public/destinasi.json";
import Navbar from "../../components/navbar/Navbar";
import { useRouter } from "next/router";
import Head from "next/head";
import { CarouselSetting, getRandomThreeFromArray } from "../../lib/helper";
import Gallery from "../../components/wisata/Gallery";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../../components/main/carousel/Card";
import Footer from "../../components/Footer";
import GalleryMobile from "../../components/wisata/GalleryMobile";
import Link from "next/link";

export async function getStaticPaths() {
  const data = destinasi;

  const paths = data.map((item) => {
    return {
      params: { path: item.path },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const path = context.params.path;
  const datas = destinasi.filter((item) => item.path == path);
  const data = datas[0];

  const destinations = destinasi;
  return {
    props: {
      data,
      destinations,
      fallback: false,
    },
  };
}

export default function Wisata({ data, destinations }) {
  const router = useRouter();
  const filteredDestinations = destinations.filter((item) => item.path !== data.path);
  return (
    <>
      <Head>
        <title>{data.nama} | Desa Pulosari</title>
        <link rel="icon" href="./assets/logo-desa.png" />
      </Head>
      <Navbar />
      <div className="overflow-hidden">
        <div className="pt-32 pb-10 px-5 lg:px-28 font-rubik cursor-default">
          <div className="flex items-center -mx-1 cursor-pointer" onClick={() => router.back()}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            <p className="font-medium">Back</p>
          </div>
          <p className="text-[#249EA0] mt-5 font-extrabold text-6xl lg:text-7xl">{data.nama}</p>
          <p className="text-[#B3B3B3] font-medium text-3xl my-3 lg:text-4xl">{data.tipe}</p>
          {data.deskripsi.map((item, i) => {
            return (
              <p key={i} className={`text-justify indent-10 font-medium ${i !== 0 && "my-3"}`}>
                {item}
              </p>
            );
          })}
          <Gallery data={data} />
          <GalleryMobile data={data} />
          {data.sumber && (
            <div className="mt-5">
              <p className="text-[#1ebec0] font-semibold text-lg md:text-xl xl:text-2xl">Sumber</p>
              {data.sumber.map((item, i) => {
                return (
                  <div key={i}>
                    <Link href={item.link} legacyBehavior>
                      <a>
                        {item.nama} - {item.link}
                      </a>
                    </Link>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="bg-[#1ebec0] text-white text-3xl md:text-4xl lg:text-5xl py-8 lg:py-12 lg:px-24 rounded-t-[3rem]">
          <p className="font-indonesiaScript text-center mb-8">Destinasi Lainnya</p>
          <Slider {...CarouselSetting}>
            {filteredDestinations.map((item, i) => {
              return <Card key={i} item={item} />;
            })}
          </Slider>
        </div>
      </div>
      <Footer />
    </>
  );
}
