import { testAdd } from "../index";

test("1 + 1 =2", () => {
  expect(testAdd(1, 1)).toBe(2);
});
