import React, { Component } from "react";

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
    const  props = this.props
    // call parent component's method in the handler
    const menu = props.dishes.map(dish => (
      <div key={dish.id} className="col-12 col-md-5 m-1">
        <Card onClick={() => {props.selectedDishHandler(dish.id)}}>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardImgOverlay>
            <CardTitle>{dish.name}</CardTitle>
          </CardImgOverlay>
        </Card>
      </div>
    ));

    return (<div className="row">{menu}</div>);
  }
}

export default Menu;
