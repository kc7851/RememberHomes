import {
  ADD_HOUSE,
  REMOVE_HOUSE,
  UPDATE_HOUSE,
  SET_INPUTS,
  SET_HOUSES,
} from "./actionTypes";

import {
  addHouse,
  removeHouse,
  updateHouse,
  setInputs,
  setHouses,
} from "./functions";

import { initialState } from './initialState';

export const reducer = (state = initialState, action) => {
  const handlers = {
    [ADD_HOUSE]: () => {
      const newId = Math.max(0, ...state.houses.map(house => house.id));
      return { ...addHouse(state, newId + 1) };
    },
    [REMOVE_HOUSE]: houseId => removeHouse(state, houseId.houseId),
    [UPDATE_HOUSE]: houseId => updateHouse(state, houseId.houseId),
    [SET_INPUTS]: inputs => setInputs(state, inputs.inputs),
    [SET_HOUSES]: houses => setHouses(state, houses.houses)
  };
  const handler = handlers[action.type];
  return handler ? handler(action) : state;
};
