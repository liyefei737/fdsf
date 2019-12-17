import React from "react";
import CommentForm from './CommentFormComponent';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem
} from "reactstrap";
import { Link } from "react-router-dom";

// DishInfo component
function DishInfo({ dish }) {
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

// DishComments component
function DishComments({ comments }) {
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

function Dishdetail(props) {
  if (props.dish === undefined) {
    return <div></div>;
  }
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{props.dish.name}</h3>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-5">
          <DishInfo dish={props.dish} />
        </div>
        <div className="col-12 col-md-5">
          <h4> Comments </h4>
          <ul className="list-unstyled">
            <DishComments comments={props.comments} />
          </ul>
          <CommentForm />
        </div>
      </div>
    </div>
  );
}

export default Dishdetail;
