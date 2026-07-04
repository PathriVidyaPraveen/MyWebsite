import React from 'react';
import data from '@/data.jsx';
import Education from '@/components/Education.jsx';

export default function EducationPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="py-16 md:py-24">
        <Education data={data} />
      </section>
    </main>
  );
}
