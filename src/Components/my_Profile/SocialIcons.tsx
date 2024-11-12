import React from "react";
import { SocialIconsProps } from "../../interface";

function SocialIcons({ data, icon: Icon, title }: SocialIconsProps) {
  return (
    <div className="flex items-center space-x-2 mt-4">
      {/* Icon with a rounded background */}
      <div className="flex items-center justify-center w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full">
        <Icon className="w-6 h-6 p-0.5 text-gray-800 dark:text-yellow-500" />
      </div>
      <div>
        <span className="font-semibold text-xs text-gray-800 dark:text-gray-200">
          {title}
        </span>
        {title !== "LINKEDIN" && (
          <p className="text-gray-600 text-sm dark:text-gray-400">{data}</p>
        )}
        {title === "LINKEDIN" && (
          <>
            <br />
            <a
              href={data}
              target="_blank"
              className="text-gray-600 text-sm dark:text-gray-400"
            >
              {"Lets Connect!"}
            </a>
          </>
        )}
      </div>
    </div>
  );
}

export default SocialIcons;
