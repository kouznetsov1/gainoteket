/* eslint-disable react/jsx-key */
import { breakfastRecipes, lunchRecipes, dinnerRecipes } from "./data";
import { useState, useEffect } from "react";
import { RecipeCard } from "./RecipeCard";

export const Recipes: React.FC = () => {
  const categories: string[] = ["Frukost", "Lunch", "Middag"];

  return (
    <div>
      <div>
        <h1 className="text-white text-4xl">Recipes</h1>
      </div>
      <div>
        {categories.map((category) => {
          return (
            <div className="my-8 border-2 border-neutral-800 rounded-md">
              <div>
                <h2 className="text-white text-3xl mt-6 mx-4 -mb-6">
                  {category}
                </h2>
              </div>
              <div>
                <div className="w-full flex flex-col my-4">
                  <div className="w-full flex overflow-auto">
                    <div className="flex">
                      {category === "Frukost" &&
                        breakfastRecipes.map((recipe, index) => (
                          <div className="border-2 border-neutral-800 rounded-md m-2 my-6 w-52">
                            <RecipeCard recipe={recipe} />
                          </div>
                        ))}
                      {category === "Lunch" &&
                        lunchRecipes.map((recipe, index) => (
                          <div className="border-2 border-neutral-800 rounded-md m-2 my-6 w-52">
                            <RecipeCard recipe={recipe} />
                          </div>
                        ))}
                      {category === "Middag" &&
                        dinnerRecipes.map((recipe, index) => (
                          <div className="border-2 border-neutral-800 rounded-md m-2 my-6 w-52">
                            <RecipeCard recipe={recipe} />
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
