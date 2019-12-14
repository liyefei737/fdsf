import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle
} from "reactstrap";

class Dishdetail extends Component {

  renderDish(dish) {
    return (
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  }

  renderComments(comments) {
    const commentsList = comments.map((c) => (<li key={c.id}><span>{c.comment}</span>
                                <span>{c.author}    {c.date}</span></li>));
    return commentsList;
  }

  render() {
    const dish = this.props.dish;
    if (dish === null) {
      return <div></div>
    }
    return [<div className="col-12 col-md-5">{this.renderDish(dish)}</div>,
           <div className="col-12 col-md-5">
           <h4> Comments </h4>

           <ul className="list-unstyled">{this.renderComments(dish.comments)}</ul>
           </div>];
  }
}

export default Dishdetail;
