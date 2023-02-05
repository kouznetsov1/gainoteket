import Link from "next/link";
import { useState } from "react";

interface InterfaceProps {
  setNavMenuOpen: (value: boolean) => void;
}

export const MobileNavBar = (props: InterfaceProps): JSX.Element => {
  const links = [
    { url: "/", name: "Start" },
    { url: "/about", name: "Om oss" },
    { url: "/contact", name: "Kontakt" },
    { url: "/login", name: "Logga in / Registrera" },
  ];
  return (
    <div className="bg-black min-h-screen">
      <div className="text-white">
        <div className="flex flex-col text-4xl">
          <div>
            <h1 className="uppercase text-center mt-8 mb-12">gainoteket</h1>
          </div>
          <div className="flex flex-col">
            {links.map((item) => (
              <div className="m-2 border-y-2 border-neutral-600">
                <div className="m-2">
                  <a href={item.url}>{item.name}</a>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-24 w-3/4 text-center justify-center flex m-auto">
            <span className="text-lg">
              Undrar du över något eller har du förslag på förbättringar?
              Kontakta oss på{" "}
              <a href="mailto:kouznetsov1996@gmail.com" className="underline">
                vår mail!
              </a>
            </span>
          </div>
          <div
            className="flex justify-center mt-20 w-20 h-20 border-2 rounded-full text-center m-auto"
            onClick={() => props.setNavMenuOpen(false)}
          >
            <div className="self-center mb-1">
              <span className="">X</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavBar;
