import "./NavigationComponent.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, NavDropdown } from "react-bootstrap";

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
          <NavDropdown
            class="navigation-right-service"
            title="Service"
            id="collasible-nav-dropdown"
          >
            <NavDropdown.Item>Action&nbsp;</NavDropdown.Item>
            <NavDropdown.Item>Another action&nbsp; </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>Something else here</NavDropdown.Item>
          </NavDropdown>
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
