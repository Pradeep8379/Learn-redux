import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function NavBarPanel() {
  const cartProducts = useSelector(state=> state.cart)
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{position:'fixed',top:'0',left:'0',width:'100%',zIndex:'1'}}>
      <Container fluid>
        <Navbar.Brand href="#">Redux Toolkit</Navbar.Brand>

        <Nav>
          <Nav.Link to="/" as={Link}>
            Products
          </Nav.Link>
          <Nav.Link to="/producttable" as={Link}>
            Products Table
          </Nav.Link>
        </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            
            <Nav.Link to="/cart" as={Link}>
              My Bag {cartProducts.length}
            </Nav.Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarPanel;
