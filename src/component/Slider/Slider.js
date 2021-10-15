import React, { Component } from 'react';
import {BrowserRouter, Link, NavLink, Switch, Route, Router} from 'react-router-dom';
import {Container, Carousel} from 'react-bootstrap';
import './Slider.css';
export class Slider extends Component {
  render() {
    return (
      <BrowserRouter>
      <Container>
      <Carousel> 
  <Carousel.Item>
    <img
      className="d-block  "
      src="images\584494_f309_5.jpg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block  "
      src="images\4261752_af11_6.jpg"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block  "
      src="images\3598684_c319_5.jpg"
      alt="Third slide"/>
  </Carousel.Item>
</Carousel>
</Container>
</BrowserRouter>
    );
  }
}

export default Slider;
