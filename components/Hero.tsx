import React, { useState } from 'react';
import { ArrowRight, Loader2, AlertCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
  const response = await fetch("https://unmuted-backend.onrender.com/waitlist", {
    method: "POST",
    headers: { 
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, email }),
  });

  const data = await response.json();

  if (data.success) {
    setSubmitted(true);
    setName('');
    setEmail('');
  } else {
    setError("Something went wrong. Please try again.");
  }

} catch (err) {
  console.error("Error submitting:", err);
  setError("Unable to connect to the server.");
} finally {
  setIsSubmitting(false);
}
};

  return (
    <section className="relative pt-44 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">

        <h1 className="text-5xl md:text-7xl font-semibold text-gray-900 tracking-tight leading-[1.1] mb-8">
          High-quality peer counseling,<br />
          <span className="text-brand-800">only at ₹49.</span>
        </h1>

        {submitted ? (
          <div className="bg-white border border-green-100 rounded-2xl p-8 max-w-md mx-auto shadow-sm">
            <h3 className="text-xl font-semibold text-brand-900">You're on the list!</h3>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-sm mx-auto w-full">

            <input
              type="text"
              placeholder="Your Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              placeholder="college@email.edu"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {error && <div className="text-red-600 text-sm">{error}</div>}

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Join the waitlist"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
