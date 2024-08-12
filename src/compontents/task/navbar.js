


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbartask() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img style={{height:"50px"}} src='https://www.google.com/chrome/static/images/chrome-logo-m100.svg' alt='data'></img>Chrome</Navbar.Brand>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">The Browser by Google</Nav.Link>
            <NavDropdown title="Features" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Overview</NavDropdown.Item><br></br>
              <NavDropdown.Item href="#action/3.2">Google address bar</NavDropdown.Item><br></br>
              <NavDropdown.Item href="#action/3.3">Password check</NavDropdown.Item><br></br>
              <NavDropdown.Item href="#action/3.3">Use cross devices</NavDropdown.Item><br></br>
              <NavDropdown.Item href="#action/3.3">Dark mode</NavDropdown.Item><br></br>
              <NavDropdown.Item href="#action/3.3">Tabs</NavDropdown.Item><br></br>
              <NavDropdown.Item href="#action/3.3">Articles for you</NavDropdown.Item><br></br>
              <NavDropdown.Item href="#action/3.3">Extensions</NavDropdown.Item><br></br>
            </NavDropdown>
            <NavDropdown title="Support" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Helpful tips for Chrome</NavDropdown.Item><br></br>
              <NavDropdown.Item href="#action/3.2">Support</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbartask;







