import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Field, Form, Formik, useFormik } from "formik";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function Publicar({ isLoggedIn, imoveis, onSetImoveis }) {
  const { register, handleSubmit, reset, setFocus } = useForm();

  function registerProperty(data) {
    const properties = [...imoveis];
    properties.push({
      id: crypto.randomUUID(),
      nome: data.nome,
      tipo: data.tipo,
      bairro: data.bairro,
      cidade: data.cidade,
      descricao: data.descricao,
      imgs: [data.img],
      metragem: data.metragem,
      quartos: data.quartos,
      banheiros: data.banheiros,
      vagas: data.vagas,
      precoVenda: data.precoVenda,
      precoAluguel: data.precoAluguel,
      condominio: data.condominio,
    });

    onSetImoveis(properties);
    setFocus("nome");
    reset();

    localStorage.setItem("imoveisStorage", JSON.stringify(properties));
    toast.success("Imovel cadastrado com Sucesso");
  }

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />

      <div className="max-w-[90vw] lg:max-w-[50vw] m-auto">
        <h3 className="font-medium text-2xl mb-3">Novo Imóvel:</h3>
        <form
          action=""
          className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 text-light-gray"
          onSubmit={handleSubmit(registerProperty)}
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
              {...register("nome")}
              className="block border border-orange border-opacity-50 rounded-[4px] px-2 py-1 w-full "
            />
          </div>

          <div className="md:row-span-2 h-max">
            <label
              htmlFor="descricao"
              className="text-light-gray font-light text-lg"
            >
              Descrição :
            </label>
            {/* <input
              type="text"
              required
              id="descricao"
              className="block border border-orange border-opacity-50 rounded-[4px] px-2 py-1 w-full md:h-28"
            /> */}
            <textarea
              id="descricao"
              cols={30}
              rows={5}
              {...register("descricao")}
              className="block border border-orange border-opacity-50 rounded-[4px] px-2 py-1 w-full md:h-28"
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="bairro"
              className="text-light-gray font-light text-lg"
            >
              Bairro :
            </label>
            <input
              type="text"
              required
              id="bairro"
              {...register("bairro")}
              className="block border border-orange border-opacity-50 rounded-[4px] px-2 py-1 w-full "
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
              {...register("metragem")}
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
              {...register("quartos")}
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
              {...register("banheiros")}
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
              {...register("vagas")}
              className="block border border-orange border-opacity-50 rounded-[4px] px-2 py-1 w-full "
            />
          </div>

          <div className="grid grid-cols-2 text-light-gray">
            <label htmlFor="tipo" className="col-span-2 text-light-gray">
              Tipo de Imóvel:
            </label>
            <select
              id="tipo"
              className="border w-full  p-1 rounded-sm"
              {...register("tipo")}
            >
              <option value="0">Casa</option>
              <option value="1">Apartamento</option>
              <option value="2">Terreno</option>
              <option value="3">Campo</option>
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
              {...register("precoVenda")}
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
              {...register("precoAluguel")}
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
              {...register("precoCondominio")}
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
              type="text"
              id="img"
              {...register("img")}
              className="block border border-orange border-opacity-50 rounded-[4px] px-2 py-1 w-full "
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
