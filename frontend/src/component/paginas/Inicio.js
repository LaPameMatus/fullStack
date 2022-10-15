import React from "react";
import { Parallax } from "../navegacion/Parallax";
import Imagenes from "../navegacion/Carousel";
import "./Paginas.css";

const Inicio = () => {
  return (
    <div className="fondo">
      <Imagenes />
      <Parallax />
    </div>
  );
};

export default Inicio;
