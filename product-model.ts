type Product = {
    id: string;
    name: string;
    sku: string;
    imageUrl: string;
    description: string;
    category: string;
    brand: string;
    model: string;
    tags: string[];
    attributes: Attribute[]; // Características técnicas e comerciais
    variants?: Variant[];    // Para produtos com variações (cor, tamanho, etc)
    extraSections?: ExtraSection[]; // Blocos extras como "Cuidados", "Garantia", etc
    createdAt: string;
    updatedAt: string;
};

type Attribute = {
    name: string;
    value: string;
    group?: string; // Ex: "Especificação Técnica", "Comercial", etc
};

type Variant = {
    id: string;
    color?: string;
    size?: string;
    imageUrl?: string;
    sku?: string;
    attributes?: Attribute[];
};

type ExtraSection = {
    title: string;
    items: {
        label: string;
        content: string;
    }[];
};

const product:Product {
    
}