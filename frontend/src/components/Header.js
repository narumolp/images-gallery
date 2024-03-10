import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { ReactComponent as Logo } from '../images/logo.svg';

const navBarStyle = {
  backgroundColor: '#eeeeee',
};

const Header = (props) => {
  return (
    <Navbar style={navBarStyle} data-bs-theme="light">
      <Container>
        <Logo style={{ maxWidth: '10rem', maxHeight: '2rem' }} />
      </Container>
    </Navbar>
  );
};

export default Header;
