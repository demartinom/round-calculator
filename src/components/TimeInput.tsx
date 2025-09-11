import { InputMask } from "@react-input/mask";
import { useState } from "react";

export const RoundTime = () => {
  const [time, setTime] = useState("00:00");
  return (
    <InputMask
      mask="__:__"
      replacement={{ _: /\d/ }}
      placeholder="mm:ss"
      onChange={(e) => setTime(e.target.value)}
    />
  );
};
