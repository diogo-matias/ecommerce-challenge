import Button from "@/components/Button";
import Carousel from "@/components/Carousel";
import Wrapper from "@/components/Wrapper";
import YoutubeVideo from "@/components/YoutubeVideo";
import Layout from "@/layouts/Layout";
import { Product } from "@/pages/api/product-model";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import Presentation from "./sections/Presentation";
import Accordions from "./sections/Accordions";
import AnimatedCarousel from "@/components/AnimatedCarousel";

function ProductImage({
  images,
  name,
}: {
  images: { src: string; alt?: string }[];
  name: string;
}) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleSelect = useCallback((image: { src: string; alt?: string }) => {
    setSelectedImage((prev) => (prev?.src === image.src ? prev : image));
  }, []);

  return (
    <div className="col-span-12 lg:col-span-7">
      <div className="relative w-full aspect-[684/523] flex flex-col">
        <Image
          src={selectedImage.src}
          fill
          style={{ objectFit: "cover" }}
          alt={selectedImage.alt || `Imagem do produto ${name}`}
        />
      </div>
      <Carousel images={images} onSelect={handleSelect} />
    </div>
  );
}

function ProductTitle({ name, category }: { name: string; category: string }) {
  return (
    <>
      <h2 className="font-medium relative mb-2">{category}</h2>
      <h1 className="mb-4 bg-secondary font-bold p-2 text-5xl text-background rounded-[4px]">
        {name}
      </h1>
    </>
  );
}

function ProductColors({ variants }: { variants?: any[] }) {
  if (!variants?.length) return null;
  return (
    <div className="flex items-center">
      <h3 className="text-neutral_black">Cores disponíveis: </h3>
      {variants.map((variant) => (
        <div key={variant.id} className="flex gap-2 items-center">
          <div
            style={{ backgroundColor: variant.color }}
            className={twMerge("h-3 w-3 rounded-full ml-2")}
          />
          <span>{variant.name}</span>
        </div>
      ))}
    </div>
  );
}

function ProductSizes() {
  const sizes = ["Único", "Especial"];
  return (
    <div className="flex gap-2 items-center">
      <h3 className="text-neutral_black">Tamanhos disponíveis:</h3>
      {sizes.map((item) => (
        <div className="px-2 rounded-[4px] bg-gray_scale-60" key={item}>
          {item}
        </div>
      ))}
    </div>
  );
}

function ProductInfos({ product }: { product: Product }) {
  return (
    <div className="col-span-12 lg:col-span-5">
      <ProductTitle name={product.name} category={product.category} />
      <span className="text-sm font-roboto text-divider">
        Código SKU lado direito {product.sku} / Código SKU lado esquerdo{" "}
        {product.sku}
      </span>
      <h3 className="mb-2 mt-6 text-neutral_black">Descrição</h3>
      <p className="text-foreground">{product.description}</p>
      <h3 className="mt-6">Nivel 3:</h3>
      <p className="mt-2">Recuperação e tratamento de lesões GRAVES</p>
      <div className="my-6 border-b border-divider"></div>
      <div className="flex flex-col gap-4">
        <ProductColors variants={product.variants} />
        <div className="flex gap-2">
          <h3 className="text-neutral_black">Modelo</h3>
          <p>Bilateral</p>
        </div>
        <ProductSizes />
      </div>

      <div className="mt-5 mb-10 flex gap-4">
        <span className="flex items-center gap-1 text-primary font-medium ">
          <Image src={"/size.svg"} height={16} width={16} alt="Ícone tamanho" />
          Descubra o seu tamanho ideal
        </span>
        <span className="flex items-center gap-1 font-medium ">
          <Image
            src={"/fite.svg"}
            height={16}
            width={16}
            alt="Ícone tabela de medidas"
          />
          Tabela de medidas
        </span>
      </div>
      <Button className="mb-4">Encontrar lojas online</Button>
      <br />
      <Link href={""} className="underline">
        Gostou desse produto? Seja um vendedor
      </Link>
    </div>
  );
}

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("product.extraSections", product?.extraSections);
  }, [product?.extraSections]);

  useEffect(() => {
    if (id) {
      setLoading(true);
      fetch(`/api/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setProduct(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <Wrapper>
          <h1>Carregando...</h1>
        </Wrapper>
      </Layout>
    );
  }

  if (!product) {
    return (
      <Layout>
        <Wrapper>
          <h1>Produto não encontrado</h1>
        </Wrapper>
      </Layout>
    );
  }

  const extraImages = [
    { src: `/images/products/${product.imageUrl}`, alt: product.name },
    { src: "/images/products/carrouse_1.jpg", alt: "Imagem 1" },
    { src: "/images/products/carroussel_2.png", alt: "Imagem 1" },
    { src: "/images/products/carrouse_1.jpg", alt: "Imagem 1" },
    { src: "/images/products/carroussel_2.png", alt: "Imagem 1" },
    { src: "/images/products/carrouse_1.jpg", alt: "Imagem 1" },
  ];

  return (
    <Layout>
      <Wrapper>
        <div className="grid grid-cols-12 gap-7 mt-11 mb-11">
          <ProductImage images={extraImages} name={product.name} />
          <ProductInfos product={product} />
        </div>
        <YoutubeVideo videoId="_Nzt8-mTlSA" aspect="aspect-[1194/663]" />
        <Presentation />
        {product.extraSections && <Accordions product={product} />}
        <AnimatedCarousel />
      </Wrapper>
      <div className="w-full  flex justify-end pr-4 sm:pr-6 lg:pr-8"></div>
    </Layout>
  );
}
