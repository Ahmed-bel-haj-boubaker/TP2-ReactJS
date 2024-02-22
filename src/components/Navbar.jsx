import { Navbar, Nav } from "react-bootstrap";
import { Outlet, NavLink } from "react-router-dom";
import "../assets/nav.css";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand to="/events">EVENT</Navbar.Brand>
      <Nav className="mr-auto">
        <NavLink
          to="/events"
          style={({ isActive }) => ({
            color: isActive ? "gray" : "white",
          })}
          className="nav-link"
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => ({
            color: isActive ? "gray" : "white",
          })}
          className="nav-link"
        >
          About
        </NavLink>
      </Nav>
      <Outlet />
    </Navbar>
  );
}
export default NavBar;
