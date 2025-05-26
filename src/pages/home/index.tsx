import { Raleway, Roboto } from "next/font/google";
import Layout from "@/layouts/Layout";
import Hero from "./sections/Hero";

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
    return (
        <div className={`${raleway.variable} ${roboto.variable}`}>
            <Layout>
                <Hero />
            </Layout>
        </div>
    );
}
