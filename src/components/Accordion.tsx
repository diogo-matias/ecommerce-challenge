import Image from "next/image";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

export type AccordionItem = {
  title: string;
  content?: React.ReactNode;
};

type AccordionPropTypes = {
  items: AccordionItem[];
  textColor?: string;
  arrowColor?: "black" | "white";
};

export default function Accordion({
  items,
  textColor = "background",
  arrowColor = "white",
}: AccordionPropTypes) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number, item: AccordionItem) => {
    if (!item.content) {
      return;
    }

    setOpenIndex((prev) => (prev === index ? null : index));
  };

  function renderContent(content: React.HTMLElementType, index: number) {
    if (!content) {
      return null;
    }

    return (
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ${
          openIndex === index ? "max-h-[999px]" : "max-h-0"
        }`}
      >
        <div className="px-4 pb-4 text-sm">{content}</div>
      </div>
    );
  }

  return (
    <div className={twMerge([`text-${textColor} flex flex-col gap-7`])}>
      {items?.map((item: AccordionItem, index: number) => (
        <div
          key={`${item.title}-${index}`}
          className="border-b border-b-divider last:border-none"
        >
          <button
            onClick={() => toggle(index, item)}
            className="w-full flex justify-between items-center px-4 py-3 text-left font-normal transition "
          >
            {item.title}
            {item.content && (
              <Image
                className={`transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
                src={
                  arrowColor === "white"
                    ? "/arrow-down-white.svg"
                    : "/arrow-down.svg"
                }
                height={16}
                width={16}
                alt="arrow-down"
              />
            )}
          </button>
          {renderContent(item.content, index)}
        </div>
      ))}
    </div>
  );
}
