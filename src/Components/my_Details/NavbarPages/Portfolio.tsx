import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import BeemgIcon from '../../../assets/pictures/Beemg.png'
import SpaceXIcon from '../../../assets/pictures/spacex.jpg'
import PortfolioIcon from '../../../assets/pictures/Portfolio.png'

function Portfolio() {
  const projects = [
    {
      title: "BeeMG - Video Conferencing for Web, Android, iOS",
      description:
        "BeeMG is an innovative platform designed for the Creator Economy, connecting Creators and Collaborators through live audio and video events.",
      image:BeemgIcon,
      platforms: ["React", "React Native", "Node", "TypeScript", "JavaScript", "Tailwind CSS"],
      reach: [
        {
          name: "Live Demo",
          icon: <FaExternalLinkAlt />,
          link: "https://www.beemg.com/",
        },
      ],
    },
    {
      title: "BeeMG Admin",
      description:
        "An Admin Panel for BeeMG for handling payments, transactions, reports, and support.",
        image:BeemgIcon,
      platforms: ["Next.js", "Nest.js", "TypeScript", "JavaScript", "Ant Design"],
      reach: [
        {
          name: "Live Demo",
          icon: <FaExternalLinkAlt />,
          link: "https://www.beemg.com/",
        },
      ],
    },
    {
      title: "SpaceX Clone",
      description: "A SpaceX clone showcasing information on rockets and missions.",
      image: SpaceXIcon,
      platforms: ["React", "Tailwind CSS"],
      reach: [
        {
          name: "GitHub",
          icon: <FaGithub />,
          link: "https://github.com/KannanAC18/kannan_spacex",
        },
        {
          name: "Live Demo",
          icon: <FaExternalLinkAlt />,
          link: "https://spacex-kannan.vercel.app/",
        },
      ],
    },
    {
      title: "Portfolio Website",
      description: "A portfolio website showcasing various projects and skills.",
      image: PortfolioIcon,
      platforms: ["React", "Tailwind CSS"],
      reach: [
        {
          name: "GitHub",
          icon: <FaGithub />,
          link: "https://github.com/KannanAC18/portfolio_kannan",
        },
        {
          name: "Live Demo",
          icon: <FaExternalLinkAlt />,
          link: "https://portfolio-kannan.vercel.app/",
        },
      ],
    },
  ];

  return (
    <div className="ml-10">
      <div className="text-3xl font-bold text-black dark:text-white">Portfolio</div>
      <hr className="w-10 mt-2 mb-6 border-b-4 border-yellow-500 rounded" />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 transition-shadow duration-300 bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-xl"
          >
            {/* Project Image */}
            <div className="mb-4">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-48 rounded-lg"
              />
            </div>

            {/* Project Title and Description */}
            <h3 className="mb-2 text-2xl font-semibold text-gray-900 dark:text-white">
              {project.title}
            </h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              {project.description}
            </p>

            {/* Platforms List */}
            <div className="mb-4">
              <h4 className="text-lg font-medium text-gray-900 dark:text-gray-200">Technologies:</h4>
              <ul className="flex flex-wrap gap-2 mt-1 text-sm text-gray-600 dark:text-gray-400">
                {project.platforms.map((platform, pIndex) => (
                  <li key={pIndex} className="px-2 py-1 bg-gray-200 rounded dark:bg-gray-700">
                    {platform}
                  </li>
                ))}
              </ul>
            </div>

            {/* Links for GitHub and Live Demo */}
            <div className="flex space-x-4">
              {project.reach.map((reach, rIndex) => (
                <a
                  key={rIndex}
                  href={reach.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-yellow-500"
                  aria-label={reach.name}
                >
                  {reach.icon}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
