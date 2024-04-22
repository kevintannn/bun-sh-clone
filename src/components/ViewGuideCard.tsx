type Props = {
  tag: string;
  header: string;
  link?: string | null;
};

const ViewGuideCard = ({ tag, header, link }: Props) => {
  return (
    <a
      href={link ?? "#"}
      className="flex w-full flex-col justify-between gap-7 rounded-lg border-2 border-gray-700 bg-bg p-5 text-gray-300 hover:border-gray-600 hover:text-white"
    >
      <div>
        <p className="text-gray-500">{tag}</p>
        <p className="text-lg font-medium">{header}</p>
      </div>

      <p className="text-gray-500">View guide</p>
    </a>
  );
};

export default ViewGuideCard;
