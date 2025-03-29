import { Sum } from "../Sum";

test("Sum function will calculate sum of two number", () => {
  const result = Sum(3, 4);

  // Assertion
  expect(result).toBe(7);
});
