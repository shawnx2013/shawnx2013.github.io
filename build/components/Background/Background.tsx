import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { InView } from 'react-intersection-observer';
import { CommonProps } from '../../common/CommonProps';
import './Background.css';

const Background: React.FC<CommonProps> = ({ handleSectionChange }) => {
  const handleInViewChange = (inView: boolean) => {
    handleSectionChange('background', inView);
  };

  return (
    <InView as='div' threshold={0.75} onChange={handleInViewChange}>
      {({ ref }) => (
        <Container id='background' className='section background' ref={ref}>
          <Row className='mt-5'>
            <Col>
              <h2 className='section-heading'>EDUCATION</h2>
            </Col>
          </Row>
          <Row className='mb-3 education'>
            <Col md={8}>
              <h3 className='section-subheading'>Rochester Institute of Technology</h3>
              <h4 className='section-subheading degree'>BACHELOR OF SCIENCE</h4>
              <p>
                Computing Information Technology
              </p>
              <p>
                GPA: 3.78
              </p>
            </Col>
            <Col md='auto'>
              <div><span>July 2022 - Decemeber 2022</span></div>
            </Col>
          </Row>

          <Row className='mb-3 education'>
            <Col md={8}>
              <h2 className='section-heading'>INTERESTS</h2>
              <p>
                Outside of work, I enjoy spending my time doing road trips near the New York Metro area. I also like going hiking and skiing.
              </p>
              <p>
                At home, I'd like to spend time on cooking. I am also a fan of Marvel, both the comics and the movies.
              </p>
            </Col>
          </Row>
        </Container>
      )}
    </InView>
  );
};

export { Background };
