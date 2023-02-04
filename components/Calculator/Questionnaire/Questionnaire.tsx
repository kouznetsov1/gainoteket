import { RadioButtons } from "./RadioButtons";
import { Forms } from "./Forms/Forms";
import { AgeProps, ActivityProps, CalculatorProps } from "../props";
import { useEffect, useState } from "react";

interface Props {
  setParentState: React.Dispatch<React.SetStateAction<CalculatorProps[]>>;
}

export const Questionnaire: React.FC<Props> = ({ setParentState }) => {
  const [age, setAge] = useState<AgeProps[]>([]);
  const [activity, setActivity] = useState<ActivityProps[]>([]);

  useEffect(() => {
    const ageState = age[0];
    const activityState = activity[0];
    const stateSpread = { ...ageState, ...activityState };
    for (const key in stateSpread) {
      if (
        stateSpread[key as keyof AgeProps | keyof ActivityProps] ===
          undefined ||
        stateSpread[key as keyof AgeProps | keyof ActivityProps] === 0
      ) {
        return;
      } else if (activityState === undefined || ageState === undefined) {
        return;
      }
    }

    setParentState([stateSpread]);
  }, [age, activity]);

  return (
    <div>
      <div>
        <Forms setParentState={setAge} />
      </div>
      <div className="my-6 flex m-auto lg:w-1/2 xl:w-1/3">
        <RadioButtons setParentState={setActivity} />
      </div>
    </div>
  );
};
