import {createStore} from 'redux';
import {reducer, intialState} from 'reducer';


export const configureStore = () => {
  return createStore(reducer, intialState);
};
