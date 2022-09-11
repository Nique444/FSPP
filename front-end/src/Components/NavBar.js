// import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function NavBar() {
  return (
    <Navbar className='nav-bar' expand="lg" fixed='top'>
        <Container>
          <Navbar.Brand className='nav-text' href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className='nav-text' href="/books">Book Lovers</Nav.Link>
            <Nav.Link className='nav-text' href="/books/new">Add Your Fav Book</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="light" className='nav-button'><img className='nav-button-image'src="https://img.icons8.com/metro/26/000000/search.png" alt=''/></Button>
          </Form>
        </Container>
      </Navbar>
  );
}
