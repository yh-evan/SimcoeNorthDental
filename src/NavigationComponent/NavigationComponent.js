import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

import "./NavigationComponent.css";

function NavigationComponent() {
  return (
    <div className="navigation">
      <div className="navigation-left">
        <img
          className="navigation-left-img"
          scr="./img/logo_without_characters.png"
          alt="logo"
        ></img>
      </div>
      <div className="navigation-right">
        <Nav className="me-auto">
          <Nav.Link>Services</Nav.Link>
          <Nav.Link>About</Nav.Link>
          <Nav.Link>New Patient</Nav.Link>
          <Nav.Link>Login</Nav.Link>
        </Nav>
      </div>
    </div>
  );
}

export default NavigationComponent;
