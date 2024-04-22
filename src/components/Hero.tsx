import { useState } from "react";
import BunServeImg from "../assets/bun-serve.png";
import WebSocketImg from "../assets/websocket.png";
import BunSqliteImg from "../assets/bun-sqlite.png";

const tabs = [
  {
    title: "Linux & macOS",
    slug: "linux",
    code: "$ curl -fsSL https://bun.sh/install | bash",
  },
  {
    title: "Windows",
    slug: "windows",
    code: '> powershell -c "irm bun.sh/install.ps1 | iex"',
  },
];

const graphTabs = [
  {
    title: "Bun.serve()",
    slug: "bun-serve",
    header: "Server-side rendering React",
    body: "HTTP requests per second (Linux x64)",
    img: BunServeImg,
  },
  {
    title: "WebSocket",
    slug: "websocket",
    header: "WebSocket chat server",
    body: "Messages sent per second (Linux x64, 32 clients)",
    img: WebSocketImg,
  },
  {
    title: "bun:sqlite",
    slug: "bun-sqlite",
    header: "Load a huge table",
    body: "Average queries per second",
    img: BunSqliteImg,
  },
];

const Hero = () => {
  const [activeTab, setActiveTab] = useState("linux");
  const [activeGraphTab, setActiveGraphTab] = useState("bun-serve");

  return (
    <div className="flex flex-col py-24 md:flex-row md:items-center md:justify-between">
      {/* LEFT */}
      <div className="mb-24 flex flex-col gap-8 px-6 md:mb-0 md:w-[55%] md:px-0">
        {/* PILL and HEADER */}
        <div className="space-y-3">
          {/* PILL */}
          <a
            href="#"
            className="rounded-full bg-gray-700/60 px-5 py-2 text-gray-300 hover:bg-gray-700"
          >
            Bun v1.1.3 is here!
          </a>

          {/* HEADER */}
          <h1 className="text-4xl font-bold md:text-6xl">
            Bun is a fast JavaScript package manager
          </h1>
        </div>

        {/* DESCRIPTION */}
        <p className="text-xl text-gray-300">
          Develop, test, run, and bundle JavaScript & TypeScript projects—all
          with Bun. Bun is an all-in-one JavaScript runtime & toolkit designed
          for speed, complete with a bundler, test runner, and
          Node.js-compatible package manager.
        </p>

        {/* INSTALL BUN */}
        <div className="hidden flex-col gap-3 md:flex">
          {/* HEADER */}
          <h1 className="text-xl font-semibold">Install Bun v1.1.3</h1>

          {/* TAB & CODE */}
          <div>
            {/* TAB */}
            <div className="flex cursor-pointer items-center">
              {tabs.map((item, idx) => (
                <div
                  key={idx}
                  className={`${activeTab === item.slug ? "bg-tabactive text-black" : "bg-tab"} rounded-tl-lg rounded-tr-lg border-2 border-tabactive px-4 py-2 `}
                  onClick={() => {
                    setActiveTab(item.slug);
                  }}
                >
                  {item.title}
                </div>
              ))}
            </div>

            {/* CODE */}
            <div className="rounded-bl-md rounded-br-md rounded-tr-md border-2 border-tabactive bg-code px-4 py-6 tracking-widest">
              {tabs.find((item) => item.slug === activeTab)?.code}
            </div>
          </div>

          {/* VIEW SOURCE */}
          <a href="#" className="text-sm text-gray-400">
            View source
          </a>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex flex-col items-center justify-end gap-5">
        {/* TAB */}
        <div className="flex w-full cursor-pointer items-center md:w-fit">
          {graphTabs.map((item, idx) => (
            <div
              key={idx}
              className={`${activeGraphTab === item.slug ? "rounded-tl-lg rounded-tr-lg border-b-gray-300 bg-gray-700/60" : "border-b-gray-800"} flex w-full items-center justify-center border-b-[3px] p-5 hover:rounded-tl-lg hover:rounded-tr-lg hover:border-b-gray-300 hover:bg-gray-700/60 md:w-[130px]`}
              onClick={() => setActiveGraphTab(item.slug)}
            >
              {item.title}
            </div>
          ))}
        </div>

        {/* HEADER & DESCRIPTION */}
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-semibold">
            {graphTabs.find((item) => item.slug === activeGraphTab)?.header}
          </h1>
          <p className="text-gray-400">
            {graphTabs.find((item) => item.slug === activeGraphTab)?.body}
          </p>
        </div>

        {/* GRAPH IMAGE */}
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="h-60">
            <img
              src={graphTabs.find((item) => item.slug === activeGraphTab)?.img}
              className="h-full w-full object-contain"
            />
          </div>

          <a href="#" className="text-sm text-gray-400">
            View benchmark
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
