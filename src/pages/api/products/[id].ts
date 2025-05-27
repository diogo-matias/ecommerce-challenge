import { NextApiRequest, NextApiResponse } from "next";
import { getCachedProducts } from "./cache";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    const cachedProducts = getCachedProducts();

    const product = cachedProducts.find((p) => p.id === id);

    if (!product) {
        return res.status(404).json({ message: "Produto não encontrado" });
    }

    return res.status(200).json(product);
}
