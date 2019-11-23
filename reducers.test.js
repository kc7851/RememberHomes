import { reducer, initialState } from "./reducers";

import { addHouse, removeHouse, updateHouse } from "./actions";

import store from "./store";

test("addHouse", () => {
  const newId = store.getState().counter();
  const state = reducer(
    {
      houses: [],
      inputs: {
        location: "풍납동",
        floor: 2,
        deposit: 13000,
        monthly: 0,
        maintenencePay: 13
      }
    },
    addHouse(newId)
  );

  const { houses, inputs } = state;

  expect(houses).toHaveLength(1);
  expect(houses[0].location).toBe("풍납동");
  expect(houses[0].floor).toBe(2);
  expect(houses[0].deposit).toBe(13000);
  expect(houses[0].monthly).toBe(0);
  expect(houses[0].maintenencePay).toBe(13);
  expect(inputs).toEqual({
    location: "",
    floor: 0,
    deposit: 0,
    monthly: 0,
    maintenencePay: 0
  });
});

test("removeHouse", () => {
  const initState = {
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
  const state = reducer(initState, removeHouse(2));

  expect(state.houses).toHaveLength(1);
  expect(state.houses[0].id).toBe(1);
});

test("updateHouse", () => {
  const initState = {
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
      }
    ],
    inputs: {
      location: "역삼동",
      floor: 3,
      deposit: 30000,
      monthly: 0,
      maintenencePay: 7
    }
  };
  const state = reducer(initState, updateHouse(2));

  const updatedHouse = state.houses[state.houses.findIndex(house => house.id === 2)]
  expect(updatedHouse).toEqual(
    {
      id: 2,
      key: 2,
      location: "역삼동",
      floor: 3,
      deposit: 30000,
      monthly: 0,
      maintenencePay: 7
    }
  );
});
