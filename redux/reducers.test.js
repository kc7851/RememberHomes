import { reducer } from "./reducers";

import { addHouse, removeHouse, updateHouse, setInputs, setHouses } from "./actions";

test("firstAddHouse", () => {
  const state = reducer(
    {
      houses: [],
      inputs: {
        location: "풍납동",
        floor: "2",
        deposit: "13000",
        monthlyFee: "0",
        maintenenceFee: "13"
      }
    },
    addHouse()
  );

  const { houses, inputs } = state;

  expect(houses).toHaveLength(1);
  expect(houses[0].id).toBe(1);
  expect(houses[0].key).toBe("1");
  expect(houses[0].location).toBe("풍납동");
  expect(houses[0].floor).toBe("2");
  expect(houses[0].deposit).toBe("13000");
  expect(houses[0].monthlyFee).toBe("0");
  expect(houses[0].maintenenceFee).toBe("13");
  expect(inputs.location).toBe("");
  expect(inputs.floor).toBe(null);
  expect(inputs.deposit).toBe("");
  expect(inputs.monthlyFee).toBe("");
  expect(inputs.maintenenceFee).toBe("");
});

test("confirmNewIdWhenAddHouse", () => {
  const existedMaxId = 100;
  const state = reducer(
    {
      houses: [
        {
          id: existedMaxId,
          key: existedMaxId,
          location: "풍납동",
          floor: "2",
          deposit: "13000",
          monthlyFee: "0",
          maintenenceFee: "13"
        }
      ],
      inputs: {
        location: "역삼동",
        floor: "3",
        deposit: "30000",
        monthlyFee: "",
        maintenenceFee: "7"
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
        location: "풍납동",
        floor: "2",
        deposit: "13000",
        monthlyFee: "0",
        maintenenceFee: "13"
      },
      {
        id: 2,
        key: "2",
        location: "성내동",
        floor: "4",
        deposit: "20000",
        monthlyFee: "0",
        maintenenceFee: "5"
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
        location: "풍납동",
        floor: "2",
        deposit: "13000",
        monthlyFee: "0",
        maintenenceFee: "13"
      },
      {
        id: 2,
        key: "2",
        location: "성내동",
        floor: "4",
        deposit: "20000",
        monthlyFee: "0",
        maintenenceFee: "5"
      }
    ],
    inputs: {
      location: "역삼동",
      floor: "3",
      deposit: "30000",
      monthlyFee: "",
      maintenenceFee: "7"
    }
  };
  const state = reducer(initState, updateHouse(2));

  const updatedHouse =
    state.houses[state.houses.findIndex(house => house.id === 2)];
  expect(updatedHouse).toEqual({
    id: 2,
    key: "2",
    location: "역삼동",
    floor: "3",
    deposit: "30000",
    monthlyFee: "",
    maintenenceFee: "7"
  });
});

test("setInputs", () => {
  const newInputs = {
    location: "역삼동",
    floor: "3",
    deposit: "30000",
    monthlyFee: "",
    maintenenceFee: "7"
  };

  const initState = {
    houses: [],
    inputs: {
      location: "",
      floor: null,
      deposit: "",
      monthlyFee: "",
      maintenenceFee: ""
    }
  };
  const state = reducer(initState, setInputs(newInputs));

  const { inputs } = state;

  expect(newInputs).toEqual(inputs);
});

test('setHousesExistedFromLocalStorage', () => {
  const initState = {
    houses: [],
    inputs: {
      location: "",
      floor: null,
      deposit: "",
      monthlyFee: "",
      maintenenceFee: ""
    }
  };

  const getHouses = [
    {
      id: 1,
      key: "1",
      location: "풍납동",
      floor: "2",
      deposit: "13000",
      monthlyFee: "0",
      maintenenceFee: "13"
    },
    {
      id: 2,
      key: "2",
      location: "성내동",
      floor: "4",
      deposit: "20000",
      monthlyFee: "0",
      maintenenceFee: "5"
    }
  ];
  const state = reducer(initState, setHouses(getHouses))

  expect(state.houses).toEqual(getHouses);
})

test('setHousesNotExistedFromLocalStorage', () => {
  const initState = {
    houses: [],
    inputs: {
      location: "",
      floor: null,
      deposit: "",
      monthlyFee: "",
      maintenenceFee: ""
    }
  };

  const getHouses = [];

  const state = reducer(initState, setHouses(getHouses))

  expect(state.houses).toEqual(getHouses);
})

