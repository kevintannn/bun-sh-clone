type Props = {
  label: string;
  type?: "default" | "light";
};

const BigButton = ({ label, type = "default" }: Props) => {
  return (
    <>
      {type === "default" && (
        <button className="rounded-md border border-white p-4 px-12 text-lg font-semibold hover:bg-secondpillhover">
          {label}
        </button>
      )}

      {type === "light" && (
        <button className="rounded-md bg-white/80 p-4 px-12 text-lg font-semibold text-bg hover:bg-white/90">
          {label}
        </button>
      )}
    </>
  );
};

export default BigButton;
