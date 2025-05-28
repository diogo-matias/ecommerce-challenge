import { Product } from "@/pages/api/product-model";

export type ProductType = {
    id: string;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
};

export type FiltersType = {
    category: string;
    title: string;
    max_price: number;
    min_price: number;
};

export type StateType = {
    products: Product[];
    paginationInfo: {
        currentPage: number;
        totalPages: number;
        totalItems: number;
    };
    category: string;
    filter: {
        filters: {
            category: string;
            max_price: number;
            min_price: number;
            title: string;
        };
    };
};
