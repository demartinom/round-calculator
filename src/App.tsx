import { useEffect, useState } from "react";
import { RoundTime } from "./components/timeInput";
import "./styles/App.css";
function App() {
  const [rounds, setRounds] = useState(1);
  const [roundTimes, setRoundTimes] = useState<string[]>([]);

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
