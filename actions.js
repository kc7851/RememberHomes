import { ADD_HOUSE, REMOVE_HOUSE, UPDATE_HOUSE, SET_INPUTS } from "./actionTypes";

export const addHouse = newId => ({ type: ADD_HOUSE, newId });
export const removeHouse = houseId => ({ type: REMOVE_HOUSE, houseId });
export const updateHouse = houseId => ({ type: UPDATE_HOUSE, houseId });
export const setInputs = inputs => ({ type: SET_INPUTS, inputs: inputs })
