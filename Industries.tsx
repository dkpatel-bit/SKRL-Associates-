import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeader } from '../components/ui/SectionHeader';
import { industries } from '../data/industries';
import { ShieldCheck, Check } from 'lucide-react';

export const Industries: React.FC = () => {
  return (
    <div>
      <PageHero
        title="Industries We Serve"
        description="Filing, compliance, audit, and tax consulting services tailored to specific business verticals and sectors."
        currentPage="Industries"
      />

      {/* Industries Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            badge="Verticals"
            title="Sector Specific Financial Services"
            subtitle="Different sectors are governed by unique regulatory laws. We provide specialized compliance structures suited perfectly for your domain."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <div key={ind.id} className="card p-8 flex flex-col justify-between gap-6 hover:shadow-card-hover border border-transparent hover:border-gray-100 transition-all duration-300">
                  <div className="flex flex-col gap-4 text-left">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center text-gold-500 shadow-sm shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold text-navy-950 uppercase tracking-widest px-2.5 py-1 bg-gold-50 rounded-full border border-gold-200">
                        {ind.growthStat}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold font-display text-navy-900 mt-2">
                      {ind.title}
                    </h3>

                    <p className="text-xs text-gray-500 leading-relaxed">
                      {ind.description}
                    </p>

                    {/* Key compliance offerings */}
                    <div className="h-px bg-gray-100 my-2" />
                    
                    <div className="flex flex-col gap-2">
                      <h4 className="text-[10px] font-bold text-navy-900 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-gold-500" /> Focus Services
                      </h4>
                      {ind.keyServices.map((serv, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                          <span className="text-xs text-gray-400 font-medium leading-none">{serv}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-50 flex justify-end">
                    <a
                      href={`https://wa.me/919787922216?text=Hi,%20I'd%20like%20to%20consult%20regarding%20financial%20services%20for%20${encodeURIComponent(ind.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-navy-900 hover:text-gold-500 transition-colors flex items-center gap-1"
                    >
                      Sector Consultation &rarr;
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cross-border and General Advisory block */}
      <section className="bg-navy-900 text-white py-16 bg-dots relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-95" />
        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center gap-5">
          <span className="tag bg-white/10 text-white border-white/20 uppercase tracking-widest text-[10px]">Strategic Solutions</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white">Need custom sector package structures?</h2>
          <p className="text-sm text-white/70 max-w-2xl leading-relaxed">
            If your domain falls into multiple sectors, or requires deep customized pricing setups, get in touch with our relationship partners. We coordinate fully customized legal calendars for diverse business types.
          </p>
          <a
            href="https://wa.me/919787922216?text=Hi,%20I'd%20like%20a%20custom%20compliance%20package%20tailored%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-3"
          >
            Formulate Custom Package
          </a>
        </div>
      </section>
    </div>
  );
};
