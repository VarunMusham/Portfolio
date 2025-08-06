import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import FHE from "../../Assets/Projects/FHE.jpg";
import ML from "../../Assets/Projects/ML-Accel.jpg";
import ranging from "../../Assets/Projects/ultrasonic-ranging-system.jpg";
import simon from "../../Assets/Projects/simon-memory-game.jpg";
import alarm from "../../Assets/Projects/Burglar-Alarm.jpg";
import smartPrep from "../../Assets/Projects/smart-prep.jpg";
import morse from "../../Assets/Projects/morse-code-decoder.jpg"
import lock from "../../Assets/Projects/IoT-Smart-Lock.jpg";
import robot from "../../Assets/Projects/robot.jpg";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FHE}
              isBlog={false}
              title="Hardware Accelerator for Fully Homomorphic Encryption"
              description="Built a hardware accelerator for Fully Homomorphic Encryption (FHE) using Verilog, optimizing core cryptographic operations to achieve a 70x performance improvement over software implementations. Designed efficient data paths and control logic to enhance throughput while minimizing latency."
              ghLink="https://github.com/VarunMusham/"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ML}
              isBlog={false}
              title="Hardware Accelerator for Machine Learning Algorithms"
              description="Designed and implemented a hardware accelerator for machine learning algorithms using Verilog, delivering a 500x speedup compared to software solutions. Focused on optimizing data flow and parallel processing to maximize throughput and efficiency."
              ghLink="https://github.com/VarunMusham/"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={robot}
              isBlog={false}
              title="Multi-Control Robotic Arm"
              description="Developed a multi-interface 6 DOF robotic arm using the microcontrollers, enabling precise real-time control through joystick input, mobile app communication, and hand motion gestures. The project highlights advanced integration of embedded systems, sensor fusion, and control algorithms."
              ghLink="https://github.com/VarunMusham/"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smartPrep}
              isBlog={false}
              title="SmartPrep"
              description="The SmartPrep is a MCQ Practice App is designed to help students prepare for their exams. This web-based platform provides a self-assessment test of multiple-choice questions (MCQs), allowing students to practice and assess their knowledge effectively."
              ghLink="https://github.com/VarunMusham/SmartPrep"
              demoLink="https://smart-prep-v2.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lock}
              isBlog={false}
              title="IoT based Door Lock"
              description="This project develops an IoT-enabled Keypad Doorlock based on ARM Cortex M4, featuring Lockdown mode, passcode flexibility, and remote unlock functionality."
              ghLink="https://github.com/VarunMusham/Keypad-DoorLock"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={alarm}
              isBlog={false}
              title="Ultrasonic Security System"
              description="The Ultrasonic Security System utilizes advanced technology to detect obstacles swiftly with ultrasonic sensors, triggering a robust alert system for comprehensive security monitoring."
              ghLink="https://github.com/VarunMusham?tab=repositories"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ranging}
              isBlog={false}
              title="Ultrasonic Ranging System"
              description="The Ultrasonic Ranging Device innovatively measures distances with ultrasonic sensors, integrating advanced features for enhanced versatility."
              ghLink="https://github.com/VarunMusham?tab=repositories"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={morse}
              isBlog={false}
              title="Morse Code Decoder"
              description="UThe Morse Code Decoder is a project powered by ARM Cortex M4, designed to interpret Morse code inputs through button interactions."
              ghLink="https://github.com/VarunMusham/Morse-Code-Decoder-STM32"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={simon}
              isBlog={false}
              title="Simon Memory Game"
              description="The Simon Memory Game is a classic memory-based challenge, inspired by Simon, testing players' memory and cognitive skills with color and sound sequences."
              ghLink="https://github.com/VarunMusham/Simon-Memory-Game-STM32"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
