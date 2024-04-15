import Card from "./Card";
import PillSpan from "./PillSpan";

const cardsContent = [
  {
    header: "Drop-in Node.js compability",
    body: `Bun aims to be a drop-in replacement for Node.js. It implements Node's module resolution algorithm, globals like <PillSpan size="small" color="darker" word="Buffer" /> <span>and</span> <PillSpan size="small" color="darker" word="process" />, and built-in modules like <PillSpan size="small" color="darker" word="fs" /> and <PillSpan size="small" color="darker" word="path" />. Click to track Bun's progress towards full compability.`,
    link: null,
  },
  {
    header: "Fast running performance",
    body: `Bun extends the JavaScriptCore engine—the performance-minded JS engine built for Safari—with native-speed functionality implemented in Zig.`,
    link: null,
  },
  {
    header: `Work with <PillSpan word="node_modules" fontsize="none" />`,
    body: `With Bun, you still use <PillSpan size="small" color="darker" word="package.json" /> to manage your dependencies. Use Bun's native npm client to see just how fast installing dependencies can be.`,
    link: null,
  },
  {
    header: "No more module madness",
    body: `Forget the complicated rules around CommonJS, ESM, file extensions, resolution priority, and <PillSpan size="small" color="darker" word="package.json" /> configurations. With Bun, it just works.`,
    link: null,
  },
  {
    header: "Drop-in Node.js compability",
    body: `Bun aims to be a drop-in replacement for Node.js. It implements Node's module resolution algorithm, globals like <PillSpan size="small" color="darker" word="Buffer" /> <span>and</span> <PillSpan size="small" color="darker" word="process" />, and built-in modules like <PillSpan size="small" color="darker" word="fs" /> and <PillSpan size="small" color="darker" word="path" />. Click to track Bun's progress towards full compability.`,
    link: null,
  },
  {
    header: "Drop-in Node.js compability",
    body: `Bun aims to be a drop-in replacement for Node.js. It implements Node's module resolution algorithm, globals like <PillSpan size="small" color="darker" word="Buffer" /> <span>and</span> <PillSpan size="small" color="darker" word="process" />, and built-in modules like <PillSpan size="small" color="darker" word="fs" /> and <PillSpan size="small" color="darker" word="path" />. Click to track Bun's progress towards full compability.`,
    link: null,
  },
  {
    header: "Drop-in Node.js compability",
    body: `Bun aims to be a drop-in replacement for Node.js. It implements Node's module resolution algorithm, globals like <PillSpan size="small" color="darker" word="Buffer" /> <span>and</span> <PillSpan size="small" color="darker" word="process" />, and built-in modules like <PillSpan size="small" color="darker" word="fs" /> and <PillSpan size="small" color="darker" word="path" />. Click to track Bun's progress towards full compability.`,
    link: null,
  },
  {
    header: "Drop-in Node.js compability",
    body: `Bun aims to be a drop-in replacement for Node.js. It implements Node's module resolution algorithm, globals like <PillSpan size="small" color="darker" word="Buffer" /> <span>and</span> <PillSpan size="small" color="darker" word="process" />, and built-in modules like <PillSpan size="small" color="darker" word="fs" /> and <PillSpan size="small" color="darker" word="path" />. Click to track Bun's progress towards full compability.`,
    link: null,
  },
];

const Cards = () => {
  return (
    <div className="flex flex-col items-center justify-center py-24">
      <div className="flex flex-col items-center justify-center px-28">
        {/* HEADER */}
        <div className="mb-24 flex flex-col items-center justify-center gap-3">
          <div className="rounded-md bg-gray-700/60 p-2 px-4 text-lg tracking-widest">
            $ bun run
          </div>

          <h1 className="text-5xl font-bold text-mypink drop-shadow-[2px_2px_1px_rgba(244,114,182,0.5)]">
            Bun is a JavaScript runtime.
          </h1>
        </div>

        {/* CONTENT */}
        <div className="mb-24 flex w-1/2 flex-col gap-7 text-xl text-gray-300">
          <p className="">
            Bun is a new JavaScript runtime built from scratch to serve the
            modern JavaScript ecosystem. It has three major design goals:
          </p>

          <ul className="flex list-disc flex-col gap-5 pl-5">
            <li>
              <span className="font-black">Speed.</span> Bun starts fast and
              runs fast. It extends JavaScriptCore, the performance-minded JS
              engine built for Safari. Fast start times mean fast apps and fast
              APIs.
            </li>

            <li>
              <span className="font-black">Elegant APIs.</span> Bun provides a
              minimal set of highly-optimimized APIs for performing common
              tasks, like starting an HTTP server and writing files.
            </li>

            <li>
              <span className="font-black">Cohesive DX.</span> Bun is a complete
              toolkit for building JavaScript apps, including a package manager,
              test runner, and bundler.
            </li>
          </ul>

          <p>
            Bun is designed as a drop-in replacement for Node.js. It natively
            implements hundreds of Node.js and Web APIs, including{" "}
            <PillSpan word="fs" />, <PillSpan word="path" />,{" "}
            <PillSpan word="Buffer" /> and more.
          </p>

          <p>
            The goal of Bun is to run most of the world's server-side JavaScript
            and provide tools to improve performance, reduce complexity, and
            multiply developer productivity.
          </p>
        </div>
      </div>

      {/* CARDS */}
      <div className="max-w-screen-xl gap-3 lg:columns-2 xl:columns-3">
        {cardsContent.map((item, idx) => (
          <Card
            key={idx}
            header={item.header}
            body={item.body}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
