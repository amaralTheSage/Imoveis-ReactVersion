import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ToBeApproved from "../components/ToBeApproved";
import { Imovel } from "../types/Imovel";

function AdminApprovalPage({
  isLoggedIn,
  imoveis,
  aprovados,
  onSetAprovados,
  onSetImoveis,
  isAdmin,
}) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} isAdmin={isAdmin} />
      <main className="grid grid-cols-1 lg:grid-cols-2 gap-3 w-[90%] m-auto">
        {imoveis.map((imovel: Imovel) => {
          const index = imoveis.findIndex((x) => x.id == imovel.id);

          const handleAprovar = (imovelId) => {
            // Encontra o índice do imóvel a ser aprovado
            const index = imoveis.findIndex((imovel) => imovel.id === imovelId);

            if (index !== -1) {
              // Atualiza o estado 'aprovados'
              const novoAprovados = [...aprovados, imoveis[index]];

              // Atualiza o estado 'imoveis' removendo o item aprovado
              const novosImoveis = [
                ...imoveis.slice(0, index),
                ...imoveis.slice(index + 1),
              ];

              // Chama as funções de atualização de estado
              onSetAprovados(novoAprovados);
              onSetImoveis(novosImoveis);
            }
          };

          return (
            <ToBeApproved
              onSetAprovados={onSetAprovados}
              onSetImoveis={onSetImoveis}
              property={imovel}
              imoveis={imoveis}
              aprovados={aprovados}
              onAprovar={() => handleAprovar(imovel.id)}
              index={index}
              key={imovel.id}
            />
          );
        })}
      </main>
      <Footer />
    </>
  );
}

export default AdminApprovalPage;
