// src/components/Skills.jsx
import React from 'react';

const Skills = ({ data }) => {
  return (
    <div className="bg-component-bg p-8 rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold text-accent-blue mb-6 border-b-2 border-accent-blue pb-2">Skills</h2>
      <div className="space-y-8">
        {data.skillCategories.map((group, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold text-accent-blue mb-3 border-b border-gray-700 pb-1">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="bg-gray-700 text-gray-200 px-3 py-1 rounded-md text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
