import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../components/Particle";
import homeLogo from "../assets/home-img.png";
import Type from "../components/Type";
import TechStack from "../components/TechStack";
import ToolStack from "../components/ToolStack";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello! Visitor{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  🥳
                </span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> sike that a wrong number!</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type/>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about">
      <Particle />
        <Container className="home-content">
            <Row>
                <h1 className="text-center">Technologies and Frameworks</h1>
                <TechStack/>

                <h1 className="text-center">Tools</h1>
                <ToolStack/>
            </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
