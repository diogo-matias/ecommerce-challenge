import useWindowDimensions from "@/hooks/useWindowDimentions";
import Image from "next/image";
import { useState, useEffect } from "react";

type CarouselProps = {
    images: { src: string; alt?: string }[];
    aspectRatio?: string;
    onSelect?: (image: { src: string; alt?: string }, index: number) => void;
    thumbnailsToShow?: number;
};

export default function Carousel({
    images,
    aspectRatio = "aspect-[684/523]",
    onSelect,
    thumbnailsToShow = 5,
}: CarouselProps) {
    const [current, setCurrent] = useState(0);
    const [thumbStart, setThumbStart] = useState(0);

    const { isMobile } = useWindowDimensions();

    // Mostra 3 miniaturas no mobile, thumbnailsToShow no desktop
    const thumbsToShow = isMobile ? 3 : thumbnailsToShow;

    useEffect(() => {
        if (onSelect && images[current]) {
            onSelect(images[current], current);
        }
    }, [current, images, onSelect]);

    if (!images || images.length === 0) return null;

    const thumbWidth = "min(18vw, 112px)";
    const thumbHeight = "min(13vw, 90px)";

    useEffect(() => {
        if (current < thumbStart) {
            setThumbStart(current);
        } else if (current >= thumbStart + thumbsToShow) {
            setThumbStart(current - thumbsToShow + 1);
        }
    }, [current, thumbStart, thumbsToShow]);

    const prev = () =>
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    const next = () =>
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

    const visibleThumbs = images.slice(thumbStart, thumbStart + thumbsToShow);

    return (
        <div className="flex flex-col items-center gap-4 mt-4">
            {/* Imagem principal */}
            {/* ...imagem principal aqui, se quiser... */}

            <div className="flex items-center gap-2 mt-2 w-full justify-center">
                <button
                    onClick={prev}
                    className="p-2"
                    aria-label="Imagem anterior"
                >
                    <Image
                        src={"/arrow-down.svg"}
                        width={32}
                        height={32}
                        className="rotate-90"
                        alt="prev"
                    />
                </button>

                <div
                    className="flex gap-2 h-full"
                    style={{
                        width: `calc(${thumbsToShow} * ${thumbWidth})`,
                        minWidth: "120px",
                        maxWidth: "100vw",
                    }}
                >
                    {visibleThumbs.map((img, idx) => {
                        const idxGlobal = thumbStart + idx;
                        const isActive = idxGlobal === current;
                        return (
                            <div
                                key={idxGlobal}
                                className={`relative rounded-lg overflow-hidden cursor-pointer transition-all duration-200
                                    ${
                                        isActive
                                            ? "border-b-4 border-b-primary scale-102"
                                            : "border-transparent opacity-60"
                                    }`}
                                style={{
                                    width: thumbWidth,
                                    height: thumbHeight,
                                }}
                                onClick={() => setCurrent(idxGlobal)}
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt || `Imagem ${idxGlobal + 1}`}
                                    fill
                                    style={{ objectFit: "contain" }}
                                />
                                {!isActive && (
                                    <div className="absolute inset-0 bg-white/60 pointer-events-none" />
                                )}
                            </div>
                        );
                    })}
                </div>

                <button
                    onClick={next}
                    className="p-2"
                    aria-label="Próxima imagem"
                >
                    <Image
                        src={"/arrow-down.svg"}
                        width={32}
                        height={32}
                        className="-rotate-90"
                        alt="next"
                    />
                </button>
            </div>
        </div>
    );
}
