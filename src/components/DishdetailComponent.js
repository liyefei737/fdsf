import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

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
    const commentsList = comments.map(c => (
      <li key={c.id}>
        <p>{c.comment}</p>
        <p>
          {c.author}{" "}
          {new Intl.DateTimeFormat("us-US", {
            year: "numeric",
            month: "short",
            day: "2-digit"
          }).format(new Date(Date.parse(c.date)))}
        </p>
      </li>
    ));
    return commentsList;
  }

  render() {
    const dish = this.props.dish;
    if (dish === undefined) {
      return <div></div>;
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5">{this.renderDish(dish)}</div>
          <div className="col-12 col-md-5">
            <h4> Comments </h4>
            <ul className="list-unstyled">
              {this.renderComments(dish.comments)}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Dishdetail;
