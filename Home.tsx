import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, BookOpen, Clock, Award, CheckCircle, ArrowRight, Star } from 'lucide-react';
import { COMPANY } from '../data/company';
import { services } from '../data/services';
import { testimonials } from '../data/testimonials';
import { SectionHeader } from '../components/ui/SectionHeader';

const AnimatedCounter: React.FC<{ end: number; duration?: number }> = ({ end, duration = 2 }) => {
  const [count, setCount] = React.useState(0);
  const elementRef = React.useRef<HTMLSpanElement>(null);
  const hasAnimated = React.useRef(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTimestamp: number | null = null;
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = elementRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [end, duration]);

  return <span ref={elementRef}>{count}</span>;
};

export const Home: React.FC = () => {

  return (
    <div className="overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative bg-navy-900 text-white min-h-[90vh] flex items-center pt-28 pb-20 overflow-hidden bg-dots">
        {/* Gradients */}
        <div className="absolute inset-0 bg-hero-gradient opacity-95" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Info */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left animate-fade-up">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gold-500/10 text-gold-400 border border-gold-500/20 max-w-fit uppercase tracking-widest">
                Coimbatore's Premier CA Firm
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-white">
                Empowering Businesses With <span className="gradient-text">Financial Excellence</span>
              </h1>
              
              <p className="text-lg text-white/80 max-w-xl font-light leading-relaxed">
                SKRL & Associates provides global corporate legal compliance, meticulous tax filing, strategic advisory, and audit solutions to startups, manufacturing units, and corporate firms.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <Link to="/contact" className="btn-primary flex items-center justify-center">
                  Contact Us <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/services" className="btn-outline flex items-center justify-center">
                  Explore Services
                </Link>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 mt-4">
                <div>
                  <h4 className="text-gold-400 font-bold text-lg font-display">100%</h4>
                  <p className="text-xs text-white/60">Compliance Rate</p>
                </div>
                <div>
                  <h4 className="text-gold-400 font-bold text-lg font-display">15+ Yrs</h4>
                  <p className="text-xs text-white/60">Professional Practice</p>
                </div>
                <div>
                  <h4 className="text-gold-400 font-bold text-lg font-display">500+</h4>
                  <p className="text-xs text-white/60">Corporate Clients</p>
                </div>
              </div>
            </div>

            {/* Right Card / Premium Frame */}
            <div className="lg:col-span-5 relative hidden lg:block animate-float">
              <div className="absolute inset-0 bg-gold-500/10 rounded-3xl blur-2xl" />
              <div className="relative glass-card p-8 border border-white/10 shadow-navy flex flex-col gap-6">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-gold-400 border border-white/20">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-display text-white">Corporate Guarantee</h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  We maintain strict confidentiality, absolute data safety, and double-layered statutory audits for all business records. Rest easy knowing Coimbatore's top consultants have your back.
                </p>
                <div className="flex flex-col gap-3 text-sm text-white/80">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-gold-400" />
                    <span>Timely Tax Filings Guaranteed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-gold-400" />
                    <span>Real-time Financial MIS Reports</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-gold-400" />
                    <span>Dedicated Expert Relationship Partner</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats Counters */}
      <section className="bg-white py-12 border-b border-gray-100 shadow-sm relative z-20 -mt-8 mx-4 sm:mx-8 lg:mx-16 rounded-2xl max-w-7xl lg:mx-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {COMPANY.stats.map((stat, idx) => (
              <div key={idx} className="pt-6 md:pt-0">
                <div className="text-3xl md:text-4xl font-extrabold font-display text-navy-900 stat-number">
                  <AnimatedCounter end={stat.value} duration={2.5} />

                  <span className="text-gold-500">{stat.suffix}</span>
                </div>
                <p className="text-xs md:text-sm font-semibold tracking-wider text-gray-500 uppercase mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Services Overview */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <SectionHeader
            badge="Solutions"
            title="Premium Corporate Services"
            subtitle="We handle complex compliance, accounting, audits, and statutory filings so you can focus entirely on expanding your business."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.id} className="card group p-8 flex flex-col justify-between h-full hover:shadow-card-hover transition-all">
                  <div className="flex flex-col gap-5">
                    <div className="service-icon-box">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold font-display text-navy-900 group-hover:text-gold-500 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-gray-50 flex justify-end">
                    <Link to={`/services#${service.id}`} className="text-xs font-bold text-navy-900 hover:text-gold-500 flex items-center gap-1 group/btn">
                      Learn More <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center mt-12">
            <Link to="/services" className="btn-navy">
              View All 13 Services
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <section className="section-padding bg-white relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Illustration / Frame */}
            <div className="lg:col-span-5 relative">
              <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-card border border-gray-100 bg-dots relative p-8 flex flex-col justify-center gap-6 bg-navy-900 text-white">
                <div className="absolute inset-0 bg-hero-gradient opacity-95" />
                <div className="relative z-10 flex flex-col gap-4">
                  <span className="tag bg-white/10 text-white border-white/20 self-start uppercase tracking-wider text-[10px]">
                    Client Centric Philosophy
                  </span>
                  <h3 className="text-2xl font-bold font-display text-white">The SKRL Code</h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    "We do not just calculate numbers; we secure reputations. Our commitment to absolute accuracy, robust transparency, and swift local service is what makes us Coimbatore's preferred advisors."
                  </p>
                  <div className="h-px bg-white/10 my-2" />
                  <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center font-bold text-white">
                      SK
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">CA S. Kirubakaran, FCA</h4>
                      <p className="text-xs text-white/50">Founding Partner</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Pillars */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              <SectionHeader
                badge="Why SKRL & Associates"
                title="Expertise You Can Bank On"
                subtitle="We operate at the highest standards of professional and technical excellence."
                center={false}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Pillar 1 */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center text-gold-500 shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-md font-bold font-display text-navy-900 mb-1">Decades of Expertise</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">Expert FCA and ACA partners offering reliable and structured consultancy.</p>
                  </div>
                </div>

                {/* Pillar 2 */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center text-gold-500 shrink-0">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-md font-bold font-display text-navy-900 mb-1">Tailored Advisory</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">Custom packages configured specially for your business model and target sector.</p>
                  </div>
                </div>

                {/* Pillar 3 */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center text-gold-500 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-md font-bold font-display text-navy-900 mb-1">Fast Turnaround</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">Zero-delay return filings and instant support on statutory notices.</p>
                  </div>
                </div>

                {/* Pillar 4 */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center text-gold-500 shrink-0">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-md font-bold font-display text-navy-900 mb-1">Secure & Confidential</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">Complete electronic and physical data encryption protocols for financial records.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Process / Timeline Section */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <SectionHeader
            badge="Workflow"
            title="How We Deliver Excellence"
            subtitle="Our structured and systematic process ensures hassle-free compliance and strategic planning."
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Step 1 */}
            <div className="relative flex flex-col gap-4 p-6 bg-white rounded-2xl shadow-card hover:shadow-md transition-shadow">
              <div className="w-8 h-8 rounded-full bg-navy-900 text-gold-500 flex items-center justify-center font-bold text-sm">
                1
              </div>
              <h4 className="text-lg font-bold font-display text-navy-900">Discovery Call</h4>
              <p className="text-xs text-gray-500 leading-relaxed">We schedule an initial consultation to understand your requirements, business size, and gaps.</p>
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col gap-4 p-6 bg-white rounded-2xl shadow-card hover:shadow-md transition-shadow">
              <div className="w-8 h-8 rounded-full bg-navy-900 text-gold-500 flex items-center justify-center font-bold text-sm">
                2
              </div>
              <h4 className="text-lg font-bold font-display text-navy-900">Document Audit</h4>
              <p className="text-xs text-gray-500 leading-relaxed">Our tax experts carry out a preliminary audit of GST, ROC, and physical books.</p>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col gap-4 p-6 bg-white rounded-2xl shadow-card hover:shadow-md transition-shadow">
              <div className="w-8 h-8 rounded-full bg-navy-900 text-gold-500 flex items-center justify-center font-bold text-sm">
                3
              </div>
              <h4 className="text-lg font-bold font-display text-navy-900">Strategy Design</h4>
              <p className="text-xs text-gray-500 leading-relaxed">We design a custom legal calendar, plan deductions, and automate recurring filing cycles.</p>
            </div>

            {/* Step 4 */}
            <div className="relative flex flex-col gap-4 p-6 bg-white rounded-2xl shadow-card hover:shadow-md transition-shadow">
              <div className="w-8 h-8 rounded-full bg-navy-900 text-gold-500 flex items-center justify-center font-bold text-sm">
                4
              </div>
              <h4 className="text-lg font-bold font-display text-navy-900">Filing & Reports</h4>
              <p className="text-xs text-gray-500 leading-relaxed">We submit direct/indirect tax filings, ROC logs, and supply real-time financial dashboards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Testimonials Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            badge="Client Trust"
            title="What Our Clients Say"
            subtitle="We maintain an absolute 98% satisfaction rating amongst Coimbatore's corporate firms."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial) => (
              <div key={testimonial.id} className="card p-8 flex flex-col justify-between gap-6">
                <div className="flex flex-col gap-4">
                  <div className="flex gap-1 text-gold-500">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 italic leading-relaxed">
                    "{testimonial.review}"
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-gray-50">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xs ${testimonial.color}`}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-navy-900 leading-none">{testimonial.name}</h4>
                    <p className="text-[11px] text-gray-400 mt-1">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Link to="/testimonials" className="btn-outline border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white">
              Read All Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Contact CTA Preview */}
      <section className="bg-navy-900 text-white py-16 relative overflow-hidden bg-dots">
        <div className="absolute inset-0 bg-hero-gradient opacity-95" />
        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
            <div className="text-left max-w-xl">
              <span className="text-gold-400 font-semibold tracking-wider text-xs uppercase block mb-2">Have a question?</span>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-3">Let's discuss your financial roadmap</h2>
              <p className="text-sm text-white/70">Contact our Coimbatore head office today. We offer specialized consulting packages suited to your corporate structure.</p>
            </div>
            <div className="flex gap-4 shrink-0">
              <Link to="/contact" className="btn-primary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
