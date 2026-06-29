// src/components/About.js
import React from 'react';

const About = ({ data }) => {
  return (
    <div className="bg-component-bg p-8 rounded-lg shadow-xl text-white"> {/* Added text-white here for general text */}
      <h2 className="text-3xl font-bold text-accent-blue mb-6 border-b-2 border-accent-blue pb-2">About Me</h2>
      <p className="text-lg leading-relaxed mb-4">
        {data.about.detailed}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-md">
        <div>
          <h3 className="font-semibold text-white mb-2">Personal Details:</h3>
          <ul>
            <li><strong className="text-accent-blue">Location:</strong> {data.location}</li>
            <li><strong className="text-accent-blue">Email:</strong> <a href={`mailto:${data.email}`} className="text-blue-400 hover:underline">{data.email}</a></li>
            {data.emailSecondary && (
              <li><strong className="text-accent-blue">Email (alternate):</strong> <a href={`mailto:${data.emailSecondary}`} className="text-blue-400 hover:underline">{data.emailSecondary}</a></li>
            )}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-2">Languages:</h3>
          <ul className="list-disc list-inside">
            {data.languages.map((lang, index) => (
              <li key={index} className="mb-1">
                <span className="text-accent-blue">{lang.name}:</span> {lang.proficiency}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;