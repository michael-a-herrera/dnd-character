import { createStore, combineReducers } from "redux";

import { reducer, initialState as characterInitialState } from "./character";

export const configureStore = () => {
  const store = createStore(
    combineReducers({
      pc: reducer
    }), // root reducer
    {
      pc: characterInitialState
    } // our initialState
  );

  return store;
};

export default configureStore;