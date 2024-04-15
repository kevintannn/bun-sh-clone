import HTMLReactParser, { domToReact } from "html-react-parser";
import { ReactElement, useEffect, useState } from "react";
import PillSpan from "./PillSpan";

type Props = {
  header: string;
  body: string;
  link: string | null;
};

const Card = ({ header, body, link }: Props) => {
  const headerSplitted = header.split(/(<PillSpan.*?\/>)/);
  const bodySplitted = body.split(/(<PillSpan.*?\/>)/);

  return (
    <div
      className={`${link === null ? "" : "cursor-pointer"} mb-3 flex select-none break-inside-avoid-column flex-col gap-3 rounded-lg border border-cardborder p-5 text-gray-400 hover:border-cardborderhover hover:bg-cardbghover hover:text-white`}
    >
      <div className="text-2xl font-medium">
        {headerSplitted.map((item) => (
          <>
            {HTMLReactParser(item, {
              replace: (domNode) => {
                if (domNode.type === "tag" && domNode.name === "pillspan") {
                  const { word, color, size, fontsize } = domNode.attribs;

                  return (
                    <PillSpan
                      word={word ?? ""}
                      color={color === "darker" ? "darker" : null}
                      size={size === "small" ? "small" : null}
                      fontsize={fontsize === "none" ? "none" : null}
                    />
                  );
                }

                return item;
              },
            })}
          </>
        ))}
      </div>

      <div className="text-lg">
        {bodySplitted.map((item) => (
          <>
            {HTMLReactParser(item, {
              replace: (domNode) => {
                if (domNode.type === "tag" && domNode.name === "pillspan") {
                  const { word, color, size, fontsize } = domNode.attribs;

                  return (
                    <PillSpan
                      word={word ?? ""}
                      color={color === "darker" ? "darker" : null}
                      size={size === "small" ? "small" : null}
                      fontsize={fontsize === "none" ? "none" : null}
                    />
                  );
                }

                return item;
              },
            })}
          </>
        ))}
      </div>
    </div>
  );
};

export default Card;
