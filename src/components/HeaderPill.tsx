const HeaderPill = ({ text }: { text: string }) => {
  return (
    <div className="rounded-md bg-gray-700/60 p-2 px-4 text-lg tracking-widest">
      <code>{text}</code>
    </div>
  );
};

export default HeaderPill;
