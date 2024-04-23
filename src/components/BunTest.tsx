import BigButton from "./BigButton";
import Card from "./Card";
import HeaderPill from "./HeaderPill";
import PillSpan from "./PillSpan";
import PinkHeader from "./PinkHeader";
import ProgressBar from "./ProgressBar";

const progressBars = [
  {
    label: "Bun",
    percentage: "3.094725511302476%",
    time: "00.23s",
    highlighted: true,
  },
  {
    label: "Vitest",
    percentage: "25.753498385360604%",
    time: "01.91s",
    description: "5x slower",
  },
  {
    label: "Jest+SWC",
    percentage: "41.254036598493%",
    time: "03.07s",
    description: "8x slower",
  },
  {
    label: "Jest+tsjest",
    percentage: "90.31216361679225%",
    time: "06.71s",
    description: "18x slower",
  },
  {
    label: "Jest+Babel",
    percentage: "100%",
    time: "07.43s",
    description: "20x slower",
  },
];

const cardsContent = [
  {
    header: "Jest-compatible syntax",
    body: `Bun provides a Jest-style <PillSpan size="small" color="darker" word="expect()" /> API. Switch to <PillSpan size="small" color="darker" word="bun text" /> with no code changes.`,
    link: null,
  },
  {
    header: "Crazy fast",
    body: `Bun's fast startup times shine in the test runner. You won't believe how much faster your tests will run.`,
    link: null,
  },
  {
    header: `Lifecycle hooks`,
    body: `Run setup and teardown code per-test with <PillSpan size="small" color="darker" word="beforeEach" />/<PillSpan size="small" color="darker" word="afterEach" /> or per-file with <PillSpan size="small" color="darker" word="beforeAll" />/<PillSpan size="small" color="darker" word="afterAll" />.`,
    link: null,
  },
  {
    header: "Snapshot testing",
    body: `Full support for on-disk snapshot testing with <PillSpan size="small" color="darker" word=".toMatchSnapshot()" />. Overwrite snapshots with the <PillSpan size="small" color="darker" word="--update-snapshots" /> flag.`,
    link: null,
  },
  {
    header: "DOM APIs",
    body: `Simulate DOM and browser APIs in your tests using happy-dom.`,
    link: null,
  },
  {
    header: "Watch mode",
    body: `Use the <PillSpan size="small" color="darker" word="--watch" /> flag to re-run tests when files change using Bun's instantaneous watch mode.`,
    link: null,
  },
  {
    header: "Function mocks",
    body: `Mock functions with <PillSpan size="small" color="darker" word="mock()" /> or spy on methods with <PillSpan size="small" color="darker" word="spyOn()" />.`,
    link: null,
  },
];

const BunTest = () => {
  return (
    <div className="flex flex-col items-center justify-center py-24">
      {/* HEADER */}
      <div className="mb-24 flex w-5/6 flex-col items-center justify-center gap-3 md:w-1/2">
        <HeaderPill text="$ bun test" />

        <PinkHeader text="Bun is a test runner that makes the rest look like test walkers." />
      </div>

      {/* PROGRESS BARS */}
      <div className="mb-7 flex flex-col gap-1">
        {progressBars.map((item, idx) => (
          <ProgressBar
            key={idx}
            width={window.innerWidth <= 768 ? "80px" : "120px"}
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
          Running the test suite for{" "}
          <a href="#" className="underline">
            Zod
          </a>
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
        <p className="text-base md:text-lg">
          Replace <PillSpan word="jest" color="darker" fontsize={"none"} /> with{" "}
          <PillSpan word="bun test" color="darker" fontsize={"none"} /> to get
          10-30x faster package install.
        </p>

        <BigButton label="Try it" />
      </div>
    </div>
  );
};

export default BunTest;
