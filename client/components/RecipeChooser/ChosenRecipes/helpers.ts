import { PrimitiveAtom } from "jotai";
import { Recipe, MacroProps } from "types/recipes";

export interface AllMacros {
  totalMacros: MacroProps;
  breakfastMacros: MacroProps;
  lunchMacros: MacroProps;
  dinnerMacros: MacroProps;
}

export const calculateMacros = (recipes: any): AllMacros => {
  const allMacros = {
    totalMacros: {
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
    },
    breakfastMacros: {
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
    },
    lunchMacros: {
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
    },
    dinnerMacros: {
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
    },
  };

  if (!recipes.length) return allMacros;

  for (const recipe of recipes) {
    allMacros.totalMacros.calories += recipe.kcal;
    allMacros.totalMacros.protein += recipe.protein;
    allMacros.totalMacros.carbs += recipe.carbs;
    allMacros.totalMacros.fat += recipe.fat;

    if (recipe.category === 0) {
      allMacros.breakfastMacros.calories += recipe.kcal;
      allMacros.breakfastMacros.protein += recipe.protein;
      allMacros.breakfastMacros.carbs += recipe.carbs;
      allMacros.breakfastMacros.fat += recipe.fat;
    } else if (recipe.category === 1) {
      allMacros.lunchMacros.calories += recipe.kcal;
      allMacros.lunchMacros.protein += recipe.protein;
      allMacros.lunchMacros.carbs += recipe.carbs;
      allMacros.lunchMacros.fat += recipe.fat;
    } else if (recipe.category === 2) {
      allMacros.dinnerMacros.calories += recipe.kcal;
      allMacros.dinnerMacros.protein += recipe.protein;
      allMacros.dinnerMacros.carbs += recipe.carbs;
      allMacros.dinnerMacros.fat += recipe.fat;
    }
  }
  return allMacros;
};
