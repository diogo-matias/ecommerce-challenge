import Button from "@/components/Button";

export default function ListCategories() {
  const categories = [
    "Hidrolight Neo",
    "Comfort Air",
    "Ortho Recovery",
    "Air Flex",
    "Softline ",
    "Foot Care ",
    "Lean",
  ];

  function renderCategories() {
    return (
      <div className="mt-12 flex gap-4">
        {categories.map((item, index) => {
          const variant = index === 0 ? "secondary" : "accent";

          return (
            <Button variant={variant} key={`${item}-${index}`}>
              {item}
            </Button>
          );
        })}
      </div>
    );
  }

  return (
    <div className="mt-10">
      <h1 className="text-[32px] text-secondary">
        Conheça as <b>famílias exclusivas</b> <br />
        da linha Orthopedic
      </h1>
      {renderCategories()}
      <p className="w-[35vw] mt-8 mb-10">
        Família voltada para extrair os benefícios do Neoprene. Propriedades
        térmicas, compressivas e elásticas: são essas três propriedades que
        fazem do Neoprene uma ferramenta eficaz no tratamento e prevenção de
        lesões no tratamento ortopédico.
      </p>
    </div>
  );
}
