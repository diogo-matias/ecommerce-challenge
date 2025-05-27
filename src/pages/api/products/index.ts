import { NextApiRequest, NextApiResponse } from "next";
import { getCachedProducts } from "./cache";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") {
        return res.status(405).json({ message: "Método não permitido" });
    }

    const {
        category = "Hidrolight Neo",
        itemsPerPage = "20",
        page = "1",
    } = req.query;

    const perPage = parseInt(itemsPerPage as string, 10);
    const currentPage = parseInt(page as string, 10);

    const cachedProducts = getCachedProducts();

    const filteredProducts = category
        ? cachedProducts.filter(
              (p) =>
                  p.category &&
                  p.category.toString().toLowerCase() ===
                      category.toString().toLowerCase()
          )
        : cachedProducts;

    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;
    const paginated = filteredProducts.slice(startIndex, endIndex);

    const totalPages = Math.ceil(filteredProducts.length / perPage);

    return res.status(200).json({
        products: paginated,
        currentPage,
        itemsPerPage: perPage,
        totalPages,
        totalItems: filteredProducts.length,
    });
}
