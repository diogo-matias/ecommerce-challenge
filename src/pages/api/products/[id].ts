import { NextApiRequest, NextApiResponse } from "next";

const products = [
    { id: "1", name: "Produto A", price: 10 },
    { id: "2", name: "Produto B", price: 20 },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    const index = products.findIndex((p) => p.id === id);

    if (index === -1) {
        res.status(404).json({ message: "Produto não encontrado" });
        return;
    }

    if (req.method === "GET") {
        res.status(200).json(products[index]);
    }
}
