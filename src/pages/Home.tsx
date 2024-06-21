import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import FilterSection from "../components/FilterSection";
import Header from "../components/Header";
import PropertyCard from "../components/PropertyCard";

export default function Home({ isLoggedIn, aprovados, isAdmin }) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} isAdmin={isAdmin} />
      <FilterSection />
      <div className="lg:max-w-[80%] m-auto">
        <h2 className="text-center mt-5 text-3xl font-medium px-4 ">
          Imóveis à Venda
        </h2>
        <section className="grid grid-flexivel gap-3 mx-8 lg:mx-0">
          {aprovados.map((i) => {
            return <PropertyCard imovel={i} />;
          })}
        </section>
      </div>
      <Footer />
    </>
  );
}
