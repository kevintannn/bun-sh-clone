type Props = {
  word: string;
  size?: "small" | null;
  color?: "darker" | null;
  fontsize?: "none" | null;
};

const PillSpan = ({ word, size, color, fontsize }: Props) => {
  return (
    <code
      className={`${size === "small" ? "px-1" : "p-1 px-2 "} ${color === "darker" ? "border border-gray-700 bg-darkpill" : "bg-gray-700/60"} rounded-md ${fontsize === "none" ? "" : "text-base"}`}
    >
      {word}
    </code>
  );
};

export default PillSpan;
