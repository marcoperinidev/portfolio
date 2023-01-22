import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Typewriter, Cursor } from 'react-simple-typewriter';


export const Banner = () => {
  
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                        <h1>Hey! I'm Marco{<br/>}
                          <span>
                            <Typewriter
                              words={['Web Developer','Web Designer']}
                              loop={0}
                              typeSpeed={100}
                              deleteSpeed={100}
                            />
                          </span>
                    <span>
                        <Cursor cursorStyle='|'/>
                    </span>
                </h1>
                  <p className="p-about"><strong>Solving problems</strong> since 1989. Given that I thought development would've been a good life choice. So after a coding bootcamp, dedication and no sleep I try to help others building their presence on the web taking care of all the process. </p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
};
