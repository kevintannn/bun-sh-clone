import { useEffect, useState } from "react";

const footerLinks = [
  {
    label: "RESOURCES",
    links: [
      { label: "Docs", link: null },
      { label: "Guides", link: null },
      { label: "Discord", link: null },
      { label: "GitHub", link: null },
      { label: "Blog", link: null },
    ],
  },
  {
    label: "TOOLKIT",
    links: [
      { label: "Runtime", link: null },
      { label: "Package manager", link: null },
      { label: "Test runner", link: null },
      { label: "Bundler", link: null },
      { label: "Package runner", link: null },
    ],
  },
  {
    label: "PROJECT",
    links: [
      { label: "Bun 1.0", link: null },
      { label: "Roadmap", link: null },
      { label: "Contributing", link: null },
      { label: "License", link: null },
    ],
  },
];

const Footer = () => {
  const [stateFooterLinks, setStateFooterLinks] = useState(footerLinks);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setStateFooterLinks(footerLinks.slice(0, 2));
    }
  }, []);

  return (
    <div className="mx-auto flex flex-col items-center justify-center gap-20 py-16 md:max-w-screen-lg">
      <div className="flex w-2/3 justify-between md:w-full">
        {stateFooterLinks.map((item, idx) => (
          <FooterColumn key={idx} label={item.label} links={item.links} />
        ))}
      </div>

      <div className="px-5 text-center">
        <p className="text-gray-500">
          Steamed with ❤️ in Kisaran, Sumatra Utara, Indonesia
        </p>
        <a href="https://bun.sh" target="_blank" className="underline">
          Refer to original website →
        </a>
      </div>
    </div>
  );
};

export default Footer;

type FooterColumnLinks = {
  label: string;
  link: string | null;
};

type FooterColumnProps = {
  label: string;
  links: FooterColumnLinks[];
};

const FooterColumn = ({ label, links }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm font-medium text-gray-600">{label}</p>

      <div className="flex flex-col gap-1">
        {links.map((item, idx) => (
          <a
            key={idx}
            href={item.link ?? "#"}
            className="text-lg text-gray-400 "
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
};
