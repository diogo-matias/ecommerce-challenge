import BreadCrump from "@/components/BreadCrump";
import Image from "next/image";

export default function Hero() {
    return (
        <div
            className="w-full h-[90vh] md:h-[90vh] max-h-[90vh] lg:h-auto lg:aspect-[1366/617] bg-no-repeat bg-cover relative"
            style={{
                backgroundImage: "url('/images/hero-background.jpg')",
                backgroundPosition: "top 32% center",
            }}
        >
            <div
                className="absolute inset-0
        bg-gradient-to-b md:bg-gradient-to-r lg:from-10% md:from-10% from-[#ffffff] md:to-100% lg:to-40%  to-[#a3338b3e]"
            >
                <div className="container relative mx-auto h-full flex flex-col items-center md:items-start justify-start md:justify-center px-4">
                    <div className="absolute top-8 left-4">
                        <BreadCrump />
                    </div>
                    <div className="w-[80vw] md:w-[45vw] max-w-[800px] mt-40 md:mt-0">
                        <div className="flex flex-col">
                            <h2 className="text-2xl font-medium tracking-[0.30rem]">
                                LINHA
                            </h2>
                            <div className=" inline-block ">
                                <h1 className="font-bold relative inline-block md:text-5xl text-4xl text-secondary tracking-[0.4rem]">
                                    ORTHOPEDIC
                                    <Image
                                        className="absolute top-[-.6em] right-[-.6em]"
                                        src={"/title-element.svg"}
                                        width={132}
                                        height={31}
                                        alt="orthopedic-logo.svg"
                                    />
                                </h1>
                            </div>
                        </div>
                        <div>
                            <ul className="list-disc pl-7 text- sm:text-xl md:text-2xl mt-7 md:mt-9 text-black">
                                <li>
                                    Produtos desenvolvidos para auxiliar na
                                    prevenção e retorno das atividades, no
                                    tratamento e recuperação de pacientes com
                                    lesões ortopédicas.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
