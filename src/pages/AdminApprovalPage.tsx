import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

/* let index = array1.findIndex(x => x == 5); */

[
  {
    id: 1,
    nome: "Casa à venda no Amarilis",
    tipo: 0,
    bairro: "Laranjal",
    cidade: "Pelotas, RS",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id porta lacus, non accumsan nunc. Praesent eu odio enim. Vivamus at semper ex. Vivamus in orci at lacus aliquet lacinia. Nunc hendrerit sagittis vulputate. Aenean pharetra tortor at magna pharetra auctor. Donec non nunc et arcu ornare tempor. Etiam ac leo neque. ",
    imgs: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtD8Pur4RdOno_yYBGlXezlgk90wZUkGkUww&s",
    ],
    metragem: 60,
    quartos: 2,
    banheiros: 1,
    vagas: 2,
    precoVenda: 300000,
    condominio: 200,
  },
  {
    id: 2,
    nome: "Casa à venda no Laranjal",
    tipo: 0,
    bairro: "Laranjal",
    cidade: "Pelotas, RS",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id porta lacus, non accumsan nunc. Praesent eu odio enim. Vivamus at semper ex. Vivamus in orci at lacus aliquet lacinia. Nunc hendrerit sagittis vulputate. Aenean pharetra tortor at magna pharetra auctor. Donec non nunc et arcu ornare tempor. Etiam ac leo neque. ",
    imgs: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtD8Pur4RdOno_yYBGlXezlgk90wZUkGkUww&s",
    ],
    metragem: 60,
    quartos: 2,
    banheiros: 1,
    vagas: 2,
    precoAluguel: 300000,
    condominio: 200,
  },
];

function AdminApprovalPage({ isLoggedIn, imoveis, aprovados, onSetAprovados }) {
  return <></>;
}

export default AdminApprovalPage;
