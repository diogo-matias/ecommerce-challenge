import { NextApiRequest, NextApiResponse } from "next";
import products from "./products.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    const cachedProducts = products;

    const a = cachedProducts.find((p) => p.id === id);

    if (!a) {
        return res.status(404).json({ message: "Produto não encontrado" });
    }

    return res.status(200).json(a);
}
