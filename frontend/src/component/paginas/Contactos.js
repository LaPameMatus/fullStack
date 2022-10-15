import React from 'react'
import styled from "styled-components";
import Footer from "../navegacion/Footeer"

const Contactos = () => {
    return (<StyleContact>
        <div className="main-block">
      <div className="left-part">
        <i className="fas fa-envelope"></i>
        <i class="fas fa-at"></i>
        <i class="fas fa-mail-bulk"></i>
      </div>
      <form action="/">
        <h1>Contactanos</h1>
        <div className="info">
          <input className="fname inputContact" type="text" name="name" placeholder="Nombre y Apellido" />
          <input className="inputContact" type="text" nameName="name" placeholder="Email" />
          <input className="inputContact" type="text" nameName="name" placeholder="Celular" />
          <input className="inputContact" type="text" nameName="name" placeholder="Asunto" />
        </div>
        <p>Mensaje</p>
        <div>
          <textarea className="textarea" rows="4"></textarea>
        </div>
        <button type="submit" href="/">Enviar</button>
      </form>


    </div>
    <Footer />
    </StyleContact>
    )
}

export default Contactos

      
const StyleContact = styled.div`
html, body {
  min-height: 100%;
  padding: 0;
  margin: 0;
  font-family: Roboto, Arial, sans-serif;
  font-size: 14px;
  color: #666;
  }

  h1 {
  margin: 0 0 20px;
  font-weight: 400;
  color: #1c87c9;
  }

  p {
  margin: 0 0 5px;
  }

  .main-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(61deg, rgba(232,200,174,1) 23%);
  margin: 20px;

  }

  form {
  padding: 25px;
  margin: 25px;
  box-shadow: 0 2px 5px #f5f5f5; 
  background: #f5f5f5; 
  }

  .fas {
  margin: 25px 10px 0;
  font-size: 72px;
  color: #fff;
  }

  .fa-envelope {
  transform: rotate(-20deg);
  }

  .fa-at , .fa-mail-bulk{
  transform: rotate(10deg);
  }
  
  .inputContact, .textarea {
  width: calc(100% - 18px);
  padding: 8px;
  margin-bottom: 20px;
  border: 1px solid #1c87c9;
  outline: none;
  }
  input::placeholder {
  color: #666;
  }
  button {
  width: 100%;
  padding: 10px;
  border: none;
  background: #1c87c9; 
  font-size: 16px;
  font-weight: 400;
  color: #fff;
  }
  button:hover {
  background: #2371a0;
  }    
  @media (min-width: 568px) {
  .main-block {
  flex-direction: row;
  }
  .left-part, form {
  width: 50%;
  }
  .fa-envelope {
  margin-top: 0;
  margin-left: 20%;
  }
  .fa-at {
  margin-top: -10%;
  margin-left: 65%;
  }
  .fa-mail-bulk {
  margin-top: 2%;
  margin-left: 28%;
  }
  }
`
