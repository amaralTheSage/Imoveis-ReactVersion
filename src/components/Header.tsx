import React from "react";
import { Link } from "react-router-dom";
import viteSvg from "../public/vite.svg";

export default function Header({ isAdmin }) {
  return (
    <header className="flex justify-between px-4 py-5 text-xl lg:text-md">
      <Link to={"/"}>
        <div className="flex items-center gap-2 font-semibold">
          <img src={viteSvg} className="w-6" /> Coisa
        </div>
      </Link>
      <div>
        {isAdmin == true ? (
          <Link
            to={"/publicar"}
            className="py-1 px-2 text-white rounded-md bg-orange lg:px-6"
          >
            Publicar
          </Link>
        ) : (
          <p className="font-medium">Contatos</p>
        )}
      </div>
    </header>
  );
}
