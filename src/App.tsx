import Home from "./pages/Home";
import { Route, Routes, useLocation } from "react-router";
import { BrowserRouter } from "react-router-dom";
import PaginaImovel from "./pages/PaginaImovel";
import { useEffect, useState } from "react";
import Login from "./pages/Login";
import Publicar from "./pages/Publicar";
import Register from "./pages/Register";
import AdminApprovalPage from "./pages/AdminApprovalPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);

  const [imoveis, setImoveis] = useState(() => {
    const saved = localStorage.getItem("imoveisStorage");
    return saved ? JSON.parse(saved) : [];
  });

  const [aprovados, setAprovados] = useState(() => {
    const saved = localStorage.getItem("aprovadosStorage");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    if (localStorage.getItem("imoveisStorage")) {
      setImoveis(JSON.parse(localStorage.getItem("imoveisStorage")!));
    }

    if (localStorage.getItem("aprovadosStorage")) {
      setAprovados(JSON.parse(localStorage.getItem("aprovadosStorage")!));
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
                isAdmin={isAdmin}
                isLoggedIn={isLoggedIn}
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
                isAdmin={isAdmin}
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
