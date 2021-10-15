import React, { Component } from 'react';
import {BrowserRouter, Link, NavLink, Switch, Route, Router} from 'react-router-dom';
// import {Button, Navbar, Nav, Form, FormControl, Container, Row, col, Carousel, CardGroup, Card} from 'react-bootstrap';
import Homepages from './component/Homepages/Homepages';
// import Bar from './component/Bar/Bar';
// import Slider from './component/Slider/Slider';
// import Group from './component/Group/Group';
// import Footer from './component/Footer/Footer'; 
export class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Homepages />
    
      </BrowserRouter>
    );
  }
}
export default App;
