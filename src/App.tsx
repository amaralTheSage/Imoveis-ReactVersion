import Home from "./pages/Home";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import PaginaImovel from "./pages/PaginaImovel";
import imgImovel from "./assets/imgImóvel.png";
import { useEffect, useState } from "react";
import Login from "./pages/Login";
import Publicar from "./pages/Publicar";
import Register from "./pages/Register";
import AdminApprovalPage from "./pages/AdminApprovalPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const BRL = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const [imoveis, setImoveis] = useState([]);
  const [aprovados, setAprovados] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("imoveisStorage")) {
      setImoveis(JSON.parse(localStorage.getItem("imoveisStorage")));
    }

    if (localStorage.getItem("aprovadosStorage")) {
      setAprovados(JSON.parse(localStorage.getItem("aprovadosStorage")));
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                aprovados={aprovados}
                isLoggedIn={isLoggedIn}
                isAdmin={isAdmin}
              />
            }
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
            path="/reviewPosts"
            element={
              <AdminApprovalPage
                isLoggedIn={isLoggedIn}
                onSetImoveis={setImoveis}
                aprovados={aprovados}
                imoveis={imoveis}
                isAdmin={isAdmin}
                onSetAprovados={setAprovados}
              />
            }
          />
          <Route
            path="/login"
            element={
              <Login
                onSetIsLoggedIn={setIsLoggedIn}
                onSetIsAdmin={setIsAdmin}
              />
            }
          />

          <Route
            path="/register"
            element={<Register onSetIsLoggedIn={setIsLoggedIn} />}
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
