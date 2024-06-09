import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
  return (
    <Card className='quote-card-view'>
      <Card.Body>
        <blockquote className='blockquote mb-0'>
          <p style={{ textAlign: 'center' }}>
            Hi Everyone, I am <span className='purple'>Tarun Bundela </span>
            from <span className='purple'> Indore, India.</span>
            <br />I am currently employed as a Web developer at Webiwork
            Technologies with over{' '}
            <i>
              <b className='purple'> 2.5+ years </b>
            </i>
            of experience in building robust, user-friendly web applications.
            <br />I specialize in leveraging JavaScript libraries such as
            <i>
              <b className='purple'> React.js and Next.js</b>
            </i>{' '}
            to deliver highly responsive and efficient user interfaces. <br />
            My journey has been marked by a consistent track record of
            delivering high-quality work, whether working independently or as
            part of a dynamic team. I thrive on solving complex problems and
            continuously learning new technologies to stay at the forefront of
            web development.
            <br />
            <br />
          </p>
          <p style={{ textAlign: 'left' }}>Professional Snapshot:</p>
          <ul>
            <li className='about-activity'>
              <ImPointRight /> Expertise in developing user-friendly web
              applications using <b className='purple'> React.js and Next.js</b>
              .
            </li>
            <li className='about-activity'>
              <ImPointRight /> Proven track record of completing projects on
              time and Worked on <b className='purple'> 6+ project</b>.
            </li>
            <li className='about-activity'>
              <ImPointRight /> Drove efforts towards maintaining{' '}
              <b className='purple'>web development</b> practices, adhered to
              company standards for coding.
            </li>
            <li className='about-activity'>
              <ImPointRight /> Abilities to work effectively both as an
              individual or as part of a team. Willing to learn and adapt to new
              technologies.{' '}
            </li>
          </ul>
          {/* <p style={{ color: 'rgb(155 126 172)' }}>
            "Strive to build things that make a difference!"{' '}
          </p>
          <footer className='blockquote-footer'>Tarun</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
