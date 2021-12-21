import React, { useContext } from "react";

import { Navbar, Container, Nav } from "react-bootstrap";
import { mainContext } from "../context/StateProvider";

export default function NavBar() {
  const { friendsState } = useContext(mainContext);
  console.log(friendsState);
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Friends list</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>Friends count: {friendsState.length}</Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
