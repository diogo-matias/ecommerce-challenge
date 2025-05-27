import Button from "@/components/Button";

type ListCategoryProps = {
  selectedCategory: string;
  fetchProducts: (page: string, category: string) => void;
};

export default function ListCategories({
  selectedCategory,
  fetchProducts,
}: ListCategoryProps) {
  const categories = [
    "Hidrolight Neo",
    "Comfort Air",
    "Ortho Recovery",
    "Air Flex",
    "Softline",
    "Foot Care",
    "Lean",
  ];

  async function handleClick(category: string) {
    await fetchProducts("1", category);
  }

  function renderCategories() {
    return (
      <div className="mt-12 flex gap-4 flex-wrap">
        {categories.map((item, index) => {
          const variant = item === selectedCategory ? "secondary" : "accent";

          return (
            <Button
              onClick={() => handleClick(item)}
              variant={variant}
              key={`${item}-${index}`}
            >
              {item}
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
        Família voltada para extrair os benefícios do Neoprene. Propriedades
        térmicas, compressivas e elásticas: são essas três propriedades que
        fazem do Neoprene uma ferramenta eficaz no tratamento e prevenção de
        lesões no tratamento ortopédico.
      </p>
    </div>
  );
}
