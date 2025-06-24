// app/components/ContactForm.tsx
'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle'|'sending'|'success'|'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      if (res.ok) {
        setStatus('success');
        setName(''); setEmail(''); setMessage('');
      } else {
        throw new Error(`HTTP ${res.status}`);
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        required
        placeholder="Your Name"
        value={name}
        onChange={e => setName(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <input
        type="email"
        required
        placeholder="Your Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <textarea
        required
        placeholder="Your Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
        className="w-full p-2 border rounded"
        rows={5}
      />
      <Button
        type="submit"
        className="w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold group relative overflow-hidden"
      >
        <span className="relative z-10">
          {status === 'sending' ? 'Sending…' : 'Send Message'}
        </span>
        <span className="absolute inset-0 bg-fuchsia-500 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></span>
      </Button>

      {status === 'success' && <p className="text-green-500">Message sent!</p>}
      {status === 'error'   && <p className="text-red-500">Oops, something went wrong.</p>}
    </form>
  );
}
