import Footer from "../components/Footer";
import Introduction from "../components/main/Introduction";
import Wisata from "../components/main/Wisata";
import Navbar from "../components/navbar/Navbar";
import ReactPlayer from "react-player";
import destinasi from "../public/destinasi.json";
import Head from "next/head";
import dynamic from "next/dynamic";
import { useRef } from "react";

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

const DynamicReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
});

export default function Home({ data }) {
  const introRef = useRef(null);
  return (
    <>
      <Head>
        <title>Beranda | Desa Pulosari</title>
        <link rel="icon" href="./assets/logo-desa.png" />
      </Head>
      <Navbar />
      <div className="cursor-default relative">
        <div className="w-full flex justify-center items-center h-screen relative font-rubik">
          <div className="flex flex-col items-center">
            <div className="absolute top-0 -z-10 overflow-hidden aspect-video w-full">
              <DynamicReactPlayer url="/assets/situ.mp4" loop muted playing controls={false} width={"100%"} height={"100%"} />
            </div>
            <p className="text-4xl md:text-6xl lg:text-8xl uppercase font-black text-white">Desa</p>
            <p className="text-6xl md:text-9xl lg:text-[10rem] font-bold font-indonesiaScript text-yellow-400">Pulosari</p>
            <p className="font-black text-white backdrop-blur rounded-full py-4 px-10 w-2/3 text-center md:text-lg md:w-full">Kecamatan Pangelangan, Bandung Selatan</p>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12  h-12 cursor-pointer absolute bottom-10 text-white bg-yellow-400 rounded-full p-2 left-0 right-0 mx-auto"
          onClick={() => {
            introRef.current.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "start",
            });
          }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
        </svg>
      </div>
      <Introduction divRef={introRef} />
      <Wisata data={data} />
      <Footer />
    </>
  );
}
