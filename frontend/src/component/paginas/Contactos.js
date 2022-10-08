import React from 'react'
import "./Contactos.css"


const Contactos = () => {
    return (
        <div className="main-block">
      <div className="left-part">
        <i className="fas fa-envelope"></i>
        <i class="fas fa-at"></i>
        <i class="fas fa-mail-bulk"></i>
      </div>
      <form action="/">
        <h1>Contactanos</h1>
        <div className="info">
          <input className="fname" type="text" name="name" placeholder="Nombre y Apellido" />
          <input type="text" nameName="name" placeholder="Email" />
          <input type="text" nameName="name" placeholder="Celular" />
          <input type="text" nameName="name" placeholder="Asunto" />
        </div>
        <p>Mensaje</p>
        <div>
          <textarea rows="4"></textarea>
        </div>
        <button type="submit" href="/">Enviar</button>
      </form>
    </div>
    )
}

export default Contactos

      