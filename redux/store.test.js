import store from './store';
import { initialState } from './initialState';

test('initialState', () => {
  const { houses } = store.getState();

  expect(houses).toHaveLength(initialState.houses.length);
  expect(houses).toEqual(initialState.houses);
});