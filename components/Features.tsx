import React from 'react';
import { Users, ShieldCheck, HeartHandshake } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, subtitle, description }) => (
  <div className="relative group h-full">
    <div className="bg-white/90 backdrop-blur-sm rounded-[2rem] p-8 pt-12 shadow-sm border border-white/50 hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-300 h-full">
      {/* Floating Icon */}
      <div className="absolute -top-8 left-1/2 -translate-x-1/2">
        <div className="w-16 h-16 bg-brand-600 rounded-full flex items-center justify-center shadow-lg shadow-brand-600/30 group-hover:scale-110 transition-transform duration-300 border-4 border-white">
          <Icon className="text-white w-7 h-7" />
        </div>
      </div>

      <div className="text-center mt-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-xs uppercase tracking-wider text-brand-600 font-semibold mb-4">{subtitle}</p>
        <div className="text-gray-600 text-sm leading-relaxed space-y-2">
          {description}
        </div>
      </div>
    </div>
  </div>
);

export const Features: React.FC = () => {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">How Our Model Works</h2>
          <p className="text-gray-800 max-w-2xl mx-auto font-medium">
            The first mental-health model built specifically for students. Accessible, affordable, relatable, and safe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-8">
          <FeatureCard 
            icon={Users}
            title="Peer Counsellors"
            subtitle="Relatable Support"
            description={
              <>
                <p className="mb-2">Trained BSc/MSc Psychology students acting as peer counsellors.</p>
                <p>They understand student problems—venting, anxiety, breakups, loneliness—because they live them too.</p>
              </>
            }
          />
          <FeatureCard 
            icon={ShieldCheck}
            title="Professional Mentors"
            subtitle="Guaranteed Quality"
            description={
              <>
                <p className="mb-2">Every peer counsellor works under the mentorship of a licensed professional psychologist.</p>
                <p>Ensures ethical safety, high-quality guidance, and immediate escalation when needed.</p>
              </>
            }
          />
          <FeatureCard 
            icon={HeartHandshake}
            title="Support Communities"
            subtitle="Reduce Isolation"
            description={
              <>
                <p className="mb-2">Structured groups where people dealing with similar problems can talk and share.</p>
                <p>Reduces isolation and gives you a place where you finally feel understood by your peers.</p>
              </>
            }
          />
        </div>
      </div>
    </section>
  );
};