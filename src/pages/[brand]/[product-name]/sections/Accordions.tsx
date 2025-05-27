import Accordion, { AccordionItem } from "@/components/Accordion";
import { ExtraSection, Product } from "@/pages/api/product-model";

type AccordionsPropsTypes = {
  product: Product;
};

export default function Accordions({ product }: AccordionsPropsTypes) {
  console.log("DALE MEU FI", product);

  function parseContent() {
    if (!product?.extraSections) {
      return null;
    }

    const productInfo: AccordionItem = {
      title: "Detalhes",
      content: (
        <div className="flex flex-col gap-3 text-foreground">
          <p className="text-neutral_black font-medium">
            Nivel 3 - Recuperação e tratamento de lesões GRAVES
          </p>
          <p>Nome Comercial: {product.name}</p>
          <p>Linha: {product.brand}</p>
          <p>Cod. Produto (referências/SKU): {product.sku}</p>
          <p>Família de Produtos: {product.category}</p>
          <p>Modelos do produto(esquerda/direita–bilateral): Bilateral </p>
          <p>
            Composição:(esquerda/direita–bilateral): 74% borracha de cloropreno,
            16% poliamida, 9%poliestireno e 1%PVC.{" "}
          </p>
          <p>PRODUTO TÉRMICO</p>
        </div>
      ),
    };

    const result: AccordionItem[] = product?.extraSections?.map((item) => {
      return {
        title: item.title,
        content: (
          <div>
            {item.items?.map((item) => {
              return (
                <div key={item.label} className="mt-4">
                  <h1 className="font-bold text-xl">{item.label}</h1>
                  <p>{item.content}</p>
                </div>
              );
            })}
          </div>
        ),
      };
    });

    result.unshift(productInfo);

    return result;
  }

  function renderContent() {
    const data = parseContent();
    if (!data) return null;

    return (
      <>
        <Accordion arrowColor="black" textColor="black" items={data} />
      </>
    );
  }

  return <div className="mt-10 mb-10">{renderContent()}</div>;
}
