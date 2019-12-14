import React from "react";

import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle
} from "reactstrap";


// function component for a Menu Item card
function MenuItem({ dish, selectedDishHandler}) {
  return (
    <Card onClick={() => {selectedDishHandler(dish.id)}}>
      <CardImg width="100%" src={dish.image} alt={dish.name} />
      <CardImgOverlay>
        <CardTitle>{dish.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
}

// Menu component
function Menu(props){
  const menu = props.dishes.map(dish => (
    <div key={dish.id} className="col-12 col-md-5 m-1">
      <MenuItem dish={dish}  selectedDishHandler={props.selectedDishHandler} />
    </div>
  ));

  return (<div className="container"><div className="row">{menu}</div></div>);

}

export default Menu;
