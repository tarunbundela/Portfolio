import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { CgCPlusPlus } from 'react-icons/cg';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from 'react-icons/di';
import {
  SiNextdotjs,
  SiHtml5,
  SiBootstrap,
  SiTailwindcss,
  SiEslint,
  SiRedux,
} from 'react-icons/si';
import { MdOutlineCss } from 'react-icons/md';
import { TbBrandTypescript } from 'react-icons/tb';

function Techstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className='tech-icons'>
        <DiJavascript1 />
      </Col>{' '}
      <Col xs={4} md={2} className='tech-icons'>
        <DiReact />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <TbBrandTypescript />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiHtml5 />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <MdOutlineCss />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiBootstrap />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiGit />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiEslint />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiRedux />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <CgCPlusPlus />
      </Col>
    </Row>
  );
}

export default Techstack;
