import { ADD_HOUSE, REMOVE_HOUSE, UPDATE_HOUSE, SET_INPUTS } from "./actionTypes";

import { addHouse, removeHouse, updateHouse, setInputs } from "./functions";

export const initialState = {
  houses: [
    {
      id: 1,
      key: "1",
      location: "풍납동",
      floor: "2",
      deposit: "13000",
      monthlyFee: "0",
      maintenenceFee: "13"
    }
  ],
  inputs: {
    location: "",
    floor: null,
    deposit: "",
    monthlyFee: "",
    maintenenceFee: ""
  }
};

export const reducer = (state = initialState, action) => {
  const handlers = {
    [ADD_HOUSE]: () => {
      const newId = Math.max(0, ...state.houses.map(house => house.id));
      return { ...addHouse(state, newId + 1) };
    },
    [REMOVE_HOUSE]: houseId => removeHouse(state, houseId.houseId),
    [UPDATE_HOUSE]: houseId => updateHouse(state, houseId.houseId),
    [SET_INPUTS]: inputs => setInputs(state, inputs.inputs)
  };
  const handler = handlers[action.type];
  return handler ? handler(action) : state;
};
