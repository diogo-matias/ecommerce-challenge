import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") {
        return res.status(405).json({ message: "Método não permitido" });
    }
    
    const {
        categoria = "geral",
        itemsPerPage = "20",
        page = "1",
    } = req.query;

    const perPage = parseInt(itemsPerPage as string, 10);
    const currentPage = parseInt(page as string, 10);
    const totalItems = 1000; // simulando banco grande

    const allProducts = Array.from({ length: totalItems }).map((_, i) => {
        return 
    });

    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;
    const paginated = allProducts.slice(startIndex, endIndex);

    const totalPages = Math.ceil(totalItems / perPage);

    return res.status(200).json({
        products: paginated,
        currentPage,
        itemsPerPage: perPage,
        totalPages,
        totalItems,
    });
}
