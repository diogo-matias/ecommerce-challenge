import { Raleway, Roboto } from "next/font/google";
import Layout from "@/layouts/Layout";
import Hero from "./sections/Hero";
import { useEffect } from "react";
import ListCategories from "./sections/ListCategories";
import Wrapper from "@/components/Wrapper";
import Products from "./sections/products";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { EcommerceActions } from "@/store/modules/ecommerce";
import { RootState } from "@/store";
import Head from "next/head";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500"],
});

export default function Home(props) {
  console.log("TESTE", props);

  const dispatch = useAppDispatch();
  const products = useAppSelector(
    (state: RootState) => state.ecommerce.filteredProductList
  );

  function callApi(page = "1", category = "Hidrolight Neo") {
    dispatch(
      EcommerceActions.getAllProducts({
        category: category,
        page: page,
      })
    );
  }

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div className={`${raleway.variable} ${roboto.variable}`}>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="Produtos desenvolvidos para auxiliar na prevenção e retorno das atividades, no tratamento e recuperação de pacientes com lesões ortopédicas.
"
        />
      </Head>
      <Layout>
        <Hero />
        <Wrapper className="">
          <ListCategories />
          <div className="flex items-start justify-center lg:justify-start">
            {products && <Products products={products} />}
          </div>
        </Wrapper>
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://ecommerce-challenge-delta.vercel.app/api/products"
  );

  if (!res.ok) {
    throw new Error("Falha ao buscar os produtos");
  }

  const data = await res.json();

  return {
    props: {
      products: data,
    },
  };
}
