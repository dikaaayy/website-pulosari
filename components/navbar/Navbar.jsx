import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const NAVBAR_DATA = [
  { id: 1, name: "Beranda", route: "/" },
  { id: 2, name: "Destinasi Wisata", route: "/wisata" },
];

export default function Navbar() {
  const [active, setActive] = useState(1);
  const [isNavbarOpened, setIsNavbarOpened] = useState(false);
  const [show, setShow] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handler = () => {
      if (window.scrollY > 200) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  useEffect(() => {
    if (router.asPath === "/") {
      setActive(1);
    } else if (router.asPath.includes("/wisata")) {
      setActive(2);
    }
  }, [router.asPath]);
  return (
    <div className={`flex w-screen z-20 fixed justify-between transition-all duration-500 ease-in items-center px-4 md:px-5 lg:px-16 py-5 bg-white ${show ? "md:bg-white" : "md:bg-transparent"}`}>
      <Link href={"/"} legacyBehavior>
        <a>
          <Image src={"/assets/logo-desa.png"} alt="logo desa" width={50} height={50} />
        </a>
      </Link>
      <div className="uppercase md:flex gap-x-5 lg:gap-x-10 font-rubik font-extrabold hidden">
        {NAVBAR_DATA.map((item, i) => {
          return (
            <Link href={item.route} key={i} legacyBehavior>
              <a
                key={item.id}
                onClick={() => {
                  setActive(item.id);
                }}
                id={item.id}
                className={`border-[1px] px-4 border-black py-1 rounded-full cursor-pointer ${active === item.id && "bg-black text-white"}`}
              >
                {item.name}
              </a>
            </Link>
          );
        })}
      </div>
      <div className="md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7 relative"
          onClick={() => {
            setIsNavbarOpened(!isNavbarOpened);
          }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>

        {isNavbarOpened && (
          <div className="fixed drop-shadow-2xl bg-white flex flex-col justify-center items-center gap-y-2 py-4 top-20 w-full left-0 z-30 px-7">
            {NAVBAR_DATA.map((item) => {
              return (
                <p
                  onClick={() => {
                    setActive(item.id);
                    setIsNavbarOpened(false);
                  }}
                  className={`w-full text-center font-semibold uppercase py-4 mx-4 ${active === item.id && "bg-black text-white"}`}
                  key={item.id}
                >
                  {item.name}
                </p>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
