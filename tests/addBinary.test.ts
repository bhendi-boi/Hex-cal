import { expect, test } from "vitest";
import { addBinary } from "../lib/addBinary";

test("adds 10 + 11 to equal 3", () => {
  expect(addBinary("10", "01")).toBe("11");
});

test("adds 1000000 + 111 to equal 3", () => {
  expect(addBinary("1000000", "111")).toBe("1000111");
});
