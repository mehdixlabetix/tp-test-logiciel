import { test, expect } from "vitest";
import { isPriceInRange } from "../src/range";

test("isPriceInRange", () => {
  expect(isPriceInRange(10, 5, 15)).toBe(true);
  expect(isPriceInRange(10, 15, 20)).toBe(false);
  expect(isPriceInRange(10, 10, 10)).toBe(true);
  expect(isPriceInRange(10, 10, 11)).toBe(true);
  expect(isPriceInRange(10, 9, 10)).toBe(true);
});
