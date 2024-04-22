const PinkHeader = ({ text }: { text: string }) => {
  return (
    <h1 className="text-center text-4xl font-bold text-mypink drop-shadow-[2px_2px_1px_rgba(244,114,182,0.5)] md:text-5xl">
      {text}
    </h1>
  );
};

export default PinkHeader;
