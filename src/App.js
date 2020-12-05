import React, { Component } from 'react';
import Directory from './Components/DirectoryComponent';
import Jumbotron from './Components/JumbotronComponent';
import Selector from './Components/SelectorComponent';
import { PRODUCTS } from './shared/products';
import {Navbar, NavbarBrand, NavLink, Nav, Form, Button } from 'reactstrap'; 
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      products: PRODUCTS
    };
  }
  render() {
    return (
      <div className="App">
        <Navbar color="white">
        <div className="container">
          <NavbarBrand href="/">
            <img
              src="../assets/jupes-header-lg.png"
              width="146"
              height="80"
              className="d-inline-block align-top"
              alt="React Bootstrap Logo"
            />
          </NavbarBrand>
          <Nav className="mr-auto">
            <NavLink href="#home">Men</NavLink>
            <NavLink href="#women">Women</NavLink>
            <NavLink href="#accessories">Accessories</NavLink>
            <NavLink href="#community">Community</NavLink>
          </Nav>
          <Form inline>
            <input type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-primary">Search</Button>
          </Form>  
        </div>  
        </Navbar>
        <Jumbotron />
        <Directory />
        <Selector />
      </div>
    );
  }
}

export default App;
