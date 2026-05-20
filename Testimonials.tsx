import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeader } from '../components/ui/SectionHeader';
import { testimonials } from '../data/testimonials';
import { Star, ShieldCheck, Heart } from 'lucide-react';


export const Testimonials: React.FC = () => {
  return (
    <div>
      <PageHero
        title="Client Reviews & Trust"
        description="Read real-world testimonials from managing directors, startup founders, and medical professionals who rely on our compliance advice."
        currentPage="Testimonials"
      />

      {/* Trust Highlights Section */}
      <section className="section-padding bg-white pb-10">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
            <div className="p-8 bg-surface rounded-2xl border border-gray-100 flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gold-50 flex items-center justify-center text-gold-500 shadow-sm shrink-0">
                <Star className="w-6 h-6 fill-current" />
              </div>
              <h3 className="text-3xl font-bold font-display text-navy-900 leading-none">4.9 / 5</h3>
              <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Average Rating</p>
              <p className="text-[11px] text-gray-400">Based on audited client satisfaction questionnaires from FY 2025-26.</p>
            </div>

            <div className="p-8 bg-surface rounded-2xl border border-gray-100 flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gold-50 flex items-center justify-center text-gold-500 shadow-sm shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold font-display text-navy-900 leading-none">98.5%</h3>
              <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Retention Rate</p>
              <p className="text-[11px] text-gray-400">Clients who sign with us for monthly accounting continue for multiple years.</p>
            </div>

            <div className="p-8 bg-surface rounded-2xl border border-gray-100 flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gold-50 flex items-center justify-center text-gold-500 shadow-sm shrink-0">
                <Heart className="w-6 h-6 fill-current" />
              </div>
              <h3 className="text-3xl font-bold font-display text-navy-900 leading-none">500+</h3>
              <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Happy Partnerships</p>
              <p className="text-[11px] text-gray-400">From micro-proprietorships to large multi-crore manufacturing units.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Review Grid */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <SectionHeader
            badge="Testimonials"
            title="Real Stories from Valued Partners"
            subtitle="Explore direct reviews detailing how we handle audits, clear complex tax logs, and optimize statutory planning."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-3xl p-8 shadow-card border border-gray-100 hover:shadow-card-hover transition-all flex flex-col justify-between gap-6 text-left">
                <div className="flex flex-col gap-4">
                  {/* Rating */}
                  <div className="flex gap-1 text-gold-500">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-sm text-gray-600 italic leading-relaxed">
                    "{testimonial.review}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-50 mt-auto">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0 ${testimonial.color}`}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-navy-900 leading-none">{testimonial.name}</h4>
                    <p className="text-[10px] text-gray-400 mt-1 uppercase font-semibold tracking-wider">{testimonial.role}</p>
                    <p className="text-[10px] text-gold-600 font-medium mt-0.5">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust CTA banner */}
      <section className="bg-navy-900 text-white py-16 bg-dots relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-95" />
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto flex flex-col items-center gap-5">
          <span className="tag bg-white/10 text-white border-white/20 uppercase tracking-widest text-[10px]">Partner with us</span>
          <h2 className="text-3xl font-bold font-display text-white">Experience premium advisory for your brand</h2>
          <p className="text-sm text-white/70 max-w-xl">
            Join 500+ businesses who rely on SKRL & Associates to safeguard compliance and plan their tax strategies. Reach out to our Coimbatore partners.
          </p>
          <a
            href="https://wa.me/919787922216?text=Hi,%20I'd%20like%20to%20partner%20with%20SKRL%20Associates%20for%20my%20company's%20accounts."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-2"
          >
            Schedule Onboarding Call
          </a>
        </div>
      </section>
    </div>
  );
};
