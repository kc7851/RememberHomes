import {
  addHouse,
  removeHouse,
  updateHouse,
} from './actions';

import {
  ADD_HOUSE,
  REMOVE_HOUSE,
  UPDATE_HOUSE,
} from './actionTypes';

test('addHouse', () => {
  expect(addHouse(1).type).toEqual(ADD_HOUSE);
});

test('removeHouse', () => {
  expect(removeHouse(1).type).toEqual(REMOVE_HOUSE);
});

test('updateHouse', () => {
  expect(updateHouse(1).type).toEqual(UPDATE_HOUSE);
});



