import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className='footer-container'>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            &copy; {new Date().getFullYear()} Shawn Xu - All Rights Reserved
          </Col>
        </Row>
        {/* Optionally, you can add more rows and columns for additional content, such as social media links */}
      </Container>
    </footer>
  );
};

export default Footer;
