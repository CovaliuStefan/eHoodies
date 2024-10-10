import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function TopNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container >
        <Navbar.Brand href="#">Store Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">All products</Nav.Link>
            <Nav.Link href="#action2">About us</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <NavDropdown title="Support" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">FAQ</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Shipping
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Contact us
              </NavDropdown.Item>
            </NavDropdown>
            <Navbar.Brand href="#home">
                <img
                src="src\logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
                />
            </Navbar.Brand>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;
