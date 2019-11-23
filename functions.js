export const addHouse = (state, newId) => {
  const { houses, inputs } = state;
  return {
    ...state,
    houses: [
      ...houses,
      {
        id: newId,
        key: newId,
        ...inputs
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
    inputs: {}
  };
};

export const setInputs = (state, newInputs) => {
  return {
    ...state,
    inputs: newInputs
  };
};
