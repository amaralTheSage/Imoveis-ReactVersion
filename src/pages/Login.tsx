import React from "react";
import Footer from "../components/Footer";
import viteSvg from "../public/vite.svg";
import arrowIcon from "../public/arrow-icon.png";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function Login({ onSetIsAdmin }) {
  const navigate = useNavigate();

  return (
    <>
      <Link to={"/"}>
        <img src={arrowIcon} className="mt-6 ml-2" />
      </Link>
      <main className="flex flex-col items-center h-screen justify-center">
        <img src={viteSvg} alt="" className="w-14" />
        <p className="font-medium text-2xl mb-12 mt-4">Coisa Janice</p>
        <form
          action=""
          className="flex flex-col items-center gap-4 font-light text-xl"
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
      <Footer />
    </>
  );
}

export default Login;
