export interface Recipe {
  name: string;
  ingredients: Ingredient[];
  image: string;
  kcal: number;
  protein: number;
  fat: number;
  carbs: number;
}

export interface Ingredient {
  name: string;
  amount: number;
  unit: string;
}
