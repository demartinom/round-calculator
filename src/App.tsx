import { useEffect, useState } from "react";
import { RoundTime } from "./components/TimeInput";
import { RestTime } from "./components/RestTime";

import { calculateRounds } from "./utils/calculator";
import type { CalcVariables } from "./utils/calculator";
import "./styles/App.css";

function App() {
  const [rounds, setRounds] = useState(1);
  const [roundTimes, setRoundTimes] = useState<string[]>([]);
  const [restTime, setRestTime] = useState<string>("02:00");
  const [roundTotals, setRoundTotals] = useState<string[]>([]);

  // Used for setting state of specific round time
  const timeUpdate = (index: number, newTime: string) => {
    setRoundTimes((prev) => prev.map((t, i) => (i === index ? newTime : t)));
  };

  // Updates length of rounds based on user input
  useEffect(() => {
    setRoundTimes(Array(rounds).fill("00:00"));
  }, [rounds]);

  // Entry for rounds. Length decided by rounds state
  const Times = roundTimes.map((_, i) => (
    <div key={i}>
      <RoundTime updateTime={timeUpdate} index={i} />
    </div>
  ));

  const handleCalculate = () => {
    setRoundTotals([]);
    const roundData: CalcVariables = {
      Rounds: rounds,
      Times: roundTimes,
      Rest: restTime,
    };
    setRoundTotals(calculateRounds(roundData));
  };
  return (
    <div>
      <p>How many rounds did you do?</p>
      <input
        type="number"
        name="Rounds"
        id="RoundNums"
        onChange={(e) => {
          setRounds(Number(e.target.value));
        }}
        value={rounds}
        min={1}
      />
      <p>Enter your cumulative time after each round</p>
      {Times}
      <p>Update your rest time</p>
      <RestTime rest={restTime} updateRest={setRestTime} />
      <button onClick={handleCalculate}>calculate</button>
    </div>
  );
}

export default App;
