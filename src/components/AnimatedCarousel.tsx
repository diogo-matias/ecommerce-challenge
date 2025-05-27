import { useRef, useState, useEffect } from "react";
import { motion, useAnimationControls, useMotionValue } from "framer-motion";
import ProductCard from "./ProductCard";
import { Product } from "@/pages/api/product-model";

// Exemplo de produtos fixos
const products = [
  {
    id: "1",
    image: "/images/products/com_polegar_2.png",
    title: "Produto 1",
    price: 99.9,
  },
  {
    id: "2",
    image: "/images/products/carrouse_1.jpg",
    title: "Produto 2",
    price: 149.9,
  },
  {
    id: "3",
    image: "/images/products/carrouse_1.jpg",
    title: "Produto 3",
    price: 199.9,
  },
  {
    id: "4",
    image: "/images/products/carrouse_1.jpg",
    title: "Produto 4",
    price: 249.9,
  },
  {
    id: "5",
    image: "/images/products/carrouse_1.jpg",
    title: "Produto 5",
    price: 299.9,
  },
  {
    id: "6",
    image: "/images/products/carrouse_1.jpg",
    title: "Produto 6",
    price: 349.9,
  },
  {
    id: "6",
    image: "/images/products/carrouse_1.jpg",
    title: "Produto 6",
    price: 349.9,
  },
  {
    id: "6",
    image: "/images/products/carrouse_1.jpg",
    title: "Produto 6",
    price: 349.9,
  },
  {
    id: "6",
    image: "/images/products/carrouse_1.jpg",
    title: "Produto 6",
    price: 349.9,
  },
];

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
      setWidth(newItemWidth * products.length - offsetWidth);
    }
    setOffset();
    window.addEventListener("resize", setOffset);
    return () => window.removeEventListener("resize", setOffset);
  }, [visibleItems, products.length]);

  function handleArrowClick(goNext: boolean) {
    const currentX = x.get();
    const offset = itemWidth;
    let nextX = goNext ? currentX - offset : currentX + offset;
    if (nextX < -width) nextX = -width;
    if (nextX > 0) nextX = 0;
    controls.start({ x: nextX });
  }

  return (
    <div className="relative w-full overflow-hidden" ref={banner}>
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
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center z-10"
        onClick={() => handleArrowClick(false)}
        type="button"
        aria-label="Anterior"
      >
        {"<"}
      </button>
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center z-10"
        onClick={() => handleArrowClick(true)}
        type="button"
        aria-label="Próximo"
      >
        {">"}
      </button>
    </div>
  );
}
