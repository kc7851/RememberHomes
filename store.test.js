import store from './store';

test('initialState', () => {
  const { houses } = store.getState();

  expect(houses).toHaveLength(3);
});