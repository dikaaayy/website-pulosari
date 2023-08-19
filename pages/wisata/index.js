import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Head from "next/head";
import destinasi from "../../public/destinasi.json";
import WisataCard from "../../components/wisata/WisataCard";
import Footer from "../../components/Footer";

export async function getStaticProps() {
  // Read the JSON data using import
  const data = destinasi;

  // Return the fetched data as props
  return {
    props: {
      data,
    },
  };
}

export default function index({ data }) {
  return (
    <>
      <Head>
        <title>Wisata | Desa Pulosari</title>
        <link rel="icon" href="./assets/logo-desa.png" />
      </Head>
      <Navbar />
      <div className="bg-[#249EA0] text-white pt-36 pb-5 md:px-28 cursor-default">
        <p className="font-indonesiaScript text-center lg:text-left text-3xl lg:text-6xl">Daftar Wisata</p>
      </div>
      <div className="grid gap-10 lg:gap-20 px-10 grid-cols-1 xl:grid-cols-4 md:grid-cols-2 xl:px-48 bg-gradient-to-b from-[#1A8787] to-[#15AEAF] py-[12vh]">
        {data.map((item, i) => {
          return <WisataCard key={i} data={item} />;
        })}
      </div>
      <Footer />
    </>
  );
}
