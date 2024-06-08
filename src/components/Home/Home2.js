import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myImg from '../../Assets/avatar.svg';
import Tilt from 'react-parallax-tilt';
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

function Home2() {
  return (
    <Container fluid className='home-about-section' id='about'>
      <Container>
        <Row>
          <Col md={8} className='home-about-description'>
            <h1 style={{ fontSize: '2.6em' }}>
              LET ME <span className='purple'> INTRODUCE </span> MYSELF
            </h1>
            <p className='home-about-body'>
              <p style={{ textAlign: 'justify' }}>
                I am a dedicated and result-oriented frontend developer with
                over{' '}
                <i>
                  <b className='purple'> 2+ years </b>
                </i>
                of experience in building robust, user-friendly web
                applications. Currently working at Webiwork Technologies in
                Indore, I specialize in leveraging JavaScript libraries such as
                <i>
                  <b className='purple'> React.js and Next.js</b>
                </i>{' '}
                to deliver highly responsive and efficient user interfaces. My
                journey has been marked by a consistent track record of
                delivering high-quality work, whether working independently or
                as part of a dynamic team. I thrive on solving complex problems
                and continuously learning new technologies to stay at the
                forefront of web development.
              </p>
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I have a strong background in JavaScript and have
              proficiency in working with the{' '}
              <i>
                <b className='purple'>React library</b>
              </i>{' '}
              for building dynamic user interfaces.
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className='purple'>Web Applications and Products </b> and
                also in areas related to <b className='purple'>Javascript.</b>
              </i>
              <br />
              <br />
              Whenever possible, I apply my passion for developing products with
              <i>
                <b className='purple'>
                  {' '}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className='purple'> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className='myAvtar'>
            <Tilt>
              <img src={myImg} className='img-fluid' alt='avatar' />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className='home-about-social'>
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className='purple'>connect </span>with me
            </p>
            <ul className='home-about-social-links'>
              <li className='social-icons'>
                <a
                  href='https://github.com/soumyajit4419'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://twitter.com/Soumyajit4419'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://www.linkedin.com/in/soumyajit4419/'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://www.instagram.com/soumyajit4419'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour home-social-icons'
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
