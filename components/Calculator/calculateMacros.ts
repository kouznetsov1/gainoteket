import { CalculatorProps } from "types/user";
import { MacroProps } from "types/recipes";

export function calculateMacros(props: CalculatorProps) {
  var bmr: number;
  const { age, weight, height, activity, goal, experience } = props;

  if (props.gender === 1) {
    bmr = calculateMenBMR(props);
  } else {
    bmr = calculateWomenBMR(props);
  }
  var tdee: number;

  if (activity === 1) {
    tdee = bmr * 1.15;
  } else if (activity === 2) {
    tdee = bmr * 1.35;
  } else if (activity === 3) {
    tdee = bmr * 1.55;
  } else {
    tdee = bmr * 1.75;
  }

  // Weight loss
  if (goal === 1) {
    tdee = tdee * 0.85;
  }
  // Bulk
  else if (goal === 3) {
    tdee = tdee * 1.15;
  }

  tdee = Math.floor(tdee);
  var calories: number = tdee;

  // Set protein
  const protein: number = Math.floor(weight * 2.2);
  calories = calories - protein * 4;

  // Set fat
  const fat: number = Math.floor((tdee * 0.25) / 9);
  calories = calories - fat * 9;

  // Set carbs
  const carbs: number = Math.floor(calories / 4);

  const macros: MacroProps = {
    calories: tdee,
    protein: protein,
    carbs: carbs,
    fat: fat,
  };

  return macros;
}

function calculateMenBMR(props: CalculatorProps): number {
  const { age, weight, height } = props;

  const bmr: number = 66 + 13.7 * weight + 5 * height - 6.8 * age;
  return bmr;
}

function calculateWomenBMR(props: CalculatorProps): number {
  const { age, weight, height } = props;

  const bmr: number = 655 + 9.6 * weight + 1.8 * height - 4.7 * age;
  return bmr;
}
