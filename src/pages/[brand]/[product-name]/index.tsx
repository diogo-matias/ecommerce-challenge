import Button from "@/components/Button";
import Wrapper from "@/components/Wrapper";
import Layout from "@/layouts/Layout";
import { Product } from "@/pages/api/product-model";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function ProductPage() {
    const router = useRouter();
    const { id } = router.query;
    const [product, setProduct] = useState<Product>(null);

    useEffect(() => {
        if (id) {
            fetch(`/api/products/${id}`)
                .then((res) => res.json())
                .then(setProduct);
        }
    }, [id]);

    function renderImage() {
        return (
            <div className="col-span-7 relative w-full aspect-[684/523] flex flex-col justify-end">
                <Image
                    src={`/images/products/${product.imageUrl}`}
                    fill
                    style={{ objectFit: "cover" }}
                    alt="product-image"
                />
            </div>
        );
    }

    function renderTitle() {
        return (
            <>
                <h2 className="font-medium relative mb-2">
                    {product.category}
                    <Image
                        src={"r.svg"}
                        width={7}
                        height={7}
                        alt="r"
                        className="absolute right-[-10px] top-[-10px]"
                    />
                </h2>
                <h1 className="mb-4 bg-secondary font-bold p-2 text-5xl text-background rounded-[4px]">
                    {product.name}
                </h1>
            </>
        );
    }

    function renderColors() {
        return (
            <div className="flex items-center">
                <h3 className="text-neutral_black">Cores disponíveis: </h3>
                {product.variants?.map((variant) => {
                    return (
                        <div
                            key={variant.id}
                            className="flex gap-2 items-center"
                        >
                            <div
                                style={{
                                    backgroundColor: variant.color,
                                }}
                                className={twMerge([
                                    `h-3 w-3 rounded-full ml-2`,
                                ])}
                            />
                            <span className=""> {variant.name}</span>
                        </div>
                    );
                })}
            </div>
        );
    }

    function renderSizes() {
        const sizes = ["Único", "Especial"];

        return (
            <div className="flex gap-2 items-center">
                <h3 className="text-neutral_black">Tamanhos disponíveis:</h3>
                {sizes.map((item) => {
                    return (
                        <div
                            className="px-2 py-1 rounded-[4px] bg-gray_scale-50"
                            key={item}
                        >
                            {item}
                        </div>
                    );
                })}
            </div>
        );
    }

    function discoverSizeButton() {
        return <div></div>;
    }

    function renderInfos() {
        return (
            <div className="col-span-5">
                {renderTitle()}
                <span className=" text-sm font-roboto text-divider">
                    Código SKU lado direito {product.sku} / Código SKU lado
                    esquerdo {product.sku}{" "}
                </span>
                <h3 className="mb-2 mt-6 text-neutral_black">Descrição</h3>
                <p className="text-foreground">{product.description}</p>
                <h3 className="mt-6">Nivel 3:</h3>
                <p className="mt-2">
                    Recuperação e tratamento de lesões GRAVES
                </p>

                <div className="my-6 border-b border-divider"></div>

                {renderColors()}
                <div className="flex gap-2">
                    <h3 className="text-neutral_black">Modelo</h3>
                    <p>Bilateral</p>
                </div>
                {renderSizes()}
                <div>
                    <span>Descubra o seu tamanho ideal</span>
                    <span>Tabela de medidas</span>
                </div>
                <Button>Encontrar lojas online</Button>
                <Link href={""}>Gostou desse produto? Seja um vendedor</Link>
            </div>
        );
    }

    function renderContent() {
        if (!product) {
            return <h1>Produto não encontrado</h1>;
        }

        return (
            <Wrapper>
                <div className="grid grid-cols-12 mt-11 mb-11">
                    {renderImage()}
                    {renderInfos()}
                </div>
            </Wrapper>
        );
    }

    return <Layout>{renderContent()}</Layout>;
}
