import { RandomProduct } from "../product-model";

let cachedProducts: any[] | null = null;
const totalItems = 1000;

export function getCachedProducts() {
    if (!cachedProducts) {
        cachedProducts = Array.from({ length: totalItems }).map(
            () => new RandomProduct().product
        );
    }
    return cachedProducts;
}
