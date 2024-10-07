import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { InView } from 'react-intersection-observer';
import { CommonProps } from '../../common/CommonProps';

import './Experience.css';

const Experience: React.FC<CommonProps> = ({ handleSectionChange }) => {
  const handleInViewChange = (inView: boolean) => {
    handleSectionChange('experience', inView);
  };
  return (
    <InView as='div' threshold={0.5} onChange={handleInViewChange}>
      {({ ref }) => (
        <Container id='experience' ref={ref} className='section experience'>
          <Row className='mt-5'>
            <Col>
              <h2 className='section-heading'>EXPERIENCE</h2>
            </Col>
          </Row>
          <Row className='mb-3'>
            <Col md={8}>
              <h3 className='section-subheading'>Full Stack Software Engineer</h3>
              <h4 className='section-subheading company-name'>PricewaterhouseCoopers</h4>
              <ul>
                <li>
                  Contributed to feature development and bug fixes for PwC's proprietary platform, enhancing user experience and improving engagement delivery.
                </li>
                <li>
                  Engineered an integration microservice with NestJS to unify engagement data, cutting management overhead by 30% and eliminating data discrepancies, resulting in a single source of truth across all platforms.
                </li>
                <li>
                  Contributed to global routing support and feature flagging integrations, enabling tailored regional features, supporting the product's global expansion, resulting in 40% increase in international user adoption
                </li>
                <li>
                  Architected a chatbot solution to assist users in navigating the application and checking status updates on deliverables, resulting in increased user satisfaction and enhanced overall productivity.
                </li>
                <li>
                  Rewrote and optimized frontend unit tests, increasing coverage from 45% to 75% and improving test efficiency and reliability, resulting in a 20% reduction in production defects.
                </li>
                <li>
                  Maintained and optimized a service plugin using an external third-party library, coordinating with DevOps to ensure scalable, available, and cost-efficient infrastructure, balancing performance with budget considerations.
                </li>
              </ul>
            </Col>
            <Col md="auto">
              <div><span>Jan 2023 - Present</span></div>
            </Col>
          </Row>
          <Row className='mb-3'>
            <Col md={8}>
              <h3 className='section-subheading'>Software Engineer Co-op</h3>
              <h4 className='section-subheading company-name'>PricewaterhouseCoopers</h4>
              <ul>
                <li>
                  Developed a risk assessment application using Angular to recommend the most suitable cloud provider for clients and employees, enhancing their decision-making by offering insights into benefits and potential risks.
                </li>
                <li>
                  Architected the solution using AWS Lambda, Amazon API Gateway, and Amazon RDS, minimizing maintenance overhead and operational costs.
                </li>
                <li>
                  Established and managed a CI/CD pipeline on AWS, streamlining the deployment process for updates and fixes, improving testing efficiency and reduced deployment time by 40%.
                </li>
              </ul>
            </Col>
            <Col md="auto">
              <div><span>January 2021 - August 2021</span></div>
            </Col>
          </Row>
          <Row className='mb-3'>
            <Col md={8}>
              <h3 className='section-subheading'>Software Engineer Co-op</h3>
              <h4 className='section-subheading company-name'>EagleDream Technologies (Acquired by PricewaterhouseCoopers) </h4>
              <ul>Designed and developed an equipment catalog in Angular for an antenna management system, reducing manual processing time by 50% and increasing user satisfaction.</ul>
            </Col>
            <Col md="auto">
              <div><span>August 2020 - Decemeber 2020</span></div>
            </Col>
          </Row>
        </Container>
      )}
    </InView>
  );
};

export { Experience };
