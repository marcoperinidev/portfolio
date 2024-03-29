import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon my-3 mb-0 pb-0">
              <a href="https://www.linkedin.com/in/pmfullstack/" target={"_blank"} rel="noreferrer"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/marcoperinidev" target={"_blank"} rel="noreferrer"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/marco_perini_dev/" target={"_blank"} rel="noreferrer"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Marco Perini Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
