import { Recipe } from "../props";

const lunchRecipe: Recipe = {
  name: "Kyckling med ris",
  ingredients: [
    {
      name: "Kycklingfilé",
      amount: 1,
      unit: "st",
    },
    {
      name: "Ris",
      amount: 1,
      unit: "dl",
    },
  ],
  image:
    "https://www.budgetbytes.com/wp-content/uploads/2022/05/Chicken-and-Rice-close.jpg",
  kcal: 1000,
  protein: 100,
  fat: 100,
  carbs: 100,
};

const breakfastRecipe: Recipe = {
  name: "Ägg och bacon",
  ingredients: [
    {
      name: "Ägg",
      amount: 2,
      unit: "st",
    },
    {
      name: "Bacon",
      amount: 2,
      unit: "skivor",
    },
  ],
  image:
    "https://assets.epicurious.com/photos/55ad19f02165ea17798702d0/master/pass/EP_15072015_TOMATOTOAST_019.jpg",
  kcal: 1000,
  protein: 100,
  fat: 100,
  carbs: 100,
};

const dinnerRecipe: Recipe = {
  name: "Pasta med kyckling",
  ingredients: [
    {
      name: "Pasta",
      amount: 1,
      unit: "paket",
    },
    {
      name: "Kycklingfilé",
      amount: 1,
      unit: "st",
    },
  ],
  image:
    "https://iamhomesteader.com/wp-content/uploads/2022/04/tuscan-chicken.jpg",
  kcal: 1000,
  protein: 100,
  fat: 100,
  carbs: 100,
};

// Add recipe 8 times for testing
export const breakfastRecipes = new Array<Recipe>(8).fill(breakfastRecipe);
export const lunchRecipes = new Array<Recipe>(8).fill(lunchRecipe);
export const dinnerRecipes = new Array<Recipe>(8).fill(dinnerRecipe);
