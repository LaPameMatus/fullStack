import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./navBar.css";
import Image from "react-bootstrap/Image";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Image src="./img/bandeja103.jpg" alt="bandeja" />
        <Navbar.Brand href="#home">DF Descartables</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Nosotros</Nav.Link>
            <Nav.Link href="#link">Contacto</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Descartables
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Cotillon</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Varios</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
