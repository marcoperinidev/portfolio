import { Col, Row } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, Github }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <Row>
            <a href ={Github} target={"_blank"} rel="noreferrer"><button className="btn btn-dark github-repo-project my-3" type="submit">GitHub Repository</button></a>
          </Row>
        </div>
      </div>
      
    </Col>
  )
}
