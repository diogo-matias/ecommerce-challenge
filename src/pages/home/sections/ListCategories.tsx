import Button from "@/components/Button";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { RootState } from "@/store";
import { EcommerceActions } from "@/store/modules/ecommerce";
import Image from "next/image";

const categories = [
    "Hidrolight Neo",
    "Comfort Air",
    "Ortho Recovery",
    "Air Flex",
    "Softline",
    "Foot Care",
    "Lean",
];

export default function ListCategories() {
    const dispatch = useAppDispatch();
    const selectedCategory = useAppSelector(
        (state: RootState) => state.ecommerce.category
    );

    function handleClick(category = "Hidrolight Neo") {
        dispatch(
            EcommerceActions.getAllProducts({
                category: category,
                page: "1",
            })
        );
    }

    function renderCategories() {
        return (
            <div className="mt-12 flex gap-4 flex-wrap">
                {categories.map((item, index) => {
                    const variant =
                        item === selectedCategory ? "secondary" : "accent";
                    const icon =
                        item === selectedCategory
                            ? "/r-white.svg"
                            : "/r-pink.svg";

                    return (
                        <Button
                            className="relative"
                            onClick={() => handleClick(item)}
                            variant={variant}
                            key={`${item}-${index}`}
                        >
                            {item}
                            <Image
                                className="absolute top-1 right-1"
                                src={icon}
                                alt="a"
                                width={10}
                                height={10}
                            />
                        </Button>
                    );
                })}
            </div>
        );
    }

    return (
        <div className="mt-10  pb-10  border-b border-gray_scale-60">
            <h1 className="text-[32px] text-secondary">
                Conheça as <b>famílias exclusivas</b> <br />
                da linha Orthopedic
            </h1>
            {renderCategories()}
            <p className="lg:w-[35vw] md:w-[50vw] w-full mt-8">
                Família voltada para extrair os benefícios do Neoprene.
                Propriedades térmicas, compressivas e elásticas: são essas três
                propriedades que fazem do Neoprene uma ferramenta eficaz no
                tratamento e prevenção de lesões no tratamento ortopédico.
            </p>
        </div>
    );
}
