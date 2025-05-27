import { RandomProduct } from "../product-model";

let cachedProducts: any[] | null = null;
const totalItems = 1000;

export function getCachedProducts() {
    if (!cachedProducts) {
        cachedProducts = Array.from({ length: totalItems }).map(
            (_, i) => {
                const prod = new RandomProduct().product;
                prod.id = String(i + 1); // id estável baseado no índice
                return prod;
            }
        );
    }
    return cachedProducts;
}