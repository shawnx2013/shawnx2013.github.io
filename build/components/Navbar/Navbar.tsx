import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SectionType } from '../../common/CommonProps';
import img from '../../assets/img/1657543841281.jpg';
import Image from 'react-bootstrap/Image';

interface NavBarProps {
  sections: SectionType[];
}

const NavBar: React.FC<NavBarProps> = ({ sections }) => {
  const activeSection: SectionType | undefined = sections?.find(
    (section) => section.isActive === true
  );
  return (
    <Navbar className='side-navbar' fixed='top'>
      <Navbar.Brand href={'#home'} className='m-3'>
        <Image src={img} className='logo' roundedCircle fluid />
      </Navbar.Brand>

      <Nav
        className='flex-column'
        activeKey={activeSection?.id}
        defaultActiveKey={'home'}
      >
        {sections.map((section) => {
          return (
            <Nav.Item key={section.id}>
              <Nav.Link
                eventKey={section.id}
                className={'link px-4'}
                href={`#${section.id}`}
              >
                <FontAwesomeIcon
                  icon={section.icon}
                  fixedWidth
                />
                {section.label}
              </Nav.Link>
            </Nav.Item>
          );
        })}
      </Nav>
    </Navbar>
  );
};

export default NavBar;
