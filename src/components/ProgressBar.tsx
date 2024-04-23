type Props = {
  width?: string | null;
  label: string;
  percentage: string;
  time: string;
  description?: string;
  highlighted?: boolean;
};

const ProgressBar = ({
  width,
  label,
  percentage,
  time,
  description,
  highlighted,
}: Props) => {
  return (
    <div className="flex items-center justify-between gap-2 md:gap-5">
      <p
        className="text-base font-light text-gray-300 md:text-lg"
        style={{
          width: width ? width : "50px",
        }}
      >
        {label}
      </p>

      <div className="relative h-5 w-[240px] rounded-sm md:w-[450px]">
        <div
          className={`absolute left-0 flex h-5 items-center rounded-sm ${highlighted ? "bg-gray-400" : "bg-gray-700"}`}
          style={{ width: `calc(${percentage})` }}
        >
          <p className="ml-2 text-xs italic text-gray-400 md:text-sm">
            {description}
          </p>
        </div>
      </div>

      <p className="text-xs tracking-wider">{time}</p>
    </div>
  );
};

export default ProgressBar;
