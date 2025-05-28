import { Raleway, Roboto } from "next/font/google";
import Layout from "@/layouts/Layout";
import Hero from "./sections/Hero";
import { useEffect, useState } from "react";
import ListCategories from "./sections/ListCategories";
import Wrapper from "@/components/Wrapper";
import { PaginationType } from "@/components/Pagination";
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
    const products = useAppSelector((state) => state.ecommerce.products);
    const paginationInfo = useAppSelector(
        (state) => state.ecommerce.paginationInfo
    );
    const selectedCategory = useAppSelector(
        (state) => state.ecommerce.category
    );

    // const [paginationInfo, setPaginationInfo] = useState<PaginationType>({
    //     currentPage: 1,
    //     totalPages: 10,
    //     totalItems: 10,
    // });

    // const [a), setSelectedCategory] = useState("Hidrolight Neo");

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

    const fetchProducts = async (page = "1", category = "Hidrolight Neo") => {
        callApi(page, category);
        // setProducts(data.products);
        // setPaginationInfo({
        //     currentPage: data.currentPage,
        //     totalPages: data.totalPages,
        //     totalItems: data?.totalItems,
        // });
        // setSelectedCategory(data.category);
    };
    // const fetchProducts = async (page = "1", category = "Hidrolight Neo") => {
    //     const res = await fetch(
    //         `/api/products?itemsPerPage=9&page=${page}&category=${category}`
    //     );
    //     const data = await res.json();

    //     // setProducts(data.products);
    //     setPaginationInfo({
    //         currentPage: data.currentPage,
    //         totalPages: data.totalPages,
    //         totalItems: data?.totalItems,
    //     });
    //     setSelectedCategory(data.category);
    // };

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
