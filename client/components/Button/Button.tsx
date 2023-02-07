import Link from "next/link";
import { useState } from "react";

interface ButtonProps {
  url: string;
  text: string;
}

export const Button = (props: ButtonProps): JSX.Element => {
  return (
    <div>
      <Link href={props.url}>
        <button>
          <div className="text-white border-2 py-2 px-6 rounded-full border-green-900 bg-primary hover:shadow-md">
            <span className="uppercase font-bold text-center flex m-auto lg:text-xl">
              {props.text}
            </span>
          </div>
        </button>
      </Link>
    </div>
  );
};

export default Button;
