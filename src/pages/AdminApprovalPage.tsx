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

          return (
            <ToBeApproved
              onSetAprovados={onSetAprovados}
              onSetImoveis={onSetImoveis}
              property={imovel}
              imoveis={imoveis}
              aprovados={aprovados}
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
