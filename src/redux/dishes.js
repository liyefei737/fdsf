import * as ActionTypes from './ActionTypes';


// when we receive an adddishes action, we set the isLoading to false
// done loading from the server adding dishes to our state
//wheneve you make a request to fetch the dishes you se isLoading to true
const initialState = {
                isLoading: true,
                errMssg: null,
                dishes: []
              }

//dishshes reducer
export const Dishes = (state = initialState, action) => {
    switch (action.type) {
      case ActionTypes.ADD_DISHES:
        return {...state, isLoading: false, errMssg: null, dishes: action.payload.dishes}
      case ActionTypes.DISHES_LOADING:
        return {...state, isLoading: true, errMssg: null, dishes: []}
      case ActionTypes.DISHES_FAILED:
        return {...state, isLoading: false, errMssg: action.payload.errMssg, dishes: []}

        default:
          return state;
      }
};
