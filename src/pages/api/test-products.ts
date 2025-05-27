import type { NextApiRequest, NextApiResponse } from "next";
import products from "./products/products.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const data = products;

    const result = {
        products: data,
        currentPage: 1,
        totalPages: 10,

        itemsPerPage: 10,
        totalItems: 10,
    }

  res.status(200).json(result);
}