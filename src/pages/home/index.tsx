import { Raleway, Roboto } from "next/font/google";
import Layout from "@/layouts/Layout";
import Hero from "./sections/Hero";
import { useEffect } from "react";
import ListCategories from "./sections/ListCategories";
import Wrapper from "@/components/Wrapper";
import Products from "./sections/products";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { EcommerceActions } from "@/store/modules/ecommerce";

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
    const dispatch = useAppDispatch();
    const products = useAppSelector(
        (state) => state.ecommerce.filteredProductList
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
