import React from "react";

export default function FilterSection() {
  return (
    <div className="bg-[url('../assets/hero.png')]  py-[10px] flex justify-center">
      <form className="bg-white rounded-md w-[85vw]  bg-opacity-80 mt-4 p-4 text-xl lg:text-base">
        <input
          type="text"
          className="w-full p-2 rounded-t-md border border-orange font-normal"
          placeholder="Pesquisar por localidade"
        />
        <div className="flex my-3 gap-4">
          <button
            className="w-full p-2 border border-orange rounded-bl-md text-white
          bg-orange"
          >
            Venda
          </button>
          <button className="w-full p-2 border border-orange rounded-br-md">
            Locação
          </button>
        </div>

        <p className="font-semibold">Tipo de imóvel:</p>
        <div className="grid grid-cols-2 text-[16px] md:text-xl">
          <div>
            <input
              type="checkbox"
              className="ratio-square w-5 rounded-lg border-orange "
            />
            <span className="text-light-gray font-light ">Casa</span>
          </div>

          <div>
            <input
              type="checkbox"
              className="ratio-square w-5 rounded-lg border-orange checked:bg-orange"
            />
            <span className="text-light-gray font-light ">Apartamento</span>
          </div>

          <div>
            <input
              type="checkbox"
              className="ratio-square w-5 rounded-lg border-orange "
            />
            <span className="text-light-gray font-light ">Terreno</span>
          </div>

          <div>
            <input
              type="checkbox"
              className="ratio-square w-5 rounded-lg border-orange "
            />
            <span className="text-light-gray font-light ">Campo</span>
          </div>
        </div>

        <div className="my-2">
          <p className="font-medium">Preço:</p>
          <div className=" flex gap-3 justify-between ">
            <input
              type="text"
              className="min-w-[36vw] w-[43vw]  py-1 px-2 rounded-sm border   "
              placeholder="de R$"
            />
            <input
              type="text"
              className="min-w-[36vw] w-[43vw]   py-1 px-2 rounded-sm border   "
              placeholder="até R$"
            />
          </div>
        </div>

        <div className="my-2">
          <p className="font-medium">Área:</p>
          <div className=" flex  gap-3 justify-between">
            <input
              type="text"
              className="min-w-[36vw] w-[43vw]  py-1 px-2 rounded-sm border   "
              placeholder="Mínimo m²"
            />
            <input
              type="text"
              className="min-w-[36vw] w-[43vw]  py-1 px-2 rounded-sm border   "
              placeholder="Máximo m²"
            />
          </div>
        </div>

        <div className="my-2">
          <p className="font-medium">Quartos:</p>
          <div>
            <input
              type="text"
              className="min-w-[36vw] w-[43vw]  py-1 px-2 rounded-sm border   "
              placeholder="Mínimo"
            />
          </div>
        </div>

        <div className="my-2">
          <p className="font-medium">Banheiros:</p>
          <div>
            <input
              type="text"
              className="min-w-[36vw] w-[43vw]  py-1 px-2 rounded-sm border   "
              placeholder="Mínimo"
            />
          </div>
        </div>

        <div className="my-2">
          <p className="font-medium">Vagas:</p>
          <div>
            <input
              type="text"
              className="min-w-[36vw] w-[43vw] py-1 px-2 rounded-sm border   "
              placeholder="Mínimo"
            />
          </div>
        </div>

        <button className="bg-orange text-white w-full py-2 rounded-md mt-2">
          Buscar
        </button>
      </form>
    </div>
  );
}
