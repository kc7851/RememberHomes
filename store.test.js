import store from './store';

test('initialState', () => {
  const { houses } = store.getState();
  // console.log(store.getState());
  expect(houses).toHaveLength(3);
});