import {
  addHouse,
  removeHouse,
  updateHouse,
  setInputs,
  setHouses
} from "./functions";

test("addHouse", () => {
  const newId = 100;
  const state = {
    houses: [],
    inputs: {
      requires: {
        location: "풍납동",
        floor: "2",
        deposit: "13000",
        monthlyFee: "0",
        maintenenceFee: "13"
      }
    }
  };

  const { houses } = addHouse(state, newId);

  expect(houses).toHaveLength(state.houses.length + 1);
  expect(houses).toEqual([
    {
      id: newId,
      key: newId.toString(),
      requires: {
        location: state.inputs.requires.location,
        floor: state.inputs.requires.floor,
        deposit: state.inputs.requires.deposit,
        monthlyFee: state.inputs.requires.monthlyFee,
        maintenenceFee: state.inputs.requires.maintenenceFee
      }
    }
  ]);
});

test("removeHouse", () => {
  const removeKey = 2;
  const state = {
    houses: [
      {
        id: 1,
        key: "1",
        requires: {
          location: "풍납동",
          floor: "2",
          deposit: "13000",
          monthlyFee: "0",
          maintenenceFee: "13"
        }
      },
      {
        id: 2,
        key: "2",
        requires: {
          location: "성내동",
          floor: "4",
          deposit: "20000",
          monthlyFee: "0",
          maintenenceFee: "5"
        }
      }
    ],
    inputs: {
      requires: {
        location: "",
        floor: null,
        deposit: "",
        monthlyFee: "",
        maintenenceFee: ""
      }
    }
  };

  const { houses } = removeHouse(state, removeKey);

  expect(houses).toHaveLength(state.houses.length - 1);
  expect(houses).toEqual([
    {
      id: 1,
      key: "1",
      requires: {
        location: "풍납동",
        floor: "2",
        deposit: "13000",
        monthlyFee: "0",
        maintenenceFee: "13"
      }
    }
  ]);
});

test("updateHouse", () => {
  const updateId = 2;
  const state = {
    houses: [
      {
        id: 1,
        key: "1",
        requires: {
          location: "풍납동",
          floor: "2",
          deposit: "13000",
          monthlyFee: "0",
          maintenenceFee: "13"
        }
      },
      {
        id: 2,
        key: "2",
        requires: {
          location: "성내동",
          floor: "4",
          deposit: "20000",
          monthlyFee: "0",
          maintenenceFee: "5"
        }
      }
    ],
    inputs: {
      requires: {
        location: "역삼동",
        floor: "3",
        deposit: "30000",
        monthlyFee: "",
        maintenenceFee: "7"
      }
    }
  };

  const { houses } = updateHouse(state, updateId);

  const updatedHouse = houses[houses.findIndex(house => house.id === updateId)];

  expect(updatedHouse).toEqual({
    id: updateId,
    key: updateId.toString(),
    requires: {
      location: state.inputs.requires.location,
      floor: state.inputs.requires.floor,
      deposit: state.inputs.requires.deposit,
      monthlyFee: state.inputs.requires.monthlyFee,
      maintenenceFee: state.inputs.requires.maintenenceFee
    }
  });
});

test("setInputs", () => {
  const newInputs = {
    requires: {
      location: "역삼동",
      floor: "3",
      deposit: "30000",
      monthlyFee: "",
      maintenenceFee: "7"
    }
  };
  const initState = {
    houses: [],
    inputs: {
      requires: {
        location: "",
        floor: null,
        deposit: "",
        monthlyFee: "",
        maintenenceFee: ""
      }
    }
  };

  const state = setInputs(initState, newInputs);

  const { inputs } = state;

  expect(newInputs).toEqual(inputs);
});

test("setHouses", () => {
  const initState = {
    houses: [],
    inputs: {
      requires: {
        location: "",
        floor: null,
        deposit: "",
        monthlyFee: "",
        maintenenceFee: ""
      }
    }
  };

  const getHouses = [
    {
      id: 1,
      key: "1",
      requires: {
        location: "풍납동",
        floor: "2",
        deposit: "13000",
        monthlyFee: "0",
        maintenenceFee: "13"
      }
    },
    {
      id: 2,
      key: "2",
      requires: {
        location: "성내동",
        floor: "4",
        deposit: "20000",
        monthlyFee: "0",
        maintenenceFee: "5"
      }
    }
  ];

  const state = setHouses(initState, getHouses);

  expect(state.houses).toEqual(getHouses);
});
