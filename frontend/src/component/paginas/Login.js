import React from "react";
import "../navegacion/login.css";
// import { LoginUser } from "../services/apiCall";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Login() {
  return (
    <Form className="">
      <br></br>
      <br></br>
      <h1 className="titulo-login">Login</h1>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email </Form.Label>
        <Form.Control type="email" placeholder="Username@" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check label="Register" />
      </Form.Group>
      <Button className="boton" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Login;
