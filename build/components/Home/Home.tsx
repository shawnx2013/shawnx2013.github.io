import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { InView } from 'react-intersection-observer';
import Container from 'react-bootstrap/Container';
import { CommonProps } from '../../common/CommonProps';

import './Home.css';

const Home: React.FC<CommonProps> = ({ handleSectionChange }) => {
  const handleInViewChange = (inView: boolean) => {
    handleSectionChange('home', inView);
  };

  return (
    <InView as='div' threshold={0.75} onChange={handleInViewChange}>
      {({ ref }) => (
        <Container fluid id='home' className='section home' ref={ref}>
          <Row>
            <Col>
              <h1 className='section-heading'>SHAOHUI (SHAWN) XU</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5 className='section-subheading'>
                (929)233-2421 - shao2013x@gmail.com
              </h5>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className='section-content'>
                <p>
                  I'm Shawn Xu, a passionate Full-Stack Software Engineer with a knack for building scalable and impactful web solutions. 
                </p>
                <p>
                  I specialize in technologies like React, Angular, and NestJS to create seamless user experiences and deliver value-driven features. 
                  I've engineered efficient microservices, and boosted testing reliability, all while ensuring optimal infrastructure and deployment.
                </p>
                <p>
                  My focus lies in enhancing user satisfaction and improving software quality, with a commitment to making technology work smarter for everyone.
                </p>
              </p>
            </Col>
          </Row>
        </Container>
      )}
    </InView>
  );
};

export default Home;
