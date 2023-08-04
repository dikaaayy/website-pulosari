import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Head>
        <title>404 | Desa Pulosari</title>
        <link rel="icon" href="./assets/logo-desa.png" />
      </Head>
      <div className="w-full h-screen bg-[#15AEAF] text-white flex flex-col items-center justify-center">
        <p className="font-rubik font-bold text-7xl">404</p>
        <p className="font-rubik font-bold text-4xl">Page not found</p>
      </div>
    </>
  );
}
