import React, { Component } from "react";
import Menu from "./MenuComponent";
import Dishdetail from "./DishdetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addComment, fetchDishes, fetchComments, fetchPromos } from "../redux/ActionCreators";
import { actions } from 'react-redux-form'

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  };
};

const mapDispatchToProps = dispatch => ({
  addComment: (dishId, rating, author, comment) =>
    dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => dispatch(fetchDishes()),
  resetFeedbackForm: () => dispatch(actions.reset('feedback')),
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos())
});

class Main extends Component {

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          dishesLoading={this.props.dishes.isLoading}
          dishesErrMessg={this.props.dishes.errMssg}
          dish={this.props.dishes.dishes.filter(dish => dish.featured)[0]}
          leader={this.props.leaders.filter(leader => leader.featured)[0]}
          promotion={this.props.promotions.promotions.filter(promo => promo.featured)[0]}
          promoLoading={this.props.promotions.isLoading}
          promoErrMess={this.props.promotions.errMess}
        />
      );
    };

    const DishWithId = ({ match }) => {
      return (
        <Dishdetail
          dish={
            this.props.dishes.dishes.filter(
              dish => dish.id === parseInt(match.params.dishID, 10)
            )[0]
          }
          isLoading={this.props.dishes.isLoading}
          errMessg={this.props.dishes.errMssg}
          commentsErrMess={this.props.comments.errMss}
          comments={this.props.comments.comments.filter(
            comment => comment.dishId === parseInt(match.params.dishID, 10)
          )}
          addComment={this.props.addComment}
        />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path='/contactus' component={() =>
              <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
          <Route
            path="/aboutus"
            component={() => <About leaders={this.props.leaders} />}
          />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.props.dishes} />}
          />
          <Route path="/menu/:dishID" component={DishWithId} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
