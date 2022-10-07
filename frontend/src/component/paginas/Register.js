import React from "react";
import "../navegacion/login.css";
// import { LoginUser } from "../services/apiCall";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Register() {
  return (
    <Form className="">
      <br></br>
      <br></br>
      <h1 className="titulo-login">REGISTRO</h1>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Pepito Juarez" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email </Form.Label>
        <Form.Control type="email" placeholder="PepJuarez@gmail.com" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicTel">
        <Form.Label>Celular</Form.Label>
        <Form.Control type="tel" placeholder="38156412" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button className="boton" variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
}

export default Register;
