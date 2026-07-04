import React from 'react';
import data from '@/data.jsx';
import HonorsAndAwards from '@/components/HonorsAndAwards.jsx';

export default function AwardsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="py-16 md:py-24">
        <HonorsAndAwards data={data} />
      </section>
    </main>
  );
}
