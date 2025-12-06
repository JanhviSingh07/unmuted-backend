import React from 'react';
import { Quote, Star } from 'lucide-react';

interface Testimonial {
  text: string;
  author: string;
  detail: string;
}

const testimonials: Testimonial[] = [
  {
    text: "Honestly, vibe check passed. Talking to a peer counsellor didn't feel like a medical exam. It was just... chill. 100% recommend.",
    author: "Aditi S.",
    detail: "Psychology, Christ University"
  },
  {
    text: "I was spiraling about exams and just needed to vent. Unmuted actually helps without making it a big deal. No cap.",
    author: "Rahul K.",
    detail: "Engineering, MIT Manipal"
  },
  {
    text: "The best part is they don't treat you like a patient. Felt super light after the session. Finally someone who gets the college drama.",
    author: "Sneha M.",
    detail: "Design, PES University"
  },
  {
    text: "Lowkey wasn't sure at first, but the mentors are actually relatable. Didn't feel awkward at all. Just pure good vibes.",
    author: "Vikram R.",
    detail: "BBA, NMIMS Mumbai"
  },
  {
    text: "Academic pressure was eating me alive. One session here and I felt lighter. It's proper valid support.",
    author: "Diya R.",
    detail: "BA, St. Joseph's University"
  },
  {
    text: "Finally a place where I don't have to explain my entire life context. They just get the student struggle. Big W.",
    author: "Arjun P.",
    detail: "CS, MIT Manipal"
  },
  {
    text: "It’s not heavy or intimidating. Just a safe space to dump my overthinking and get clarity. 10/10 experience.",
    author: "Kabir S.",
    detail: "Law, Christ University"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
         <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/60 border border-white/40 text-brand-800 text-sm font-medium mb-4 backdrop-blur-sm">
            Student Stories
         </div>
         <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight">
           Hear from the Campus
         </h2>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden group">
        
        {/* Removed gradient masks as they clash with colored background */}

        <div className="flex animate-scroll hover:[animation-play-state:paused] w-max">
           {/* Duplicate list for seamless infinite scroll */}
           {[...testimonials, ...testimonials].map((t, i) => (
             <div key={i} className="w-[300px] md:w-[400px] flex-shrink-0 px-4">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-3xl h-full border border-white/50 hover:border-brand-200 hover:shadow-md transition-all duration-300">
                    <div className="flex gap-1 mb-3 text-brand-500">
                      {[...Array(5)].map((_, starIndex) => <Star key={starIndex} size={14} fill="currentColor" />)}
                    </div>
                    <p className="text-gray-700 text-base leading-relaxed mb-4 font-medium">
                      "{t.text}"
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-100">
                        <div>
                           <h4 className="font-bold text-gray-900 text-sm">{t.author}</h4>
                           <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">{t.detail}</p>
                        </div>
                        <Quote size={20} className="text-brand-300" fill="currentColor" stroke="none" />
                    </div>
                </div>
             </div>
           ))}
        </div>
      </div>
      
      {/* Inject Keyframes directly */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
};