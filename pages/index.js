import Footer from "../components/Footer";
import Introduction from "../components/main/Introduction";
import Wisata from "../components/main/Wisata";
import Navbar from "../components/navbar/Navbar";
import ReactPlayer from "react-player";
import destinasi from "../public/destinasi.json";
import Head from "next/head";
// import Carousel from "../components/Carousel";

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

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Beranda | Desa Pulosari</title>
      </Head>
      <Navbar />
      <div>
        <div className="w-full flex justify-center items-center h-screen relative font-rubik">
          <div className="flex flex-col items-center">
            <div className="absolute top-0 -z-10">{/*<ReactPlayer url="https://www.youtube.com/watch?v=6NUobbpNFfQ" loop muted playing controls={false} width={"100vw"} height={"120vh"} />*/}</div>
            <p className="text-4xl md:text-7xl uppercase font-black text-white">Desa</p>
            <p className="text-6xl md:text-9xl font-bold font-indonesiaScript text-yellow-400">Pulosari</p>
            <p className="font-black text-white backdrop-blur-sm rounded-full py-4 px-10 w-3/4 text-center md:text-lg md:w-full">Kecamatan Pangelangan, Bandung Selatan</p>
          </div>
        </div>
      </div>
      <Introduction />
      <Wisata data={data} />
      <Footer />
    </>
  );
}
