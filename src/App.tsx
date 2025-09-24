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

  // Updates length of rounds based on user input
  useEffect(() => {
    setRoundTimes(Array(rounds).fill("00:00"));
  }, [rounds]);

  // Entry for rounds. Length decided by rounds state
  const Times = roundTimes.map((e, i) => (
    <div key={i}>
      <RoundTime updateTime={timeUpdate} time={e} index={i} />
    </div>
  ));
  return (
    <>
      {/* Setter for number of rounds */}
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
