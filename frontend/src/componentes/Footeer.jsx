import React from "react";
import "./Footer.css"
import Logo from "../assets/Logo.jpg"
import { Link } from "react-router-dom";

const Footer = () =>{
    return (
        <div class="footer-basic">
        <footer>
            <div class="social">
            <a href="https://www.instagram.com"><i class="icon ion-social-instagram"></i></a>
            <a href="https://www.snapchat.com"><i class="icon ion-social-snapchat"></i></a>
            <a href="https://twitter.com"><i class="icon ion-social-twitter"></i></a>
            <a href="https://www.facebook.com"><i class="icon ion-social-facebook"></i></a>
            </div>
            <ul class="list-inline">
                <li class="list-inline-item"><a><Link to="/frontend/src/component/paginas/Inicio.js">Inicio</Link></a></li>
                <li class="list-inline-item"><a><Link to="/frontend/src/component/paginas/Productos.js">Productos</Link></a></li>
                <li class="list-inline-item"><a><Link to="/frontend/src/component/paginas/QuienesSomos.js">Quienes Somos</Link></a></li>
                <li class="list-inline-item"><a><Link to="/frontend/src/component/paginas/Contactos.js">Contactos</Link></a></li>
                
         
            </ul>
            <div className="Logo-footer">
            <img src={Logo} alt="logo" />
            </div>
            <p class="copyright">Descartables D & F &copy; {new Date().getFullYear()} </p>
        </footer>
    </div>
    );
}


export default Footer;
