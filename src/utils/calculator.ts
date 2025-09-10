// Stores user inputs
export interface CalcVariables {
  Rounds: number;
  Times: string[];
  Rest: string;
}

// Takes a time such as 1:20 and converts it to seconds
export function timeToSeconds(time: string) {
  const [m, s] = time.split(":");
  return Number(m) * 60 + Number(s);
}

export function calculateRounds(input: CalcVariables) {
  const restSeconds = timeToSeconds(input.Rest);
  const calculatedTimes: number[] = [];

  for (let i = 0; i < input.Rounds; i++) {
    const e = timeToSeconds(input.Times[i]);
    calculatedTimes.push(e - restSeconds * i);
  }
  return calculatedTimes;
}
