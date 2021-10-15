import React, { Component } from 'react';
import {BrowserRouter, Link, NavLink, Switch, Route, Router} from 'react-router-dom';
import {Button, Navbar, Nav, Form, FormControl, Container, Row, col, Carousel, CardGroup, Card} from 'react-bootstrap';
import './Group.css';
export class Group extends Component {
  render() {
    return (
      <BrowserRouter>
      <CardGroup className="carddd">
      <Card>
        <Card.Img variant="top" className="im" src="images\java\851712_fc61_6.jpg" />
        <Card.Body>
          <Card.Title className="tx">The Complete JavaScript Course 2021: From Zero to Expert!</Card.Title>
          <Card.Text>
          Jonas Schmedtmann
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="success" className="text-muted">Check Out</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" className="im" src="images\java\2782800_0b85.jpg" />
        <Card.Body>
          <Card.Title className="tx">20 Web Projects With Vanilla JavaScript</Card.Title>
          <Card.Text>
          Brad Traversy
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="success" className="text-muted">Check Out</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" className="im" src="images\java\3671332_b86a.jpg" />
        <Card.Body>
          <Card.Title className="tx">50 Projects In 50 Days - HTML, CSS & JavaScript</Card.Title>
          <Card.Text>
          Brad Traversy, Florin Pop
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="success" className="text-muted">Check Out</Button>
        </Card.Footer>
      </Card>
    </CardGroup>
    <br />
    <CardGroup className="carddd">
      <Card>
        <Card.Img variant="top" className="im" src="images\java\2776760_f176_6.jpg" />
        <Card.Body>
          <Card.Title className="tx">The Python Mega Course: Build 10 Real World Applications</Card.Title>
          <Card.Text>
          Dr. Angela Yu
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="success" className="text-muted">Check Out</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" className="im" src="images\java\567828_67d0.jpg" />
        <Card.Body>
          <Card.Title className="tx">2021 Complete Python Bootcamp From Zero to Hero in Python</Card.Title>
          <Card.Text>
          Jose Portilla
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="success" className="text-muted">Check Out</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" className="im" src="images\java\950390_270f_3.jpg" />
        <Card.Body>
          <Card.Title className="tx">Machine Learning A-Z™: Hands-On Python & R In Data Science</Card.Title>
          <Card.Text>
          Kirill Eremenko, Hadelin de Ponteves
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="success" className="text-muted">Check Out</Button>
        </Card.Footer>
      </Card>
    </CardGroup>
    <br />
    <CardGroup className="carddd">
      <Card>
        <Card.Img variant="top" className="im" src="images\java\1218586_9f86.jpg" />
        <Card.Body>
          <Card.Title className="tx">The Advanced Web Developer Bootcamp</Card.Title>
          <Card.Text>
          Colt Steele, Elie Schoppik, Tim Garcia
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="success" className="text-muted">Check Out</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" className="im" src="images\java\818990_57c0_3.jpg" />
        <Card.Body>
          <Card.Title className="tx">Git a Web Developer Job: Mastering the Modern Workflow</Card.Title>
          <Card.Text>
          Brad Schiff
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="success" className="text-muted">Check Out</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" className="im" src="images\java\881980_fc8f.jpg" />
        <Card.Body>
          <Card.Title className="tx">Become a Web Developer from Scratch</Card.Title>
          <Card.Text>
          Evan Kimbrell
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="success" className="text-muted">Check Out</Button>
        </Card.Footer>
      </Card>
    </CardGroup>
      </BrowserRouter>
    );
  }
}

export default Group;
