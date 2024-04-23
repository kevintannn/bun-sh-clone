import { useState } from "react";
import {
  bunLogoSrc,
  bunTextSrc,
  discordLogoSrc,
  githubLogoSrc,
} from "../constants";
import Modal from "react-modal";

const links = [
  { label: "Docs", link: null },
  { label: "Guides", link: null },
  { label: "Blog", link: null },
];

const imgLinks = [
  { img: discordLogoSrc, link: null },
  { img: githubLogoSrc, link: null },
];

const Navbar = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <div className="flex items-center justify-between border-b border-t border-b-gray-700 border-t-gray-700 py-3 pl-5 pr-5 md:pl-14 md:pr-7">
      {/* LOGO */}
      <a href="#" className="flex gap-3">
        <img src={bunLogoSrc} className="h-14 w-14 object-contain" />
        <img src={bunTextSrc} className="h-14 w-14 object-contain" />
      </a>

      {/* NAVLINKS */}
      <div className="hidden items-center gap-7 text-lg font-semibold md:flex">
        <a href="#">Docs</a>
        <a href="#">Guides</a>
        <a href="#">Blog</a>
        <a href="#">
          <img src={discordLogoSrc} className="h-7 w-7 object-contain" />
        </a>
        <a href="#">
          <img src={githubLogoSrc} className="h-7 w-7 object-contain" />
        </a>
      </div>

      {/* HAMBURGER NAVLINKS */}
      <div
        className="cursor-pointer bg-bg md:hidden"
        onClick={() => setModalVisible(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          data-slot="icon"
          className="h-10 w-10 rounded border border-gray-700 p-1"
        >
          <path
            fill-rule="evenodd"
            d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>

      <Modal
        isOpen={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        style={{
          overlay: {
            backgroundColor: "none",
          },
          content: {
            transition: "transform 0.3s",
            transform: !modalVisible ? "translateY(-100%)" : "",
          },
        }}
        closeTimeoutMS={300}
        className="h-screen w-screen -translate-y-[100%] bg-bg transition-all duration-300 focus:translate-y-0"
      >
        <div className="flex h-20 items-center border-b border-gray-700 pl-[16px]">
          <div onClick={() => setModalVisible(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="h-10 w-10 rounded border border-gray-700 p-1 text-sm text-gray-300"
            >
              <path
                fill-rule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>

        <div className="mb-10 mt-5 flex items-center justify-center">
          <img src={bunLogoSrc} className="h-14 w-14 object-contain" />
        </div>

        <div className="flex flex-col items-center justify-center gap-2 px-7">
          {links.map((item, idx) => (
            <a
              key={idx}
              href={item.link ?? "#"}
              className="flex h-16 w-full items-center justify-center rounded-lg border border-gray-700 bg-gray-700/60 text-center text-lg font-medium text-white"
            >
              {item.label}
            </a>
          ))}

          {imgLinks.map((item, idx) => (
            <a
              key={idx}
              href={item.link ?? "#"}
              className="flex h-16 w-full items-center justify-center rounded-lg border border-gray-700 bg-gray-700/60 text-center text-lg font-medium text-white"
            >
              <img src={item.img} className="h-1/2 w-1/2 object-contain" />
            </a>
          ))}
        </div>
      </Modal>
    </div>
  );
};

export default Navbar;
