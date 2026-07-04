// src/components/Volunteering.jsx
import React from 'react';

const Volunteering = ({ data }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-accent-blue mb-10 border-b-2 border-accent-blue pb-2">Volunteering</h2>
      <div className="flex flex-col gap-8">
        {data.volunteering.map((item, index) => (
          <div key={index} className="bg-component-bg border border-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
            <p className="text-gray-200 leading-relaxed mb-3">{item.content}</p>
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-blue hover:text-blue-400 text-sm font-semibold"
              >
                {item.linkLabel} ↗
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Volunteering;
