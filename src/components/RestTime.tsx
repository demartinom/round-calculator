import { InputMask } from "@react-input/mask";

type RestTimeProps = {
  rest: string;
  updateRest: (newTime: string) => void;
};

export const RestTime = ({ rest, updateRest }: RestTimeProps) => {
  return (
    <InputMask
      mask="__:__"
      replacement={{ _: /\d/ }}
      placeholder="mm:ss"
      onChange={(e) => updateRest(e.target.value)}
      value={rest}
      className="text-center"
    />
  );
};
