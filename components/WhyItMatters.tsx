import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const reasons = [
  {
    question: "Why does this matter for students?",
    answer: "Because students finally get someone to talk to who is their age, understands their context, is trained by professionals, and is available at a price they can actually afford."
  },
  {
    question: "How does the Professional Mentor Layer work?",
    answer: "It creates a safety net. You get the comfort of talking to a peer, but the safety of a professional system. Our mentors oversee cases to ensure ethical boundaries and high-quality guidance."
  },
  {
    question: "What are the Guided Mental Health Tools?",
    answer: "Coming soon: We're building science-backed tools for stress tracking, mood reflection, grounding exercises, and habit stability to ensure long-term improvement."
  },
  {
    question: "Is this safe?",
    answer: "Absolutely. Safety is our priority. While peer counsellors handle day-to-day support, any severe cases are immediately escalated to our licensed professional supervisors."
  }
];

export const WhyItMatters: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-4 relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
            <div className="text-center mb-16">
                <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-brand-800 uppercase bg-white/60 backdrop-blur-sm rounded-full border border-white/40">
                    FAQ
                </div>
                <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4 italic">
                    Frequently Asked <span className="not-italic font-sans font-semibold text-brand-800">Questions</span>
                </h2>
            </div>

            <div className="space-y-4">
                {reasons.map((item, index) => (
                    <div 
                        key={index}
                        className={`bg-white/90 backdrop-blur-sm border rounded-2xl transition-all duration-300 ${openIndex === index ? 'shadow-lg shadow-brand-900/10 border-brand-200' : 'border-white/50 hover:border-brand-100 hover:shadow-sm'}`}
                    >
                        <button 
                            className="w-full flex items-center justify-between p-6 text-left"
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        >
                            <span className={`text-lg font-medium ${openIndex === index ? 'text-brand-800' : 'text-gray-700'}`}>
                                {item.question}
                            </span>
                            <div className={`p-2 rounded-full transition-colors ${openIndex === index ? 'bg-brand-600 text-white' : 'bg-gray-100 text-gray-500'}`}>
                                {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                            </div>
                        </button>
                        
                        <div 
                            className={`px-6 text-gray-600 leading-relaxed overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                            {item.answer}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};