import { InView } from 'react-intersection-observer';
import { CommonProps } from '../../common/CommonProps';
import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/esm/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3Alt, faHtml5, faJs, faNode, faNpm, faPython, faReact, faSquareGit,  } from '@fortawesome/free-brands-svg-icons';

import './Skills.css';
import { faDatabase, faServer } from '@fortawesome/free-solid-svg-icons';

const Skills: React.FC<CommonProps> = ({ handleSectionChange }) => {
  const handleInViewChange = (inView: boolean) => {
    handleSectionChange('skills', inView);
  };

  return (
    <InView as='div' threshold={0.75} onChange={handleInViewChange}>
      {({ ref }) => (
        <Container fluid id='skills' className='section home' ref={ref}>
          <Row>
            <Col>
              <h2 className='section-heading'>SKILLS</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 className='section-subheading'>
                PROGRAMMING LANGUAGES AND TOOLS
              </h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className='section-content'>
                <FontAwesomeIcon icon={faHtml5} className='icon' />
                <FontAwesomeIcon icon={faCss3Alt} className='icon' />
                <FontAwesomeIcon icon={faJs} className='icon' />
                <FontAwesomeIcon icon={faNode} className='icon' />
                <FontAwesomeIcon icon={faReact} className='icon' />
                <FontAwesomeIcon icon={faNpm} className='icon' />
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <ul className='section-content'>
                <li>
                  Node.js, Typescript, HTML, CSS, SQL, Python
                </li>
                <li>
                  Agile focused and SAFe Certified
                </li>
                <li>
                  React, Angular, NestJS, Redux, Jest, Express
                </li>
                <li>
                  NoSQL, Git, Cloud Computing, Full-Stack Development, Web Development
                </li>
                <li>
                  Software Testing, API Design
                </li>
                
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className='section-content'>
                <FontAwesomeIcon icon={faSquareGit} className='icon' />
                <FontAwesomeIcon icon={faPython} className='icon' />
                <FontAwesomeIcon icon={faAngular} className='icon' />
                <FontAwesomeIcon icon={faDatabase} className='icon' />
                <FontAwesomeIcon icon={faServer} className='icon' />
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 className='section-subheading'>
                Certifications
              </h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <ul className='section-content'>
                <li>
                  AWS Certified Solutions Architect - Associate
                </li>
                <li>
                  Microsoft Certified: Azure Fundamentals
                </li>
                <li>
                  AWS Certified Cloud Practitioner
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      )}
    </InView>
  );
}

export { Skills }