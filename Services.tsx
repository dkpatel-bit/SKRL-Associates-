import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeader } from '../components/ui/SectionHeader';
import { services } from '../data/services';
import { Check, Info, FileSpreadsheet, Send } from 'lucide-react';

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>('gst');
  const location = useLocation();

  // Scroll to hash element if present
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setSelectedService(id);
      }
    }
  }, [location]);

  const currentService = services.find((s) => s.id === selectedService) || services[0];
  const CurrentIcon = currentService.icon;

  return (
    <div>
      <PageHero
        title="Our Services"
        description="Impeccable legal filing, bookkeeping, auditing, and corporate statutory solutions tailored for Indian firms."
        currentPage="Services"
      />

      {/* Services List and Tab Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            badge="Expertise"
            title="Comprehensive Corporate Solutions"
            subtitle="Explore our 13 specialized service divisions designed to keep your business legally protected and financially efficient."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Vertical Tabs */}
            <div className="lg:col-span-4 flex flex-col gap-2 max-h-[70vh] overflow-y-auto pr-2 border-r border-gray-100">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`flex items-center gap-3.5 p-3.5 rounded-xl text-left transition-all duration-200 ${
                      selectedService === service.id
                        ? 'bg-navy-900 text-white shadow-navy font-bold'
                        : 'bg-surface text-navy-900 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${selectedService === service.id ? 'text-gold-400' : 'text-gold-500'}`} />
                    <span className="text-sm font-semibold">{service.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Dynamic Service Details Pane */}
            <div className="lg:col-span-8 p-8 bg-surface rounded-3xl shadow-card border border-gray-100 flex flex-col gap-6 text-left animate-fade-in relative min-h-[50vh]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex gap-4 items-center">
                <div className="w-14 h-14 rounded-xl bg-navy-900 flex items-center justify-center text-gold-500 shadow-md">
                  <CurrentIcon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-display text-navy-900 leading-tight">{currentService.title}</h3>
                  <p className="text-xs text-gold-600 font-semibold tracking-wider uppercase mt-1">Specialized Desk</p>
                </div>
              </div>

              <div className="h-px bg-gray-200/60" />

              <div className="flex flex-col gap-4">
                <h4 className="text-md font-bold font-display text-navy-900 flex items-center gap-1.5">
                  <Info className="w-4 h-4 text-gold-500" /> Service Overview
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {currentService.description}
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <h4 className="text-md font-bold font-display text-navy-900 flex items-center gap-1.5">
                  <FileSpreadsheet className="w-4 h-4 text-gold-500" /> Key Benefits & Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {currentService.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-gold-50 border border-gold-200 flex items-center justify-center shrink-0 text-gold-600 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-xs font-medium text-gray-500">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="h-px bg-gray-200/60 mt-4" />

              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="text-left">
                  <p className="text-xs text-gray-400">Ready to initiate filing or registration?</p>
                  <p className="text-sm font-bold text-navy-900">Reach out to our local Coimbatore office</p>
                </div>
                <a
                  href={`https://wa.me/919787922216?text=Hi,%20I'd%20like%20to%20consult%20regarding%20${encodeURIComponent(currentService.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary py-2.5 px-6 rounded-lg text-sm inline-flex items-center gap-2 max-w-fit shrink-0"
                >
                  Consult Now <Send className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of All Services for SEO Scannability */}
      <section className="section-padding bg-surface border-t border-gray-100">
        <div className="container-custom">
          <SectionHeader
            badge="Grid Layout"
            title="All Services At A Glance"
            subtitle="Click on any service card below to explore full details and statutory benefits in the interactive portal above."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  onClick={() => {
                    setSelectedService(service.id);
                    document.getElementById('services-container')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`card p-6 flex flex-col justify-between cursor-pointer border ${
                    selectedService === service.id ? 'border-gold-500 ring-2 ring-gold-200' : 'border-transparent'
                  }`}
                >
                  <div className="flex flex-col gap-4">
                    <div className="service-icon-box">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-md font-bold font-display text-navy-900 leading-tight">
                      {service.title}
                    </h4>
                    <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="flex justify-between items-center mt-6 pt-3 border-t border-gray-50">
                    <span className="text-[10px] text-gold-600 font-semibold uppercase tracking-wider">Expert Desk</span>
                    <span className="text-[10px] font-bold text-navy-900 hover:text-gold-500 flex items-center gap-0.5">
                      Open details
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
