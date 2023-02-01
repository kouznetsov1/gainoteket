import { useState, useEffect } from "react";
import { DropDownMenu } from "components";

interface DropdownOption {
  value: string;
  label: string;
}

export const ChosenRecipes: React.FC = () => {
  const [nWeekDays, setNWeekDays] = useState(0);
  const nDays = 7;

  const options: DropdownOption[] = [];

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
      <div className="flex">
        <span className="text-lg">Utspritt på</span>
        <div className="mx-2">
          <DropDownMenu options={options} />
        </div>
      </div>
    </div>
  );
};
