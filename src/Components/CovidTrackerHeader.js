import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container } from "react-bootstrap";
import logo from "../Logos/corona.svg";

function CovidTrackerHeader() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="Covid 19 Tracker"
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            Covid 19 Tracker
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default CovidTrackerHeader;
