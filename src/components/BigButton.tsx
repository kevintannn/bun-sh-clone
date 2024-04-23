type Props = {
  label: string;
  type?: "default" | "light";
};

const BigButton = ({ label, type = "default" }: Props) => {
  return (
    <>
      {type === "default" && (
        <button className="w-full rounded-md border border-white p-4 text-lg font-semibold hover:bg-secondpillhover md:w-fit md:px-12">
          {label}
        </button>
      )}

      {type === "light" && (
        <button className="w-full rounded-md bg-white/80 p-4 text-lg font-semibold text-bg hover:bg-white/90 md:w-fit md:px-12">
          {label}
        </button>
      )}
    </>
  );
};

export default BigButton;
