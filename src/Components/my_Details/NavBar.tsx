import React from "react";

function NavBar({ setNavBarSelection, navBarItems }: any) {
 

  return (
    <div className="hidden p-4 bg-gray-200 rounded-bl-3xl dark:bg-gray-800 h-14 md:hidden lg:flex">
      <div className="flex justify-end w-full text-black cursor-pointer gap-x-10 dark:text-white">
        {navBarItems.map((item:any) => (
          <nav
            key={item.value}
            onClick={() => setNavBarSelection(item.value)}
            role="navigation"
            className="text-sm md:text-base"
          >
            {item.label}
          </nav>
        ))}
      </div>
    </div>
  );
}

export default NavBar;
