import React, { Component } from "react";
import Dishdetail from './DishdetailComponent'

import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle
} from "reactstrap";

// list of dishes for a restuarant
class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDish: null
    };
  }

  handleItemClick(dish) {
    this.setState({ selectedDish: dish }, function() {
    });
  }

  renderDish(dish) {
    if (dish != null)
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    else return <div></div>;
  }

  render() {
    const menu = this.props.dishes.map(dish => (
      <div key={dish.id} className="col-12 col-md-5 m-1">
        <Card onClick={() => this.handleItemClick(dish)}>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardImgOverlay>
            <CardTitle>{dish.name}</CardTitle>
          </CardImgOverlay>
        </Card>
      </div>
    ));

    return (
      <div className="container">
        <div className="row">{menu}</div>
        <div className="row">
          <Dishdetail dish={this.state.selectedDish} />
        </div>
      </div>
    );
  }
}

export default Menu;
