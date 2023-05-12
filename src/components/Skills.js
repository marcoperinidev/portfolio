import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import meter4 from "../assets/img/meter4.svg";
import meter5 from "../assets/img/meter5.svg";
import meter6 from "../assets/img/meter6.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Languages</h2>
                        <p>These are the most interesting Languages that I know.<br></br> Now I'm studying Java Springboot and Blockchain at the Michigan University online platform.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Javascript" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="React" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="ThreeJS" />
                                <h5>ThreeJS</h5>
                            </div>
                            <div className="item item4">
                                <img src={meter4} alt="Java" />
                                <h5>Java</h5>
                            </div>
                            <div className="item item5">
                                <img src={meter5} alt="Spring" />
                                <h5>Spring</h5>
                            </div>
                            <div className="item6">
                                <img src={meter6} alt="Docker" />
                                <h5>Docker</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="background-left" />
    </section>
  )
}
