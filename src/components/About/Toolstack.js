import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiMacos,
  SiStmicroelectronics,
  SiWindows11,
  SiXilinx,
  SiArduino
} from "react-icons/si";
import{
  FaMicrochip,
  FaGithub,
  FaLinux
} from "react-icons/fa"

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>  
      <Col xs={4} md={2} className="tech-icons">
        <SiXilinx />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaMicrochip />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiMathworks />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows11 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiStmicroelectronics />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiArduino />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaLinux />
      </Col>
    </Row>
  );
}

export default Toolstack;
