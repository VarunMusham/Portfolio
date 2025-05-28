import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Varun Musham </span>
            from <span className="purple"> Hyderabad, India.</span>
            <br />
            I am currently a Senior at Shiv Nadar University, Delhi-NCR pursuing B.Tech in Electrical and Computer Engineering.
            <br />
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Nothing is True, Everything is Permitted"{" "}
          </p>
          <footer className="blockquote-footer">Ezio Auditore da Firenze</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
