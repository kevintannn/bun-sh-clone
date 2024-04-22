import { CodeBlock, dracula } from "react-code-blocks";
import Card from "./Card";
import HoverPill from "./HoverPill";
import PillSpan from "./PillSpan";
import PinkHeader from "./PinkHeader";
import { useState } from "react";
import HeaderPill from "./HeaderPill";

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

const bunFunctions = [
  {
    title: "Start an HTTP server",
    code: `const server = Bun.serve({
  port: 3000,
  fetch(request) {
    return new Response("Welcome to Bun!");
  },
});

console.log(\`Listening on localhost:\${server.port}\`);`,
  },
  {
    title: "Start a WebSocket Server",
    code: `const server = Bun.serve<{ authToken: string; }>({
  fetch(req, server) {
    // use a library to parse cookies
    const cookies = parseCookies(req.headers.get("Cookie"));
    server.upgrade(req, {
      data: { authToken: cookies['X-Token'] },
    });
  },
  websocket: {
    // handler called when a message is received
    async message(ws, message) {
      console.log(\`Received: \${message}\`);
      const user = getUserFromToken(ws.data.authToken);
      await db.Message.insert({
        message: String(message),
        userId: user.id,
      });
    },
  },
});

console.log(\`Listening on localhost:\${server.port}\`);`,
  },
  {
    title: "Read and write files",
    code: `const file = Bun.file(import.meta.dir + '/package.json'); // BunFile

const pkg = await file.json(); // BunFile extends Blob
pkg.name = 'my-package';
pkg.version = '1.0.0';

await Bun.write(file, JSON.stringify(pkg, null, 2));`,
  },
  {
    title: "Hash a password",
    code: `const password = "super-secure-pa$$word";

const hash = await Bun.password.hash(password);
// => $argon2id$v=19$m=65536,t=2,p=1$tFq+9AVr1bfPxQdh...

const isMatch = await Bun.password.verify(password, hash);
// => true`,
  },
  {
    title: "Bundle for the browser",
    code: `await Bun.build({
  entrypoints: ["./index.tsx"],
  outdir: "./build",
  minify: true,
  plugins: [ /* ... */ ]
})`,
  },
  {
    title: "Write a test",
    code: `import { describe, expect, test, beforeAll } from "bun:test";

beforeAll(() => {
  // setup tests
});

describe("math", () => {
  test("addition", () => {
    expect(2 + 2).toBe(4);
    expect(7 + 13).toMatchSnapshot();
  });
});`,
  },
  {
    title: "File system routing",
    code: `const router = new Bun.FileSystemRouter({
  style: "nextjs",
  dir: "/path/to/pages"
});

const match = router.match("/blog/my-cool-post");
match.filePath; // "/path/to/pages/blog/[slug].tsx",
match.kind; // "dynamic"
match.params; // { slug: "my-cool-post" }`,
  },
  {
    title: "Read a stream",
    code: `const response = await fetch("https://bun.sh");

await Bun.readableStreamToArrayBuffer(response.body); // => ArrayBuffer
await Bun.readableStreamToBlob(response.body); // => Blob
await Bun.readableStreamToJSON(response.body); // => object
await Bun.readableStreamToText(response.body); // => string
await Bun.readableStreamToArray(response.body); // => unknown[]`,
  },
  {
    title: "Run a shell script",
    code: `import { $ } from 'bun';

// Run a cross-platform shell command
await $\`echo "Hello, world!"\`;

const response = await fetch("https://example.com");

// Pipe the response body to gzip
const data = await $\`gzip < \${response}\`.arrayBuffer();`,
  },
  {
    title: "Call a C function",
    code: `import { dlopen, FFIType, suffix } from "bun:ffi";
    
// \`suffix\` is either "dylib", "so", or "dll" depending on the platform
const path = \`libsqlite3.\${suffix}\`;

const {
  symbols: {
    sqlite3_libversion, // the function to call
  },
} = dlopen(path, {
  sqlite3_libversion: {
    args: [], // no arguments
    returns: FFIType.cstring, // returns a string
  },
});

console.log(\`SQLite 3 version: \${sqlite3_libversion()}\`);`,
  },
];

const BunRun = () => {
  const [clickedPillIdx, setClickedPillIdx] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center py-24">
      {/* HEADER */}
      <div className="mb-24 flex flex-col items-center justify-center gap-3">
        <HeaderPill text="$ bun run" />

        <PinkHeader text="Bun is a JavaScript runtime." />
      </div>

      {/* CONTENT */}
      <div className="mb-24 flex w-full flex-col gap-7 px-4 text-xl text-gray-300 md:w-1/2 md:px-0">
        <p className="">
          Bun is a new JavaScript runtime built from scratch to serve the modern
          JavaScript ecosystem. It has three major design goals:
        </p>

        <ul className="flex list-disc flex-col gap-5 pl-5">
          <li>
            <span className="font-black">Speed.</span> Bun starts fast and runs
            fast. It extends JavaScriptCore, the performance-minded JS engine
            built for Safari. Fast start times mean fast apps and fast APIs.
          </li>

          <li>
            <span className="font-black">Elegant APIs.</span> Bun provides a
            minimal set of highly-optimimized APIs for performing common tasks,
            like starting an HTTP server and writing files.
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

      {/* CARDS */}
      <div className="mb-24 max-w-screen-xl gap-3 px-5 lg:columns-2 xl:columns-3">
        {cardsContent.map((item, idx) => (
          <Card
            key={idx}
            header={item.header}
            body={item.body}
            link={item.link}
          />
        ))}
      </div>

      {/* API */}
      <div className="flex flex-col items-center justify-center gap-10">
        <PinkHeader text="The APIs you need. Baked in." />

        <div className="flex max-w-[90%] flex-wrap items-center justify-center gap-3 md:max-w-screen-md">
          {bunFunctions.map((item, idx) => (
            <HoverPill
              key={idx}
              text={item.title}
              setClickedPillIdx={() => setClickedPillIdx(idx)}
            />
          ))}
        </div>

        <div className="overflow-x-hidden">
          <CodeBlock
            text={bunFunctions[clickedPillIdx].code}
            language={"typescript"}
            showLineNumbers={false}
            theme={dracula}
            codeContainerStyle={{
              fontFamily: "consolas, sans-serif",
              padding: "20px",
              width: `${window.innerWidth <= 768 ? "400px" : "700px"}`,
              fontSize: "13px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BunRun;
