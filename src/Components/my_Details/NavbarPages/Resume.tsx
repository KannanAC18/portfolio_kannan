import React from "react";
import BookIcon from "../../../assets/svg/SVG components/BookIcon";

function Resume() {
  const educationData = [
    {
      title: "Master's",
      degree: "MSc in Software Systems (Integrated)",
      institution: "Kongu Engineering College",
      duration: "2018-2023",
      gpa: "GPA: 7.71",
    },
    {
      title: "12th Grade",
      degree: "SKV Matriculation Higher Secondary School",
      percentage: "70%",
      duration: "2018",
    },
    {
      title: "10th Grade",
      degree: "SKV Matriculation Higher Secondary School",
      percentage: "87.2%",
      duration: "2016",
    },
  ];

  const experienceData = [
    {
      title: "Developer for Web, Android, and iOS",
      company: "FirstQA Systems",
      duration: "January 2022 – August 2024",
      responsibilities: [
        "Developed a comprehensive video conferencing platform enabling users to create and collaborate on meetings, manage payments, and engage in screen sharing.",
        "Integrated real-time chat functionality for enhanced user communication.",
        "Implemented features for users to connect with like-minded individuals and included face verification for added security.",
        "Utilized React and TypeScript for scalable front-end development, Tailwind CSS for modern UI design, and Redux for efficient state management.",
        "Leveraged LiveKit for high-quality video and audio streaming functionality."
      ],
    },
    {
      title: "Guided a Team and Developer",
      company: "FirstQA Systems",
      // duration: "October 2022 – August 2024",
      responsibilities: [
        "Led a team of 4 developers to build an admin platform for managing users, transactions, and operational issues.",
        "Handled both frontend and backend tasks using Refine Dev, Next.js, and NestJS.",
        "Used Refine Dev to reduce coding efforts, increasing productivity and efficiency.",
        "Utilized Next.js for server-side rendering and optimized performance, and NestJS for scalable backend architecture.",
        "Coordinated with team members to ensure smooth integration and timely delivery of project milestones."
      ],
    },
];


  return (
    <>
      <div className="ml-10 text-3xl font-bold text-black dark:text-white">
        Resume
      </div>
      <hr className="w-10 mt-2 ml-10 border-b-4 border-yellow-500 rounded" />

      <div className="flex flex-col items-start justify-start w-full p-8 space-y-4 text-black group dark:text-white">
        {/* Experience Section */}
        <div className="mt-8 text-2xl font-semibold text-black dark:text-white">
          Experience
        </div>
        {experienceData.map((experience, index) => (
          <div key={index} className="">
            <div className="flex flex-row items-center space-x-3 space-y-1">
              <BookIcon
                className="p-2.5 text-yellow-500 bg-gray-200 dark:bg-gray-950 dark:text-yellow-300 rounded-lg shadow-neumorphic dark:shadow-neumorphicDark"
                width={40}
                height={40}
              />

              <div>
                <p className="text-lg font-semibold">{experience.title}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {experience.company}
                </p>
                <p className="text-sm text-yellow-500">{experience.duration}</p>
              </div>
            </div>
            <div className=" ml-14">
              {experience.responsibilities.map((responsibility, index) => (
                <p
                  key={index}
                  className="text-sm text-gray-600 dark:text-gray-400"
                >
                  - {responsibility}
                </p>
              ))}
            </div>
            {index < educationData.length - 1 && (
              <div className="w-0.5 h-14 bg-black dark:bg-white ml-5"></div>
            )}
          </div>
        ))}

        {/* Education Section */}
        {educationData.map((education, index) => (
          <div key={index}>
            <div className="flex flex-row items-center space-x-3 space-y-1">
              <BookIcon
                className="p-2.5 text-yellow-500 bg-gray-200 dark:bg-gray-950 dark:text-yellow-300 rounded-lg shadow-neumorphic dark:shadow-neumorphicDark"
                width={40}
                height={40}
              />
              <div>
                <p className="text-lg font-semibold">{education.title}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {education.degree}
                </p>
                <p className="text-sm text-yellow-500">{education.duration}</p>
                {education.gpa && (
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {education.gpa}
                  </p>
                )}
                {education.percentage && (
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {education.percentage}
                  </p>
                )}
              </div>
            </div>
            {/* Divider */}
            {index < educationData.length - 1 && (
              <div className="w-0.5 h-20 bg-black dark:bg-white ml-5"></div>
            )}
          </div>
        ))}

        {/* <hr className="w-10 mt-2 ml-10 border-b-4 border-yellow-500 rounded" /> */}
      </div>
    </>
  );
}

export default Resume;
