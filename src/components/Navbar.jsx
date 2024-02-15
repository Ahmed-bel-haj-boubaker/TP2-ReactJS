import { Navbar, Nav } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import "../assets/nav.css";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">EVENT</Navbar.Brand>
      <Nav className="mr-auto">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/eventDetails" className="nav-link">Event</Link>
      </Nav>
      <Outlet />
    </Navbar>
    
  );
}
export default NavBar;
