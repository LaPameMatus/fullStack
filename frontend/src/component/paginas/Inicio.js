<<<<<<< HEAD
import React from 'react';
import Footer from '../navegacion/Footeer'
import {Parallax} from '../navegacion/Parallax'
import Imagenes from '../navegacion/Carousel';
import './Paginas.css'

const Inicio = () => {
    return (
        <div className='fondo'>
            <Parallax/>
            <Imagenes/>
            <Footer/>

        </div>
    )
}
=======
import React from "react";
import { Parallax } from "../navegacion/Parallax";
import Imagenes from "../navegacion/Carousel";

const Inicio = () => {
  return (
    <div>
      <Imagenes />
      <Parallax />
    </div>
  );
};
>>>>>>> diego1

export default Inicio;
