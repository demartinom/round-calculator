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

  const results = roundTotals.map((roundTime, i) => (
    <p key={i}>
      Round {i + 1}: {roundTime}
    </p>
  ));
  return (
    <div className="mt-4 flex flex-col items-center p-2 text-center">
      <p className="text-center text-2xl">How many rounds did you do?</p>
      <input
        type="number"
        name="Rounds"
        id="RoundNums"
        onChange={(e) => {
          setRounds(Number(e.target.value));
        }}
        value={rounds}
        min={1}
        className="text-center text-xl"
      />
      <p className="text-center text-2xl">
        Enter your cumulative time after each round
      </p>
      {Times}
      <p className="text-2xl">Update your rest time</p>
      <RestTime rest={restTime} updateRest={setRestTime} />
      <button className="rounded-2xl bg-gray-400 p-2" onClick={handleCalculate}>
        calculate
      </button>
      <div className="text-start text-xl">{results}</div>
    </div>
  );
}

export default App;
