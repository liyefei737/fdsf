import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./MenuComponent";
import Dishdetail from "./DishdetailComponent";
import Dishes from "../dishes";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: Dishes,
      selectedDishID: null
    };
  }

  onDishSelect(dishID) {
    this.setState({ selectedDishID: dishID });
  }

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Menu</NavbarBrand>
          </div>
        </Navbar>
        <Menu
          dishes={this.state.dishes}
          selectedDishHandler={selectedDishID => {
            this.onDishSelect(selectedDishID);
          }}
        />
          <div className="row">
            <Dishdetail
              dish={this.state.dishes
                .filter(d => d.id === this.state.selectedDishID)
                .pop()}
            />
          </div>
      </div>
    );
  }
}

export default Main;
