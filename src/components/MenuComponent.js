import React from "react";
import { Link } from 'react-router-dom'
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem
} from "reactstrap";

// function component for a Menu Item card
function MenuItem({ dish }) {
  return (
    <Card>
      <Link to={`/menu/${dish.id}`}>
      <CardImg width="100%" src={dish.image} alt={dish.name} />
      <CardImgOverlay>
        <CardTitle>{dish.name}</CardTitle>
      </CardImgOverlay>
      </Link>
    </Card>
  );
}

// Menu component
function Menu(props){
  const menu = props.dishes.map(dish => (
    <div key={dish.id} className="col-12 col-md-5 m-1">
      <MenuItem dish={dish} />
    </div>
  ));

  return (<div className="container">
  <div className="row">
<Breadcrumb>
<BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
<BreadcrumbItem active>Menu</BreadcrumbItem>
</Breadcrumb>
<div className="col-12">
<h3>Menu</h3>
<hr />
</div>
</div>
            <div className="row">{menu}</div>
          </div>);

}

export default Menu;
