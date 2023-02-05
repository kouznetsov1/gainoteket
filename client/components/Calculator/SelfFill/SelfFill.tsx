import { useEffect, useState } from "react";
import { data } from "./data";
import { useAtom } from "jotai";
import { macroAtom } from "types/atoms";

export const SelfFill: React.FC = () => {
  const [macros, setMacros] = useAtom(macroAtom);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    const value: number = Number(e.target.value);
    if (name === "protein") {
      setMacros({ ...macros, protein: value });
    } else if (name === "fat") {
      setMacros({ ...macros, fat: value });
    } else if (name === "carbs") {
      setMacros({ ...macros, carbs: value });
    } else if (name === "calories") {
      setMacros({ ...macros, calories: value });
    }
  };

  useEffect(() => {
    if (
      macros.protein !== 0 &&
      macros.fat !== 0 &&
      macros.carbs !== 0 &&
      macros.calories !== 0
    ) {
      // Set global state
      setMacros(macros);
    }
  }, [macros]);

  return (
    <div className="w-1/2 m-auto my-12">
      {data.map((item) => (
        <div className="grid grid-cols-2 justify-between my-2">
          <span className="col-end-1 w-26">{item.text}</span>
          <div className="col-start-3 col-span-2">
            <input
              type="number"
              className="w-20 text-black"
              onChange={(e) => handleChange(e, item.name)}
              required
            />
          </div>
        </div>
      ))}
    </div>
  );
};
