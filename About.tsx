import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Shield, Target, Eye, ShieldCheck, Heart, Award, Users } from 'lucide-react';

import { COMPANY } from '../data/company';

export const About: React.FC = () => {
  const values = [
    {
      icon: ShieldCheck,
      title: 'Uncompromising Integrity',
      desc: 'We adhere to the highest standards of professional ethics, delivering transparent, objective, and unbiased financial guidance.'
    },
    {
      icon: Target,
      title: 'Precision & Accuracy',
      desc: 'In accounting and compliance, a single decimal error can trigger penalties. We maintain rigorous double-verification models.'
    },
    {
      icon: Eye,
      title: 'Strategic Foresight',
      desc: 'We do not just look at historical sheets. We model future tax liabilities, capital expansions, and cash flows to steer growth.'
    },
    {
      icon: Heart,
      title: 'Client Confidentiality',
      desc: 'We enforce enterprise-grade digital safety parameters, keeping your corporate secrets, strategy plans, and books secure.'
    }
  ];

  const team = [
    {
      name: 'CA S. Kirubakaran, FCA',
      role: 'Founding Partner & Senior Auditor',
      credentials: 'B.Com, FCA (15+ Years Practice)',
      bio: 'Specializes in statutory audits, direct taxation schemes, corporate restructuring audits, and financial advisory for Coimbatore industrial complexes.',
      initials: 'SK',
      color: 'bg-navy-950',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'CA R. Loganathan, ACA',
      role: 'Partner – Indirect Taxation & Startups',
      credentials: 'M.Com, ACA (8+ Years Practice)',
      bio: 'Leads our GST input reconciliation desk, MCA/ROC incorporation schedules, FDI compliance protocols, and technology startup pitch-deck formulation.',
      initials: 'RL',
      color: 'bg-gold-600',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Lakshman Patel',
      role: 'Senior Managing Partner',
      credentials: 'MBA Finance, Corporate Advisor (20+ Years Experience)',
      bio: 'Expert advisor in international banking regulatory structures, joint-venture capital allocation models, corporate debt consolidation, and cross-border commercial laws.',
      initials: 'LP',
      color: 'bg-navy-700',
      linkedin: 'https://www.linkedin.com/in/lakshman-patel-2a258618/'
    }
  ];


  return (
    <div>
      <PageHero
        title="About Our Firm"
        description="Coimbatore's premium CA advisory firm guiding startups, manufacturers, and export companies through the complex Indian regulatory landscape."
        currentPage="About Us"
      />

      {/* Firm Overview Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 flex flex-col gap-6 text-left">
              <span className="tag uppercase tracking-widest text-[10px] self-start">Overview</span>
              <h2 className="section-title text-balance">
                Your Trusted Advisors in Finance & Compliance
              </h2>
              <div className="gold-divider" />
              <p className="text-gray-600 text-sm leading-relaxed">
                Founded with a vision to streamline complex Indian taxation laws, <strong>{COMPANY.fullName}</strong> has grown into a trusted financial consulting powerhouse in Coimbatore. We support enterprises of all sizes, transforming accounting from a mandatory chore into a strategic leverage tool.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                We believe that premium financial consulting should not be restricted to huge conglomerates. We bring corporate-level audit quality, strict timeline adherence, and legal transparency to tech startups, local retailers, and established manufacturing plants.
              </p>

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-100">
                <div>
                  <h4 className="text-2xl font-bold font-display text-navy-900">15+</h4>
                  <p className="text-[11px] text-gray-400 uppercase tracking-wider font-semibold">Years Active</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold font-display text-navy-900">500+</h4>
                  <p className="text-[11px] text-gray-400 uppercase tracking-wider font-semibold">Clients Served</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold font-display text-navy-900">100%</h4>
                  <p className="text-[11px] text-gray-400 uppercase tracking-wider font-semibold">Compliant filings</p>
                </div>
              </div>
            </div>

            {/* Right Card */}
            <div className="lg:col-span-6">
              <div className="p-8 bg-surface rounded-3xl shadow-card border border-gray-100 flex flex-col gap-6 bg-dots relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold-500/10 rounded-full blur-2xl" />
                <h3 className="text-xl font-bold font-display text-navy-900">Our Professional Promise</h3>
                
                <div className="flex flex-col gap-5">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm text-gold-500 shrink-0">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-navy-900">Zero Legal Hassles</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">We proactively manage all your renewal and return dates, shielding you from penalties.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm text-gold-500 shrink-0">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-navy-900">Dedicated CA Partners</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">Your files are handled directly by qualified chartered accountants, never outsourced.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm text-gold-500 shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-navy-900">Tech-First Accounting</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">We supply cloud financial books, visual asset grids, and electronic reconciliation.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="p-8 bg-white rounded-3xl shadow-card flex flex-col gap-5">
              <div className="w-12 h-12 rounded-xl bg-gold-50 flex items-center justify-center text-gold-500 shadow-sm">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-display text-navy-900">Our Vision</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                To be India's most client-centric corporate financial advisory firm, known for combining traditional fiduciary integrity with cutting-edge digital accounting technologies. We aim to convert complex regulatory challenges into structured corporate advantages for our clients.
              </p>
            </div>

            {/* Mission */}
            <div className="p-8 bg-white rounded-3xl shadow-card flex flex-col gap-5">
              <div className="w-12 h-12 rounded-xl bg-gold-50 flex items-center justify-center text-gold-500 shadow-sm">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-display text-navy-900">Our Mission</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                To secure our clients' reputations and drive growth by offering impeccable statutory audits, legal filing compliance, strategic cost advisory, and customized corporate structures. We seek to protect businesses from statutory errors while legally minimizing tax burdens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            badge="Ethos"
            title="Our Professional Values"
            subtitle="The core tenets that guide every audit, report, advice, and service we render."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div key={idx} className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4">
                  <div className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center text-gold-500 shadow-sm shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-md font-bold font-display text-navy-900">{val.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <SectionHeader
            badge="Leadership"
            title="The Leadership Team"
            subtitle="Meet the certified Chartered Accountants steering compliance and financial strategies for our clients."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((member, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 shadow-card flex flex-col justify-between h-full text-left border border-gray-100 hover:shadow-card-hover transition-all">
                <div>
                  <div className="flex gap-4 items-center justify-between">
                    <div className="flex gap-4 items-center">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white text-base font-bold shadow-navy shrink-0 ${member.color}`}>
                        {member.initials}
                      </div>
                      <div>
                        <h3 className="text-sm font-bold font-display text-navy-900 leading-tight">{member.name}</h3>
                        <p className="text-[11px] text-gold-600 font-semibold mt-1 uppercase leading-none">{member.role}</p>
                      </div>
                    </div>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-navy-50 text-gold-500 hover:bg-gold-500 hover:text-white flex items-center justify-center transition-colors shadow-sm shrink-0"
                        title="LinkedIn Profile"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>

                      </a>
                    )}
                  </div>
                  <div className="h-px bg-gray-100 my-4" />
                  <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mb-2">{member.credentials}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
