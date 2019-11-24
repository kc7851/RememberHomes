import { addHouse, removeHouse, updateHouse, setInputs } from "./functions";

test("addHouse", () => {
  const newId = 100;
  const state = {
    houses: [],
    inputs: {
      location: "풍납동",
      floor: "2",
      deposit: "13000",
      monthlyFee: "0",
      maintenenceFee: "13"
    }
  };

  const { houses } = addHouse(state, newId);

  expect(houses).toHaveLength(state.houses.length + 1);
  expect(houses).toEqual([
    {
      id: newId,
      key: newId.toString(),
      location: state.inputs.location,
      floor: state.inputs.floor,
      deposit: state.inputs.deposit,
      monthlyFee: state.inputs.monthlyFee,
      maintenenceFee: state.inputs.maintenenceFee
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

  const { houses } = removeHouse(state, removeKey);

  expect(houses).toHaveLength(state.houses.length - 1);
  expect(houses).toEqual([
    {
      id: 1,
      key: "1",
      location: "풍납동",
      floor: "2",
      deposit: "13000",
      monthlyFee: "0",
      maintenenceFee: "13"
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

  const { houses } = updateHouse(state, updateId);

  const updatedHouse = houses[houses.findIndex(house => house.id === updateId)];

  expect(updatedHouse).toEqual({
    id: updateId,
    key: updateId.toString(),
    location: state.inputs.location,
    floor: state.inputs.floor,
    deposit: state.inputs.deposit,
    monthlyFee: state.inputs.monthlyFee,
    maintenenceFee: state.inputs.maintenenceFee
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

  const state = setInputs(initState, newInputs);

  const { inputs } = state;

  expect(newInputs).toEqual(inputs);
});
