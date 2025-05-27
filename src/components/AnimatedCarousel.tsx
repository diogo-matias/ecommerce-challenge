import { useRef, useState, useEffect } from "react";
import { motion, useAnimationControls, useMotionValue } from "framer-motion";
import ProductCard from "./ProductCard";
import { Product } from "@/pages/api/product-model";
import Wrapper from "./Wrapper";
import Image from "next/image";

const mockProducts: Product[] = [
    {
        attributes: [
            {
                name: "",
                value: "",
            },
        ],

        brand: "Orthopedic",
        category: "Hidrolight Neo",
        id: "8a3c7b2e-2bfc-4a47-a08d-b5c4d2dfbbf1",
        name: "Órtese Soft Curta com Polegar",

        description: "",
        imageUrl: "com_polegar.png",
        sku: "",
        tag: "",
    },
    {
        attributes: [
            {
                name: "",
                value: "",
            },
        ],

        sku: "RO132",
        brand: "Orthopedic",
        category: "Hidrolight Neo",
        id: "8a3c7b2e-2bfc-4a47-a08d-b5c4d2dfbbf2",
        name: "Produto 2",
        imageUrl: "com_polegar_2.png",
        description: "",
        tag: "",
    },
    {
        attributes: [
            {
                name: "",
                value: "",
            },
        ],

        brand: "Orthopedic",
        category: "Hidrolight Neo",
        id: "8a3c7b2e-2bfc-4a47-a08d-b5c4d2dfbbf1",
        name: "Órtese Soft Curta com Polegar",

        description: "",
        imageUrl: "com_polegar.png",
        sku: "",
        tag: "",
    },
    {
        attributes: [
            {
                name: "",
                value: "",
            },
        ],

        sku: "RO132",
        brand: "Orthopedic",
        category: "Hidrolight Neo",
        id: "8a3c7b2e-2bfc-4a47-a08d-b5c4d2dfbbf2",
        name: "Produto 2",
        imageUrl: "com_polegar_2.png",
        description: "",
        tag: "",
    },
    {
        attributes: [
            {
                name: "",
                value: "",
            },
        ],

        brand: "Orthopedic",
        category: "Hidrolight Neo",
        id: "8a3c7b2e-2bfc-4a47-a08d-b5c4d2dfbbf1",
        name: "Órtese Soft Curta com Polegar",

        description: "",
        imageUrl: "com_polegar.png",
        sku: "",
        tag: "",
    },
    {
        attributes: [
            {
                name: "",
                value: "",
            },
        ],

        sku: "RO132",
        brand: "Orthopedic",
        category: "Hidrolight Neo",
        id: "8a3c7b2e-2bfc-4a47-a08d-b5c4d2dfbbf2",
        name: "Produto 2",
        imageUrl: "com_polegar_2.png",
        description: "",
        tag: "",
    },
    {
        attributes: [
            {
                name: "",
                value: "",
            },
        ],

        brand: "Orthopedic",
        category: "Hidrolight Neo",
        id: "8a3c7b2e-2bfc-4a47-a08d-b5c4d2dfbbf1",
        name: "Órtese Soft Curta com Polegar",

        description: "",
        imageUrl: "com_polegar.png",
        sku: "",
        tag: "",
    },
    {
        attributes: [
            {
                name: "",
                value: "",
            },
        ],

        brand: "Orthopedic",
        category: "Hidrolight Neo",
        id: "8a3c7b2e-2bfc-4a47-a08d-b5c4d2dfbbf1",
        name: "Órtese Soft Curta com Polegar",

        description: "",
        imageUrl: "com_polegar.png",
        sku: "",
        tag: "",
    },
    {
        attributes: [
            {
                name: "",
                value: "",
            },
        ],

        brand: "Orthopedic",
        category: "Hidrolight Neo",
        id: "8a3c7b2e-2bfc-4a47-a08d-b5c4d2dfbbf1",
        name: "Órtese Soft Curta com Polegar",

        description: "",
        imageUrl: "com_polegar.png",
        sku: "",
        tag: "",
    },
];

export default function AnimatedCarousel() {
    const banner = useRef<HTMLDivElement>(null);
    const [itemWidth, setItemWidth] = useState(0);
    const [width, setWidth] = useState(0);

    const x = useMotionValue(0);
    const controls = useAnimationControls();

    const visibleItems = 5;

    useEffect(() => {
        function setOffset() {
            const offsetWidth = banner.current?.offsetWidth || 0;
            const newItemWidth = Math.max(
                180,
                Math.min(offsetWidth / visibleItems, 320)
            );
            setItemWidth(newItemWidth);
            setWidth(newItemWidth * mockProducts.length - offsetWidth);
        }
        setOffset();
        window.addEventListener("resize", setOffset);
        return () => window.removeEventListener("resize", setOffset);
    }, [visibleItems, mockProducts.length]);

    function handleArrowClick(goNext: boolean) {
        const currentX = x.get();
        const offset = itemWidth;
        let nextX = goNext ? currentX - offset : currentX + offset;
        if (nextX < -width) nextX = -width;
        if (nextX > 0) nextX = 0;
        controls.start({ x: nextX });
    }

    useEffect(() => {
        if (width <= 0) return;
        let isCancelled = false;

        async function animateLoop() {
            while (!isCancelled) {
                await controls.start({
                    x: -width,
                    transition: { duration: 50, ease: "linear" },
                });
                await controls.start({
                    x: 0,
                    transition: { duration: 0.5, ease: "linear" },
                });
            }
        }
        animateLoop();

        return () => {
            isCancelled = true;
            controls.stop();
        };
    }, [width, controls]);

    return (
        <div>
            <Wrapper className="flex justify-start items-center lg:justify-end gap-2 py-5">
                <button
                    className="rounded-full w-10 h-10 flex items-center justify-center z-10"
                    style={{
                        boxShadow: "0 0 4px rgba(0,0,0,0.5)",
                    }}
                    onClick={() => handleArrowClick(false)}
                    type="button"
                    aria-label="Anterior"
                >
                    <Image
                        src={"/arrow-down.svg"}
                        width={16}
                        height={16}
                        alt="arrow-down-white.svg"
                        className="rotate-90"
                    />
                </button>
                <button
                    className=" rounded-full w-10 h-10 flex items-center justify-center z-10"
                    style={{
                        boxShadow: "0 0 4px rgba(0,0,0,0.5)",
                    }}
                    onClick={() => handleArrowClick(true)}
                    type="button"
                    aria-label="Próximo"
                >
                    {">"}
                </button>
                <span className="ml-2 block md:hidden ">Deslize o dedo</span>
            </Wrapper>
            <div className="relative w-full overflow-hidden " ref={banner}>
                <motion.div
                    animate={controls}
                    style={{ x }}
                    className="flex"
                    drag="x"
                    dragConstraints={{ left: -width, right: 0 }}
                >
                    {mockProducts.map((item) => (
                        <div
                            key={item.id}
                            style={{ width: itemWidth }}
                            className="aspect-[11/19] h-full pr-3 flex-shrink-0"
                        >
                            <ProductCard product={item} />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
