// Stores user inputs
interface CalcVariables {
  rounds: number;
  times: number[];
  rest: number;
}

// Takes a time such as 1:20 and converts it to seconds
export function timeToSeconds(time: string) {
  const timeSides = time.split(":");
  return Number(timeSides[0]) * 60 + Number(timeSides[1]);
}
