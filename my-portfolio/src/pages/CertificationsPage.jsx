import React from 'react';
import data from '@/data.jsx';
import Certifications from '@/components/Certifications.jsx';

export default function CertificationsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="py-16 md:py-24">
        <Certifications data={data} />
      </section>
    </main>
  );
}
