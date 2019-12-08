import { initialState } from './initialState';

export const addHouse = (state, newId) => {
  const { houses, inputs } = state;
  return {
    ...state,
    houses: [
      ...houses,
      {
        ...inputs,
        id: newId,
        key: newId.toString()
      }
    ],
    inputs: initialState.inputs
  };
};

export const removeHouse = (state, houseId) => {
  const { houses } = state;
  return {
    ...state,
    houses: houses.filter(house => house.id !== houseId)
  };
};

export const updateHouse = (state, houseId) => {
  const { houses, inputs } = state;
  return {
    ...state,
    houses: houses.map(house =>
      house.id === houseId
        ? {
            ...house,
            ...inputs
          }
        : house
    ),
    inputs: initialState.inputs
  };
};

export const setInputs = (state, newInputs) => {
  return {
    ...state,
    inputs: newInputs
  };
};

export const setHouses = (state, getHouses) => {
  const { houses } = state;
  return {
    ...state,
    houses: [...houses, ...getHouses]
  };
};
