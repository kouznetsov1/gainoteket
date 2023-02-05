import { Recipe as RecipeProps } from "types/recipes";
import { useEffect, useState } from "react";
import { chosenRecipesAtom } from "types/atoms";
import { useAtom } from "jotai";

interface Props {
  recipe: RecipeProps;
}

export const RecipeCard: React.FC<Props> = ({ recipe }) => {
  const [counter, setCounter] = useState(0);
  const [chosenRecipes, setChosenRecipes] = useAtom(chosenRecipesAtom);

  // Reset chosen recipes when component unmounts
  useEffect(() => {
    setChosenRecipes([]);
  }, []);

  const addRecipe = () => {
    setCounter(counter + 1);
    setChosenRecipes([...chosenRecipes, { ...recipe }]);
  };

  const deleteRecipe = () => {
    setCounter(counter - 1);
    const indexToDelete = chosenRecipes.findIndex(
      (r) => r.name === recipe.name
    );
    setChosenRecipes((chosenRecipes) => {
      return chosenRecipes.filter((r, i) => i !== indexToDelete);
    });
  };

  return (
    <div className="m-2 my-4">
      <div className="text-white">
        <img
          className="rounded-2xl"
          src={recipe.image}
          alt={recipe.name}
          draggable={false}
        />
        <div className="mx-2">
          <h1 className="text-xl font-medium my-2">{recipe.name}</h1>
          <div className="whitespace-pre">
            <div className="flex justify-between">
              <div>
                <span>Kalorier: </span>
              </div>
              <div>
                <span className="text-secondary">{recipe.kcal}</span>
              </div>
              {"\n"}
            </div>
            <div className="flex justify-between">
              <div>
                <span>Protein: </span>
              </div>
              <div>
                <span className="text-secondary">{recipe.protein}</span>
              </div>
              {"\n"}
            </div>
            <div className="flex justify-between">
              <div>
                <span>Kolhydrater: </span>
              </div>
              <div>
                <span className="text-secondary">{recipe.carbs}</span>
              </div>
              {"\n"}
            </div>
            <div className="flex justify-between">
              <div>
                <span>Fett: </span>
              </div>
              <div>
                <span className="text-secondary">{recipe.fat}</span>
              </div>
              {"\n"}
            </div>
          </div>
          <div className="text-center my-4 flex m-auto justify-center">
            <button
              className="bg-black text-secondary font-bold rounded-full w-8 h-8"
              style={{ visibility: counter === 0 ? "hidden" : "visible" }}
              onClick={() => deleteRecipe()}
            >
              -
            </button>
            <p className="mx-4 my-1">{counter}</p>
            <button
              className="bg-primary text-white font-bold rounded-full w-8 h-8"
              onClick={() => addRecipe()}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
