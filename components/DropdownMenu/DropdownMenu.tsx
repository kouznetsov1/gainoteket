import { useState, useRef, useEffect } from "react";

interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownProps {
  options: DropdownOption[];
  parentState: any;
}

export const DropDownMenu: React.FC<DropdownProps> = ({
  options,
  parentState,
}) => {
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (open) {
        const dropdownEl = document.getElementById("dropdown");
        if (!dropdownEl?.contains(event.target as Node)) {
          setOpen(false);
        }
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open]);

  const handleSelect = (option: DropdownOption) => {
    setSelectedOption(option);
    parentState(option.value);
    setOpen(false);
  };

  return (
    <div className="relative inline-block text-left" id="dropdown">
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-100"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => setOpen(!open)}
        >
          {selectedOption.label}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      {open && (
        <div
          className="absolute right-0 z-10 mt-2 w-56 h-80 overflow-y-auto origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="py-1" role="none">
            {options.map((option, index) => (
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                id={option.value}
                tabIndex={-1}
                onClick={() => {
                  handleSelect(option);
                }}
              >
                {option.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
