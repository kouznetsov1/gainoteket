/* eslint-disable react/jsx-key */
import { breakfastRecipes, lunchRecipes, dinnerRecipes } from "./data";
import { Carousel } from "./Carousel";
import { useState, useEffect } from "react";

export const Recipes: React.FC = () => {
  const categories: string[] = ["Frukost", "Lunch", "Middag"];
  const [visibleRecipes, setVisibleRecipes] = useState(8);

  return (
    <div className="p-2 border-2 border-neutral-800 rounded-md">
      <div>
        <h1 className="text-white text-4xl">Recipes</h1>
      </div>
      <div>
        {categories.map((category) => {
          return (
            <div className="my-4">
              <div>
                <h2 className="text-white text-2xl mt-6">{category}</h2>
              </div>
              <div>
                {category === "Frukost" && (
                  <Carousel
                    recipes={breakfastRecipes}
                    numberOfVisibleRecipes={visibleRecipes}
                  />
                )}
                {category === "Lunch" && (
                  <Carousel
                    recipes={lunchRecipes}
                    numberOfVisibleRecipes={visibleRecipes}
                  />
                )}
                {category === "Middag" && (
                  <Carousel
                    recipes={dinnerRecipes}
                    numberOfVisibleRecipes={visibleRecipes}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
