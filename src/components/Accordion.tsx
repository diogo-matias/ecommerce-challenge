import Image from "next/image";
import React, { useState } from "react";

export type AccordionItem = {
    title: string;
    content: React.ReactNode;
};

type AccordionPropTypes = {
    items: AccordionItem[];
};

export default function Accordion({ items }: AccordionPropTypes) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };

    return (
        <div className="text-background flex flex-col gap-2">
            {items?.map((item: AccordionItem, index: number) => (
                <div
                    key={index}
                    className="border-b border-b-divider"
                    onClick={() => toggle(index)}
                >
                    <button className="w-full flex justify-between items-center px-4 py-3 text-left font-normal transition">
                        {item.title}
                        <Image
                            className={`transform transition-transform duration-300 ${
                                openIndex === index ? "rotate-180" : "rotate-0"
                            }`}
                            src={"arrow-down-white.svg"}
                            height={16}
                            width={16}
                            alt="arrow-down"
                        />
                    </button>
                    <div
                        className={`overflow-hidden transition-[max-height] duration-300 ${
                            openIndex === index ? "max-h-96" : "max-h-0"
                        }`}
                    >
                        <div className="px-4 pb-4 text-sm">{item.content}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}
