// src/components/Experience.jsx
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Experience = ({ items, title }) => {
  const { hash } = useLocation();

  // Scroll to a specific entry when the URL has a #hash (e.g. links between experience pages)
  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(decodeURIComponent(hash.slice(1)));
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [hash, items]);

  return (
    <div>
      <h2 className="text-3xl font-bold text-accent-blue mb-10 border-b-2 border-accent-blue pb-2">{title}</h2>
      <div className="flex flex-col gap-8">
        {items.map((exp, index) => (
          <div key={index} id={exp.id} className="bg-component-bg border border-gray-700 p-6 rounded-lg shadow-md scroll-mt-24">
            <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
            {exp.role && (
              <p className="text-sm font-semibold uppercase tracking-wide text-gray-400 mb-1">{exp.role}</p>
            )}
            {exp.workplaceUrl ? (
              <a href={exp.workplaceUrl} target="_blank" rel="noopener noreferrer" className="text-lg text-accent-blue mb-1 hover:underline block">{exp.workplace}</a>
            ) : (
              <p className="text-lg text-accent-blue mb-1">{exp.workplace}</p>
            )}
            <p className="text-gray-300 text-sm mb-3">{exp.duration}</p>
            {exp.description && exp.bullets && (
              <p className="text-gray-200 leading-relaxed mb-3">{exp.description}</p>
            )}
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
                {exp.projectLinks.map((link, i) => link.internal ? (
                  <Link
                    key={i}
                    to={link.url}
                    className="text-accent-blue hover:text-blue-400 text-sm font-semibold"
                  >
                    {link.label} →
                  </Link>
                ) : (
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
