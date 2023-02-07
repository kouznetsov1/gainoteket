import { useState, useEffect } from "react";
import { DropDownMenu, Button } from "components";
import { macroAtom, chosenRecipesAtom } from "types/atoms";
import { MacroProps } from "types/recipes";
import { useAtom } from "jotai";
import { calculateMacros, AllMacros } from "./helpers";

interface DropdownOption {
  value: string;
  label: string;
}

export const ChosenRecipes: React.FC = () => {
  const [days, setDays] = useState(1);
  const nDays = 14;
  const options: DropdownOption[] = [];
  const categories: string[] = ["Frukost", "Lunch", "Middag"];
  const [macros] = useAtom(macroAtom);
  const [allMacros, setAllMacros] = useState<AllMacros>();
  const [chosenRecipes] = useAtom(chosenRecipesAtom);

  useEffect(() => {
    setAllMacros(calculateMacros(chosenRecipes));
  }, [chosenRecipes]);

  for (let i = 1; i <= nDays; i++) {
    if (i === 1)
      options.push({ value: i.toString(), label: i.toString() + " dag" });
    else options.push({ value: i.toString(), label: i.toString() + " dagar" });
  }

  if (!allMacros) return <div>Loading...</div>;

  return (
    <div className="border-2 h-full border-neutral-900 rounded-xl p-4 text-neutral-200 text-lg shadow-xl bg-neutral-800 mb-8">
      <div>
        <h1 className="text-3xl font-semibold">Calories & macros</h1>
      </div>
      <div className="flex mt-6 justify-between">
        <span className="text-lg">Välj antal dagar</span>
        <div className="mx-2">
          <DropDownMenu options={options} parentState={setDays} />
        </div>
      </div>
      <div className="mt-2">
        <div>
          <h2 className="text-2xl mt-6 font-bold">Totalt</h2>
        </div>
        <div className="flex flex-col">
          <div className="my-1">
            {renderTotalMacros(allMacros?.totalMacros, macros, days)}
          </div>
        </div>
      </div>
      <div>
        <div>
          {Object.entries(allMacros)
            .slice(1)
            .map(([key, value]) => {
              return (
                <div>
                  <div>
                    <h2 className="text-2xl mt-6 font-bold capitalize">
                      {key.replace("Macros", "")}
                    </h2>
                  </div>
                  <div className="my-1">
                    {renderCategoricalMacros(value, days)}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="mt-6 mb-4 flex justify-center">
        <Button text="gå vidare" url="/" />
      </div>
    </div>
  );
};

const renderTotalMacros = (
  totalMacros: MacroProps,
  macros: MacroProps,
  days: number
) => {
  return (
    <div className="flex flex-col w-full">
      {Object.entries(totalMacros).map(([key, value]) => {
        return (
          <div className="flex flex-row justify-between my-1">
            <span className="capitalize">{key}:</span>
            <div>
              <span
                style={
                  value / days >= macros[key as keyof MacroProps]
                    ? { color: "rgb(34 197 94)" }
                    : { color: "red" }
                }
              >
                {Math.round(value / days)}
              </span>
              <span className="text-secondary">
                {" "}
                / {macros[key as keyof MacroProps]}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const renderCategoricalMacros = (macros: MacroProps, days: number) => {
  return (
    <div className="flex flex-col">
      {Object.entries(macros).map(([key, value]) => {
        return (
          <div className="flex flex-row justify-between my-1">
            <span className="capitalize">{key}:</span>
            <div>
              <span className="text-secondary">{Math.round(value / days)}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
