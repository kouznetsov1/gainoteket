import { AgeProps } from "../../props";
import React, { useState, useEffect } from "react";

interface Props {
  setParentState: React.Dispatch<React.SetStateAction<AgeProps[]>>;
}

export const Forms: React.FC<Props> = ({ setParentState }) => {
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState(0);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const genders = [
    {
      gender: "man",
      value: 1,
    },
    {
      gender: "kvinna",
      value: 2,
    },
  ];

  const lengthAndWeight = ["längd", "vikt"];

  useEffect(() => {
    if (age !== 0 && gender !== 0 && weight !== 0 && height !== 0) {
      setParentState([
        {
          age: age,
          gender: gender,
          weight: weight,
          height: height,
        },
      ]);
    }
  }, [age, gender, weight, height]);

  return (
    <div className="grid m-auto justify-evenly w-5/6">
      <div className="grid grid-cols-3 justify-evenly my-2">
        <span className="col-end-1 w-24">Ålder</span>
        <div className="col-start-2 justify-start flex">
          <input
            type="number"
            className="w-20 text-black"
            onChange={(e) => {
              setAge(Number(e.target.value));
            }}
          ></input>
          <span className="ml-2">(15-80)</span>
        </div>
      </div>
      {/* gender */}
      <div className="my-2">
        <div className="grid grid-cols-3">
          <span className="col-end-1 w-24">Kön</span>
          <div className="col-start-2">
            {genders.map((item, index) => (
              <div className="flex" key={"gender" + index}>
                <input
                  type="radio"
                  name="colored-radio"
                  value="man"
                  id="yellow-radio"
                  className=""
                  onInput={() => setGender(item.value)}
                />
                <span className="mx-2 capitalize">{item.gender}</span>
              </div>
            ))}
          </div>
        </div>
        {/* LW */}
        <div className="">
          {lengthAndWeight.map((item, index) => (
            <div
              key={"lw" + index}
              className="justify-between my-2 grid grid-cols-3"
            >
              <span className="col-end-1 w-24 capitalize">{item}</span>
              <div className="col-start-2">
                <input
                  type="number"
                  className="w-20 text-black"
                  onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                    if (item === "längd") {
                      setHeight(Number(e.target.value));
                    } else if (item === "vikt") {
                      setWeight(Number(e.target.value));
                    }
                  }}
                ></input>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
