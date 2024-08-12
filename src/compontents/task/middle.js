
import "./middle.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import TextComponent from "../bottom/Textcomponent";

function Middle() {
    return (
        <>
        <center>
            <img  style={{height:"80px", width:"80px"}} src="https://www.google.com/chrome/static/images/chrome-logo-m100.svg" alt="Chrome Logo" />
            <h1 className="header">The browser </h1>
            <h1 className="header">
      built to be &nbsp;<TextComponent />
    </h1>
            <br />
            <Button className="btn" variant="primary">
                <img src="https://img.icons8.com/?size=100&id=aO3W9kKC9PMv&format=png&color=000000" alt="Download Icon" />
                Download Chrome
            </Button>
            <div style={{position:"sticky", top:"0px"}}>
                <Navbar expand="lg" className="bg-body-tertiary midnav">
                    <Container>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Fast</Nav.Link>
                                <Nav.Link href="#link">Safe</Nav.Link>
                                <Nav.Link href="#link">Yours</Nav.Link>
                                <Nav.Link href="#link">By Google</Nav.Link>
                                <Nav.Link href="#link">
                                    <Button variant="primary">
                                        <img src="https://img.icons8.com/?size=100&id=aO3W9kKC9PMv&format=png&color=000000" alt="Download Icon" />
                                        Download
                                    </Button>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>

        </center>
        </>
    );
}

export default Middle;








