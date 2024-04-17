import React from "react";
import Footer from "../components/Footer";
import viteSvg from "../assets/house.png";
import arrowIcon from "../public/arrow-icon.png";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function Login({ onSetIsAdmin }) {
  const navigate = useNavigate();

  return (
    <>
      <Link to={"/"}>
        <img src={arrowIcon} className="mt-6 ml-2 lg:mt-12 lg:ml-8 lg:w-10" />
      </Link>
      <main className="flex flex-col items-center mt-[200px]">
        <img src={viteSvg} alt="" className="w-14 lg:w-20" />
        <p className="font-medium text-2xl mb-12 mt-4 lg:text-4xl">
          Central Imóveis
        </p>
        <form
          action=""
          className="flex flex-col items-center mx-3 gap-4 font-light text-xl lg:text-2xl"
          onSubmit={() => {
            onSetIsAdmin(true);
            navigate("/");
          }}
        >
          <input
            type="email"
            placeholder="Email"
            className="border-[0.5px] border-orange py-2 px-3 rounded-t-lg"
          />
          <input
            type="password"
            placeholder="Senha"
            className="border-[0.5px] border-orange py-2 px-3 rounded-b-lg"
          />

          <button className="text-center bg-orange text-white rounded-lg w-full py-2 mt-4 font-medium">
            Entrar
          </button>
        </form>
      </main>
    </>
  );
}

export default Login;
