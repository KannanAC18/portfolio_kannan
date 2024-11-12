import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";
import MyProfile from "../Components/my_Profile/MyProfile";
import MasterCard from "../Components/my_Details/MasterCard";
import { FaMoon } from "react-icons/fa";

function MainScreen() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={`${theme === "dark" && "dark"}`}>
      <div className="relative flex h-screen dark:bg-gray-950">
        <button
          className="absolute z-20 flex items-center justify-center w-12 h-12 transition-colors bg-gray-800 rounded-full bottom-10 right-10 hover:bg-gray-700"
          onClick={toggleTheme}
        >
          <FaMoon className="w-6 h-6 text-white" />
        </button>

        {/*TODO*/}
        <MyProfile />
        <div className="z-10 w-screen p-6">
          <MasterCard />
        </div>
      </div>
    </div>
  );
}

export default MainScreen;
