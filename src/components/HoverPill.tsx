const HoverPill = ({
  text,
  setClickedPillIdx,
}: {
  text: string;
  setClickedPillIdx: () => void;
}) => {
  return (
    <div
      className="bg-secondpill hover:bg-secondpillhover cursor-pointer rounded-md p-2 px-6 text-mypink"
      onClick={setClickedPillIdx}
    >
      {text}
    </div>
  );
};

export default HoverPill;
