import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { InView } from 'react-intersection-observer';
import { CommonProps } from '../../common/CommonProps';
import emailjs from '@emailjs/browser';

import './Contact.css';

const Contact: React.FC<CommonProps> = ({ handleSectionChange }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }
  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    try{
      await emailjs.send('service_kfww7g7', 'template_82p2tr5', form, 'FrvW94w9sG_zx0V1S');
      alert('Email Sent!');
    } catch(error) {
      console.log(error);
      alert('An error has occured... :c');
    }
    
  };

  const handleInViewChange = (inView: boolean) => {
    handleSectionChange('contact', inView);
  };

  return (
    <InView as='div' threshold={0.75} onChange={handleInViewChange}>
      {({ ref }) => (
        <Container id='contact' className='section contact' ref={ref}>
          <Row className='mt-5'>
            <Col>
              <h2 className='section-heading'>CONTACT ME</h2>
              <p>
                If you have any questions or would like to discuss a project,
                please feel free to get in touch using the contact form below.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId='name' className='mb-2'>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    name='name'
                    type='text'
                    placeholder='Enter your name'
                    required
                    onChange={handleFormChange}
                  />
                </Form.Group>

                <Form.Group controlId='email' className='mb-2'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    name='email'
                    type='email'
                    placeholder='Enter your email'
                    required
                    onChange={handleFormChange}
                  />
                </Form.Group>

                <Form.Group controlId='message' className='mb-2'>
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    name="message"
                    as='textarea'
                    rows={4}
                    placeholder='Enter your message'
                    required
                    onChange={handleFormChange}
                  />
                </Form.Group>
                <Form.Group className='mb-2'>
                  <Button variant='outline-primary' type='submit'>
                    Send Message
                  </Button>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      )}
    </InView>
  );
};

export { Contact };
