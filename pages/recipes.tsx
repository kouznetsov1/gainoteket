import { Stepper, Button } from "@components";
import { Recipes, ChosenRecipes } from "@components";

export default function RecipesPage() {
  return (
    <div className="min-h-[calc(100vh-160px)] bg-neutral-900 border-2 border-neutral-900">
      <div className="my-12 lg:w-11/12 m-auto">
        <div className="flex justify-center">
          <Stepper steps={3} currentStep={2} />
        </div>
        <div className="flex flex-col lg:flex-row lg:mx-8 mx-4">
          <div className="lg:w-2/3 lg:mr-8">
            <Recipes />
          </div>
          <div className="rounded-md lg:w-1/3 h-full">
            <ChosenRecipes />
          </div>
        </div>
      </div>
    </div>
  );
}
