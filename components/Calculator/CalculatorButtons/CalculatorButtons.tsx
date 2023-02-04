import React from "react";

interface Props {
  setUseCalculator: React.Dispatch<React.SetStateAction<boolean>>;
  useCalculator: boolean;
}

export const CalculatorButtons: React.FC<Props> = ({
  setUseCalculator,
  useCalculator,
}) => {
  return (
    <div>
      <div className="w-96 flex justify-evenly m-auto my-12">
        {useCalculator ? (
          <button
            className="bg-primary text-white py-2 px-4 rounded-md text-2xl border-2 border-primary"
            onClick={() => setUseCalculator(true)}
          >
            Kalkylator
          </button>
        ) : (
          <button
            className="text-white py-2 px-4 rounded-md text-2xl border-2 border-primary"
            onClick={() => setUseCalculator(true)}
          >
            Kalkylator
          </button>
        )}
        {useCalculator ? (
          <button
            className="text-white border-2 border-primary py-2 px-4 rounded-md text-2xl"
            onClick={() => setUseCalculator(false)}
          >
            Fyll i själv
          </button>
        ) : (
          <button
            className="bg-primary text-white py-2 px-4 rounded-md text-2xl border-2 border-primary"
            onClick={() => setUseCalculator(false)}
          >
            Fyll i själv
          </button>
        )}
      </div>
    </div>
  );
};
