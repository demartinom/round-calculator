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

export function secondsToMinutes(time: number): string {
  if (time < 60) {
    return `0:${time}`;
  }
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
}

export function calculateRounds(input: CalcVariables) {
  const restSeconds = timeToSeconds(input.Rest);
  const calculatedTimes: string[] = [];
  let workTime = 0;

  for (let i = 0; i < input.Rounds; i++) {
    const e = timeToSeconds(input.Times[i]);
    const roundTime = e - workTime - (i !== 0 ? restSeconds : 0);
    calculatedTimes.push(secondsToMinutes(roundTime));
    workTime = e;
  }

  return calculatedTimes;
}
