import { CodeBlock, dracula } from "react-code-blocks";

type Props = {
  number: number;
  title: string;
  code: string;
};

const NumberCodeBlock = ({ number, title, code }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center lg:flex-row">
      {/* NUMBER */}
      <div className="relative flex w-[200px] flex-col items-center justify-center lg:mr-14">
        <p className="text-[120px] text-gray-700">{number}</p>
        <p className="absolute top-[95px] text-xl">{title}</p>
      </div>

      {/* CODEBLOCK */}
      <CodeBlock
        text={code}
        language={"typescript"}
        showLineNumbers={false}
        theme={dracula}
        codeContainerStyle={{
          fontFamily: "consolas, sans-serif",
          paddingLeft: "20px",
          paddingRight: "20px",
          paddingTop: "13px",
          paddingBottom: "13px",
          width: `${window.innerWidth <= 768 ? "400px" : "550px"}`,
          fontSize: "15px",
          border: "2px solid rgb(55,65,81)",
          borderRadius: "5px",
        }}
        customStyle={{
          borderRadius: "5px",
          marginTop: "37px",
        }}
      />
    </div>
  );
};

export default NumberCodeBlock;
