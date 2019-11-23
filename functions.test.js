import { addHouse, removeHouse, updateHouse, setInputs } from "./functions";

test("addHouse", () => {
  const newId = 100;
  const state = {
    houses: [],
    inputs: {
      location: "풍납동",
      floor: "2",
      deposit: "13000",
      monthly: "0",
      maintenencePay: "13"
    }
  };

  const { houses } = addHouse(state, newId);

  expect(houses).toHaveLength(state.houses.length + 1);
  expect(houses).toEqual([
    {
      id: newId,
      key: newId,
      location: state.inputs.location,
      floor: state.inputs.floor,
      deposit: state.inputs.deposit,
      monthly: state.inputs.monthly,
      maintenencePay: state.inputs.maintenencePay
    }
  ]);
});

test("removeHouse", () => {
  const removeKey = 2;
  const state = {
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
      floor: "0",
      deposit: "0",
      monthly: "0",
      maintenencePay: "0"
    }
  };

  const { houses } = removeHouse(state, removeKey);

  expect(houses).toHaveLength(state.houses.length - 1);
  expect(houses).toEqual([
    {
      id: 1,
      key: 1,
      location: "풍납동",
      floor: 2,
      deposit: 13000,
      monthly: 0,
      maintenencePay: 13
    }
  ]);
});

test("updateHouse", () => {
  const updateId = 2;
  const state = {
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
      floor: "3",
      deposit: "30000",
      monthly: "0",
      maintenencePay: "7"
    }
  };

  const { houses } = updateHouse(state, updateId);

  const updatedHouse = houses[houses.findIndex(house => house.id === updateId)];

  expect(updatedHouse).toEqual({
    id: updateId,
    key: updateId,
    location: state.inputs.location,
    floor: state.inputs.floor,
    deposit: state.inputs.deposit,
    monthly: state.inputs.monthly,
    maintenencePay: state.inputs.maintenencePay
  });
});

test("setInputs", () => {
  const newInputs = {
    location: "역삼동",
    floor: 3,
    deposit: 30000,
    monthly: 0,
    maintenencePay: 7
  };
  const initState = {
    houses: [],
    inputs: {
      location: "",
      floor: "0",
      deposit: "0",
      monthly: "0",
      maintenencePay: "0"
    }
  };

  const state = setInputs(initState, newInputs);

  const { inputs } = state;

  expect(newInputs).toEqual(inputs);
});
