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
      const response = await fetch("http://localhost:4000/waitlist", {
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
      setError("Unable to connect to the server. Make sure backend is running.");
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
           <br />
           <span className="text-3xl md:text-4xl text-gray-700/80 font-normal block mt-4">
             No strings attached.
           </span>
        </h1>

        <div className="space-y-6 text-xl text-gray-800 leading-relaxed max-w-2xl mx-auto font-light mb-12">
           <p>
             Most colleges offer counseling that feels unstructured or disconnected. 
             Private therapy is often financially out of reach.
           </p>
           <p className="font-medium">
             We make high-quality peer counseling accessible without compromising on support.
             By combining trained peer counsellors with professional oversight, we create a safe space for you to be heard.
           </p>
        </div>

        {submitted ? (
          <div className="bg-white/80 backdrop-blur-sm border border-green-100 rounded-2xl p-8 max-w-md mx-auto shadow-sm transition-all duration-500 transform scale-100 opacity-100">
             <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="text-brand-600" />
             </div>
             <h3 className="text-xl font-semibold text-brand-900">You're on the list!</h3>
             <p className="text-brand-700 mt-2">We'll notify you as soon as we launch at your campus.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-sm mx-auto w-full">
            <input 
              type="text" 
              placeholder="Your Name" 
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-5 py-4 rounded-xl bg-white/90 border border-white/50 
              focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 
              outline-none transition-all placeholder:text-gray-400 
              text-gray-700 shadow-sm"
            />

            <input 
              type="email" 
              placeholder="college@email.edu" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-4 rounded-xl bg-white/90 border border-white/50 
              focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 
              outline-none transition-all placeholder:text-gray-400 
              text-gray-700 shadow-sm"
            />
            
            {error && (
              <div className="text-red-600 text-sm bg-red-50 p-3 rounded-lg flex items-center gap-2 text-left">
                <AlertCircle size={16} className="shrink-0" />
                {error}
              </div>
            )}

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-brand-800 hover:bg-brand-900 text-white font-medium py-4 rounded-xl
              shadow-lg shadow-brand-900/10 transition-all transform hover:-translate-y-0.5 
              active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed 
              flex justify-center items-center gap-2 border border-brand-900/10"
            >
              {isSubmitting ? <Loader2 className="animate-spin w-5 h-5" /> : 'Join the waitlist'}
            </button>
          </form>
        )}

        <div className="mt-12 flex items-center justify-center gap-4 text-sm text-brand-900/80 font-medium">
          <div className="flex -space-x-3">
             <img src="https://picsum.photos/40/40?random=1" alt="Student" className="w-8 h-8 rounded-full border-2 border-white" />
             <img src="https://picsum.photos/40/40?random=2" alt="Student" className="w-8 h-8 rounded-full border-2 border-white" />
             <img src="https://picsum.photos/40/40?random=3" alt="Student" className="w-8 h-8 rounded-full border-2 border-white" />
          </div>
          <p>Join 500+ students prioritizing mental health</p>
        </div>
      </div>
    </section>
  );
};
