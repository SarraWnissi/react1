import React, { useState } from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import CloseButton from "react-bootstrap/CloseButton";
import Name from "./product/Name";
import Description from "./product/Description";
import Image from "./product/Image";
import Price from "./product/Price";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

function App() {
  const [nom, setNom] = useState("nom de produit");
  const [prix, setPrix] = useState(19.99);
  const [description, setDescription] = useState("Description du produit");

  const updateAttributes = () => {
    setNom("Nouveau nom");
    setPrix(29.99);
    setDescription("Nouvelle description");
  };
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">products</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#contact">contact</Nav.Link>
              <Nav.Link href="#about">about</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Nav
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      ></Nav>
       <Image imageSource="/src/images/your-image.jpg" alt="Your Image" />
      <Name nom={nom} />
      <Price prix={prix} />
      <Description description={description} />
      <p>Hallo</p>
      <button onClick={updateAttributes}>Mettre à jour les attributs</button>
    </div>
  );
}

export default App;
