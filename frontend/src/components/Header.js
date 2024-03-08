import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const navBarStyle = {
  backgroundColor: 'lightblue',
};

const Header = (props) => {
  const { title } = props;
  return (
    <Navbar style={navBarStyle} data-bs-theme='light'>
      <Container>
        <Navbar.Brand href='/'>{title}</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
