/* eslint-disable react/jsx-key */
import { breakfastRecipes, lunchRecipes, dinnerRecipes } from "./data";
import { useState, useEffect } from "react";
import { RecipeCard } from "./RecipeCard";

export const Recipes: React.FC = () => {
  const categories: string[] = ["Frukost", "Lunch", "Middag"];

  return (
    <div className="">
      {categories.map((category) => {
        return (
          <div className="mb-8 border-neutral-800 border-2 rounded-xl bg-neutral-800">
            <div>
              <h2 className="text-neutral-200 text-3xl mt-6 mx-4 -mb-6 font-semibold">
                {category}
              </h2>
            </div>
            <div>
              <div className="w-full flex flex-col my-4">
                <div className="w-full flex overflow-auto">
                  <div className="flex">
                    {category === "Frukost" &&
                      breakfastRecipes.map((recipe, index) => (
                        <div className="bg-neutral-800 rounded-xl mx-3 my-8 w-56 shadow-[0_0_15px_rgba(0,0,0,0.25)]">
                          <RecipeCard recipe={recipe} />
                        </div>
                      ))}
                    {category === "Lunch" &&
                      lunchRecipes.map((recipe, index) => (
                        <div className="bg-neutral-800 rounded-xl mx-3 my-8 w-56 shadow-[0_0_15px_rgba(0,0,0,0.25)]">
                          <RecipeCard recipe={recipe} />
                        </div>
                      ))}
                    {category === "Middag" &&
                      dinnerRecipes.map((recipe, index) => (
                        <div className="bg-neutral-800 rounded-xl mx-3 my-8 w-56 shadow-[0_0_15px_rgba(0,0,0,0.25)]">
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
  );
};
