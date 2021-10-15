import React, { Component } from 'react';
import {BrowserRouter, Link, NavLink, Switch, Route, Router} from 'react-router-dom';
import {Button, Navbar, Nav, Form, FormControl, Container, Row, col, Carousel, CardGroup, Card} from 'react-bootstrap';
import Homepages from '../Homepages/Homepages';
import Courses from '../Courses/Courses';
import Regestion from '../Regestion/Regestion';
import './Bar.css';
export class Bar extends Component {
  render() {
    return (
      <BrowserRouter>
      <Container>
      <Navbar bg="light" variant="light">
    <Navbar.Brand to="/Homepages">I-Courses</Navbar.Brand>
    <Nav className="mr-auto">
      <NavLink className="mrrr" to="/Homepages">Home</NavLink>
      <NavLink className="mrrr" to="/Courses">Courses</NavLink>
      <NavLink className="mrrr" to="/Regestion">Regestion</NavLink>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
    <Switch>
      <Route path="/Homepages" component={Homepages} exact />
      <Route path="/Courses" component={Courses} exact />
      <Route path="/Regestion" component={Regestion} exact />
      </Switch>
  </Navbar>
  </Container>
  </BrowserRouter>
    );
  }
}

export default Bar;
