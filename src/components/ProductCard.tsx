import { Product } from "@/pages/api/product-model";
import Image from "next/image";
import Link from "next/link";

type ProductCardPropsType = {
    product: Product;
};

export default function ProductCard({ product }: ProductCardPropsType) {
    const { name, imageUrl, sku, tag } = product;

    function renderImage() {
        return (
            <Link
                href={`/produto/${encodeURIComponent(product.name)}?id=${
                    product.id
                }`}
                className="bg-red-100"
            >
                <div className="w-full relative aspect-[268/338] rounded-lg overflow-hidden border border-gray_scale-50 cursor-pointer">
                    {tag && (
                        <span className="absolute top-0 left-0 m-2 bg-secondary/50 text-white p-2 rounded-lg z-10">
                            {tag}
                        </span>
                    )}

                    <Image
                        src={`/images/products/${imageUrl}`}
                        alt={`image-${name}`}
                        fill
                        style={{ objectFit: "cover" }}
                        className="-z-[1]"
                    />
                </div>
            </Link>
        );
    }

    function renderDescription() {
        return (
            <div className="mt-4">
                <h2 className="text-black font-medium text-base">{name}</h2>
                <h3 className="text-foreground font-normal text-sm ">
                    <b className="font-raleway mr-1">Cód. Produto </b>{" "}
                    <span className="font-roboto">{sku}</span>
                </h3>
            </div>
        );
    }

    return (
        <div className="w-full">
            {renderImage()}
            {renderDescription()}
        </div>
    );
}
