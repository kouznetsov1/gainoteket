import { atom } from "jotai";
import { MacroProps, Recipe } from "types/recipes";

export const macroAtom = atom<MacroProps>({
  calories: 0,
  protein: 0,
  carbs: 0,
  fat: 0,
});

export const chosenRecipesAtom = atom<Recipe[]>([]);
