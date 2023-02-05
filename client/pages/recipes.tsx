import { Stepper, Button } from "@components";
import { Recipes, ChosenRecipes } from "@components";

export default function RecipesPage() {
  return (
    <div className="min-h-[calc(100vh-160px)] bg-neutral-900 border-2 border-neutral-900">
      <div className="mt-12 lg:w-11/12 m-auto">
        <div className="flex justify-center">
          <Stepper steps={3} currentStep={2} />
        </div>
        <div className="flex flex-col lg:flex-row lg:mx-8 mx-4">
          <div className="lg:w-2/3 lg:mx-4">
            <Recipes />
          </div>
          <div className="rounded-md lg:w-1/3 h-full lg:mx-4">
            <div>
              <ChosenRecipes />
            </div>
            <div className="my-6 flex justify-center">
              <Button text="gå vidare" url="/" inverted={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
