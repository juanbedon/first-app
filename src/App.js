import React, { Component } from 'react';
import { Button, Navbar, NavItem, NavDropdown, MenuItem, Nav, Jumbotron  } from 'react-bootstrap'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">Retrap</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">
                Home
              </NavItem>
              <NavItem eventKey={2} href="#">
                Blog
              </NavItem>
              <NavDropdown eventKey={3} title="About" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Our Story</MenuItem>
                <MenuItem eventKey={3.2}>Our Team</MenuItem>
                <MenuItem eventKey={3.3}>What We Do</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Careers</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                Contact
              </NavItem>
              <NavItem eventKey={2} href="#">
                FAQ
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Jumbotron>
          <h1 className="text-center">Welcome to Retrap</h1>
          <p className="text-center">
            Where your ideas live.
          </p>
        </Jumbotron>

        <p>
          Just wait till we tell Will that Jennifer Hayes was crying at his funeral. I need my paddles! It’s about the shadow monster, isn’t it? Do you know anything about sensory deprivation tanks? Specifically how to build one? It’s about the shadow monster, isn’t it?
        </p>
        <p>  
          Why’s he gotta kick the door? She shut one door! With her mind! So, Jonathan, how was the pull-out? Yeah, I want a date with Bo Derek. We all want things. Um, I'm happy you're home. Friends don't lie. I need my paddles! This is not yours to fix alone. You act like you’re all alone out there in the world, but you’re not. You’re not alone.
        </p>
        <p>
          You shouldn't like things because people tell you you're supposed to. Nobody normal ever accomplished anything meaningful in this world. You are such a nerd. No wonder you only hang out with boys. Hey kiddo, would you like a balloon? If anyone asks where I am, I've left the country.
        </p>
        <p>
          It's just, sometimes... people don't really say what they're really thinking. But when you capture the right moment, it says more. Oh... candy, leftovers, Eggo's... she really likes Eggo's. Bitchin' You’re going to take out the demigorgon with a slingshot?
        </p>
        <p>
          If we’re both going crazy, then we’ll go crazy together, right? Why do we even need weapons anyway? We have her. We never would've upset you if we knew you had superpowers. You are such a nerd. No wonder you only hang out with boys. If anyone asks where I am, I've left the country.
        </p>
        <p>
          It's just, sometimes... people don't really say what they're really thinking. But when you capture the right moment, it says more. Mornings are for coffee and contemplation. You’re pretty cute, you know that? Friends don't lie. Do you know anything about sensory deprivation tanks? Specifically how to build one?
        </p>
        <p>
          Mouth-breather. So, Jonathan, how was the pull-out? You act like you want me to be your friend and then you treat me like garbage. Friends don't lie. YOU BETTER RUN! She's our friend, and she's crazy! I need my paddles! Do you know anything about sensory deprivation tanks? Specifically how to build one?
        </p>
      </div>
    );
  }
}

export default App;