import { useState, useEffect } from "react";
import { DropDownMenu } from "components";

interface DropdownOption {
  value: string;
  label: string;
}

export const ChosenRecipes: React.FC = () => {
  const [days, setDays] = useState(1);
  const nDays = 14;
  const options: DropdownOption[] = [];
  const categories: string[] = ["Frukost", "Lunch", "Middag"];

  for (let i = 1; i <= nDays; i++) {
    if (i === 1)
      options.push({ value: i.toString(), label: i.toString() + " dag" });
    else options.push({ value: i.toString(), label: i.toString() + " dagar" });
  }

  return (
    <div className="border-2 h-full border-neutral-800 rounded-md p-2 text-white">
      <div>
        <h1 className="text-4xl">Calories & macros</h1>
      </div>
      <div className="flex mt-6 justify-between">
        <span className="text-lg">Välj antal dagar</span>
        <div className="mx-2">
          <DropDownMenu options={options} parentState={setDays} />
        </div>
      </div>
      <div className="text-lg mt-4">
        <div>
          <h2 className="text-2xl mt-6 font-bold">Totalt</h2>
        </div>
        <div className="flex flex-col">
          <span className="my-1">Kalorier: </span>
          <span className="my-1">Protein: </span>
          <span className="my-1">Kolhydrater: </span>
          <span className="my-1">Fett: </span>
        </div>
      </div>
      <div>
        <div>
          {categories.map((category) => {
            return (
              <div className="my-8">
                <div>
                  <h2 className="text-2xl mt-6 font-bold">{category}</h2>
                </div>
                <div>
                  <div className="flex justify-between text-lg">
                    <div className="flex flex-col">
                      <span className="my-1">Kalorier: </span>
                      <span className="my-1">Protein: </span>
                      <span className="my-1">Kolhydrater: </span>
                      <span className="my-1">Fett: </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
