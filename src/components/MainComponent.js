import React, { Component } from "react";
import Menu from "./MenuComponent";
import Dishdetail from "./DishdetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
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
        <Header />
        <Menu
          dishes={this.state.dishes}
          selectedDishHandler={selectedDishID => {
            this.onDishSelect(selectedDishID);
          }}
        />

        <Dishdetail
          dish={this.state.dishes
            .filter(d => d.id === this.state.selectedDishID)
            .pop()}
        />
        <Footer/ >
      </div>
    );
  }
}

export default Main;
