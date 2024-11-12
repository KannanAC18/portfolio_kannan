import React from "react";
import ReactSVG from "../../../assets/svg/SVG components/ReactSVG";
import JavaScriptSVG from "../../../assets/svg/SVG components/JavaScriptSVG";
import TypescriptSVG from "../../../assets/svg/SVG components/TypescriptSVG";

const technologies = [
  {
    name: "React",
    svg: (
      <ReactSVG
        height={80}
        width={80}
        className="group-hover:text-[#61DAFB] text-yellow-500 transition-colors duration-0"
      />
    ),
  },
  {
    name: "React Native",
    svg: (
      <ReactSVG
        height={80}
        width={80}
        className="group-hover:text-[#61DAFB] text-yellow-500 transition-colors duration-0"
      />
    ),
  },
  {
    name: "JavaScript",
    svg: (
      <JavaScriptSVG
        height={80}
        width={80}
        className="group-hover:text-[#F7DF1E] text-yellow-500 transition-colors duration-0"
      />
    ),
  },
  {
    name: "TypeScript",
    svg: (
      <TypescriptSVG
        height={60}
        width={60}
        className="group-hover:text-[#3178C6] text-yellow-500 transition-colors duration-0"
      />
    ),
  },
  {
    name: "Refine Dev",
    svg: (
      <ReactSVG
        height={80}
        width={80}
        className="group-hover:text-[#61DAFB] text-yellow-500 transition-colors duration-0"
      />
    ),
  },
  {
    name: "Next JS/ NestJS",
    svg: (
      <ReactSVG
        height={80}
        width={80}
        className="text-yellow-500 transition-colors duration-0 group-hover:text-black"
      />
    ),
  },
];

function AboutMe() {
  return (
    <>
      <div className="ml-10 text-3xl font-bold text-black dark:text-white">
        About Me
      </div>
      <hr className="w-10 mt-2 ml-10 border-b-4 border-yellow-500 rounded" />

      <div className="flex flex-col p-8 space-y-4 text-black dark:text-white">
        <span>
          Hello! I’m Kannan AC, a software developer with an MSc in Software
          Systems and 2 years of experience specializing in React, React Native,
          JavaScript, TypeScript, and Tailwind CSS.
        </span>

        <span>
          Some key projects include a video conferencing platform with real-time
          communication features and an admin management system built with
          Refine Dev, Next.js, and NestJS, focusing on quality and user
          experience.
        </span>

        <span>
          I’m continuously enhancing my skills and currently exploring AI
          technologies, data structures, and back-end development.
        </span>

        <span>
          Based in Namakkal, I value collaboration and look forward to
          connecting with fellow developers to create impactful solutions
          together.
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 p-8 md:grid-cols-2 no-scrollbar">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 transition-transform transform bg-gray-200 rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-xl hover:scale-105 group"
          >
            <div className="flex items-center justify-center mb-2">
              {tech.svg}
            </div>
            <span className="text-lg font-semibold text-black dark:text-white">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

export default AboutMe;
