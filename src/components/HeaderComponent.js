import React, { Component, Fragment } from "react";
import { Navbar, NavbarBrand, Jumbotron } from "reactstrap";
class Header extends Component {
  render() {
     // this is an react fragment which is a group of compnenets that will be added into the dom
    return (
      <Fragment>
        <Navbar dark>
          <div className="container">
            <NavbarBrand href="/">Menu</NavbarBrand>
          </div>
        </Navbar>
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
              <h1>Fusiontopia</h1>
              <p>Fusion cusine inspired by all and for all</p>
              </div>
            </div>
          </div>
        </Jumbotron>
      </Fragment>
    );
  }
}

export default Header;
