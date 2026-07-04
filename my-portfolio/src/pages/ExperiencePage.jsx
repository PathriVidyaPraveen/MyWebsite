import React from 'react';
import data from '@/data.jsx';
import Experience from '@/components/Experience.jsx';

export default function ExperiencePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="py-16 md:py-24">
        <Experience data={data} />
      </section>
    </main>
  );
}
