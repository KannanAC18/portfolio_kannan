import React from "react";
import ProfileImage from "../../../src/assets/pictures/profileImage.jpg";
import SocialInfo from "./SocialInfo";

function MyProfile() {
  return (
    <div className="flex-col items-center hidden h-full p-10 md:flex ">
      {/* Profile Card */}
      <div className="w-full h-full p-6 bg-white border border-gray-500 rounded-lg dark:bg-gray-900 dark:border-gray-700">
        <div>
          <div className="flex flex-col items-center">
            <img
              src={ProfileImage}
              alt="Profile"
              className="object-cover w-32 h-32 mb-4 border-4 rounded-full dark:border-yellow-500"
            />
            <p className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
              Kannan AC
            </p>
            <p className="pl-2 pr-2 mt-2 text-sm font-medium text-gray-800 bg-gray-200 border border-gray-300 rounded dark:text-gray-200 dark:bg-gray-700 dark:border-gray-600">
              {" "}
              FrontEnd Developer
            </p>
          </div>
        </div>
        <hr className="w-full mt-10 border-t border-black dark:border-gray-500" />
        <SocialInfo />
      </div>
    </div>
  );
}

export default MyProfile;
