import * as ActionTypes from "./ActionTypes";
import DISHES from "../shared/dishes";

export const addComment = (dishID, rating, author, comment) => {
  return {
    type: ActionTypes.ADD_COMMENAT,
    payload: {
      dishId: dishID,
      rating: rating,
      author: author,
      comment: comment
    }
  };
};

// dishLoading action creator that returns an action object
export const dishesLoading = () => ({
  type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = mssg => ({
  type: ActionTypes.DISHES_FAILED,
  payload: { mssg: mssg }
});

export const addDishes = dishes => ({
  type: ActionTypes.ADD_DISHES,
  payload: {
    dishes: dishes
  }
});

//thunks
export const fetchDishes = () => dispatch => {
  // current loading the dishes...
  dispatch(dishesLoading(true));

  setTimeout(() => {
    dispatch(addDishes(DISHES));
  }, 2000);
};
