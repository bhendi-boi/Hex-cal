import { expect, test } from "vitest";
import { flipBits } from "../lib/flipBits";

test("input is 100", () => {
  expect(flipBits("100")).toBe("011");
});

test("input is 000", () => {
  expect(flipBits("000")).toBe("111");
});

test("input is 111", () => {
  expect(flipBits("111")).toBe("000");
});
