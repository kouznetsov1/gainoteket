import { useAtom } from "jotai";
import { macroAtom } from "types/atoms";
import { Button } from "@components";

interface Props {
  setFinishCalculator: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Results: React.FC<Props> = ({ setFinishCalculator }) => {
  const [macros] = useAtom(macroAtom);
  return (
    <div>
      <div className="w-full text-center">
        <div>
          <h1 className="text-3xl my-4">Resultat</h1>
        </div>
        <div className="grid m-auto text-lg">
          <span className="my-1">
            Ditt dagliga intag av kalorier är{" "}
            <span className="text-secondary">{macros.calories} </span>
            med följande näringsvärden:
          </span>
          <span className="my-1">
            Protein: <span className="text-secondary">{macros.protein} </span>
          </span>
          <span>
            Kolhydrater: <span className="text-secondary">{macros.carbs} </span>
          </span>
          <span className="my-1">
            Fett: <span className="text-secondary">{macros.fat} </span>
          </span>
        </div>
      </div>
      <div>
        <div className="flex m-auto justify-center space-x-4 my-12">
          <div onClick={() => setFinishCalculator(false)}>
            <Button text="Tillbaka" url="" inverted={true} />
          </div>
          <div>
            <Button text="Gå vidare" url="/recipes" inverted={false} />
          </div>
        </div>
      </div>
    </div>
  );
};
