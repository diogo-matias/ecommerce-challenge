type Product = {
    id: string;
    name: string;
    sku: string;
    imageUrl: string;
    description: string;
    category: string;
    brand: string;
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

const allowedInfos = [
    {name: "Órtese Soft Curta com Polegar", {
        description: "Órtese Soft Curta com Polegar é uma órtese desenvolvida para proporcionar imobilização e suporte ao punho e polegar, garantindo conforto e praticidade durante o uso. Confeccionada em neoprene plush, oferece excelente isolamento térmico e toque macio, tornando o uso prolongado mais agradável. Seu design anatômico conta com fechamento especial para o polegar e membrana elástica tipo bolso, facilitando a colocação pelo próprio paciente. As talas internas removíveis e ajustáveis permitem adaptação para diferentes necessidades, promovendo estabilidade e restrição de movimentos indesejados. O sistema de compressão com elástico aderente possibilita ajuste personalizado conforme orientação médica. Indicada para reabilitação, pós-operatório e prevenção de lesões, a Órtese Soft Curta com Polegar alia segurança, durabilidade e facilidade de higienização, sendo ideal para quem busca proteção eficiente e autonomia no cuidado ortopédico.",
    }}, 
    {name: "Órtese Soft Curta com Polegar", {
        description: "Órtese Soft Curta com Polegar é uma órtese desenvolvida para proporcionar imobilização e suporte ao punho e polegar, garantindo conforto e praticidade durante o uso. Confeccionada em neoprene plush, oferece excelente isolamento térmico e toque macio, tornando o uso prolongado mais agradável. Seu design anatômico conta com fechamento especial para o polegar e membrana elástica tipo bolso, facilitando a colocação pelo próprio paciente. As talas internas removíveis e ajustáveis permitem adaptação para diferentes necessidades, promovendo estabilidade e restrição de movimentos indesejados. O sistema de compressão com elástico aderente possibilita ajuste personalizado conforme orientação médica. Indicada para reabilitação, pós-operatório e prevenção de lesões, a Órtese Soft Curta com Polegar alia segurança, durabilidade e facilidade de higienização, sendo ideal para quem busca proteção eficiente e autonomia no cuidado ortopédico.",
    }}, 
    {name: "Órtese Soft Curta sem Polegar", 
    description: "A Órtese Soft Curta sem Polegar Hidrolight é confeccionada em neoprene plush, oferecendo excelente isolamento térmico e um toque suave para maior conforto durante o uso. Seu design anatômico proporciona ajuste preciso ao punho, facilitando a colocação e remoção pelo próprio paciente. O sistema de fechamento com velcro permite regulagem personalizada, garantindo estabilidade e compressão adequadas conforme a necessidade médica. As talas internas removíveis possibilitam adaptação para diferentes formatos de mão, promovendo imobilização eficaz do punho sem restringir o movimento dos dedos. Indicada para reabilitação, pós-operatório e prevenção de lesões, a órtese alia praticidade, durabilidade e segurança, tornando-se uma excelente escolha para quem busca suporte ortopédico de qualidade.",
    },
    {name: "Órtese Splint Bilateral",
        description: "A Órtese Splint Bilateral Hidrolight é feita de neoprene Plush, com propriedades isolantes térmicas e um acabamento elegante em plush. Possui ampla capacidade de ajuste devido à aderência do tecido. Em repouso, a órtese já está pré-ajustada, com fechamento do polegar e uma membrana elástica que funciona como um bolso, facilitando a colocação pelo próprio paciente. As talas internas são facilmente ajustáveis para se adaptarem à mão desejada. São fornecidas duas talas removíveis, uma com curvatura ideal para sustentar o punho até a palma da mão, e a segunda reta na parte dorsal do punho, impedindo movimentos para cima e para baixo. O elástico aderente envolve a articulação, proporcionando compressão de acordo com a indicação médica e a necessidade do paciente.",
    },
    {name: "Órtese Safe Air",
        description: "Órtese Safe Air é uma solução ortopédica inovadora desenvolvida para proporcionar suporte e proteção ao punho com máximo conforto e respirabilidade. Confeccionada em tecido microperfurado de alta tecnologia, permite excelente ventilação, reduzindo o acúmulo de calor e umidade durante o uso prolongado. Seu design anatômico se adapta perfeitamente à mão, enquanto as talas internas removíveis garantem estabilidade e imobilização eficaz, sem restringir os movimentos essenciais dos dedos. O sistema de fechamento em velcro de alta resistência facilita o ajuste personalizado, promovendo segurança e praticidade tanto para reabilitação quanto para prevenção de lesões. Indicada para uso ambidestro, a Órtese Safe Air alia leveza, durabilidade e facilidade de higienização, sendo ideal para quem busca proteção eficiente e conforto no dia a dia.",
    },
]

const allowedCategories = ["Hidrolight Neo", "Comfort Air", "Ortho Recovery", "Air Flex", "Softline", "Foot Care", "Lean"]

class RandomProduct {
    product: Product;

    constructor(){
        const {name, description} = setRandomInfos()

        this.product.name = []

    }

    setRandomInfos(){
        const index = Math.floor(Math.random() * allowedInfos.length);
        return allowedInfos[index];
    }
}

const product1: Product = {
    id: "123",
    name: "Órtese Splint Bilateral",
    sku: "OR83",
    imageUrl: "https://cdn.site.com/produto.jpg",
    description: "A Órtese Splint Bilateral Hidrolight é feita de neoprene Plush, com propriedades isolantes térmicas e um acabamento elegante em plush. Possui ampla capacidade de ajuste devido à aderência do tecido. Em repouso, a órtese já está pré-ajustada, com fechamento do polegar e uma membrana elástica que funciona como um bolso, facilitando a colocação pelo próprio paciente. As talas internas são facilmente ajustáveis para se adaptarem à mão desejada. São fornecidas duas talas removíveis, uma com curvatura ideal para sustentar o punho até a palma da mão, e a segunda reta na parte dorsal do punho, impedindo movimentos para cima e para baixo. O elástico aderente envolve a articulação, proporcionando compressão de acordo com a indicação médica e a necessidade do paciente.",
    category: "Hidrolight Neo",
    brand: "Orthopedic",
    tags: ["Lançamento"],
    attributes: [
        { name: "Material", value: "Neoprene Plush", group: "Especificação Técnica" },
        { name: "Ajuste", value: "Ampla capacidade de ajuste com tecido aderente", group: "Especificação Técnica" },
        { name: "Talas", value: "Duas talas removíveis, uma curva e uma reta", group: "Especificação Técnica" },
        { name: "Compressão", value: "Elástico aderente para compressão ajustável", group: "Especificação Técnica" },
        { name: "Indicação", value: "Imobilização e suporte do punho e polegar", group: "Comercial" }
    ],
    variants: [
        {
            id: "123-preto-p",
            color: "Preto", 
            size: "P",
            imageUrl: "https://cdn.site.com/produto-preto-p.jpg",
            sku: "OR83-PRETO-P"
        },
        {
            id: "123-preto-m",
            color: "Preto",
            size: "M",
            imageUrl: "https://cdn.site.com/produto-preto-m.jpg",
            sku: "OR83-PRETO-M"
        },
        {
            id: "123-preto-g",
            color: "Preto",
            size: "G",
            imageUrl: "https://cdn.site.com/produto-preto-g.jpg",
            sku: "OR83-PRETO-G"
        }
    ],
    extraSections: [
        {
            title: "Indicações e Instruções de Uso",
            items: [
                {
                    label: "Indicações",
                    content: `A Órtese Soft Curta com Polegar é indicada para imobilização e suporte do punho e polegar em casos de lesões, entorses, tendinites, artrites, artroses, pós-operatórios e outras condições que exijam restrição de movimento dessas articulações. Seu design anatômico e a presença de talas removíveis permitem o ajuste ideal para cada paciente, proporcionando conforto e segurança durante o uso. O fechamento do polegar e a membrana elástica facilitam a colocação, tornando o produto acessível para uso independente pelo paciente.`
                },
                {
                    label: "Instruções de Uso",
                    content: `Para utilizar a órtese, posicione a mão de modo que o polegar fique encaixado na membrana elástica. Ajuste as talas internas conforme a necessidade, garantindo que estejam bem posicionadas para oferecer o suporte adequado. Envolva o elástico aderente ao redor da articulação do punho, ajustando a compressão de acordo com a orientação médica. Certifique-se de que a órtese esteja confortável e não restrinja a circulação sanguínea. O produto pode ser utilizado tanto na mão direita quanto na esquerda, bastando ajustar as talas conforme o lado desejado. Para limpeza, recomenda-se lavar manualmente com sabão neutro e secar à sombra.`
                }
            ]
        },
        {
            title: "Garantia",
            items: [
                {
                    label: "Termos de Garantia",
                    content: `Este produto possui garantia de 12 meses contra defeitos de fabricação, contados a partir da data de compra. A garantia cobre eventuais falhas nos materiais ou no processo de fabricação que comprometam o uso adequado da órtese. Não estão cobertos danos causados por mau uso, modificações não autorizadas, desgaste natural ou acidentes. Para acionar a garantia, é necessário apresentar a nota fiscal de compra e encaminhar o produto para avaliação técnica. Em caso de constatação de defeito de fabricação, a empresa se compromete a reparar ou substituir o produto sem custos adicionais ao consumidor.`
                },
                {
                    label: "Recomendações",
                    content: `Para garantir a durabilidade e a eficácia da órtese, siga rigorosamente as instruções de uso e conservação. Evite expor o produto a fontes de calor excessivo, umidade prolongada ou agentes químicos agressivos. Não utilize o produto sem orientação médica e, em caso de desconforto ou irritação, suspenda o uso e consulte um profissional de saúde.`
                }
            ]
        }
    ],
};

const product2: Product = {
    id: "123",
    name: "Órtese Soft Curta sem Polegar",
    sku: "OR1066",
    imageUrl: "https://cdn.site.com/produto.jpg",
    description: "A Órtese Soft Curta sem Polegar Hidrolight é confeccionada em neoprene plush, oferecendo excelente isolamento térmico e um toque suave para maior conforto durante o uso. Seu design anatômico proporciona ajuste preciso ao punho, facilitando a colocação e remoção pelo próprio paciente. O sistema de fechamento com velcro permite regulagem personalizada, garantindo estabilidade e compressão adequadas conforme a necessidade médica. As talas internas removíveis possibilitam adaptação para diferentes formatos de mão, promovendo imobilização eficaz do punho sem restringir o movimento dos dedos. Indicada para reabilitação, pós-operatório e prevenção de lesões, a órtese alia praticidade, durabilidade e segurança, tornando-se uma excelente escolha para quem busca suporte ortopédico de qualidade.",
    category: "Hidrolight Neo",
    brand: "Orthopedic",
    tags: [""],
  attributes: [
    { name: "Peso", value: "120g", group: "Especificação Técnica" },
    { name: "Lavável", value: "Sim, lavagem manual", group: "Comercial" },
    { name: "Ventilação", value: "Tecido respirável para maior conforto", group: "Especificação Técnica" },
    { name: "Compatibilidade", value: "Pode ser usada em ambos os punhos", group: "Comercial" },
    { name: "Registro ANVISA", value: "1234567890", group: "Regulatório" }
]
    variants: [
    {
        id: "123-preto-p",
        color: "Preto",
        size: "P",
        imageUrl: "https://cdn.site.com/produto-preto-p.jpg",
        sku: "OR1066-PRETO-P"
    },
    {
        id: "123-azul-m",
        color: "Azul",
        size: "M",
        imageUrl: "https://cdn.site.com/produto-azul-m.jpg",
        sku: "OR1066-AZUL-M"
    },
    {
        id: "123-cinza-g",
        color: "Cinza",
        size: "G",
        imageUrl: "https://cdn.site.com/produto-cinza-g.jpg",
        sku: "OR1066-CINZA-G"
    },
    {
        id: "123-vermelho-p",
        color: "Vermelho",
        size: "P",
        imageUrl: "https://cdn.site.com/produto-vermelho-p.jpg",
        sku: "OR1066-VERMELHO-P"
    }
]
    extraSections: [
        {
            title: "Indicações e Instruções de Uso",
            items: [
                {
                    label: "Indicações",
                    content: `A Órtese Soft Curta sem Polegar é indicada para imobilização e suporte do punho em casos de lesões, entorses, tendinites, artrites, artroses, reabilitação pós-operatória e prevenção de recidivas. Seu uso é recomendado para pacientes que necessitam de restrição de movimento do punho, sem limitar a mobilidade dos dedos, proporcionando conforto e segurança durante o processo de recuperação.`
                },
                {
                    label: "Instruções de Uso",
                    content: `Para utilizar a órtese, posicione o punho de modo que fique centralizado na peça. Ajuste as talas internas conforme a necessidade, garantindo que estejam bem posicionadas para oferecer o suporte adequado. Feche o velcro de forma confortável, sem apertar excessivamente, para garantir estabilidade e compressão. O produto pode ser utilizado tanto na mão direita quanto na esquerda, bastando ajustar as talas conforme o lado desejado. Para limpeza, recomenda-se lavar manualmente com sabão neutro e secar à sombra. Não utilize o produto sem orientação médica e, em caso de desconforto, suspenda o uso e consulte um profissional de saúde.`
                }
            ]
        },
        {
            title: "Garantia",
            items: [
                {
                    label: "Termos de Garantia",
                    content: `Este produto possui garantia de 12 meses contra defeitos de fabricação, contados a partir da data de compra. A garantia cobre eventuais falhas nos materiais ou no processo de fabricação que comprometam o uso adequado da órtese. Não estão cobertos danos causados por mau uso, modificações não autorizadas, desgaste natural ou acidentes. Para acionar a garantia, é necessário apresentar a nota fiscal de compra e encaminhar o produto para avaliação técnica. Em caso de constatação de defeito de fabricação, a empresa se compromete a reparar ou substituir o produto sem custos adicionais ao consumidor.`
                },
                {
                    label: "Recomendações",
                    content: `Para garantir a durabilidade e a eficácia da órtese, siga rigorosamente as instruções de uso e conservação. Evite expor o produto a fontes de calor excessivo, umidade prolongada ou agentes químicos agressivos. Não utilize o produto sem orientação médica e, em caso de desconforto ou irritação, suspenda o uso e consulte um profissional de saúde.`
                }
            ]
        }
    ],
};

const product3: Product = {
    id: "123",
    name: "Órtese Safe Air",
    sku: "OR1051",
    imageUrl: "https://cdn.site.com/produto.jpg",
    description: "A Órtese Safe Air Hidrolight foi desenvolvida para proporcionar suporte e proteção ao punho, aliando tecnologia de ventilação avançada e conforto superior. Seu tecido microperfurado permite maior circulação de ar, reduzindo o acúmulo de calor e umidade durante o uso prolongado. O design ergonômico se adapta perfeitamente à anatomia do punho, enquanto as talas internas removíveis garantem estabilidade e imobilização eficaz. O sistema de fechamento ajustável com velcro facilita a colocação e remoção, permitindo ajuste personalizado conforme a necessidade do paciente. Indicada para reabilitação, prevenção de lesões e uso pós-operatório, a Órtese Safe Air oferece segurança, praticidade e durabilidade para o dia a dia.",
    category: "Hidrolight Neo",
    brand: "Orthopedic",
    tags: [""],
    attributes: [
        { name: "Tecnologia", value: "Tecido microperfurado para ventilação", group: "Especificação Técnica" },
        { name: "Peso", value: "110g", group: "Especificação Técnica" },
        { name: "Ajuste", value: "Fechamento em velcro de alta resistência", group: "Comercial" },
        { name: "Talas", value: "Duas talas internas removíveis", group: "Especificação Técnica" },
        { name: "Uso", value: "Ambidestro, fácil colocação", group: "Comercial" }
    ],
    variants: [
        {
            id: "123-preto-p",
            color: "Preto",
            size: "P",
            imageUrl: "https://cdn.site.com/produto-preto-p.jpg",
            sku: "OR1051-PRETO-P"
        },
        {
            id: "123-azul-m",
            color: "Azul",
            size: "M",
            imageUrl: "https://cdn.site.com/produto-azul-m.jpg",
            sku: "OR1051-AZUL-M"
        },
        {
            id: "123-cinza-g",
            color: "Cinza",
            size: "G",
            imageUrl: "https://cdn.site.com/produto-cinza-g.jpg",
            sku: "OR1051-CINZA-G"
        }
    ],
    extraSections: [
        {
            title: "Indicações e Instruções de Uso",
            items: [
                {
                    label: "Indicações",
                    content: `A Órtese Safe Air é indicada para imobilização e suporte do punho em casos de lesões, entorses, tendinites, artrites, artroses, reabilitação pós-operatória e prevenção de recidivas. Seu uso é recomendado para pacientes que necessitam de restrição de movimento do punho, sem limitar a mobilidade dos dedos, proporcionando conforto e segurança durante o processo de recuperação. O tecido microperfurado torna o produto ideal para uso prolongado, evitando desconfortos causados pelo calor e suor.`
                },
                {
                    label: "Instruções de Uso",
                    content: `Para utilizar a órtese, posicione o punho de modo que fique centralizado na peça. Ajuste as talas internas conforme a necessidade, garantindo que estejam bem posicionadas para oferecer o suporte adequado. Feche o velcro de forma confortável, sem apertar excessivamente, para garantir estabilidade e compressão. O produto pode ser utilizado tanto na mão direita quanto na esquerda, bastando ajustar as talas conforme o lado desejado. Para limpeza, recomenda-se lavar manualmente com sabão neutro e secar à sombra. Não utilize o produto sem orientação médica e, em caso de desconforto, suspenda o uso e consulte um profissional de saúde.`
                }
            ]
        },
        {
            title: "Garantia",
            items: [
                {
                    label: "Termos de Garantia",
                    content: `Este produto possui garantia de 12 meses contra defeitos de fabricação, contados a partir da data de compra. A garantia cobre eventuais falhas nos materiais ou no processo de fabricação que comprometam o uso adequado da órtese. Não estão cobertos danos causados por mau uso, modificações não autorizadas, desgaste natural ou acidentes. Para acionar a garantia, é necessário apresentar a nota fiscal de compra e encaminhar o produto para avaliação técnica. Em caso de constatação de defeito de fabricação, a empresa se compromete a reparar ou substituir o produto sem custos adicionais ao consumidor.`
                },
                {
                    label: "Recomendações",
                    content: `Para garantir a durabilidade e a eficácia da órtese, siga rigorosamente as instruções de uso e conservação. Evite expor o produto a fontes de calor excessivo, umidade prolongada ou agentes químicos agressivos. Não utilize o produto sem orientação médica e, em caso de desconforto ou irritação, suspenda o uso e consulte um profissional de saúde.`
                }
            ]
        }
    ],
};

// const product: Product {
// id: "123",
//   name: "Órtese Safe Air",
//   "sku": "OR1051",
//   "imageUrl": "https://cdn.site.com/produto.jpg",
//   "description": "" // escreva uma descrição parecida com a primeira, mas um pouco diferente.
//   "category": "Hidrolight Neo",
//   "brand": "Orthopedic",
//   "tags": [""], // Sem tag
//   "attributes": [], // Adicione 5 atributos
//   "variants": [], // Adicione 3 variantes
//   "extraSections": [], // Adicione uma seção de "indicações e instruções de uso" e "Garantia", um texto de 300 palavras cada
// }
