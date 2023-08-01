import Link from "next/link";

export default function WisataCard({ data }) {
  return (
    <Link href={`/wisata/${data.path}`} legacyBehavior>
      <a className="rounded-2xl shadow-2xl overflow-hidden aspect-square bg-cover" style={{ backgroundImage: `url(${data.foto[0]})` }}>
        <div className="w-full h-full bg-black flex justify-center items-center bg-opacity-50">
          <p className="font-rubik md:text-xl xl:text-3xl text-center text-lg text-white uppercase font-black">{data.nama}</p>
        </div>
      </a>
    </Link>
  );
}
