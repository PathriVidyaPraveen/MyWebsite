// src/components/News.jsx
import React from 'react';

const News = ({ data }) => {
  return (
    <div className="bg-component-bg p-8 rounded-lg shadow-xl text-white">
      <h2 className="text-3xl font-bold text-accent-blue mb-6 border-b-2 border-accent-blue pb-2">News</h2>
      <ul className="space-y-4">
        {data.news.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="mt-1 text-accent-blue text-lg leading-none">•</span>
            <span>
              <strong className="text-accent-blue">{item.date}</strong>
              {' : '}
              {item.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
