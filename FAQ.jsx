import React from 'react';
export default function FAQ() {
  return (
    <section className="faq">
      <h2>FAQs</h2>
      <details>
        <summary>Do you accept walk-ins?</summary>
        <p>Yes, but appointments are preferred.</p>
      </details>
      <details>
        <summary>What insurance do you accept?</summary>
        <p>We accept major dental insurance providers.</p>
      </details>
    </section>
  );
}