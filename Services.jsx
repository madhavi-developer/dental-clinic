import React from 'react';
const services = [
  { title: 'Cleaning', desc: 'Basic oral cleaning and hygiene.' },
  { title: 'Whitening', desc: 'Brighten your smile.' },
  { title: 'Root Canal', desc: 'Endodontic treatment.' },
  { title: 'Braces', desc: 'Orthodontic treatment for all ages.' },
  { title: 'Crowns', desc: 'Tooth restoration solutions.' },
  { title: 'Extractions', desc: 'Safe tooth removal.' },
];
export default function Services() {
  return (
    <main className="services">
      <h2>Our Services</h2>
      <div className="service-list">
        {services.map((srv, i) => (
          <div key={i} className="service">
            <h4>{srv.title}</h4>
            <p>{srv.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}