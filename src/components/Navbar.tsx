import {
  bunLogoSrc,
  bunTextSrc,
  discordLogoSrc,
  githubLogoSrc,
} from "../constants";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between border-b border-t border-b-gray-700 border-t-gray-700 py-3 pl-5 md:pl-14 md:pr-7">
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
    </div>
  );
};

export default Navbar;
