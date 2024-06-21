import Home from "./pages/Home";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import PaginaImovel from "./pages/PaginaImovel";
import imgImovel from "./assets/imgImóvel.png";
import { useEffect, useState } from "react";
import Login from "./pages/Login";
import Publicar from "./pages/Publicar";
import Register from "./pages/Register";



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const BRL = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const [imoveis, setImoveis] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("imoveisStorage")) {
      setImoveis(JSON.parse(localStorage.getItem("imoveisStorage")));
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home imoveis={imoveis} isLoggedIn={isLoggedIn} />}
          />
          <Route
            path="/imovel"
            element={
              <PaginaImovel
                imoveis={imoveis}
                imovel={imoveis[0]}
                isLoggedIn={isLoggedIn}
                BRL={BRL}
              />
            }
          />
          <Route
            path="/login"
            element={<Login onSetIsLoggedIn={setIsLoggedIn} />}
          />

          <Route
            path="/register"
            element={<Register onSetIsAdmin={setIsLoggedIn} />}
          />

          <Route
            path="/publicar"
            element={
              <Publicar
                isLoggedIn={isLoggedIn}
                imoveis={imoveis}
                onSetImoveis={setImoveis}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
// className="min-[790px]:grid grid-cols-2 gap-2 lg:grid-cols-3 xl:grid-cols-4 2xl: grid-cols-5"
