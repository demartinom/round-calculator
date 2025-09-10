import { timeToSeconds, calculateRounds } from "./calculator";
import type { CalcVariables } from "./calculator";
import { test, expect } from "vitest";

test("should convert 1:20 to 80", () => {
  expect(timeToSeconds("1:20")).toBe(80);
});

test("should convert 3:54 to 234", () => {
  expect(timeToSeconds("3:54")).toBe(234);
});

const calcTestInterface: CalcVariables = {
  Rounds: 4,
  Times: ["1:19", "4:30", "7:40", "10:52"],
  Rest: "2:00",
};

test("convert cumulative times into their round times in seconds", () => {
  expect(calculateRounds(calcTestInterface)).toStrictEqual([79, 71, 70, 72]);
});
