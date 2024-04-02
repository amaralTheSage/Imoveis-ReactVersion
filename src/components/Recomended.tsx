import React from "react";
import PropertyCard from "./PropertyCard";

function Recomended({ imoveis }) {
  return (
    <div className="flex gap-3 flex-wrap justify-center pb-8">
      {imoveis.map((i) => {
        return <PropertyCard imovel={i} key={i.id} />;
      })}
    </div>
  );
}

export default Recomended;
