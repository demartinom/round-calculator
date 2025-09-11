import { useEffect, useState } from "react";
import { RoundTime } from "./components/timeInput";
import "./styles/App.css";
function App() {
  const [rounds, setRounds] = useState(1);
  const [roundTimes, setRoundTimes] = useState<string[]>([]);

  useEffect(() => {
    setRoundTimes(Array(rounds).fill("00:00"));
  }, [rounds]);

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
    </>
  );
}

export default App;
