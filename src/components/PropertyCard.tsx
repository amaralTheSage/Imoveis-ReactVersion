import { Link, useNavigate } from "react-router-dom";
import { Imovel } from "../types/Imovel";
import { CheckTipo } from "../tools/CheckTipo";
import { BRL } from "../tools/BRL";

function PropertyCard({ imovel }: { imovel: Imovel }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate("/imovel", {
          state: {
            id: imovel.id,
          },
        });
      }}
    >
      <div className="rounded-md shadow-md my-2 text-lg min-h-[410px] lg:min-h-[445px]">
        <img
          src={imovel.img}
          className="rounded-t-md w-full object-cover aspect-[14/9]"
        />
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
    </div>
  );
}

export default PropertyCard;
