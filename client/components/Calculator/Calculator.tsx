// Modules
import { useEffect, useState } from "react";
import { useAtom } from "jotai";

// Components
import { CalculatorButtons } from "./CalculatorButtons";
import { Questionnaire } from "./Questionnaire";
import { SelfFill } from "./SelfFill";
import { Button } from "@components";
import { Results } from "./Results";
import { calculateMacros } from "./calculateMacros";

// Props and state
import { MacroProps } from "types/recipes";
import { macroAtom } from "types/atoms";
import { CalculatorProps } from "types/user";

export const Calculator: React.FC = () => {
  const [useCalculator, setUseCalculator] = useState(true);
  const [finishCalculator, setFinishCalculator] = useState(false);
  const [information, setInformation] = useState<CalculatorProps[]>([]);
  const [macros, setMacros] = useAtom(macroAtom);

  useEffect(() => {
    if (information.length > 1) {
      console.log("infromation", information);
      setMacros(calculateMacros(information[0]));
    }
  }, [information]);

  return (
    <div>
      {finishCalculator ? (
        <Results setFinishCalculator={setFinishCalculator} />
      ) : (
        <div>
          <h1 className="text-2xl text-center m-auto w-5/6">
            Steg 1. Skriv in dina mål och räkna ut ditt intag för en dag.
          </h1>
          <div>
            <CalculatorButtons
              setUseCalculator={setUseCalculator}
              useCalculator={useCalculator}
            />
          </div>
          {useCalculator ? (
            <div>
              <Questionnaire setParentState={setInformation} />
            </div>
          ) : (
            <div>
              <SelfFill />
            </div>
          )}
          <div
            onClick={() => setFinishCalculator(true)}
            className="flex m-auto justify-center"
          >
            <Button text="Nästa" url="" inverted={false} />
          </div>
        </div>
      )}
    </div>
  );
};
