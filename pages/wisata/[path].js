import React from "react";
import destinasi from "../../public/destinasi.json";
import Navbar from "../../components/navbar/Navbar";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import { getRandomThreeFromArray } from "../../lib/helper";
import Gallery from "../../components/wisata/Gallery";

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
  //   console.log(context);
  const datas = destinasi.filter((item) => item.path == path);
  const data = datas[0];

  return {
    props: {
      data,
      fallback: false,
    },
  };
}

export default function Wisata({ data }) {
  const router = useRouter();
  console.log(data);
  return (
    <>
      <Head>
        <title>{data.nama} | Desa Pulosari</title>
      </Head>
      <Navbar />
      <div className="pt-32 pb-10 px-5 lg:px-28 font-rubik">
        <div className="flex items-center -mx-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          <p className="font-medium">Back</p>
        </div>
        <p className="text-[#249EA0] mt-5 font-extrabold text-6xl lg:text-7xl">{data.nama}</p>
        <p className="text-[#B3B3B3] font-medium text-3xl my-3 lg:text-4xl">{data.tipe}</p>
        <p className="text-justify font-medium">{data.deskripsi}</p>
        <Gallery data={data} />
      </div>
    </>
  );
}
