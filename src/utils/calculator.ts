interface CalcVariables {
  rounds: number;
  times: number[];
  rest: number;
}

export function timeToSeconds(time: string) {
  const timeSides = time.split(":");
  return Number(timeSides[0]) * 60 + Number(timeSides[1]);
}
