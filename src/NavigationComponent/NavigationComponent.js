import "./NavigationComponent.css";
import { Nav } from "react-bootstrap";

function NavigationComponent() {
  return (
    <div className="navigation">
      <div className="navigation-left">
        <img
          className="navigation-left-img"
          src="/img/Logo_with_name.png"
          alt="logo"
        ></img>
      </div>
      <div className="navigation-right">
        <Nav className="me-auto">
          <Nav.Link className="navigation-right-services">Services</Nav.Link>
          <Nav.Link className="navigation-right-about">About</Nav.Link>
          <Nav.Link className="navigation-right-newPatient">
            New Patient
          </Nav.Link>
          <button className="navigation-right-login">Login</button>
        </Nav>
      </div>
    </div>
  );
}

export default NavigationComponent;
