import React from 'react';
import data from '@/data.jsx';
import Volunteering from '@/components/Volunteering.jsx';

export default function VolunteeringPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="py-16 md:py-24">
        <Volunteering data={data} />
      </section>
    </main>
  );
}
