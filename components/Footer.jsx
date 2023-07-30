import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <div className="bg-[#198786] w-full flex flex-col gap-y-3 items-center p-5">
        <p className="font-indonesiaScript text-3xl text-white">Tentang Kami</p>
        <div className="flex gap-x-4">
          <Link href={"https://pulosari.desa.id/"} target="_blank">
            <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.36 12C14.44 11.34 14.5 10.68 14.5 10C14.5 9.32 14.44 8.66 14.36 8H17.74C17.9 8.64 18 9.31 18 10C18 10.69 17.9 11.36 17.74 12M12.59 17.56C13.19 16.45 13.65 15.25 13.97 14H16.92C15.9512 15.6683 14.4141 16.932 12.59 17.56ZM12.34 12H7.66C7.56 11.34 7.5 10.68 7.5 10C7.5 9.32 7.56 8.65 7.66 8H12.34C12.43 8.65 12.5 9.32 12.5 10C12.5 10.68 12.43 11.34 12.34 12ZM10 17.96C9.17 16.76 8.5 15.43 8.09 14H11.91C11.5 15.43 10.83 16.76 10 17.96ZM6 6H3.08C4.03886 4.32721 5.5748 3.06149 7.4 2.44C6.8 3.55 6.35 4.75 6 6ZM3.08 14H6C6.35 15.25 6.8 16.45 7.4 17.56C5.57862 16.9317 4.04485 15.6677 3.08 14ZM2.26 12C2.1 11.36 2 10.69 2 10C2 9.31 2.1 8.64 2.26 8H5.64C5.56 8.66 5.5 9.32 5.5 10C5.5 10.68 5.56 11.34 5.64 12M10 2.03C10.83 3.23 11.5 4.57 11.91 6H8.09C8.5 4.57 9.17 3.23 10 2.03ZM16.92 6H13.97C13.657 4.76146 13.1936 3.5659 12.59 2.44C14.43 3.07 15.96 4.34 16.92 6ZM10 0C4.47 0 0 4.5 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C3.85752 17.9997 4.95991 18.7362 6.17317 19.2388C7.38642 19.7413 8.68678 20 10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0Z"
                fill="white"
              />
            </svg>
          </Link>
          <Link href={"https://www.instagram.com/desa_pulosari_pangalengan/"} target="_blank">
            <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5.8 0H14.2C17.4 0 20 2.6 20 5.8V14.2C20 15.7383 19.3889 17.2135 18.3012 18.3012C17.2135 19.3889 15.7383 20 14.2 20H5.8C2.6 20 0 17.4 0 14.2V5.8C0 4.26174 0.61107 2.78649 1.69878 1.69878C2.78649 0.61107 4.26174 0 5.8 0ZM5.6 2C4.64522 2 3.72955 2.37928 3.05442 3.05442C2.37928 3.72955 2 4.64522 2 5.6V14.4C2 16.39 3.61 18 5.6 18H14.4C15.3548 18 16.2705 17.6207 16.9456 16.9456C17.6207 16.2705 18 15.3548 18 14.4V5.6C18 3.61 16.39 2 14.4 2H5.6ZM15.25 3.5C15.5815 3.5 15.8995 3.6317 16.1339 3.86612C16.3683 4.10054 16.5 4.41848 16.5 4.75C16.5 5.08152 16.3683 5.39946 16.1339 5.63388C15.8995 5.8683 15.5815 6 15.25 6C14.9185 6 14.6005 5.8683 14.3661 5.63388C14.1317 5.39946 14 5.08152 14 4.75C14 4.41848 14.1317 4.10054 14.3661 3.86612C14.6005 3.6317 14.9185 3.5 15.25 3.5ZM10 5C11.3261 5 12.5979 5.52678 13.5355 6.46447C14.4732 7.40215 15 8.67392 15 10C15 11.3261 14.4732 12.5979 13.5355 13.5355C12.5979 14.4732 11.3261 15 10 15C8.67392 15 7.40215 14.4732 6.46447 13.5355C5.52678 12.5979 5 11.3261 5 10C5 8.67392 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.67392 5 10 5ZM10 7C9.20435 7 8.44129 7.31607 7.87868 7.87868C7.31607 8.44129 7 9.20435 7 10C7 10.7956 7.31607 11.5587 7.87868 12.1213C8.44129 12.6839 9.20435 13 10 13C10.7956 13 11.5587 12.6839 12.1213 12.1213C12.6839 11.5587 13 10.7956 13 10C13 9.20435 12.6839 8.44129 12.1213 7.87868C11.5587 7.31607 10.7956 7 10 7Z"
                fill="white"
              />
            </svg>
          </Link>
          <Link href={"https://api.whatsapp.com/send?phone=6289671029429"} target="_blank">
            <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17.0498 2.91006C16.133 1.98399 15.041 1.24973 13.8374 0.750111C12.6339 0.250494 11.3429 -0.00448012 10.0398 5.95696e-05C4.5798 5.95696e-05 0.129805 4.45006 0.129805 9.91006C0.129805 11.6601 0.589805 13.3601 1.4498 14.8601L0.0498047 20.0001L5.2998 18.6201C6.7498 19.4101 8.3798 19.8301 10.0398 19.8301C15.4998 19.8301 19.9498 15.3801 19.9498 9.92006C19.9498 7.27006 18.9198 4.78006 17.0498 2.91006ZM10.0398 18.1501C8.5598 18.1501 7.1098 17.7501 5.8398 17.0001L5.5398 16.8201L2.4198 17.6401L3.2498 14.6001L3.0498 14.2901C2.22755 12.977 1.79094 11.4593 1.7898 9.91006C1.7898 5.37006 5.4898 1.67006 10.0298 1.67006C12.2298 1.67006 14.2998 2.53006 15.8498 4.09006C16.6173 4.85402 17.2255 5.76272 17.6392 6.76348C18.0529 7.76425 18.2638 8.83717 18.2598 9.92006C18.2798 14.4601 14.5798 18.1501 10.0398 18.1501ZM14.5598 11.9901C14.3098 11.8701 13.0898 11.2701 12.8698 11.1801C12.6398 11.1001 12.4798 11.0601 12.3098 11.3001C12.1398 11.5501 11.6698 12.1101 11.5298 12.2701C11.3898 12.4401 11.2398 12.4601 10.9898 12.3301C10.7398 12.2101 9.9398 11.9401 8.9998 11.1001C8.2598 10.4401 7.7698 9.63006 7.6198 9.38006C7.4798 9.13006 7.5998 9.00006 7.7298 8.87006C7.8398 8.76006 7.9798 8.58006 8.0998 8.44006C8.2198 8.30006 8.2698 8.19006 8.3498 8.03006C8.4298 7.86006 8.3898 7.72006 8.3298 7.60006C8.2698 7.48006 7.7698 6.26006 7.5698 5.76006C7.3698 5.28006 7.1598 5.34006 7.0098 5.33006H6.5298C6.3598 5.33006 6.0998 5.39006 5.8698 5.64006C5.6498 5.89006 5.0098 6.49006 5.0098 7.71006C5.0098 8.93006 5.8998 10.1101 6.0198 10.2701C6.1398 10.4401 7.7698 12.9401 10.2498 14.0101C10.8398 14.2701 11.2998 14.4201 11.6598 14.5301C12.2498 14.7201 12.7898 14.6901 13.2198 14.6301C13.6998 14.5601 14.6898 14.0301 14.8898 13.4501C15.0998 12.8701 15.0998 12.3801 15.0298 12.2701C14.9598 12.1601 14.8098 12.1101 14.5598 11.9901Z"
                fill="white"
              />
            </svg>
          </Link>
        </div>
        <p className="text-white font-rubik max-w-lg text-center">RH55+M92, Pulosari, Kec. Pangalengan, Kabupaten Bandung, Jawa Barat 40378, Indonesia</p>
      </div>
      <div className="bg-[#249EA0] py-2">
        <p className="w-full text-center text-sm font-rubik text-white">Developed by Tim KKN-PPM UGM - Kisah Panorama 2023</p>
      </div>
    </div>
  );
}
