import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ToBeApproved from "../components/ToBeApproved";
import { Imovel } from "../types/Imovel";
import { toast } from "sonner";

function AdminApprovalPage({
  isLoggedIn,
  imoveis,
  aprovados,
  onSetAprovados,
  onSetImoveis,
  isAdmin,
}) {
  useEffect(() => {
    localStorage.setItem("aprovadosStorage", JSON.stringify(aprovados));
  }, [aprovados]);

  useEffect(() => {
    localStorage.setItem("imoveisStorage", JSON.stringify(imoveis));
  }, [imoveis]);

  useEffect(() => {
    console.table(aprovados);
  }, [aprovados, imoveis]);

  function handleAprovar(imovelId: string) {
    const index = imoveis.findIndex((imovel: Imovel) => imovel.id === imovelId);
    if (index >= 0) {
      const novoAprovados = [...aprovados, imoveis[index]];
      const novosImoveis = [
        ...imoveis.slice(0, index),
        ...imoveis.slice(index + 1),
      ];
      onSetAprovados(novoAprovados);
      onSetImoveis(novosImoveis);
      toast.success("Publicação aprovada com sucesso!");
    }
  }

  function handleRejeitar(imovelId: string) {
    const index = imoveis.findIndex((imovel: Imovel) => imovel.id === imovelId);

    if (index >= 0) {
      const novosImoveis = [
        ...imoveis.slice(0, index),
        ...imoveis.slice(index + 1),
      ];
      onSetImoveis(novosImoveis);
      toast.success("Publicação rejeitada com sucesso!");
    }
  }

  return (
    <>
      <Header isLoggedIn={isLoggedIn} isAdmin={isAdmin} />
      <main className="min-h-[65vh]">
        <h2 className="w-[90%] m-auto text-2xl font-semibold my-4">
          Imóveis a serem aprovados
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 w-[90%] m-auto">
          {imoveis.map((imovel: Imovel) => {
            return (
              <ToBeApproved
                property={imovel}
                onAprovar={() => handleAprovar(imovel.id)}
                onRejeitar={() => handleRejeitar(imovel.id)}
                key={imovel.id}
              />
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default AdminApprovalPage;
