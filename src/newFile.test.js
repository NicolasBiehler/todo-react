import { sort } from "./newFile"; 

it('bubble sort', () => {
  expect(sort([0, 1, 2, 4])).toEqual([0, 1, 2, 4]);
});
