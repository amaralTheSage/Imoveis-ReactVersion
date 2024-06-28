import Header from "../components/Header";
import Footer from "../components/Footer";
import PropertyCard from "../components/PropertyCard";
import imgImovel from "../assets/imgImóvel.png";
import bedIcon from "../public/bed-icon.png";
import bathtubIcon from "../public/bathtub-icon.png";
import carIcon from "../public/car-icon.png";
import rulerIcon from "../public/ruler-icon.png";
import mapIcon from "../public/map-icon.svg";
import { useLocation } from "react-router-dom";
import { Imovel } from "../types/Imovel";
import { BRL } from "../tools/BRL";
import { Dispatch, SetStateAction, useState } from "react";

export default function PaginaImovel({ aprovados, isLoggedIn, isAdmin }) {
  const location = useLocation();

  const [imovel]: [Imovel, Dispatch<SetStateAction<Imovel>>] = useState(
    aprovados.find((obj: Imovel) => (obj.id = location.state.id))
  );

  // const imovel = aprovados.find((obj: Imovel) => (obj.id = location.state.id))

  console.log(
    "Imovel: ",
    imovel.id,
    "\nlocation id:",
    location.state.id,
    "\nAprovados: ",
    aprovados
  );

  const index = aprovados.findIndex((i: Imovel) => i.id === imovel.id);

  const novasRecomendacoes = [
    ...aprovados.slice(0, index),
    ...aprovados.slice(index + 1),
  ];
  return (
    <>
      <Header isAdmin={isAdmin} isLoggedIn={isLoggedIn} />

      {/*wrapper */}
      <main className="lg:max-w-[80%] m-auto lg:mt-12 ">
        <section className="px-4 lg:flex  justify-center gap-6">
          <div className="flex flex-col items-center ">
            <img src={imovel.img} className="mb-1 w-full" />

            <div className="grid grid-cols-3  gap-1 md:text-2xl">
              <img src={imgImovel} />
              <img src={imgImovel} />
              <div className="w-full text-center">
                <img src={imgImovel} className="brightness-50 " />
                <p className="relative bottom-1/2 flex my-1 gap-1  text-white justify-center">
                  3 mais fotos
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:gap-6 mb-4 lg:max-w-[600px]">
            <h2 className="font-medium text-2xl xl:text-3xl">{imovel.nome}</h2>
            <p className="text-light-gray text-sm xl:text-lg ">
              {imovel.descricao}
            </p>
            <ul className="flex flex-wrap font-medium xl:text-lg ">
              <li className="w-full flex gap-1 items-center">
                <img src={mapIcon} className="w-6" /> Bairro:
                {imovel.bairro} - Pelotas
              </li>
              <li className="w-1/2 flex my-1 relative right-[2px] gap-1 items-center ">
                <img src={rulerIcon} className=" w-6" />
                {imovel.metragem}m² úteis
              </li>
              <li className="w-1/2 flex my-1 gap-1 items-center ">
                <img src={bedIcon} className="w-6" />
                {imovel.quartos}
                {imovel.quartos == 1 ? " Quarto" : " Quartos"}
              </li>
              <li className="w-1/2 flex my-1 gap-1 items-center ">
                <img src={bathtubIcon} className="w-5" />
                {imovel.banheiros}
                {imovel.banheiros == 1 ? " Banheiro" : " Banheiros"}
              </li>
              <li className="w-1/2 flex my-1 gap-1 items-center ">
                <img src={carIcon} className="w-6" />
                {imovel.vagas}
                {imovel.vagas == 1 ? " Vaga" : " Vagas"}
              </li>
            </ul>
            <div>
              {/* Preços */}
              <div className="flex justify-between text-xl xl:text-2xl">
                <span className="font-medium">
                  {imovel.precoVenda && "Preço de Venda"}
                </span>
                <span>
                  {imovel.precoVenda && BRL.format(imovel.precoVenda)}
                </span>
              </div>
              <div className="flex justify-between text-xl xl:text-2xl">
                <span className="font-medium">
                  {imovel.precoAluguel && "Preço de Aluguel"}
                </span>
                <span>
                  {imovel.precoAluguel && BRL.format(imovel.precoAluguel)}
                </span>
              </div>
              <div className="flex justify-between text-xl xl:text-2xl">
                <span className="font-medium ">
                  {imovel.condominio && "Condomínio"}
                </span>
                <span>
                  {imovel.condominio && BRL.format(imovel.condominio)}
                </span>
              </div>
            </div>
            <div className="text-lg xl:text-2xl">
              <h4 className="font-semibold text-xl ">
                Interessado? Nos chame por WhatsApp ou Email:
              </h4>
              <a href="">
                <img src="#" />
                53 9999-9999
              </a>
              <a href="">
                <img src="#" />
                emailabcd@hotmail.com
              </a>

              {isLoggedIn && (
                <p className="bg-orange text-white w-min py-1 px-6 rounded-md mt-2">
                  Deletar
                </p>
              )}
            </div>
          </div>
        </section>
        <h3 className="text-center p-3 text-2xl lg:text-3xl lg:text-left font-medium">
          Veja Outros Imóveis à Venda
        </h3>
        <div className="grid grid-flexivel gap-3 mx-8 lg:mx-0">
          {novasRecomendacoes.map((i: Imovel) => {
            return <PropertyCard imovel={i} key={i.id} />;
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}
