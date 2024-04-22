import PinkHeader from "./PinkHeader";
import QuickLinks from "./QuickLinks";
import ViewGuideCard from "./ViewGuideCard";

const cardsContent = [
  {
    tag: "Ecosystem",
    header: "Build a frontend using Vite and Bun",
    link: null,
  },
  {
    tag: "Runtime",
    header: "Install TypeScript declarations for Bun",
    link: null,
  },
  {
    tag: "Streams",
    header: "Convert a ReadableStream to a string with Bun",
    link: null,
  },
];

const quickLinks = [
  {
    label: "ECOSYSTEM",
    links: [
      { label: "Use React and JSX", url: null },
      { label: "Use EdgeDB with Bun", url: null },
      { label: "Use Prisma with Bun", url: null },
      { label: "Create a Discord bot", url: null },
      { label: "Use Drizzle ORM with Bun", url: null },
    ],
  },
  {
    label: "HTTP",
    links: [
      { label: "Use React and JSX", url: null },
      { label: "Use EdgeDB with Bun", url: null },
      { label: "Use Prisma with Bun", url: null },
      { label: "Create a Discord bot", url: null },
      { label: "Use Drizzle ORM with Bun", url: null },
      { label: "Use Prisma with Bun", url: null },
      { label: "Create a Discord bot", url: null },
      { label: "Use Drizzle ORM with Bun", url: null },
    ],
  },
  {
    label: "PACKAGE MANAGER",
    links: [
      { label: "Use React and JSX", url: null },
      { label: "Use EdgeDB with Bun", url: null },
      { label: "Use Prisma with Bun", url: null },
      { label: "Create a Discord bot", url: null },
      { label: "Use Drizzle ORM with Bun", url: null },
    ],
  },
  {
    label: "PROCESSES",
    links: [
      { label: "Use React and JSX", url: null },
      { label: "Use EdgeDB with Bun", url: null },
      { label: "Use Prisma with Bun", url: null },
      { label: "Create a Discord bot", url: null },
      { label: "Use Drizzle ORM with Bun", url: null },
      { label: "Create a Discord bot", url: null },
      { label: "Use Drizzle ORM with Bun", url: null },
    ],
  },
  {
    label: "READING FILES",
    links: [
      { label: "Use React and JSX", url: null },
      { label: "Use EdgeDB with Bun", url: null },
      { label: "Use Prisma with Bun", url: null },
      { label: "Create a Discord bot", url: null },
      { label: "Use Drizzle ORM with Bun", url: null },
      { label: "Use EdgeDB with Bun", url: null },
      { label: "Use Prisma with Bun", url: null },
      { label: "Create a Discord bot", url: null },
      { label: "Use Drizzle ORM with Bun", url: null },
      { label: "Use Drizzle ORM with Bun", url: null },
      { label: "Use Drizzle ORM with Bun", url: null },
    ],
  },
  {
    label: "RUNTIME",
    links: [
      { label: "Use React and JSX", url: null },
      { label: "Use EdgeDB with Bun", url: null },
      { label: "Use Prisma with Bun", url: null },
      { label: "Create a Discord bot", url: null },
      { label: "Use Drizzle ORM with Bun", url: null },
    ],
  },
  {
    label: "STREAMS",
    links: [
      { label: "Use React and JSX", url: null },
      { label: "Use EdgeDB with Bun", url: null },
      { label: "Use Prisma with Bun", url: null },
      { label: "Create a Discord bot", url: null },
      { label: "Use Drizzle ORM with Bun", url: null },
    ],
  },
  {
    label: "TEST RUNNERS",
    links: [
      { label: "Use React and JSX", url: null },
      { label: "Use EdgeDB with Bun", url: null },
      { label: "Use Prisma with Bun", url: null },
      { label: "Create a Discord bot", url: null },
      { label: "Use Drizzle ORM with Bun", url: null },
    ],
  },
  {
    label: "UTILITIES",
    links: [
      { label: "Use React and JSX", url: null },
      { label: "Use EdgeDB with Bun", url: null },
      { label: "Use Prisma with Bun", url: null },
      { label: "Create a Discord bot", url: null },
      { label: "Use Drizzle ORM with Bun", url: null },
      { label: "Use Prisma with Bun", url: null },
      { label: "Create a Discord bot", url: null },
      { label: "Use Drizzle ORM with Bun", url: null },
    ],
  },
  {
    label: "WEBSOCKET",
    links: [
      { label: "Use React and JSX", url: null },
      { label: "Use EdgeDB with Bun", url: null },
      { label: "Use Prisma with Bun", url: null },
      { label: "Create a Discord bot", url: null },
      { label: "Use Drizzle ORM with Bun", url: null },
    ],
  },
  {
    label: "WRITING FILES",
    links: [
      { label: "Use React and JSX", url: null },
      { label: "Use EdgeDB with Bun", url: null },
      { label: "Use Prisma with Bun", url: null },
      { label: "Create a Discord bot", url: null },
      { label: "Use Drizzle ORM with Bun", url: null },
    ],
  },
];

const LearnByExample = () => {
  return (
    <div className="flex flex-col items-center justify-center py-24">
      {/* HEADER */}
      <div className="mb-16 flex flex-col items-center justify-center gap-5 text-center">
        <PinkHeader text="Learn by example." />

        <p className="text-xl text-gray-400">
          Our guides break down how to perform common tasks with Bun.
        </p>
      </div>

      {/* CARDS */}
      <div className="mb-16 grid max-w-screen-xl grid-cols-1 gap-5 px-5 lg:grid-cols-3">
        {cardsContent.map((item) => (
          <ViewGuideCard tag={item.tag} header={item.header} link={item.link} />
        ))}
      </div>

      {/* LINKS */}
      <div className="w-full max-w-screen-xl gap-5 px-5 sm:columns-1 md:columns-2 lg:columns-3">
        {quickLinks.map((item) => (
          <QuickLinks label={item.label} links={item.links} />
        ))}
      </div>
    </div>
  );
};

export default LearnByExample;
