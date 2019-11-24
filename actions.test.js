import { addHouse, removeHouse, updateHouse, setInputs } from "./actions";

import {
  ADD_HOUSE,
  REMOVE_HOUSE,
  UPDATE_HOUSE,
  SET_INPUTS
} from "./actionTypes";

test("addHouse", () => {
  expect(addHouse(1).type).toEqual(ADD_HOUSE);
});

test("removeHouse", () => {
  expect(removeHouse(1).type).toEqual(REMOVE_HOUSE);
});

test("updateHouse", () => {
  expect(updateHouse(1).type).toEqual(UPDATE_HOUSE);
});

test("setInputs", () => {
  const inputs = {
    location: "풍납동",
    floor: 2,
    deposit: 13000,
    monthlyFee: 0,
    maintenenceFee: 13
  };
  expect(setInputs(inputs).type).toEqual(SET_INPUTS);
});
