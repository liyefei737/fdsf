import Dishes from "../dishes";
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";

export const intialState = {
  dishes: Dishes,
  comments: COMMENTS,
  promotions: PROMOTIONS,
  leaders: LEADERS
};

export const reducer = (curState, action) => {
  return curState;
};
