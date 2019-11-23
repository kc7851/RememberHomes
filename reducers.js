import { ADD_HOUSE, REMOVE_HOUSE, UPDATE_HOUSE } from "./actionTypes";

import { addHouse, removeHouse, updateHouse } from "./functions";
import Counter from "./utils/counter";

export const initialState = {
  houses: [
    {
      id: 1,
      key: 1,
      location: "풍납동",
      floor: 2,
      deposit: 13000,
      monthly: 0,
      maintenencePay: 13
    },
    {
      id: 2,
      key: 2,
      location: "성내동",
      floor: 4,
      deposit: 20000,
      monthly: 0,
      maintenencePay: 5
    },
    {
      id: 3,
      key: 3,
      location: "역삼동",
      floor: 3,
      deposit: 30000,
      monthly: 0,
      maintenencePay: 8
    }
  ],
  inputs: {
    location: "",
    floor: 0,
    deposit: 0,
    monthly: 0,
    maintenencePay: 0
  }
};

export const reducer = (state = initialState, action) => {
  const handlers = {
    [ADD_HOUSE]: () => {
      const newId = Math.max(0, ...state.houses.map(house => house.id));
      return { ...addHouse(state, newId + 1) };
    },
    [REMOVE_HOUSE]: houseId => removeHouse(state, houseId.houseId),
    [UPDATE_HOUSE]: houseId => updateHouse(state, houseId.houseId)
  };
  const handler = handlers[action.type];
  return handler ? handler(action) : state;
};
