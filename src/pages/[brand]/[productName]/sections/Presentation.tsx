import Image from "next/image";

export default function Presentation() {
  function renderTitle() {
    return (
      <div>
        <section className="font-medium text-3xl">
          <h2>
            Fabricação <b className="text-primary">própria</b> e nacional.
          </h2>
          <h2>
            <b className="text-primary">Qualidade</b> garantida!
          </h2>
        </section>
        <p className="mt-4 font-medium">
          Antes de utilizar o produto, leia atentamente as precauções e
          Instruções de uso.
        </p>
      </div>
    );
  }
  function renderMainImage() {
    return (
      <section
        aria-label="Imagem principal do produto"
        className="relative flex justify-center mt-8 w-full h-[130vh] md:h-[80vh] sm:aspect-[1194/637] "
      >
        <figure className="relative w-full md:w-[70%] ld:w-1/3 aspect-[395/592]">
          <Image
            src="/images/flat_preview.jpg"
            fill
            alt="Visualização do produto"
            style={{ objectFit: "contain" }}
          />

          {/* Marcador e destaque ANVISA */}
          <div className="absolute w-4 h-4 rounded-full bg-primary top-[56%] right-[50%] z-50">
            {/* Card ANVISA */}
            <aside
              className="flex flex-col items-center absolute top-[-70vh] right-[-40vw] md:top-[-30vh] md:right-[-40vw] lg:right-[-400px] w-[20vw] min-w-52 max-w-[300px]
            p-5 bg-background z-10 rounded-[10px] border-dashed border border-primary"
            >
              <Image
                src="/images/anvisa.png"
                width={173}
                height={67}
                alt="Logo ANVISA"
              />
              <p className="text-center mt-2">
                Autorização e Cadastro de <br /> produtos para saúde na ANVISA
              </p>
            </aside>

            {/* Linha diagonal ligando o marcador ao card */}
            <div className="absolute bottom-0 w-[40vw] md:w-[40vw] lg:w-[15vw] h-[80vh] md:h-[10vh]">
              <div
                className="absolute left-1 bottom-1 w-[50vh] md:w-[30vh] lg:w-[300px] h-[2px] bg-primary
                rotate-[-80deg] sm:rotate-[-70deg] md:rotate-[-45deg]"
                style={{
                  transformOrigin: "bottom left",
                }}
              />
            </div>
          </div>
          <div className="absolute w-4 h-4 top-[56%] right-[58%] z-50">
            {/* Card Esquerda */}
            <aside
              className="flex flex-col items-center absolute top-[15vh] left-[-20vw] md:top-[-30vh] 
              md:left-[-40vw] lg:left-[-400px] w-[60vw] min-w-52 max-w-[400px] sm:w-[30vw]
            p-5 bg-background z-10 rounded-[10px] border-dashed border"
            >
              <h2 className="mb-1">Hidrolight Neo</h2>
              <p className="text-center mt-2">
                Família voltada para extrair os benefícios do Neoprene.
                Propriedades térmicas, compressivas e elásticas: são essas três
                propriedades que fazem do Neoprene uma ferramenta eficaz no
                tratamento e prevenção de lesões, no tratamento ortopédico
              </p>
            </aside>

            {/* Linha diagonal ligando o marcador ao card */}
            <div className="w-4 h-4 bg-primary rounded-full absolute bottom-0  ">
              <div
                className="absolute left-1 bottom-3 w-[20vh] md:w-[30vw] lg:w-[300px] h-[2px] bg-primary
                rotate-[95deg] sm:rotate-[100deg] md:rotate-[220deg]"
                style={{
                  transformOrigin: "bottom left",
                }}
              />
            </div>
          </div>
        </figure>
      </section>
    );
  }
  return (
    <div className="relative mt-10 border-b border-b-gray_scale-80">
      {renderTitle()}
      {renderMainImage()}
      <div className="absolute bottom-0 h-32 w-full from-background to-transparent bg-gradient-to-t" />
    </div>
  );
}
