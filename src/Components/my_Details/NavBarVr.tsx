import React, { memo, useContext, useState } from "react";
import MenuIcon from "../../assets/svg/SVG components/MenuIcon";
import CloseIcon from "../../assets/svg/SVG components/CloseIcon";
import { ThemeContext } from "../../context/ThemeContextProvider";

function NavBarVr({ setNavBarSelection, navBarItems }: any) {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const { theme } = useContext(ThemeContext);

  const menuBackground =
    theme === "dark" ? "bg-black text-white" : "bg-white text-black";

  const toggleNavbar = () => {
    setToggleMenu(!toggleMenu);
  };

  console.log("navbar", navBarItems);

  return (
    <div className="relative flex items-center">
      {/* Sidebar menu */}
      <div
        className={`fixed top-0 right-0 w-64 h-full shadow-lg transition-transform transform duration-500 z-20 ${menuBackground} ${
          toggleMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-center h-full">
          <div className="flex flex-col items-start justify-center h-full p-6 space-y-4">
            {navBarItems.map((item: any, index: number) => (
              <button
                key={index}
                onClick={() => {
                  setNavBarSelection(item.value);
                  toggleNavbar();
                }}
                className="text-xl font-bold hover:text-gray-400"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Toggle button */}
      <div className="z-30 p-4 top-4 left-4">
        {toggleMenu ? (
          <CloseIcon
            width={26}
            height={26}
            color={theme === "dark" ? "white" : "black"}
            onClick={toggleNavbar}
            className=""
          />
        ) : (
          <MenuIcon
            width={26}
            height={26}
            color={theme === "dark" ? "white" : "black"}
            onClick={toggleNavbar}
          />
        )}
      </div>
    </div>
  );
}

export default memo(NavBarVr);
