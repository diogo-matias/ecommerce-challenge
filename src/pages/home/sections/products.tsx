import Accordion from "@/components/Accordion";
import Button from "@/components/Button";
import Pagination, { PaginationType } from "@/components/Pagination";
import ProductCard from "@/components/ProductCard";
import SearchButton from "@/components/SearchButton";
import { Product } from "@/pages/api/product-model";
import Image from "next/image";
import { useEffect } from "react";

type ProductsPropsType = {
  products: Product[];
  paginationInfo: PaginationType;
  fetchProducts: (page: string) => void;
};

type Filter = {
  name: string;
  id: string;
  type: string;
  subFilters: {
    name: string;
    id: string;
    type: string;
  }[];
};

const exampleFilters: Filter[] = [
  {
    name: "Lançamentos",
    id: "1",
    type: "new",
    subFilters: [],
  },
  {
    name: "Famílias / Tecnologias",
    id: "2",
    type: "tecnologies",
    subFilters: [
      {
        id: "21",
        name: "Sem  Polegar",
        type: "construction",
      },
    ],
  },
  {
    name: "Produtos",
    id: "3",
    type: "product-name",
    subFilters: [
      {
        id: "31",
        name: "Órtese Soft Curta com Polegar",
        type: "product-name",
      },
      {
        id: "32",
        name: "Órtese Soft Curta sem Polegar ",
        type: "product-name",
      },
      {
        id: "33",
        name: "Órtese Safe Air",
        type: "product-name",
      },
      {
        id: "34",
        name: "Órtese Splint Bilateral ",
        type: "product-name",
      },
    ],
  },
];

export default function Products({
  products,
  paginationInfo,
  fetchProducts,
}: ProductsPropsType) {
  useEffect(() => {
    console.log("products.products", products);
  }, [products]);

  function renderCarts() {
    return (
      <>
        {products.map((item, index) => {
          return <ProductCard key={`${item.id}-${index}`} product={item} />;
        })}
      </>
    );
  }

  function renderProducts() {
    if (!products) {
      return <>Sem Produtos para exibir!</>;
    }

    return (
      <div className="w-full max-w-[1000px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
        {renderCarts()}
      </div>
    );
  }

  function renderFilters() {
    return (
      <div className="hidden md:flex flex-col bg-gray_scale/50 gap-1 h-full w-[25vw] rounded-[10px]">
        <div className="px-2 py-8 bg-background border border-gray_scale-70 rounded-t-lg">
          <span className="text-neutral_black">Filtros</span>
        </div>
        {exampleFilters.map((filter) => {
          const hasSubFilters = filter.subFilters.length !== 0;

          return (
            <div
              key={filter.id}
              className="px-2 py-8 border-b border-b-gray_scale-70 last:border-none"
            >
              <Accordion
                arrowColor="black"
                textColor="black"
                items={[
                  {
                    title: filter.name,
                    content: !hasSubFilters ? null : (
                      <nav>
                        <ul>
                          {filter.subFilters.map((item) => (
                            <li key={item.id} className="mt-3 cursor-pointer">
                              <span>{item.name}</span>
                            </li>
                          ))}
                        </ul>
                      </nav>
                    ),
                  },
                ]}
              />
            </div>
          );
        })}
      </div>
    );
  }

  function renderFilterButton() {
    return (
      <div className="md:hidden block">
        <Button variant="accent" className="text-foreground flex gap-3">
          Filtros
          <Image
            src={"/filter.svg"}
            width={16}
            height={16}
            alt="download-catalog"
          ></Image>
        </Button>
      </div>
    );
  }

  function renderSummary() {
    return (
      <div className="flex justify-between items-center mb-6 gap-3 flex-wrap">
        <div className="flex gap-5 items-center">
          <span className="px-2 py-3 bg-gray_scale/50 rounded-[10px] font-bold">
            {paginationInfo?.totalItems} Produtos
          </span>
          <SearchButton />
          {renderFilterButton()}
        </div>
        <div>
          <Button>
            <span className="flex gap-1">
              <span className="hidden md:block">Baixar</span>
              <span className="hidden sm:block">Catálogo</span>
              <Image
                src={"/download.svg"}
                width={16}
                height={16}
                alt="download-catalog"
              ></Image>
            </span>
          </Button>
        </div>
      </div>
    );
  }

  function renderPagination() {
    return (
      <div className="mt-10 flex justify-center">
        <Pagination fetchProducts={fetchProducts} {...paginationInfo} />
      </div>
    );
  }

  return (
    <div className="flex justify-center mt-16 mb-16 gap-6">
      {renderFilters()}
      <div>
        {renderSummary()}
        {renderProducts()}
        {renderPagination()}
      </div>
    </div>
  );
}
