import { timeToSeconds } from "./calculator";
import { test, expect } from "vitest";

test("should convert 1:20 to 80", () => {
  expect(timeToSeconds("1:20")).toBe(80);
});

test("should convert 3:54 to 234", () => {
  expect(timeToSeconds("3:54")).toBe(234);
});
