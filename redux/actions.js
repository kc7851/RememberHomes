import {
  ADD_HOUSE,
  REMOVE_HOUSE,
  UPDATE_HOUSE,
  SET_INPUTS,
  SET_HOUSES
} from "./actionTypes";
import { AsyncStorage } from "react-native";

export const addHouse = newId => ({ type: ADD_HOUSE, newId });
export const removeHouse = houseId => ({ type: REMOVE_HOUSE, houseId });
export const updateHouse = houseId => ({ type: UPDATE_HOUSE, houseId });
export const setInputs = inputs => ({ type: SET_INPUTS, inputs: inputs });
export const setHouses = houses => ({ type: SET_HOUSES, houses: houses });

export const fetchHouses = () => {
  return async dispatch => {
    try {
      const houses = await AsyncStorage.getItem("houses");
      if (houses !== null) {
        dispatch(setHouses(JSON.parse(houses)));
      }
    } catch (e) {
      console.log(e);
    }
  };
};

export const saveHouses = (houses) => {
  return async () => {
    try {
      await AsyncStorage.setItem("houses", JSON.stringify(houses));
    } catch (e) {
      console.log(e);
    }
  };
};
