import BigButton from "./BigButton";
import NumberCodeBlock from "./NumberCodeBlock";

const codes = [
  {
    title: "INSTALL BUN",
    code: `powershell -c "irm bun.sh/install.ps1 | iex"`,
  },
  {
    title: "WRITE YOUR CODE",
    code: `const server = Bun.serve({
  port: 3000,
  fetch(request) {
    return new Response("Welcome to Bun!");
  },
});

console.log(\`Listening on localhost:\${server.port}\`);`,
  },
  {
    title: "RUN THE FILE",
    code: `bun index.tsx`,
  },
];

const BunStep = () => {
  return (
    <div className="flex flex-col items-center justify-center py-24">
      <div className="mb-24 flex flex-col items-center justify-center gap-5">
        {codes.map((item, idx) => (
          <NumberCodeBlock
            key={idx}
            number={idx + 1}
            title={item.title}
            code={item.code}
          />
        ))}
      </div>

      <div className="flex items-center justify-center gap-5">
        {window.innerWidth > 768 && (
          <BigButton label="Install Bun" type="light" />
        )}
        <BigButton label="Quick Start" />
      </div>
    </div>
  );
};

export default BunStep;
