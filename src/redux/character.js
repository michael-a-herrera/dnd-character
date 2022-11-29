import * as types from "./types";

export const initialState = {
  name: "",
  race: "",
  subrace: "",
  class: "",
  subclass: "",
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.UPDATE_CLASS:
            return {
                ...state,
                class: action.payload,
            };
        case types.UPDATE_SUBCLASS:
            return {
                ...state,
                subclass: action.payload,
            };
        case types.UPDATE_NAME:
            return {
                ...state,
                name: action.payload,
            };
        case types.UPDATE_RACE:
            return {
                ...state,
                race: action.payload,
            };
        case types.UPDATE_SUBRACE:
            return {
                ...state,
                subrace: action.payload,
            };
        default:
            return state;
    
        
    }
}