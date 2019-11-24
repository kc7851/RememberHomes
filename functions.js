export const addHouse = (state, newId) => {
  const { houses, inputs } = state;
  return {
    ...state,
    houses: [
      ...houses,
      {
        id: newId,
        key: newId.toString(),
        ...inputs
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
