import React from "react";
import Card from "./Card";
import "./Cards.css";
import image1 from "../../img/20210316_102651.jpg";
import image2 from "../../img/20210318_094837.jpg";
import image3 from "../../img/BOLSA PAPEL3.jpg";
import image4 from "../../img/20210330_111132.jpg";
import image5 from "../../img/bolsasemblocadas.jpg";
import image6 from "../../img/BLONDA28CM.jpg";
import image7 from "../../img/ALUMINIO.jpg";
import image8 from "../../img/bandejacarton.jpg";
import image9 from "../../img/Bandejas-aptas-para-microondas-de-aluminio-con-tapa-BRC-600x600.jpg";

const cards = [
  {
    id: 1,
    title: "Film",
    description: "Papel film transparente, ideal para envoltorio de comida ",
    image: image1,
  },
  {
    id: 2,
    title: "Papel Manteca",
    description: "Papel manteca para cocina presentacion rollo x 10mts",
    image: image2,
  },
  {
    id: 3,
    title: "Bolsas Kraf",
    description: "Bolsas papel madera con manija",
    image: image3,
  },
  {
    id: 4,
    title: "Bandejas carton",
    description: "Bandejas carton redondas",
    image: image4,
  },
  {
    id: 5,
    title: "Bolsas emblocadas",
    description: "Bolsas emblocadas por 100 unidades",
    image: image5,
  },
  {
    id: 6,
    title: "Nombre del Productos",
    description: "Describir brevemente el producto",
    image: image6,
  },
  {
    id: 7,
    title: "Papel Aluminio",
    description: "Rollo papel aluminio presentacion rollo de 10mts",
    image: image7,
  },
  {
    id: 8,
    title: "Bandejas carton",
    description: "Bandejas carton rectangular tamaños varios",
    image: image8,
  },
  {
    id: 9,
    title: "Bandeja Aluminio",
    description: "Bandejas Aluminio",
    image: image9,
  },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, description }) => (
          <div className="col-md-4">
            <Card imageSource={image} description={description} title={title} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Cards;
