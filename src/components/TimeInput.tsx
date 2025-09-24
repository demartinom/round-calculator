import { InputMask } from "@react-input/mask";

type RoundTimeProps = {
  updateTime: (index: number, newTime: string) => void;
  time: string;
  index: number;
};

export const RoundTime = ({ updateTime, time, index }: RoundTimeProps) => {
  return (
    <InputMask
      mask="__:__"
      replacement={{ _: /\d/ }}
      placeholder="mm:ss"
      onChange={(e) => updateTime(index, e.target.value)}
      value={time}
    />
  );
};
