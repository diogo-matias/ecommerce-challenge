export type Product = {
    id: string;
    name: string;
    sku: string;
    imageUrl: string;
    description: string;
    category: string;
    brand: string;
    tag: string;
    attributes: Attribute[];
    variants?: Variant[];
    extraSections?: ExtraSection[];
};

type Attribute = {
    name: string;
    value: string;
};

type Variant = {
    id: string;
    name: string;
    color: string;
};

export type ExtraSection = {
    title: string;
    items: {
        label: string;
        content: string;
    }[];
};
