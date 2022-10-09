import React, { useState } from "react";
import styled from "styled-components";
import BurguerButton from "./BurguerButton";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import logo from "../../assets/Logo.jpg";
=======
import logo from "../img/logo.jpg";
>>>>>>> diego1
import "./Navbar.css";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <NavContainer>
        <h2>
<<<<<<< HEAD
          Descartables <span>D&F</span>
=======
          Descartables <span>DF</span>
>>>>>>> diego1
        </h2>
        <div className="logo">
          <img src={logo} alt="Este es el logo" />
        </div>

        <div className={`links ${clicked ? "active" : ""}`}>
          <Link to="/frontend/src/component/paginas/Inicio.js">Inicio</Link>
          <Link to="/frontend/src/component/paginas/Productos.js">
            Productos
          </Link>
          <Link to="/frontend/src/component/paginas/Contactos.js">
            Contactos
          </Link>
<<<<<<< HEAD
        </div>
=======
          <Link to="/frontend/src/component/paginas/Login.js">Login</Link>
          <Link to="/frontend/src/component/paginas/Register.jsx">
            Register
          </Link>
        </div>

>>>>>>> diego1
        <div className="burguer">
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? "active" : ""}`}></BgDiv>
      </NavContainer>
    </>
  );
}
export default Navbar;
const NavContainer = styled.nav`
  h2 {
    color: rgb(5, 5, 5);
    font-weight: 400;
    span {
      font-weight: bold;
    }
  }
  padding: 0.4rem;
  background-color: bisque;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: rgb(5, 5, 5);
    text-decoration: none;
    margin-right: 1rem;
  }

  .links {
    position: absolute;
<<<<<<< HEAD
    z-index: 1;
=======
>>>>>>> diego1
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all 0.5s ease;
    a {
      color: rgb(5, 5, 5);
      font-size: 2rem;
      display: block;
    }
    @media (min-width: 768px) {
      position: initial;
      margin: 0;
      a {
        font-size: 1rem;
        color: rgb(5, 5, 5);
        display: inline;
      }
      display: block;
    }
  }
  .links.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a {
      font-size: 2rem;
      margin-top: 1rem;
      color: bisque;
    }
  }

  .burguer {
    @media (min-width: 768px) {
      display: none;
<<<<<<< HEAD
      z-index: 1;
=======
>>>>>>> diego1
    }
  }
`;
const BgDiv = styled.div`
  background-color: rgb(5, 5, 5);
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
<<<<<<< HEAD
  z-index: 0;
=======
  z-index: -1;
>>>>>>> diego1
  transition: all 0.6s ease;
  &.active {
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
<<<<<<< HEAD
    width: 85%;
    height: 90%;
=======
    width: 100%;
    height: 100%;
>>>>>>> diego1
  }
`;
