import * as ActionTypes from "./ActionTypes";
import { baseUrl } from '../shared/config';

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

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});

// dishLoading action creator that returns an action object
export const dishesLoading = () => ({
  type: ActionTypes.DISHES_LOADING
});

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
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

export const commentsFailed = mssg => ({
  type: ActionTypes.COMMENTS_FAILED,
  payload: { mssg: mssg }
});

export const addComments = comments => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: {
    comments: comments
  }
});

//thunks
export const fetchDishes = () => dispatch => {
  // current loading the dishes...
  debugger;
  dispatch(dishesLoading(true));
  fetch(baseUrl+'dishes/').then(resp => resp.json()).then(dishes => {
    debugger;
    dispatch(addDishes(dishes));
  });
};

export const fetchComments = () => dispatch => {
  // current loading the dishes...
  fetch(baseUrl+'comments/').then(resp => resp.json()).then(cmts => {
    dispatch(addComments(cmts));
  });
};


export const fetchPromos = () => (dispatch) => {

    dispatch(promosLoading());

    return fetch(baseUrl + 'promotions')
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)));
}

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});
