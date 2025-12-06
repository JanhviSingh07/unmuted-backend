import React from 'react';

export const Mission: React.FC = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
        
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight leading-tight mb-8">
          Therapy today is <span className="text-gray-700 decoration-brand-800/50 underline decoration-4 underline-offset-4">broken</span> for students.
        </h2>

        <p className="text-xl md:text-2xl text-gray-800 leading-relaxed max-w-3xl mx-auto font-light">
          Private sessions cost ₹1,000–₹4,000/hr. College counseling is often unstructured. <span className="text-brand-900 font-bold">Unmuted fixes this.</span>
        </p>
      </div>
    </section>
  );
};