import * as types from "./types";

export const updateClass = char_class => ({
  type: types.UPDATE_CLASS,
  payload: char_class
});

export const updateSubClass = char_subclass => ({
    type: types.UPDATE_SUBCLASS,
    payload: char_subclass
  });

export const updateRace = char_race => ({
    type: types.UPDATE_RACE,
    payload: char_race
  });

export const updateSubRace = char_subrace => ({
    type: types.UPDATE_SUBRACE,
    payload: char_subrace
  });

export const updateName = char_name => ({
    type: types.UPDATE_NAME,
    payload: char_name
  });