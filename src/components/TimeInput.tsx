import { InputMask } from "@react-input/mask";

type RoundTimeProps = {
  updateTime: (index: number, newTime: string) => void;
  index: number;
};

export const RoundTime = ({ updateTime, index }: RoundTimeProps) => {
  return (
    <InputMask
      mask="__:__"
      replacement={{ _: /\d/ }}
      placeholder="mm:ss"
      onChange={(e) => updateTime(index, e.target.value)}
      className="text-center text-xl"
      type="tel"
    />
  );
};
