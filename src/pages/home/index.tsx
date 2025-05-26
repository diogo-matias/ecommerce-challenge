import { Raleway, Roboto } from "next/font/google";
import Layout from "@/layouts/Layout";
import Hero from "./sections/Hero";
import { useEffect, useState } from "react";

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

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        console.log("ENTROU NO LOG");

        const res = await fetch("/api/products?itemsPerPage=30");
        const data = await res.json();
        setProducts(data);

        console.log("dataaa", data);
    };

    return (
        <div className={`${raleway.variable} ${roboto.variable}`}>
            <Layout>
                <Hero />
                {products?.[0]?.name}
            </Layout>
        </div>
    );
}
