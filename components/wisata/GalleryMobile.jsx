import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarouselMobileSetting } from "../../lib/helper";
import Image from "next/image";

export default function GalleryMobile({ data }) {
  console.log(data);
  return (
    <div className="mt-5 lg:hidden">
      <Slider {...CarouselMobileSetting}>
        {data.foto.map((item, i) => {
          return (
            <div className="relative h-[20vh] rounded-lg overflow-hidden" key={i}>
              <Image src={item} alt={data.nama} layout="fill" objectFit="cover" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
