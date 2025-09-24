import { useEffect, useState } from "react";
import { RoundTime } from "./components/TimeInput";
import "./styles/App.css";

function App() {
  const [rounds, setRounds] = useState(1);
  const [roundTimes, setRoundTimes] = useState<string[]>([]);

  // Used for setting state of specific round time
  const timeUpdate = (index: number, newTime: string) => {
    setRoundTimes((prev) => prev.map((t, i) => (i === index ? newTime : t)));
  };
  useEffect(() => {
    setRoundTimes(Array(rounds).fill("00:00"));
  }, [rounds]);

  const Times = roundTimes.map((e, i) => (
    <div key={i}>
      <RoundTime />
    </div>
  ));

  return (
    <>
      <input
        type="number"
        name="Rounds"
        id="RoundNums"
        onChange={(e) => {
          setRounds(Number(e.target.value));
        }}
      />
      {Times}
    </>
  );
}

export default App;
