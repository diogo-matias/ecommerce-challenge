import { useState } from "react";
import { Option } from "./Header";
import Logo from "./Logo";
import Image from "next/image";

type SidebarProps = {
    isOpen: boolean;
    onClose: () => void;
    options: Option[];
};

export default function Sidebar({ isOpen, onClose, options }: SidebarProps) {
    function handleOverlayClick(event: React.MouseEvent<HTMLDivElement>) {
        if (event.target === event.currentTarget) {
            onClose();
        }
    }

    function renderOptions() {
        return (
            <nav className="py-10 ">
                <ul className="flex flex-col">
                    {options.map((item) => {
                        return (
                            <li
                                key={item.label}
                                className="cursor-pointer py-4 px-5 hover:bg-primary-light hover:text-background transition-all duration-200"
                            >
                                {item.label}
                            </li>
                        );
                    })}
                </ul>
            </nav>
        );
    }

    return (
        <div
            className={`fixed bg-[rgba(0,0,0,0.2)] bottom-0 top-0 left-0 right-0 z-10 transition-opacity duration-300 ${
                isOpen
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
            }`}
            onClick={handleOverlayClick}
        >
            <div
                className={`
                        fixed bg-background top-0 left-0 bottom-0 z-20 w-[90vw]
                        transition-transform duration-300
                        ${isOpen ? "translate-x-0" : "-translate-x-full"}
                    `}
            >
                <div className="px-5 pt-10 flex justify-between items-center">
                    <Logo />
                    <Image
                        src={"/close.svg"}
                        height={32}
                        width={32}
                        alt="close-sidebar"
                        className="cursor-pointer"
                        onClick={onClose}
                    />
                </div>
                {renderOptions()}
            </div>
        </div>
    );
}
