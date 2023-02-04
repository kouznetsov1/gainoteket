/* eslint-disable react/jsx-key */
import {
  CategoryProps,
  activity as activityData,
  goal as goalData,
  experience as experienceData,
} from "./data";
import { useState, useEffect } from "react";
import { ActivityProps } from "../../props";

interface Props {
  setParentState: React.Dispatch<React.SetStateAction<ActivityProps[]>>;
}

export const RadioButtons: React.FC<Props> = ({ setParentState }) => {
  const categories: CategoryProps[] = [activityData, goalData, experienceData];

  const [activity, setActivity] = useState(0);
  const [goal, setGoal] = useState(0);
  const [experience, setExperience] = useState(0);

  const radioClick = (e: React.SyntheticEvent<Element, Event>) => {
    const target = e.target as HTMLInputElement;
    if (target.name === "activity") {
      setActivity(parseInt(target.value));
    } else if (target.name === "goal") {
      setGoal(parseInt(target.value));
    } else if (target.name === "experience") {
      setExperience(parseInt(target.value));
    }
  };

  useEffect(() => {
    if (activity !== 0 && goal !== 0 && experience !== 0) {
      setParentState([
        {
          activity: activity,
          goal: goal,
          experience: experience,
        },
      ]);
    }
  }, [activity, goal, experience]);

  return (
    <div>
      {categories.map((category) => (
        <div className="my-8 w-5/6 lg:w-full m-auto">
          <h2 className="text-2xl mb-2">{category.title}</h2>
          <div className="flex flex-wrap justify-center">
            {category.options.map((option, index_option) => (
              <div className="w-full my-2 flex">
                <input
                  className="ml-1"
                  type="radio"
                  name={category.name}
                  value={index_option + 1}
                  id={index_option + "-" + category.title}
                  onInput={(e) => radioClick(e)}
                />
                <div className="mx-2 w-full">
                  <span className="">{option}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
