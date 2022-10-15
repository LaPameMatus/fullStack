import React from "react";
import Cards from "../navegacion/Cards";
import "../navegacion/Cards.css";
import "./Paginas.css";

const Productos = () => {
  return (
    <div className="fondo">
      <h3>Nuestros Productos</h3>
      <Cards />
    </div>
  );
};

export default Productos;
