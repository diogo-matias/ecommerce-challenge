import { Raleway, Roboto } from "next/font/google";
import Layout from "@/layouts/Layout";
import Hero from "./sections/Hero";
import { useEffect, useState } from "react";
import ListCategories from "./sections/ListCategories";
import Wrapper from "@/components/Wrapper";
// import Products from "./sections/Products";
import { PaginationType } from "@/components/Pagination";
import Products from "./sections/products";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500"],
});

export default function Home() {
  const [products, setProducts] = useState();
  const [paginationInfo, setPaginationInfo] = useState<PaginationType>({
    currentPage: 1,
    totalPages: 10,
    totalItems: 10,
  });

  const [selectedCategory, setSelectedCategory] = useState("Hidrolight Neo");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async (page = "1", category = "Hidrolight Neo") => {
    const res = await fetch(
      `/api/products?itemsPerPage=3&page=${page}&category=${category}`
    );
    const data = await res.json();

    setProducts(data.products);
    setPaginationInfo({
      currentPage: data.currentPage,
      totalPages: data.totalPages,
      totalItems: data.totalItems,
    });
    setSelectedCategory(data.category);
  };

  return (
    <div className={`${raleway.variable} ${roboto.variable}`}>
      <Layout>
        <Hero />
        <Wrapper className="">
          <ListCategories
            fetchProducts={fetchProducts}
            selectedCategory={selectedCategory}
          />
          {products && (
            <Products
              fetchProducts={fetchProducts}
              paginationInfo={paginationInfo}
              products={products}
            />
          )}
        </Wrapper>
      </Layout>
    </div>
  );
}
