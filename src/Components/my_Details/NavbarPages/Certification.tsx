import React from "react";

import ServicenowCerti from '../../../assets/pictures/ServiceNow.png'

function Certificates() {
  const certificates = [
    {
      title: "ServiceNow Certified System Administrator (CSA)",
      issuer: "ServiceNow",
      date: "January 30, 2024 11:53:27 AM",
      image: ServicenowCerti,
      link: "https://drive.google.com/file/d/1JVFEBNfds0G_TqiUnxUJ_cZNSkNyhDR9/view?usp=sharing",
    },
  ];

  return (
    <div className="mt-8 ml-10">
      <div className="text-3xl font-bold text-black dark:text-white">Certificates</div>
      <hr className="w-10 mt-2 mb-6 border-b-4 border-yellow-500 rounded" />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="p-6 transition-shadow duration-300 bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-xl"
          >
            <div className="mb-4">
              <img
                src={cert.image}
                alt={cert.title}
                className="object-cover w-full h-48 rounded-lg"
              />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
              {cert.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300">{cert.issuer}</p>
            <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">{cert.date}</p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-500 hover:underline"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificates;