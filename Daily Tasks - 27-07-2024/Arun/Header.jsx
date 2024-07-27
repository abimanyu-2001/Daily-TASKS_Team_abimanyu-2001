import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Icon } from "@iconify/react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Cart from "./Cart";

const Header = ({ setCategory, fetchData, cart }) => {
  const navigate = useNavigate();
  return (
    <Navbar expand="lg" className="bg-light shadow" style={{ color: "white" }}>
      <Container>
        <Navbar.Brand
          className="align-items-center bg-body rounded-1 px-2 shadow"
          style={{ cursor: "pointer" }}
        >
          <Icon
            icon="tabler:hexagon-letter-f-filled"
            style={{ color: "#624a95", paddingBottom: 5, paddingRight: 0 }}
            fontSize={30}
          />{" "}
          <span
            style={{ color: "#624a95" }}
            onClick={() => {
              navigate("/");
            }}
          >
            Fetch
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link
              style={{ fontSize: 18, paddingRight: 50 }}
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              style={{ fontSize: 18, paddingRight: 50 }}
              onClick={() => {
                navigate("/cart");
              }}
            >
              Cart ({cart.length})
            </Nav.Link>

            <NavDropdown
              style={{ fontSize: 18, paddingRight: 50 }}
              title="Category"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item
                href="#action/3.1"
                style={{ color: "#624a95" }}
                onClick={() => {
                  setCategory("beauty");
                  // fetchData();
                }}
              >
                Beauty
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action/3.2"
                style={{ color: "#624a95" }}
                onClick={() => {
                  setCategory("furniture");
                  // fetchData();
                }}
              >
                Furniture
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action/3.3"
                style={{ color: "#624a95" }}
                onClick={() => {
                  setCategory("groceries");
                  // fetchData();
                }}
              >
                Groceries
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action/3.5"
                style={{ color: "#624a95" }}
                onClick={() => {
                  setCategory("fragrances");
                  // fetchData();
                }}
              >
                Fragrances
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                href="#action/3.4"
                style={{ color: "#624a95" }}
                onClick={() => {
                  setCategory("all");
                  // fetchData();
                }}
              >
                All
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
