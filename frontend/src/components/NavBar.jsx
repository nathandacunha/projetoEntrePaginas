import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/App.css';

function NavBar() {
  return (
    <Navbar expand="sm" bg="dark" data-bs-theme="dark" collapseOnSelect className="py-1">
      <Container fluid className="px-3">
        <Navbar.Brand href="#" className="fs-6 py-0">Entre Páginas</Navbar.Brand>

        <Navbar.Toggle aria-controls="menu-principal" className="py-0 px-1" />

        <Navbar.Collapse id="menu-principal">
          <Nav className="ms-auto small">
            <Nav.Link href="#">Item 1</Nav.Link>
            <Nav.Link href="#">Item 2</Nav.Link>
            <Nav.Link href="#">Item 3</Nav.Link>
            <Nav.Link href="#">Item 4</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;