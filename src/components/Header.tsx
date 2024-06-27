import { Link } from "react-router-dom";
import viteSvg from "../assets/house.png";

export default function Header({ isLoggedIn, isAdmin }) {
  return (
    <header className="flex justify-between px-4 py-5 text-md">
      <Link to={"/"}>
        <div className="flex items-center gap-2 font-semibold">
          <img src={viteSvg} className="w-7" /> Central Imóveis
        </div>
      </Link>
      <div>
        {isLoggedIn == true && (
          <Link
            to={"/publicar"}
            className="py-1 px-2  text-white rounded-md bg-orange lg:px-6"
          >
            Publicar
          </Link>
        )}
        {isAdmin == true && (
          <Link
            to={"/reviewPosts"}
            className="py-1 px-2  text-white rounded-md bg-green-400 lg:px-6"
          >
            Analisar Pedidos
          </Link>
        )}
        <>
          <Link
            to={"/login"}
            className="text-dark-gray mx-5 font-semibold text-lg "
          >
            Login
          </Link>

          <Link
            to={"/register"}
            className="text-dark-gray  font-semibold text-lg "
          >
            Sign Up
          </Link>
        </>
      </div>
    </header>
  );
}
