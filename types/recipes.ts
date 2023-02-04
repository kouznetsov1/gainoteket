export interface MacroProps {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

export interface Recipe {
  name: string;
  ingredients: Ingredient[];
  image: string;
  kcal: number;
  protein: number;
  fat: number;
  carbs: number;
  category: number;
}

export interface Ingredient {
  name: string;
  amount: number;
  unit: string;
}
