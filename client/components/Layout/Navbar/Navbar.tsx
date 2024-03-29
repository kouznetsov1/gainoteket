import Link from "next/link";
import { useState } from "react";

interface NavbarProps {
  url: string;
  name: string;
}

interface InterfaceProps {
  setNavMenuOpen: (value: boolean) => void;
}

export const NavBar = (props: InterfaceProps): JSX.Element => {
  // Temporary solution to check if we are on the home page
  var onHomePage: boolean = false;

  return (
    <div className="z-0 w-full border-b-[1px] border-neutral-700">
      <div className="lg:hidden absolute w-full">
        <MobileNavbar setNavMenuOpen={props.setNavMenuOpen} />
      </div>
      <div className="hidden lg:block bg-neutral-900">
        <BigScreenNavbar />
      </div>
    </div>
  );
};

const BigScreenNavbar = (): JSX.Element => {
  var data: NavbarProps[] = [
    { url: "/", name: "Start" },
    { url: "/about", name: "Om oss" },
    { url: "/contact", name: "Kontakt" },
    { url: "/sign-in", name: "Logga in" },
  ];
  return (
    <div className="h-20 flex text-neutral-100">
      <div className="w-5/6 text-center m-auto">
        <div className="flex items-center justify-between">
          <Link href="/">
            <button className="text-3xl font-extrabold uppercase">
              gainoteket
            </button>
          </Link>
          <div className="flex items-center text-center font-semibold text-lg">
            {data.map((item, key) => (
              <Link href={item.url} key={key}>
                <button className="w-32 uppercase font-bold text-center m-auto hover:transition-all hover:duration-300 hover:ease-in-out hover:bg-gradient-to-br hover:bg-primary rounded-md p-3">
                  {item.name}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const MobileNavbar = (props: InterfaceProps): JSX.Element => {
  return (
    <div
      className="flex justify-between mx-auto px-6 py-2 sticky top-0 bg-neutral-800 bg-opacity-60"
      onClick={() => props.setNavMenuOpen(true)}
    >
      <Logo />
      <BurgerMenu />
    </div>
  );
};

function BurgerMenu() {
  return (
    <div className="flex">
      <div className="space-y-2 m-2">
        <span className="block w-8 h-0.5 bg-neutral-200"></span>
        <span className="block w-8 h-0.5 bg-neutral-200"></span>
        <span className="block w-8 h-0.5 bg-neutral-200"></span>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <Link href="/">
      <button className="">
        <div className="border-2 border-primary rounded-lg">
          <p className="mx-3 my-1 text-neutral-200 font-extrabold uppercase">
            Gainoteket
          </p>
        </div>
      </button>
    </Link>
  );
}

export default NavBar;
