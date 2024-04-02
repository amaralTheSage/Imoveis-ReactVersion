import React from "react";
import { Link } from "react-router-dom";
import viteSvg from "../public/vite.svg";

export default function Header({ isAdmin }) {
  return (
    <Link to={"/"}>
      <header className="flex justify-between px-4 py-5 text-xl lg:text-md">
        <div className="flex items-center gap-2 font-semibold">
          <img src={viteSvg} className="w-6" /> Coisa Janice
        </div>
        <div>
          {isAdmin == true ? (
            <Link
              to={"/publicar"}
              className="py-1 px-2 text-white rounded-md bg-orange"
            >
              Publicar
            </Link>
          ) : (
            <p className="font-medium">Contatos</p>
          )}
        </div>
      </header>
    </Link>
  );
}
