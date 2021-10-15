import React, { Component } from 'react';
import {BrowserRouter, Link, NavLink, Switch, Route, Router} from 'react-router-dom';
import Bar from '../Bar/Bar';
import Slider from '../Slider/Slider';
import Group from '../Group/Group';
import Footer from '../Footer/Footer';

export class Homepages extends Component {
  render() {
    return (
      <BrowserRouter>
      <Bar />
      <br />
      <Slider />
      <br />  
      <Group />
      <br />
      <Footer />
      </BrowserRouter>
    );
  }
}

export default Homepages;
