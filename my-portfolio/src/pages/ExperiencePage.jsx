import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import data from '@/data.jsx';
import Experience from '@/components/Experience.jsx';

const CATEGORIES = {
  research: { items: data.experience.research, title: 'Research' },
  teaching: { items: data.experience.teaching, title: 'Teaching' },
  'academic-service': { items: data.experience.academicServiceAndActivities, title: 'Academic Service & Activities' },
};

export default function ExperiencePage() {
  const { category } = useParams();
  const selected = CATEGORIES[category];

  if (!selected) {
    return <Navigate to="/experience/research" replace />;
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <section className="py-16 md:py-24">
        <Experience items={selected.items} title={selected.title} />
      </section>
    </main>
  );
}
