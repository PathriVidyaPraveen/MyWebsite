// src/components/HonorsAndAwards.jsx
import React from 'react';

const HonorsAndAwards = ({ data }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-accent-blue mb-10 border-b-2 border-accent-blue pb-2">Honors & Awards</h2>

      <div className="flex flex-col gap-6 mb-16">
        {data.honorsAndAwards.map((award, index) => (
          <div key={index} className="bg-component-bg p-5 rounded-lg shadow-md border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-1">{award.name}</h3>
            <p className="text-gray-300 text-sm mb-1">Issued by: {award.issuer} &bull; {award.date}</p>
            <p className="text-gray-200 mb-2">{award.description}</p>
            {award.link && (
              <a
                href={award.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-blue hover:text-blue-400 text-sm font-semibold"
              >
                {award.linkLabel} ↗
              </a>
            )}
          </div>
        ))}
      </div>

      <h3 className="text-2xl font-semibold text-accent-blue mb-8 border-b-2 border-accent-blue pb-2">Test Scores</h3>
      <div className="flex flex-col gap-6">
        {data.testScores.map((score, index) => (
          <div key={index} className="bg-component-bg p-5 rounded-lg shadow-md border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-1">{score.name}</h3>
            <p className="text-gray-300 text-sm mb-1">Score: {score.score} &bull; {score.date}</p>
            <p className="text-gray-200">Rank: {score.rank}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HonorsAndAwards;
