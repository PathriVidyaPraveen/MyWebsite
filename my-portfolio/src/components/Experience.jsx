// src/components/Experience.jsx
import React from 'react';

const Experience = ({ data }) => {
  return (
    <div className="bg-component-bg p-8 rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold text-accent-blue mb-6 border-b-2 border-accent-blue pb-2">Experience</h2>
      <div className="space-y-6">
        {data.experience.map((exp, index) => (
          <div key={index} className="bg-component-bg border border-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
            <p className="text-lg text-accent-blue mb-1">{exp.workplace}</p>
            <p className="text-gray-300 text-sm mb-3">{exp.duration}</p>
            {exp.bullets ? (
              <ul className="space-y-2">
                {exp.bullets.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-200 leading-relaxed">
                    <span className="mt-1 text-accent-blue shrink-0">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-200 leading-relaxed">{exp.description}</p>
            )}
            {exp.projectLinks && (
              <div className="mt-4 flex flex-wrap gap-4">
                {exp.projectLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-blue hover:text-blue-400 text-sm font-semibold"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
