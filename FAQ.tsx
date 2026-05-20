import React, { useState } from 'react';
import { PageHero } from '../components/ui/PageHero';
import { faqData } from '../data/faq';
import { ChevronDown, HelpCircle, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';


export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1); // Default first open

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div>
      <PageHero
        title="Frequently Asked Questions"
        description="Find answers to common questions regarding Indian tax codes, company registration steps, and GST compliance standards."
        currentPage="FAQs"
      />

      {/* FAQs Accordion */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
            
            {/* Left FAQ Intro Card */}
            <div className="lg:col-span-4 p-8 bg-surface rounded-3xl border border-gray-100 flex flex-col gap-6 text-left">
              <div className="w-12 h-12 rounded-xl bg-gold-50 flex items-center justify-center text-gold-500 shadow-sm shrink-0">
                <HelpCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-navy-900 leading-tight">Got different questions?</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Indian direct and indirect tax codes are updated frequently. If you cannot find what you are looking for, contact our experts directly.
              </p>
              <Link 
                to="/contact" 
                className="btn-navy text-center py-2.5 px-6 rounded-lg text-sm flex items-center justify-center gap-1.5"
              >
                Inquire Directly <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right FAQ Accordions */}
            <div className="lg:col-span-8 flex flex-col gap-8 text-left">
              {faqData.map((category, catIdx) => (
                <div key={catIdx} className="flex flex-col gap-4">
                  {/* Category Header */}
                  <h3 className="text-lg font-bold font-display text-navy-900 border-b border-gray-100 pb-2.5 uppercase tracking-wider text-xs">
                    {category.category}
                  </h3>

                  <div className="flex flex-col gap-3">
                    {category.items.map((item) => {
                      const isOpen = openId === item.id;
                      return (
                        <div 
                          key={item.id} 
                          className={`faq-item bg-white border ${
                            isOpen ? 'border-gold-500 shadow-md' : 'border-gray-100'
                          } transition-all duration-300`}
                        >
                          {/* Trigger */}
                          <button
                            onClick={() => toggleAccordion(item.id)}
                            className="w-full px-6 py-4.5 flex items-center justify-between text-left gap-4 hover:bg-gray-50 transition-colors"
                          >
                            <span className="text-sm font-semibold text-navy-900">{item.question}</span>
                            <ChevronDown className={`w-4 h-4 text-gold-500 shrink-0 transition-transform duration-300 ${
                              isOpen ? 'rotate-180' : ''
                            }`} />
                          </button>

                          {/* Content Panel */}
                          <div className={`transition-all duration-300 overflow-hidden ${
                            isOpen ? 'max-h-80 opacity-100 border-t border-gray-50' : 'max-h-0 opacity-0'
                          }`}>
                            <div className="px-6 py-4.5 text-xs text-gray-500 leading-relaxed bg-surface/40">
                              {item.answer}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
