import { Recipe as RecipeProps } from "types/recipes";
import { RecipeCard } from "./RecipeCard";
import { useState, useEffect } from "react";

interface Props {
  recipes: RecipeProps[];
  numberOfVisibleRecipes: number;
}

export const Carousel: React.FC<Props> = ({
  recipes,
  numberOfVisibleRecipes,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleRecipes, setVisibleRecipes] = useState<RecipeProps[]>(
    recipes.slice(currentIndex, numberOfVisibleRecipes)
  );

  useEffect(() => {
    setVisibleRecipes(recipes.slice(currentIndex, numberOfVisibleRecipes));
  }, [currentIndex, numberOfVisibleRecipes]);

  const nextSlide = () => {
    setCurrentIndex(
      currentIndex + 4 === recipes.length - 1 ? currentIndex : currentIndex + 1
    );
    setVisibleRecipes(
      recipes.slice(currentIndex, currentIndex + numberOfVisibleRecipes)
    );
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? 0 : currentIndex - 1);
  };

  return (
    <div className="w-full flex flex-col my-4">
      <div className="w-full flex overflow-auto">
        <div className="flex">
          {visibleRecipes.map((recipe, index) => (
            <div
              key={index}
              className="border-2 border-neutral-800 rounded-md m-2 my-6 w-52"
            >
              <RecipeCard recipe={recipe} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
