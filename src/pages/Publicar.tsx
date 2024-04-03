import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Field, Form, Formik, useFormik } from "formik";
import * as Yup from "yup";

export default function Publicar({ isAdmin }) {
  return (
    <>
      <Header isAdmin={isAdmin} />

      <div className="max-w-[90vw] lg:max-w-[50vw] m-auto">
        <h3 className="font-medium text-2xl mb-3">Novo Imóvel:</h3>
        <form
          action=""
          className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 text-light-gray"
        >
          <div>
            <label
              htmlFor="nome"
              className="text-light-gray font-light text-lg"
            >
              Nome :
            </label>
            <input
              type="text"
              required
              id="nome"
              className="block border border-orange border-opacity-50 rounded-[4px] px-2 py-1 w-full "
            />
          </div>

          <div className="xl:row-span-2 h-max">
            <label
              htmlFor="descricao"
              className="text-light-gray font-light text-lg"
            >
              Descrição :
            </label>
            <input
              type="text"
              required
              id="descricao"
              className="block border border-orange border-opacity-50 rounded-[4px] px-2 py-1 w-full xl:h-28"
            />
          </div>

          <div>
            <label
              htmlFor="metragem"
              className="text-light-gray font-light text-lg"
            >
              M² :
            </label>
            <input
              type="number"
              required
              id="metragem"
              className="block border border-orange border-opacity-50 rounded-[4px] px-2 py-1 w-full "
            />
          </div>

          <div>
            <label
              htmlFor="quartos"
              className="text-light-gray font-light text-lg"
            >
              Nº Quartos :
            </label>
            <input
              type="number"
              required
              id="quartos"
              className="block border border-orange border-opacity-50 rounded-[4px] px-2 py-1 w-full "
            />
          </div>

          <div>
            <label
              htmlFor="banheiros"
              className="text-light-gray font-light text-lg"
            >
              Nº Banheiros :
            </label>
            <input
              type="number"
              required
              id="banheiros"
              className="block border border-orange border-opacity-50 rounded-[4px] px-2 py-1 w-full "
            />
          </div>

          <div>
            <label
              htmlFor="vagas"
              className=" font-light text-lg text-light-gray"
            >
              Nº Vagas :
            </label>
            <input
              type="number"
              required
              id="vagas"
              className="block border border-orange border-opacity-50 rounded-[4px] px-2 py-1 w-full "
            />
          </div>

          <div className="grid grid-cols-2 text-light-gray">
            <label htmlFor="tipo" className="col-span-2 text-light-gray">
              Tipo de Imóvel:
            </label>
            <select
              name="tipo"
              id="tipo"
              className="border w-full  p-1 rounded-sm"
            >
              <option value="casa">Casa</option>
              <option value="casa">Apartamento</option>
              <option value="casa">Terreno</option>
              <option value="casa">Campo</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="precoVenda"
              className="text-light-gray font-light text-lg"
            >
              Preço de Venda(opcional) :
            </label>
            <input
              type="number"
              id="precoVenda"
              className="block border border-orange border-opacity-50 rounded-[4px] px-2 py-1 w-full "
            />
          </div>
          <div>
            <label
              htmlFor="precoAluguel"
              className="text-light-gray font-light text-lg"
            >
              Preço de Aluguel(opcional) :
            </label>
            <input
              type="number"
              id="precoAluguel"
              className="block border border-orange border-opacity-50 rounded-[4px] px-2 py-1 w-full "
            />
          </div>

          <div>
            <label
              htmlFor="condominio"
              className="text-light-gray font-light text-lg "
            >
              Preço de Condomínio(opcional) :
            </label>
            <input
              type="number"
              id="condominio"
              className="block border border-orange border-opacity-50 rounded-[4px] px-2 py-1 w-full "
            />
          </div>

          <div>
            <label
              htmlFor="imgs"
              className="text-light-gray font-light text-lg"
            >
              Imagens :
            </label>
            <input
              type="file"
              id="imgs"
              className="text-light-gray font-light text-lg flex flex-wrap"
            />
          </div>

          <button className="text-white bg-orange p-3 my-3  rounded-md font-medium">
            Publicar
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

//   const initialValues = {
//     name: "",
//     tipo: 0,
//     bairro: "",
//     cidade: "Pelotas, RS",
//     descricao: "",
//     imgs: [],
//     metragem: 0,
//     quartos: 0,
//     banheiros: 0,
//     vagas: 0,
//     precoVenda: 0,
//     precoAluguel: 0,
//     condominio: 0,
//   };

//   function onSubmit(data) {
//     console.log(data);
//   }

//   const validationSchema = Yup.object().shape({
//     name: Yup.string().max(50).required(),
//     tipo: Yup.number().required(),
//     bairro: Yup.string().max(20),
//     cidade: Yup.string().max(20).required(),
//     descricao: Yup.string(),
//     imgs: Yup.array().required(),
//     metragem: Yup.number().required(),
//     quartos: Yup.number().required(),
//     banheiros: Yup.number().required(),
//     vagas: Yup.number().required(),
//     precoVenda: Yup.number(),
//     precoAluguel: Yup.number(),
//     condominio: Yup.number(),
//   });
