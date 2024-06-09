import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import { ProjectDetails } from '../../Utils/Projects';

function Projects() {
  return (
    <Container fluid className='project-section'>
      <Particle />
      <Container>
        <h1 className='project-heading'>
          My Recent <strong className='purple'>Works </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          {ProjectDetails?.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <Col md={4} className='project-card'>
                  <ProjectCard
                    imgPath={item.imageSrc}
                    isBlog={item.isBlog}
                    title={item.title}
                    description={item.description}
                    ghLink={item.ghLink}
                    demoLink={item.demoLink}
                  />
                </Col>
              </React.Fragment>
            );
          })}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
