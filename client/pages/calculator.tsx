import { Stepper, Button, Calculator } from "@components";

export default function CalculatorPage() {
  return (
    <div className="min-h-[calc(100vh-160px)] text-white bg-neutral-900 border-2 border-neutral-900">
      <div className="">
        <div className="flex justify-center mt-12">
          <Stepper steps={3} currentStep={1} />
        </div>
        <div className="flex justify-center mb-12">
          <Calculator />
        </div>
      </div>
    </div>
  );
}
