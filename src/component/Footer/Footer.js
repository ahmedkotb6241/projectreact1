import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Link, Switch, Route} from 'react-router-dom';
import Courses from '../Courses/Courses';
import Contactus from '../Contactus/Contactus';
import About from '../About/About';
import { Container } from "react-bootstrap";


const FooterPage = () => {
  return (
    <Container>
    <MDBFooter color="purple" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">I-Courses</h5>
            <p>
             To teach and develop programming around the world 
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Content</h5>
            <ul>
              <li className="list-unstyled">
                <Link to="/Courses">Courses</Link>
              </li>
              <li className="list-unstyled">
                <Link to="/Contactus">Contactus</Link>
              </li>
              <li className="list-unstyled">
                <Link to="/About">About</Link>
              </li>
            </ul>
            <Switch>
            <Route path="/Courses" component={Courses} exact />
            <Route path="/Contactus" component={Contactus} exact />
            <Route path="/About" component={About} exact />
            </Switch>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
    </Container>
  );
}

export default FooterPage;