import { useRef, useState, useEffect } from "react";
import { motion, useAnimationControls, useMotionValue } from "framer-motion";
import ProductCard from "./ProductCard";

// Exemplo de produtos fixos
const products = [
  {
    id: "1",
    image: "/images/products/carrouse_1.jpg",
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
        {products.map((item) => (
          <div
            key={item.id}
            style={{ width: itemWidth }}
            className="aspect-[11/16] h-full pr-3 flex-shrink-0"
          >
            <ProductCard
              product={{
                attributes: [
                  {
                    name: "va",
                    value: "123",
                  },
                ],
                brand: "asd",
                category: "asd",
                name: "vamo",
                description: "",
                imageUrl: "carrouse_1.jpg",
                id: "asd",
                sku: "asd",
                tag: "vamo",
              }}
            />
            {/* <Image
              width={268}
              height={338}
              src={item.image}
              alt={item.title}
              className="w-full h-[90%] object-cover rounded"
            />
            <div className="h-[10%] text-[0.9rem]">
              <p className="font-light mt-1">{item.title}</p>
              <p className="font-bold">{formatPrice(item.price)}</p>
            </div> */}
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
