import { Recipe as RecipeProps } from "./props";
import { RecipeCard } from "./RecipeCard";
import { useState, useEffect } from "react";

interface Props {
  recipes: RecipeProps[];
  show: number;
}

export const Carousel: React.FC<Props> = ({ recipes, show }) => {
  const [carousel, setCarousel] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setCarousel(document.getElementById("carousel"));
  }, []);

  const handleOnDown = (clientX: number) => {
    if (carousel) carousel.dataset.mouseDownAt = clientX.toString();
  };

  const handleOnUp = () => {
    if (!carousel) return;
    console.log(carousel);
    carousel.dataset.mouseDownAt = "0";
    carousel.dataset.prevPercentage = carousel.dataset.percentage;
  };

  const handleOnMove = (clientX: number) => {
    if (!carousel) return;
    if (carousel.dataset.mouseDownAt === "0") return;

    const mouseDelta: number =
      parseFloat(carousel.dataset.mouseDownAt!) - clientX;
    const maxDelta: number = window.innerWidth / 2;

    const percentage: number = (mouseDelta / maxDelta) * -100,
      nextPercentageUnconstrained =
        parseFloat(carousel.dataset.prevPercentage!) + percentage,
      nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    carousel.dataset.percentage = nextPercentage.toString();

    carousel.animate(
      {
        transform: `translateX(${nextPercentage}%)`,
      },
      { duration: 1200, fill: "forwards" }
    );

    for (const card of Array.from(
      carousel.getElementsByClassName("carousel-item")
    )) {
      card.animate(
        {
          objectPosition: `${100 + nextPercentage}% center`,
        },
        { duration: 1200, fill: "forwards" }
      );
    }
  };

  window.onmousedown = (e) => handleOnDown(e.clientX);
  window.ontouchstart = (e) => handleOnDown(e.touches[0].clientX);

  window.onmouseup = () => handleOnUp();
  window.ontouchend = () => handleOnUp();

  window.onmousemove = (e) => handleOnMove(e.clientX);
  window.ontouchmove = (e) => handleOnMove(e.touches[0].clientX);

  return (
    <div className="overflow-hidden w-full h-full border-2 flex">
      <div
        className="flex"
        data-mouse-down-at="0"
        id="carousel"
        data-prev-percentage="0"
      >
        {recipes.map((recipe, index) => (
          <div
            key={index}
            className="border-2 w-64 carousel-item"
            /*style={{ width: `${100 / show}%` }}*/
          >
            <p className="text-white text-center">{index}</p>
            {/*<h1 className="text-white">{index}</h1>*/}
            <RecipeCard recipe={recipe} />
          </div>
        ))}
      </div>
    </div>
  );
};
