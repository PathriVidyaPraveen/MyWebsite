import React from 'react';
import data from '@/data.jsx';
import Projects from '@/components/Projects.jsx';

export default function ProjectsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="py-16 md:py-24">
        <Projects data={data} />
      </section>
    </main>
  );
}
