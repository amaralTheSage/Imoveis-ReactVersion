import React from "react";
import { Link } from "react-router-dom";

// Tipos - 0: CASA, 1: AP, 2: TERRENO, 3:CAMPO

// const imoveis = [
//   {
//     nome: "Casa à venda no Amarilis",
//     tipo: 0,
//     descricao:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id porta lacus, non accumsan nunc. Praesent eu odio enim. Vivamus at semper ex. Vivamus in orci at lacus aliquet lacinia. Nunc hendrerit sagittis vulputate. Aenean pharetra tortor at magna pharetra auctor. Donec non nunc et arcu ornare tempor. Etiam ac leo neque. ",
//     imgs: ["imgImóvel.png", "imgImóvel.png", "imgImóvel.png"],
//     metragem: 60,
//     quartos: 2,
//     banheiros: 1,
//     vagas: 2,
//     precoVenda: 300000,
//     condominio: 200,
//   },
// ];

interface Imovel {
  id: number;
  nome: string;
  tipo: number;
  bairro: string;
  descricao: string;
  imgs: string[];
  metragem: number;
  quartos: number;
  banheiros: number;
  vagas: number;
  precoVenda?: number;
  precoAluguel?: number;
  condominio?: number;
}

interface ImovelProps {
  imovel: Imovel;
}

function CheckTipo(tipo: number) {
  if (tipo === 0) {
    return "Casa";
  } else if (tipo === 1) {
    return "Apartamento";
  } else if (tipo === 2) {
    return "Terreno";
  } else if (tipo === 3) {
    return "Campo";
  }
}

function PropertyCard({ imovel }: ImovelProps) {
  const BRL = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  {
    /*w-[300px] min-[400px]:w-[380px] min-[500px]:w-[450px] lg:w-[280px] min-[850px]:w-[400px]xl:w-[300px] */
  }
  return (
    <Link to={"/imovel"}>
      <div className="rounded-md shadow-md my-2 text-lg lg:min-h-[445px]">
        <img src={imovel.imgs[0]} className="rounded-t-md" />
        <div className="p-2 flex flex-col gap-1">
          <div className="flex justify-between">
            <span className="text-light-gray font-light">
              {CheckTipo(imovel.tipo)} - {imovel.bairro}
            </span>
            <span className="font-medium ">{imovel.metragem}m²</span>
          </div>
          <h2 className="font-medium text-xl">{imovel.nome}</h2>
          <div className="flex gap-3 text-[17px]">
            <span>{imovel.quartos} Quartos</span>
            <span>{imovel.banheiros} Banheiro</span>
            <span>{imovel.vagas} Vagas</span>
          </div>
          <div className="flex justify-between text-xl">
            <span className="font-medium">
              {imovel.precoVenda && "Preço de Venda"}
            </span>
            <span>{imovel.precoVenda && BRL.format(imovel.precoVenda)}</span>
          </div>
          <div className="flex justify-between text-xl">
            <span className="font-medium">
              {imovel.precoAluguel && "Preço de Aluguel"}
            </span>
            <span>
              {" "}
              {imovel.precoAluguel && BRL.format(imovel.precoAluguel)}
            </span>
          </div>
          <div className="flex justify-between text-xl">
            <span className="font-medium ">
              {imovel.condominio && "Condomínio"}
            </span>
            <span>{imovel.condominio && BRL.format(imovel.condominio)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PropertyCard;
