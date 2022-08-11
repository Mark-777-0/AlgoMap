import React from 'react';
import './App.css';
import PathfindingVisualizer from './PathfindingVisualizer/PathfindingVisualizer';
import visualizeDijkstra from './PathfindingVisualizer/PathfindingVisualizer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function App() {
  return (
    <div className="App">
        <div class="container">
      
      <Navbar variant="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img
              alt=""
              src="logo.svg"
              width="200"
              height="50"
              className="d-inline-block align-top"
            /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">GitHub</Nav.Link>
            <Nav.Link href="#home">Rules</Nav.Link>
            <NavDropdown title="Graph Algortihms" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" >Djikstra's</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                A*
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">BFS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">DFS</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Help!
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  </div>
      <PathfindingVisualizer></PathfindingVisualizer>
    </div>
  );
}

export default App;
