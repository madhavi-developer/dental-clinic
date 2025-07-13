import React, { useState } from 'react';
import axios from 'axios';
export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://jsonplaceholder.typicode.com/posts', form);
      alert('Form submitted successfully');
    } catch {
      alert('Submission failed');
    }
  };
  return (
    <main className="contact">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" required onChange={handleChange} />
        <input name="email" type="email" placeholder="Email" required onChange={handleChange} />
        <input name="subject" placeholder="Subject" required onChange={handleChange} />
        <textarea name="message" placeholder="Message" required onChange={handleChange}></textarea>
        <button type="submit">Submit</button>
      </form>
      <div className="contact-info">
        <p>Phone: 123-456-7890</p>
        <p>Email: contact@dentalcare.com</p>
        <p>Address: Hyderabad, India</p>
        <iframe
          title="clinic-map"
          src="https://www.google.com/maps/embed?..."
          width="100%"
          height="200"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </main>
  );
}