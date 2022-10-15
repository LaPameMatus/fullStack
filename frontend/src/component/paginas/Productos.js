import React from "react";
import Cards from "../navegacion/Cards";
import Footer from "../navegacion/Footeer";
import "../navegacion/Cards.css";
import "./Paginas.css";

const Productos = () => {
  return (
    <div className="fondo">
      <h3>Nuestros Productos</h3>
      <Cards />
      <Footer />
    </div>
  );
};

export default Productos;
