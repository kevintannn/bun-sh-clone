import BigButton from "./BigButton";
import Card from "./Card";
import HeaderPill from "./HeaderPill";
import PillSpan from "./PillSpan";
import PinkHeader from "./PinkHeader";
import ProgressBar from "./ProgressBar";

const progressBars = [
  {
    label: "Bun",
    percentage: "2.9847656896837225%",
    time: "00.36s",
    highlighted: true,
  },
  {
    label: "pnpm",
    percentage: "53.32008610697135%",
    time: "06.44s",
    description: "17x slower",
  },
  {
    label: "npm",
    percentage: "87.57244576916708%",
    time: "10.58s",
    description: "29x slower",
  },
  {
    label: "Yarn",
    percentage: "100%",
    time: "12.08s",
    description: "33x slower",
  },
];

const cardsContent = [
  {
    header: "Node.js compatible",
    body: `Bun still installs your dependencies into <PillSpan size="small" color="darker" word="node_modules" /> like <PillSpan size="small" color="darker" word="npm" /> and other package managers—it just does it faster. You don't need to use the Bun runtime to use Bun as a package manager.`,
    link: null,
  },
  {
    header: "Crazy fast",
    body: `Bun uses the fastest system calls available on each operating system to make installs faster than you'd think possible.`,
    link: null,
  },
  {
    header: `Workspaces`,
    body: `Workspaces are supported out of the box. Bun reads the <PillSpan size="small" color="darker" word="workspaces" /> key from your <PillSpan size="small" color="darker" word="package.json" /> and installs dependencies for your whole monorepo.`,
    link: null,
  },
  {
    header: "Global install cache",
    body: `Download once, install anywhere. Bun only downloads a particular version of a package from npm once; future installations will copy it from the cache.`,
    link: null,
  },
  {
    header: "Binary lockfile",
    body: `After installation, Bun creates a binary <PillSpan size="small" color="darker" word="bun.lockb" /> lockfile with the resolved versions of each dependency. The binary format makes reading and parsing much faster than JSON- or Yaml-based lockfiles.`,
    link: null,
  },
  {
    header: "Familiar API",
    body: `Bun's CLI uses commands and flags that will feel familiar to any users of <PillSpan size="small" color="darker" word="npm" />, <PillSpan size="small" color="darker" word="pnpm" />, or <PillSpan size="small" color="darker" word="yarn" />.`,
    link: null,
  },
];

const BunInstall = () => {
  return (
    <div className="flex flex-col items-center justify-center py-24">
      {/* HEADER */}
      <div className="mb-24 flex flex-col items-center justify-center gap-3">
        <HeaderPill text="$ bun install" />

        <PinkHeader text="Bun is an npm-compatible package manager." />
      </div>

      {/* PROGRESS BARS */}
      <div className="mb-7 flex flex-col gap-1">
        {progressBars.map((item) => (
          <ProgressBar
            label={item.label}
            percentage={item.percentage}
            time={item.time}
            description={item.description}
            highlighted={item.highlighted}
          />
        ))}
      </div>

      {/* PROGRESS BAR FOOT */}
      <div className="mb-24 text-center">
        <p className="text-sm text-gray-400">
          Installing dependencies from cache for a Remix app.
        </p>
        <a href="#" className="text-sm text-gray-400 underline">
          View benchmark
        </a>
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

      <div className="flex items-center justify-center gap-5 px-5 md:px-0">
        <p className="text-lg">
          Replace <PillSpan word="yarn" color="darker" fontsize={"none"} /> with{" "}
          <PillSpan word="bun install" color="darker" fontsize={"none"} /> to
          get 30x faster package install.
        </p>

        <BigButton label="Try it" />
      </div>
    </div>
  );
};

export default BunInstall;
