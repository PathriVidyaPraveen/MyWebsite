// src/components/Education.jsx
import React from 'react';

const SHOW_COURSEWORK = false;

const escapeRegExp = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// Renders a description, turning course names listed in `courseLinks` into links.
// Linked courses look identical to plain text until hovered (then turn blue).
// A course only matches as a whole list item: after "Category: ", ", ", "1) " or a line start,
// and before "," or end of line, so "OS-I" never matches inside "OS-II".
const renderDescription = (text, courseLinks) => {
  const names = Object.keys(courseLinks || {}).filter((name) => courseLinks[name]);
  if (names.length === 0) return text;

  names.sort((a, b) => b.length - a.length);
  const pattern = new RegExp(
    `(?<=^|: |, |\\d\\) )(${names.map(escapeRegExp).join('|')})(?=,|$)`,
    'gm'
  );

  const parts = [];
  let lastIndex = 0;
  for (const match of text.matchAll(pattern)) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
    parts.push(
      <a
        key={match.index}
        href={courseLinks[match[0]]}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent-blue focus-visible:text-accent-blue transition-colors duration-200"
      >
        {match[0]}
      </a>
    );
    lastIndex = match.index + match[0].length;
  }
  parts.push(text.slice(lastIndex));
  return parts;
};

const Education = ({ data }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-accent-blue mb-10 border-b-2 border-accent-blue pb-2">Education</h2>
      <div className="flex flex-col gap-8 mb-16">
        {data.education.map((edu, index) => (
          <div key={index} className="bg-component-bg p-6 rounded-lg shadow-md border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-1">{edu.institution}</h3>
            <p className="text-lg text-accent-blue mb-1">{edu.degree}</p>
            <p className="text-gray-300 text-sm mb-2">{edu.dates}</p>
            {edu.grade && <p className="text-gray-200 mb-1"><span className="font-semibold">Grade:</span> {edu.grade}</p>}
            {edu.description && <p className="text-gray-200 whitespace-pre-line">{renderDescription(edu.description, edu.courseLinks)}</p>}
          </div>
        ))}
      </div>

      {SHOW_COURSEWORK && (
        <>
          <h3 className="text-2xl font-semibold text-accent-blue mb-8 border-b-2 border-accent-blue pb-2">Coursework at IIT Hyderabad</h3>
          <div className="flex flex-col gap-6">
            {data.courseCategories.map((group, index) => (
              <div key={index} className="bg-component-bg p-5 rounded-lg border border-gray-700">
                <h4 className="text-lg font-semibold text-accent-blue mb-3 border-b border-gray-700 pb-1">
                  {group.category}
                </h4>
                {group.courses.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {group.courses.map((course, courseIndex) => (
                      <span key={courseIndex} className="bg-gray-700 text-gray-200 px-3 py-1 rounded-md text-sm">
                        {course}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-sm italic">No courses listed yet.</p>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Education;
