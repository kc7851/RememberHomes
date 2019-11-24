import store from './store';
import { initialState } from './reducers';

test('initialState', () => {
  const { houses } = store.getState();

  expect(houses).toHaveLength(initialState.houses.length);
  expect(houses).toEqual(initialState.houses);
});