import "./NavigationComponent.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, NavDropdown } from "react-bootstrap";
import React, { useEffect, useState } from "react";

const NavigationComponent = ({ handleLoginClick }) => {
  const [show, setShow] = useState(true);
  const controlNavBar = () => {
    if (window.scrollY > 200) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  const handlerClick = () => {
    handleLoginClick();
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavBar);
    return () => {
      window.removeEventListener("scroll", controlNavBar);
    };
  }, []);

  return (
    <Nav
      className={`navigation ${show && "navigation_show"}`}
      // data-aos="fade-down"
    >
      <a href="/home" className="navigation-left">
        <div>
          <img
            className="navigation-left-img"
            src="/img/Logo_with_name.png"
            alt="logo"
          ></img>
        </div>
      </a>
      <div className="navigation-right">
        <Nav className="me-auto">
          <NavDropdown
            class="navigation-right-service"
            title="Service"
            id="collasible-nav-dropdown"
          >
            <NavDropdown.Item>Teeth cleaning and gum diseases</NavDropdown.Item>
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
          <Nav.Link className="navigation-right-newPatient" href="/register">
            New Patient
          </Nav.Link>
          <button
            className="navigation-right-login loginicon"
            onClick={handleLoginClick}
          >
            Login
          </button>
        </Nav>
      </div>
    </Nav>
  );
};

export default NavigationComponent;
