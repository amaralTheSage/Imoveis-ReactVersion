import React from "react";
import Footer from "../components/Footer";
import FilterSection from "../components/FilterSection";
import Header from "../components/Header";
import Recomended from "../components/Recomended";

export default function Home({ imoveis, isAdmin }) {
  return (
    <>
      <Header isAdmin={isAdmin} />
      <FilterSection />
      <section className="flex flex-col items-center px-4">
        <h2 className="text-center mt-5 text-3xl font-medium px-4">
          Imóveis à Venda
        </h2>
        <Recomended imoveis={imoveis} />
      </section>
      <Footer />
    </>
  );
}
