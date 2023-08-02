import Image from "next/image";
import React from "react";

export default function Introduction() {
  return (
    <div className="bg-white py-10 relative rounded-t-[4rem]">
      <svg width="102" height="550" viewBox="0 0 102 918" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute right-10 top-0 hidden md:inline">
        <path
          d="M11.8493 329.53L16.0494 333.74C24.8224 342.51 31.7814 352.922 36.5292 364.382C41.2769 375.842 43.7201 388.126 43.7193 400.53V567C43.7171 568.217 43.3546 569.405 42.6776 570.416C42.0006 571.427 41.0393 572.215 39.9151 572.68C38.791 573.146 37.5542 573.268 36.3608 573.031C35.1674 572.794 34.0708 572.209 33.2093 571.35L28.2093 566.35C19.3649 557.515 12.3615 547.013 7.60496 535.452C2.8484 523.891 0.433262 511.501 0.499368 499L1.33933 333.84C1.34944 332.627 1.71764 331.444 2.39768 330.439C3.07772 329.434 4.0394 328.652 5.16197 328.192C6.28453 327.732 7.51803 327.613 8.70774 327.851C9.89745 328.089 10.9903 328.673 11.8493 329.53Z"
          fill="#F2F2F2"
        />
        <path
          d="M90.5907 258.28L86.3907 262.49C77.6178 271.26 70.6586 281.672 65.9109 293.132C61.1632 304.592 58.7199 316.875 58.7207 329.28V495.73C58.723 496.947 59.0855 498.135 59.7626 499.146C60.4396 500.157 61.4007 500.945 62.5249 501.41C63.6491 501.876 64.8859 501.998 66.0793 501.761C67.2727 501.524 68.3693 500.939 69.2307 500.08L74.2307 495.08C83.0595 486.25 90.0507 475.758 94.8 464.21C99.5494 452.662 101.963 440.287 101.901 427.8L101.061 262.64C101.053 261.431 100.689 260.25 100.015 259.247C99.3402 258.243 98.3854 257.459 97.2689 256.994C96.1525 256.529 94.9239 256.403 93.7363 256.632C92.5488 256.861 91.4547 257.434 90.5907 258.28Z"
          fill="#F2F2F2"
        />
        <path
          d="M11.8493 73.5301L16.0494 77.7401C24.8224 86.5099 31.7814 96.9222 36.5292 108.382C41.2769 119.842 43.7201 132.126 43.7193 144.53V311C43.7171 312.217 43.3546 313.405 42.6776 314.416C42.0006 315.427 41.0393 316.215 39.9151 316.68C38.791 317.146 37.5542 317.268 36.3608 317.031C35.1674 316.794 34.0708 316.209 33.2093 315.35L28.2093 310.35C19.3649 301.515 12.3615 291.013 7.60496 279.452C2.8484 267.891 0.433262 255.501 0.499368 243L1.33933 77.8401C1.34944 76.6269 1.71764 75.4436 2.39768 74.4388C3.07772 73.434 4.0394 72.6524 5.16197 72.1921C6.28453 71.7317 7.51803 71.6131 8.70774 71.8512C9.89745 72.0892 10.9903 72.6733 11.8493 73.5301Z"
          fill="#F2F2F2"
        />
        <path
          d="M90.5907 2.28006L86.3907 6.49006C77.6178 15.2598 70.6586 25.6722 65.9109 37.1322C61.1632 48.5923 58.7199 60.8755 58.7207 73.2801V239.73C58.723 240.947 59.0855 242.135 59.7626 243.146C60.4396 244.157 61.4007 244.945 62.5249 245.41C63.6491 245.876 64.8859 245.998 66.0793 245.761C67.2727 245.524 68.3693 244.939 69.2307 244.08L74.2307 239.08C83.0595 230.25 90.0507 219.758 94.8 208.21C99.5494 196.662 101.963 184.287 101.901 171.8L101.061 6.64006C101.053 5.43071 100.689 4.25048 100.015 3.24652C99.3402 2.24256 98.3854 1.45928 97.2689 0.994366C96.1525 0.529448 94.9239 0.403445 93.7363 0.632077C92.5488 0.860708 91.4547 1.43386 90.5907 2.28006Z"
          fill="#F2F2F2"
        />
        <path
          d="M11.8493 848.53L16.0494 852.74C24.8224 861.51 31.7814 871.922 36.5292 883.382C41.2769 894.842 43.7201 907.126 43.7193 919.53V1086C43.7171 1087.22 43.3546 1088.41 42.6776 1089.42C42.0006 1090.43 41.0393 1091.21 39.9151 1091.68C38.791 1092.15 37.5542 1092.27 36.3608 1092.03C35.1674 1091.79 34.0708 1091.21 33.2093 1090.35L28.2093 1085.35C19.3649 1076.52 12.3615 1066.01 7.60496 1054.45C2.8484 1042.89 0.433262 1030.5 0.499368 1018L1.33933 852.84C1.34944 851.627 1.71764 850.444 2.39768 849.439C3.07772 848.434 4.0394 847.652 5.16197 847.192C6.28453 846.732 7.51803 846.613 8.70774 846.851C9.89745 847.089 10.9903 847.673 11.8493 848.53Z"
          fill="#F2F2F2"
        />
        <path
          d="M90.5907 777.28L86.3907 781.49C77.6178 790.26 70.6586 800.672 65.9109 812.132C61.1632 823.592 58.7199 835.876 58.7207 848.28V1014.73C58.723 1015.95 59.0855 1017.14 59.7626 1018.15C60.4396 1019.16 61.4007 1019.94 62.5249 1020.41C63.6491 1020.88 64.8859 1021 66.0793 1020.76C67.2727 1020.52 68.3693 1019.94 69.2307 1019.08L74.2307 1014.08C83.0595 1005.25 90.0507 994.758 94.8 983.21C99.5494 971.662 101.963 959.287 101.901 946.8L101.061 781.64C101.053 780.431 100.689 779.25 100.015 778.247C99.3402 777.243 98.3854 776.459 97.2689 775.994C96.1525 775.529 94.9239 775.403 93.7363 775.632C92.5488 775.861 91.4547 776.434 90.5907 777.28Z"
          fill="#F2F2F2"
        />
        <path
          d="M11.8493 592.53L16.0494 596.74C24.8224 605.51 31.7814 615.922 36.5292 627.382C41.2769 638.842 43.7201 651.126 43.7193 663.53V830C43.7171 831.217 43.3546 832.405 42.6776 833.416C42.0006 834.427 41.0393 835.215 39.9151 835.68C38.791 836.146 37.5542 836.268 36.3608 836.031C35.1674 835.794 34.0708 835.209 33.2093 834.35L28.2093 829.35C19.3649 820.515 12.3615 810.013 7.60496 798.452C2.8484 786.891 0.433262 774.501 0.499368 762L1.33933 596.84C1.34944 595.627 1.71764 594.444 2.39768 593.439C3.07772 592.434 4.0394 591.652 5.16197 591.192C6.28453 590.732 7.51803 590.613 8.70774 590.851C9.89745 591.089 10.9903 591.673 11.8493 592.53Z"
          fill="#F2F2F2"
        />
        <path
          d="M90.5907 521.28L86.3907 525.49C77.6178 534.26 70.6586 544.672 65.9109 556.132C61.1632 567.592 58.7199 579.876 58.7207 592.28V758.73C58.723 759.947 59.0855 761.135 59.7626 762.146C60.4396 763.157 61.4007 763.945 62.5249 764.41C63.6491 764.876 64.8859 764.998 66.0793 764.761C67.2727 764.524 68.3693 763.939 69.2307 763.08L74.2307 758.08C83.0595 749.25 90.0507 738.758 94.8 727.21C99.5494 715.662 101.963 703.287 101.901 690.8L101.061 525.64C101.053 524.431 100.689 523.25 100.015 522.247C99.3402 521.243 98.3854 520.459 97.2689 519.994C96.1525 519.529 94.9239 519.403 93.7363 519.632C92.5488 519.861 91.4547 520.434 90.5907 521.28Z"
          fill="#F2F2F2"
        />
      </svg>

      <svg width="102" height="400" viewBox="0 0 102 523" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-10 hidden md:inline">
        <path
          d="M11.4099 329.53L15.6099 333.74C24.3829 342.51 31.342 352.922 36.0897 364.382C40.8374 375.842 43.2807 388.126 43.2799 400.53V567C43.2776 568.217 42.9151 569.405 42.2381 570.416C41.5611 571.427 40.5999 572.215 39.4757 572.68C38.3515 573.146 37.1147 573.268 35.9213 573.031C34.7279 572.794 33.6314 572.209 32.7699 571.35L27.7699 566.35C18.9255 557.515 11.9221 547.013 7.16555 535.452C2.40899 523.891 -0.0061909 511.501 0.059915 499L0.899911 333.84C0.910022 332.627 1.27821 331.444 1.95825 330.439C2.63829 329.434 3.5999 328.652 4.72247 328.192C5.84503 327.732 7.07855 327.613 8.26826 327.851C9.45797 328.089 10.5509 328.673 11.4099 329.53Z"
          fill="#F2F2F2"
        />
        <path
          d="M90.1503 258.28L85.9503 262.49C77.1773 271.26 70.2182 281.672 65.4705 293.132C60.7228 304.592 58.2795 316.876 58.2803 329.28V495.73C58.2826 496.947 58.6451 498.135 59.3221 499.146C59.9991 500.157 60.9603 500.945 62.0845 501.41C63.2087 501.876 64.4455 501.998 65.6389 501.761C66.8323 501.524 67.9288 500.939 68.7903 500.08L73.7903 495.08C82.6191 486.25 89.6102 475.758 94.3596 464.21C99.109 452.662 101.522 440.287 101.46 427.8L100.62 262.64C100.612 261.431 100.248 260.25 99.5741 259.247C98.8998 258.243 97.9449 257.459 96.8285 256.994C95.712 256.529 94.4834 256.403 93.2959 256.632C92.1083 256.861 91.0143 257.434 90.1503 258.28Z"
          fill="#F2F2F2"
        />
        <path
          d="M11.4099 73.5301L15.6099 77.7401C24.3829 86.5099 31.342 96.9222 36.0897 108.382C40.8374 119.842 43.2807 132.126 43.2799 144.53V311C43.2776 312.217 42.9151 313.405 42.2381 314.416C41.5611 315.427 40.5999 316.215 39.4757 316.68C38.3515 317.146 37.1147 317.268 35.9213 317.031C34.7279 316.794 33.6314 316.209 32.7699 315.35L27.7699 310.35C18.9255 301.515 11.9221 291.013 7.16555 279.452C2.40899 267.891 -0.0061909 255.501 0.059915 243L0.899911 77.8401C0.910022 76.6269 1.27821 75.4436 1.95825 74.4388C2.63829 73.434 3.5999 72.6524 4.72247 72.1921C5.84503 71.7317 7.07855 71.6131 8.26826 71.8512C9.45797 72.0892 10.5509 72.6733 11.4099 73.5301Z"
          fill="#F2F2F2"
        />
        <path
          d="M90.1503 2.28008L85.9503 6.49004C77.1773 15.2598 70.2182 25.6722 65.4705 37.1323C60.7228 48.5923 58.2795 60.8755 58.2803 73.2801V239.73C58.2826 240.947 58.6451 242.135 59.3221 243.146C59.9991 244.157 60.9603 244.945 62.0845 245.41C63.2087 245.876 64.4455 245.998 65.6389 245.761C66.8323 245.524 67.9288 244.939 68.7903 244.08L73.7903 239.08C82.6191 230.25 89.6102 219.758 94.3596 208.21C99.109 196.662 101.522 184.287 101.46 171.8L100.62 6.64007C100.612 5.43072 100.248 4.25047 99.5741 3.24651C98.8998 2.24255 97.9449 1.4593 96.8285 0.994378C95.712 0.529459 94.4834 0.403442 93.2959 0.632073C92.1083 0.860704 91.0143 1.43388 90.1503 2.28008Z"
          fill="#F2F2F2"
        />
        <path
          d="M90.1503 521.28L85.9503 525.49C77.1773 534.26 70.2182 544.672 65.4705 556.132C60.7228 567.592 58.2795 579.875 58.2803 592.28V758.73C58.2826 759.947 58.6451 761.135 59.3221 762.146C59.9991 763.157 60.9603 763.945 62.0845 764.41C63.2087 764.875 64.4455 764.998 65.6389 764.761C66.8323 764.524 67.9288 763.939 68.7903 763.08L73.7903 758.08C82.6191 749.25 89.6102 738.758 94.3596 727.21C99.109 715.661 101.522 703.287 101.46 690.8L100.62 525.64C100.612 524.431 100.248 523.25 99.5741 522.246C98.8998 521.243 97.9449 520.459 96.8285 519.994C95.712 519.529 94.4834 519.403 93.2959 519.632C92.1083 519.861 91.0143 520.434 90.1503 521.28Z"
          fill="#F2F2F2"
        />
      </svg>
      <p className="text-2xl md:text-4xl lg:text-5xl font-rubik md:mb-20 mb-10 text-center font-semibold text-yellow-400">MENGENAL LEBIH DEKAT</p>
      <div className="bg-gradient-to-b from-yellow-400 to-yellow-600 mx-10 gap-x-10 md:w-2/3 md:mx-auto rounded-3xl p-5 flex flex-col items-center md:flex-row">
        <div className="basis-[200%] relative w-full h-[35vh]">
          <Image src={"/assets/map-pulo.png"} alt="map desa pulosari" layout="fill" objectFit="contain" />
        </div>
        <div className="py-3 space-y-3">
          <p className="text-4xl md:text-7xl font-indonesiaScript text-white text-center">Pulosari</p>
          <p className="text-white indent-10 md:text-lg font-semibold text-justify">
            Terletak di Kecamatan Pangalengan, Kabupaten Bandung, Jawa Barat, Indonesia. Secara geografis, Desa Pulosari berjarak sekitar 43 kilometer di sebelah tenggara Kota Bandung. Desa ini memiliki pesona alam yang sangat menakjubkan
            dan beragam potensi yang membuatnya sangat menarik untuk dikunjungi.
          </p>
          <p className="text-white indent-10 md:text-lg font-semibold text-justify">
            Desa Pulosari dikelilingi oleh keindahan alam pegunungan yang sungguh memukau, perbukitan hijau, hamparan ladang yang luas, serta pohon-pohon rindang yang menawan menciptakan pemandangan yang sungguh menenangkan dan berhasil
            mencuri hati par pengunjung. Udara sejuk dan segar juga menambah daya tarik Desa Pulosari sebagai tujuan wisata alam yang banyak dicari. Masyarakat Desa Pulosari juga terkenal dengan keramahannya, dengan adat dan budaya yang
            kental serta hidup harmonis dengan alam sekitar. Kehidupan sederhana mereka penuh dengan nilai-nilai kearifan lokal, membuat pengunjung merasa sangat hangat dan nyaman ketika berinteraksi dengan mereka.
          </p>
        </div>
      </div>
    </div>
  );
}
