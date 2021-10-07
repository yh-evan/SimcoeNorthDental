import "./NavigationComponent.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, NavDropdown } from "react-bootstrap";
import React, { Component } from "react";

class NavigationComponent extends Component {
  render() {
    return (
      <Nav
        className="navigation"
        data-aos="fade-down"
        ref={(el) => (this.div = el)}
      >
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
              <NavDropdown.Item>
                Teeth cleaning and gum diseases
              </NavDropdown.Item>
              <NavDropdown.Item>Fillings</NavDropdown.Item>
              <NavDropdown.Item>Extractions</NavDropdown.Item>
              <NavDropdown.Item>Sedation</NavDropdown.Item>
              <NavDropdown.Item>Crowns and Veneer</NavDropdown.Item>
              <NavDropdown.Item>Bridges and Dentures</NavDropdown.Item>
              <NavDropdown.Item>Dental Implants</NavDropdown.Item>
              <NavDropdown.Item>Dental Emergencies</NavDropdown.Item>
              <NavDropdown.Item>Root canal treatment</NavDropdown.Item>
              <NavDropdown.Item>Teeth whitening</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="navigation-right-about">About</Nav.Link>
            <Nav.Link className="navigation-right-newPatient">
              New Patient
            </Nav.Link>
            <button className="navigation-right-login">Login</button>
          </Nav>
        </div>
      </Nav>
    );
  }
}

export default NavigationComponent;
