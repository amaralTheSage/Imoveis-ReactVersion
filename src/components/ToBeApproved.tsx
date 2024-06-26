import { useEffect } from "react";
import { BRL } from "../tools/BRL";
import { CheckTipo } from "../tools/CheckTipo";
import { Imovel } from "../types/Imovel";

function ToBeApproved({
  property,
  imoveis,
  index,
  onSetImoveis,
  aprovados,
  onSetAprovados,
  onAprovar,
}) {
  return (
    <div className=" w-[570px] flex gap-2 shadow-lg rounded-md m-auto">
      <img
        src={property.imgs[0]}
        alt={property.nome}
        className="w-[45%] aspect-[14/9] object-cover rounded-l-md"
      />
      <div className="px-3 py-4 flex flex-col justify-between w-full">
        <div className="flex justify-between">
          <span className="text-light-gray text-sm ">
            {CheckTipo(property.tipo)} - {property.bairro}
          </span>
          <span className="font-medium text-sm ">{property.metragem}m²</span>
        </div>
        <h2 className="font-medium text-lg">{property.nome}</h2>
        <div className="flex gap-3 text-[15px]">
          <span>{property.quartos} Quartos</span>
          <span>{property.banheiros} Banheiro</span>
          <span>{property.vagas} Vagas</span>
        </div>
        <div className="flex justify-between gap-2">
          <span className="font-medium">
            {property.precoVenda && "Preço de Venda"}
          </span>
          <span>{property.precoVenda && BRL.format(property.precoVenda)}</span>
        </div>
        <div className="flex justify-between gap-2">
          <span className="font-medium">
            {property.precoAluguel && "Preço de Aluguel"}
          </span>
          <span>
            {property.precoAluguel && BRL.format(property.precoAluguel)}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium ">
            {property.condominio && "Condomínio"}
          </span>
          <span>{property.condominio && BRL.format(property.condominio)}</span>
        </div>
        <div className="flex justify-end gap-3 mt-2">
          <button
            className="px-5 py-1 bg-green-500 text-white rounded-md"
            onClick={() => {
              onAprovar();
              // onSetImoveis(imoveis.splice(index, 1));

              // const aprovados2 = [...aprovados];
              // aprovados2.push({
              //   id: property.id,
              //   nome: property.nome,
              //   tipo: property.tipo,
              //   bairro: property.bairro,
              //   cidade: property.cidade,
              //   descricao: property.descricao,
              //   imgs: [property.img],
              //   metragem: property.metragem,
              //   quartos: property.quartos,
              //   banheiros: property.banheiros,
              //   vagas: property.vagas,
              //   precoVenda: property.precoVenda,
              //   precoAluguel: property.precoAluguel,
              //   condominio: property.condominio,
              // });

              // onSetAprovados(aprovados2);

              // console.log(imoveis, aprovados);
            }}
          >
            Aprovar
          </button>
          <button className="px-5 py-1 bg-red-500 text-white rounded-md">
            Rejeitar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToBeApproved;
