import { reducer } from "./reducers";
import { initialState } from "./initialState";

import {
  addHouse,
  removeHouse,
  updateHouse,
  setInputs,
  setHouses
} from "./actions";

test("firstAddHouse", () => {
  const state = reducer(
    {
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
    },
    addHouse()
  );

  const { houses, inputs } = state;

  expect(houses).toHaveLength(1);
  expect(houses[0].id).toBe(1);
  expect(houses[0].key).toBe("1");
  expect(houses[0].requires.location).toBe("풍납동");
  expect(houses[0].requires.floor).toBe("2");
  expect(houses[0].requires.deposit).toBe("13000");
  expect(houses[0].requires.monthlyFee).toBe("0");
  expect(houses[0].requires.maintenenceFee).toBe("13");
  expect(inputs.requires.location).toBe("");
  expect(inputs.requires.floor).toBe(null);
  expect(inputs.requires.deposit).toBe("");
  expect(inputs.requires.monthlyFee).toBe("");
  expect(inputs.requires.maintenenceFee).toBe("");
});

test("confirmNewIdWhenAddHouse", () => {
  const existedMaxId = 100;
  const state = reducer(
    {
      houses: [
        {
          id: existedMaxId,
          key: existedMaxId,
          requires: {
            location: "풍납동",
            floor: "2",
            deposit: "13000",
            monthlyFee: "0",
            maintenenceFee: "13"
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
    },
    addHouse()
  );

  const { houses } = state;

  expect(houses[houses.length - 1].id).toBe(existedMaxId + 1);
});

test("removeHouse", () => {
  const initState = {
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
    inputs: initialState.inputs
  };
  const state = reducer(initState, removeHouse(2));

  expect(state.houses).toHaveLength(1);
  expect(state.houses[0].id).toBe(1);
});

test("updateHouse", () => {
  const initState = {
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
  const state = reducer(initState, updateHouse(2));

  const updatedHouse =
    state.houses[state.houses.findIndex(house => house.id === 2)];

  expect(updatedHouse).toEqual({
    id: 2,
    key: "2",
    requires: {
      location: "역삼동",
      floor: "3",
      deposit: "30000",
      monthlyFee: "",
      maintenenceFee: "7"
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

  const state = reducer(initialState, setInputs(newInputs));

  const { inputs } = state;

  expect(newInputs).toEqual(inputs);
});

test("setHousesExistedFromLocalStorage", () => {
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
  const state = reducer(initialState, setHouses(getHouses));

  expect(state.houses).toEqual(getHouses);
});

test("setHousesNotExistedFromLocalStorage", () => {
  const getHouses = [];

  const state = reducer(initialState, setHouses(getHouses));

  expect(state.houses).toEqual(getHouses);
});
