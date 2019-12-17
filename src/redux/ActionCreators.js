import * as ActionTypes from './ActionTypes';

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
