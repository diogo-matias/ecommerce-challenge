import Image from "next/image";
import Button from "./Button";
import Logo from "./Logo";
import SearchButton from "./SearchButton";
import Wrapper from "./Wrapper";
import useWindowDimensions from "@/hooks/useWindowDimentions";
import Sidebar from "./Sidebar";
import { useState } from "react";
import Link from "next/link";
import SearchInput from "./SearchInput";

export type Option = {
    label: string;
    redirect: string;
};

const options: Option[] = [
    {
        label: "Produtos",
        redirect: "/",
    },
    {
        label: "Sobre nós",
        redirect: "/",
    },
    {
        label: "Contato",
        redirect: "/",
    },
    {
        label: "Catálogo",
        redirect: "/",
    },
];

export default function Header() {
    const { isMobile } = useWindowDimensions();
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
    const [shouldOpenSearchInput, setShouldOpenSearchInput] = useState(false);

    function renderMainOptions() {
        if (shouldOpenSearchInput) {
            return (
                <div className="w-[50%] mx-10">
                    <SearchInput
                        handleClose={() => setShouldOpenSearchInput(false)}
                    />
                </div>
            );
        }

        return (
            <div className="flex gap-6 items-center">
                <nav>
                    <ul className="flex gap-6 ">
                        {options.map((item) => {
                            return (
                                <li key={item.label} className="cursor-pointer">
                                    <Link href={item.redirect}>
                                        {item.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
                <SearchButton onClick={() => setShouldOpenSearchInput(true)} />
            </div>
        );
    }

    function renderTalkToUs() {
        return (
            <div className="flex gap-5 items-center">
                <Button className="text-nowrap">Fale Conosco</Button>
                {renderFlag()}
            </div>
        );
    }

    function renderFlag() {
        return (
            <div className="flex gap-1 cursor-pointer">
                <Image
                    src={"/brasil.svg"}
                    width={16}
                    height={16}
                    alt="brasil.svg"
                />
                <Image
                    src={"/arrow-down.svg"}
                    width={16}
                    height={16}
                    alt="arrow-down.svg"
                />
            </div>
        );
    }

    function renderDesktopHeader() {
        return (
            <div className="flex items-center justify-around py-3 px-2">
                <Logo />
                {renderMainOptions()}
                {renderTalkToUs()}
            </div>
        );
    }

    function renderMobileHeader() {
        return (
            <div className="flex items-center justify-between py-3 px-2">
                <div className="flex gap-2">
                    <Image
                        className="cursor-pointer"
                        onClick={() => setIsSidebarOpen(true)}
                        src={"/menu.svg"}
                        height={16}
                        width={16}
                        alt="menu"
                    />
                    {!shouldOpenSearchInput && (
                        <SearchButton
                            onClick={() => setShouldOpenSearchInput(true)}
                        />
                    )}
                </div>
                <div>
                    {shouldOpenSearchInput && (
                        <div className="w-[80%] mx-10">
                            <SearchInput
                                handleClose={() =>
                                    setShouldOpenSearchInput(false)
                                }
                            />
                        </div>
                    )}
                    {!shouldOpenSearchInput && <Logo />}
                </div>
                <div>{renderFlag()}</div>
                <Sidebar
                    options={[
                        ...options,
                        { label: "Fale conosco", redirect: "/" },
                    ]}
                    isOpen={isSidebarOpen}
                    onClose={() => {
                        setIsSidebarOpen(false);
                    }}
                />
            </div>
        );
    }

    function renderContent() {
        return (
            <>
                {isMobile && renderMobileHeader()}
                {!isMobile && renderDesktopHeader()}
            </>
        );
    }

    return (
        <header>
            <Wrapper>{renderContent()}</Wrapper>
        </header>
    );
}
