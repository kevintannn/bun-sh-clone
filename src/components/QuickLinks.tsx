type Link = {
  label: string;
  url?: string | null;
};

type Props = {
  label: string;
  links: Link[];
};

const QuickLinks = ({ label, links }: Props) => {
  return (
    <div className="mb-3 flex break-inside-avoid-column flex-col gap-3">
      <p className="rounded-[4px] bg-gray-800 py-1 text-center text-sm font-medium text-gray-400">
        {label}
      </p>

      <div className="flex flex-col gap-0.5">
        {links.map((item) => (
          <a
            href={item.url ?? "#"}
            className="text-lg text-gray-400 hover:underline w-fit"
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default QuickLinks;
