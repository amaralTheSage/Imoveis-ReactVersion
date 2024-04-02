import Home from "./pages/Home";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import PaginaImovel from "./pages/PaginaImovel";
import imgImovel from "./assets/imgImóvel.png";
import { useState } from "react";
import Login from "./pages/Login";
import Publicar from "./pages/Publicar";

const imoveis = [
  {
    id: 1,
    nome: "Casa à venda no Amarilis",
    tipo: 0,
    bairro: "Laranjal",
    cidade: "Pelotas, RS",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id porta lacus, non accumsan nunc. Praesent eu odio enim. Vivamus at semper ex. Vivamus in orci at lacus aliquet lacinia. Nunc hendrerit sagittis vulputate. Aenean pharetra tortor at magna pharetra auctor. Donec non nunc et arcu ornare tempor. Etiam ac leo neque. ",
    imgs: [imgImovel, imgImovel, imgImovel, imgImovel, imgImovel, imgImovel],
    metragem: 60,
    quartos: 2,
    banheiros: 1,
    vagas: 2,
    precoVenda: 300000,
    condominio: 200,
  },
  {
    id: 2,
    nome: "Casa à venda no Amarilis",
    tipo: 1,
    bairro: "Laranjal",
    cidade: "Pelotas, RS",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id porta lacus, non accumsan nunc. Praesent eu odio enim. Vivamus at semper ex. Vivamus in orci at lacus aliquet lacinia. Nunc hendrerit sagittis vulputate. Aenean pharetra tortor at magna pharetra auctor. Donec non nunc et arcu ornare tempor. Etiam ac leo neque. ",
    imgs: [imgImovel, imgImovel, imgImovel, imgImovel],
    metragem: 60,
    quartos: 2,
    banheiros: 1,
    vagas: 2,
    precoAluguel: 1234,
    condominio: 200,
  },
  {
    id: 3,
    nome: "Casa à venda no Amarilis",
    tipo: 0,
    bairro: "Laranjal",
    cidade: "Pelotas, RS",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id porta lacus, non accumsan nunc. Praesent eu odio enim. Vivamus at semper ex. Vivamus in orci at lacus aliquet lacinia. Nunc hendrerit sagittis vulputate. Aenean pharetra tortor at magna pharetra auctor. Donec non nunc et arcu ornare tempor. Etiam ac leo neque. ",
    imgs: [imgImovel, imgImovel, imgImovel, imgImovel],
    metragem: 60,
    quartos: 2,
    banheiros: 1,
    vagas: 2,
    precoVenda: 300000,
    precoAluguel: 1000,
    condominio: 200,
  },
  {
    id: 4,
    nome: "Casa à venda no Amarilis",
    tipo: 0,
    bairro: "Laranjal",
    cidade: "Pelotas, RS",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id porta lacus, non accumsan nunc. Praesent eu odio enim. Vivamus at semper ex. Vivamus in orci at lacus aliquet lacinia. Nunc hendrerit sagittis vulputate. Aenean pharetra tortor at magna pharetra auctor. Donec non nunc et arcu ornare tempor. Etiam ac leo neque. ",
    imgs: [imgImovel, imgImovel, imgImovel, imgImovel],
    metragem: 60,
    quartos: 2,
    banheiros: 1,
    vagas: 2,
    precoVenda: 300000,
    condominio: 200,
  },
  {
    id: 5,
    nome: "Casa à venda no Amarilis",
    tipo: 0,
    bairro: "Laranjal",
    cidade: "Pelotas, RS",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id porta lacus, non accumsan nunc. Praesent eu odio enim. Vivamus at semper ex. Vivamus in orci at lacus aliquet lacinia. Nunc hendrerit sagittis vulputate. Aenean pharetra tortor at magna pharetra auctor. Donec non nunc et arcu ornare tempor. Etiam ac leo neque. ",
    imgs: [imgImovel, imgImovel, imgImovel, imgImovel],
    metragem: 60,
    quartos: 2,
    banheiros: 1,
    vagas: 2,
    precoVenda: 300000,
    condominio: 200,
  },
];

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const BRL = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home imoveis={imoveis} isAdmin={isAdmin} />}
          />
          <Route
            path="/imovel"
            element={
              <PaginaImovel
                imoveis={imoveis}
                imovel={imoveis[0]}
                isAdmin={isAdmin}
                BRL={BRL}
              />
            }
          />
          <Route path="/login" element={<Login onSetIsAdmin={setIsAdmin} />} />

          <Route path="/publicar" element={<Publicar isAdmin={isAdmin} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
// className="min-[790px]:grid grid-cols-2 gap-2 lg:grid-cols-3 xl:grid-cols-4 2xl: grid-cols-5"
