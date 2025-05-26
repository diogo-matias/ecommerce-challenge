import Link from "next/link";
import Logo from "./Logo";
import Wrapper from "./Wrapper";
import Image from "next/image";
import Accordion, { AccordionItem } from "./Accordion";

type FooterOption = {
    title: string;
    options: {
        label: string;
        redirect: string;
    }[];
};

const FOOTER_OPTIONS: FooterOption[] = [
    {
        title: "Institucional",
        options: [
            {
                label: "Sobre nós",
                redirect: "/",
            },
            {
                label: "Trabalhe conosco",
                redirect: "/",
            },
        ],
    },
    {
        title: "Donwnload de Catálogos",
        options: [
            {
                label: "Catálogo geral",
                redirect: "/",
            },
            {
                label: "Linha Orthopedic",
                redirect: "/",
            },
            {
                label: "Linha Sports",
                redirect: "/",
            },
            {
                label: "Linha Special Cares",
                redirect: "/",
            },
            {
                label: "Catálogo Foot Care",
                redirect: "/",
            },
            {
                label: "Catálogo Acessibilidade",
                redirect: "/",
            },
        ],
    },
    {
        title: "Linhas de produtos",
        options: [
            {
                label: "Orthopedic",
                redirect: "/",
            },
            {
                label: "Sports",
                redirect: "/",
            },
            {
                label: "Special Cares",
                redirect: "/",
            },
        ],
    },
];

export default function Footer() {
    function renderRoundedIcon(svg: string) {
        return (
            <div className="flex flex-shrink-0 items-center justify-center w-8 h-8 border-primary border rounded-full ">
                <Image src={`/${svg}.svg`} width={16} height={16} alt={svg} />
            </div>
        );
    }

    function renderWithIcon(icon: string, value: React.ReactNode) {
        return (
            <div className="flex gap-2 items-center">
                {renderRoundedIcon(icon)}
                <span className="text-nowrap">{value}</span>
            </div>
        );
    }

    function renderContact() {
        return (
            <div className="flex flex-col">
                <h2>Entre em contato e tire suas dúvidas.</h2>
                <div className="text-gray_scale-60 font-normal mt-4 flex flex-col gap-2">
                    {renderWithIcon("phone", "+55 48 3333 3333")}
                    {renderWithIcon(
                        "email",
                        <>
                            sac@loremipsum.com.br ou <br /> rp@loremipsum.com.br
                        </>
                    )}
                </div>
                <span className="mt-6">
                    Nos acompanhe também <br />
                    nas redes sociais!
                </span>
                <div className="flex gap-4 mt-5">
                    {renderRoundedIcon("instagram")}
                    {renderRoundedIcon("youtube")}
                    {renderRoundedIcon("facebook")}
                </div>
            </div>
        );
    }

    function renderFooterNav() {
        return (
            <nav className="flex lg:gap-9 font-roboto" aria-label="Footer">
                {FOOTER_OPTIONS.map((option) => {
                    return (
                        <div key={option.title} className="flex flex-col">
                            <h2 className="mb-2">{option.title}</h2>
                            <ul id={option.title}>
                                {option.options.map((item, index) => {
                                    return (
                                        <li
                                            key={`${item.label}-${index}`}
                                            className="text-gray_scale-60 mt-2 font-normal"
                                        >
                                            <Link href={item.redirect}>
                                                {item.label}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    );
                })}
                {renderContact()}
            </nav>
        );
    }

    function renderFlag() {
        return (
            <div className="flex gap-1 cursor-pointer">
                <Image
                    src={"/brasil.svg"}
                    width={24}
                    height={24}
                    alt="brasil.svg"
                />
                <Image
                    src={"/arrow-down-white.svg"}
                    width={12}
                    height={12}
                    alt="arrow-down-white.svg"
                />
            </div>
        );
    }

    function renderChangeLanguage() {
        return (
            <div className="flex gap-2 items-center">
                <span>Selecionar país</span>
                {renderFlag()}
            </div>
        );
    }

    function renderExtraInfo() {
        return (
            <div className="flex flex-col font-normal text-sm font-roboto text-gray_scale-60">
                <div className="flex gap-2">
                    <Image
                        src={"/rounded-c.svg"}
                        width={11}
                        height={11}
                        alt="rounded-c"
                    />
                    <span className="text-center">
                        2023 Lorem Ipsum. Todos os direitos reservados.
                    </span>
                </div>
                <address className="not-italic">
                    Av dos Butiá, 150 - Florianopolis - SC - Brasil
                </address>
            </div>
        );
    }

    function parseAccordionContent(): AccordionItem[] {
        const result: AccordionItem[] = FOOTER_OPTIONS.map((option) => {
            return {
                title: option.title,
                content: (
                    <ul>
                        {option.options.map((item, index) => (
                            <li
                                key={`${item.label}-${index}`}
                                className="text-gray_scale-60 mt-2 font-normal"
                            >
                                {item.label}
                            </li>
                        ))}
                    </ul>
                ),
            };
        });

        const contactItem: AccordionItem = {
            title: "Contato",
            content: renderContact(),
        };

        result.push(contactItem);

        return result;
    }

    function renderAccordion() {
        return (
            <nav className="font-roboto font-light">
                <Accordion items={parseAccordionContent()} />
            </nav>
        );
    }

    function renderNavContent() {
        return (
            <>
                <div className="md:flex hidden justify-between">
                    <div className="mr-9">
                        <Logo />
                    </div>
                    {renderFooterNav()}
                </div>
                <div className="md:hidden">{renderAccordion()}</div>
            </>
        );
    }

    function renderExtraInfoContent() {
        return (
            <>
                <div className="hidden md:flex justify-between text-end">
                    {renderChangeLanguage()}
                    {renderExtraInfo()}
                </div>
                <div>
                    <div className="flex md:hidden justify-between">
                        <Logo />
                        {renderChangeLanguage()}
                    </div>
                    <div className="text-start mt-4">{renderExtraInfo()}</div>
                </div>
            </>
        );
    }

    return (
        <div className="bg-foreground text-background py-12">
            <footer>
                <div className="border-b border-divider pb-8 px-5">
                    <Wrapper>{renderNavContent()}</Wrapper>
                </div>
                <Wrapper className="pt-4 px-5 font-normal">
                    {renderExtraInfoContent()}
                </Wrapper>
            </footer>
        </div>
    );
}
