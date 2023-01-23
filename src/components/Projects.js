import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "E-commerce Simulation Site",
      description: "HTML, CSS, JS, Laravel, Livewire, Blender",
      imgUrl: projImg1,
      Github: "https://vmcodegg.demohackademy.it/",
    },
    {
      title: "Business Shop Simulator",
      description: "HTML, CSS, JS, Bootstrap",
      imgUrl: projImg2,
      Github: "https://github.com/marcoperinidev/riproduzione-sito_progettoStanza4",
    },
    {
      title: "Todo List",
      description: "React",
      imgUrl: projImg3,
      Github: "https://github.com/marcoperinidev/react-todo",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are a few completed Projects</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    
                    <Nav.Item>
                      <Nav.Link eventKey="third">~$ whoami</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    
                    <Tab.Pane eventKey="third">
                      <p className="lh-6">I introduce myself, I am Marco Perini and I am 33 years old.<br></br> 
                          I have always been passionate about the tech world, I have just completed a course with Aulab as a <strong>Full Stack Web Developer</strong>, then I followed several courses on <em><strong>ReactJS</strong></em> on Udemy <em><strong>(Schwarzmüller, Kent C. Dodds)</strong></em>, <em><strong>ThreeJS (Bruno Simon)</strong></em>, <em><strong>Java (Schwarzmüller)</strong></em> and developed autonomous projects for small regional realities.<br></br>
                          <br></br>
                          I am dynamic, enthusiastic and very curious, I love learning new technology and languages and I learn them pretty quickly.
                          <br></br>Currently be able to work closely with
                          Senior Developer to improve my skills is a focal point for me.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
