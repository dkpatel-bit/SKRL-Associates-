import React, { useState } from 'react';
import { PageHero } from '../components/ui/PageHero';
import { COMPANY } from '../data/company';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';


export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'GST Registration',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate simple inputs
    if (!formData.name || !formData.phone || !formData.message) {
      alert('Please fill out all mandatory fields.');
      return;
    }

    // Simulate successful form submit
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'GST Registration',
        message: ''
      });
      setIsSubmitted(false);
    }, 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <PageHero
        title="Contact Us"
        description="Book your appointment, send files, or consult directly with Coimbatore's leading CA partners."
        currentPage="Contact Us"
      />

      {/* Main Form and Info Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">

            {/* Left Column: Contact Cards */}
            <div className="lg:col-span-5 flex flex-col gap-6 text-left">
              <span className="tag uppercase tracking-widest text-[10px] self-start">Coimbatore Branch</span>
              <h2 className="text-3xl font-bold font-display text-navy-900 leading-tight">Get In Touch</h2>
              <p className="text-xs text-gray-500 leading-relaxed">
                Our main office is situated in the central district of Ram Nagar in Coimbatore. Visit us for detailed strategy audits or document drops.
              </p>

              <div className="h-px bg-gray-100 my-2" />

              <div className="flex flex-col gap-5">
                {/* Address */}
                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-surface transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center text-gold-500 shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-navy-900">Office Location</h4>
                    <p className="text-xs text-gray-500 leading-relaxed mt-1">{COMPANY.address}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-surface transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center text-gold-500 shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-navy-900">Phone Numbers</h4>
                    <a href={`tel:${COMPANY.phoneRaw}`} className="text-xs text-gray-500 hover:text-gold-500 transition-colors mt-1 block">
                      {COMPANY.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-surface transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center text-gold-500 shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-navy-900">Email Desk</h4>
                    <a href={`mailto:${COMPANY.email}`} className="text-xs text-gray-500 hover:text-gold-500 transition-colors mt-1 block">
                      {COMPANY.email}
                    </a>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-surface transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center text-gold-500 shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-navy-900">Office Hours</h4>
                    <p className="text-xs text-gray-500 leading-relaxed mt-1">{COMPANY.officeHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7 bg-surface p-8 rounded-3xl border border-gray-100 shadow-card relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold-500/10 rounded-full blur-2xl" />

              <h3 className="text-xl font-bold font-display text-navy-900 mb-6 text-left">Consultation Request Form</h3>

              {isSubmitted ? (
                <div className="py-16 flex flex-col items-center justify-center gap-4 text-center animate-fade-in">
                  <div className="w-14 h-14 rounded-full bg-gold-50 border border-gold-200 text-gold-500 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold font-display text-navy-900">Request Sent Successfully</h4>
                  <p className="text-xs text-gray-500 max-w-sm">
                    Thank you! Our relationship partner will get in touch with you at the registered number within 2 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold text-navy-900 mb-2 uppercase">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="input-field text-xs"
                      />
                    </div>
                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold text-navy-900 mb-2 uppercase">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="input-field text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-navy-900 mb-2 uppercase">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="input-field text-xs"
                      />
                    </div>
                    {/* Subject */}
                    <div>
                      <label className="block text-xs font-bold text-navy-900 mb-2 uppercase">Service Required</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="input-field text-xs bg-white"
                      >
                        <option value="GST Registration">GST Registration & Filing</option>
                        <option value="Income Tax Return">Income Tax Return Filing</option>
                        <option value="Company Incorporation">Company Registration</option>
                        <option value="ROC Compliance">ROC Compliance</option>
                        <option value="Audit & Assurance">Audit & Assurance</option>
                        <option value="Startup Advisory">Startup Advisory</option>
                        <option value="Other Service">Other Specialized Service</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-navy-900 mb-2 uppercase">Brief Description of Gaps *</label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please mention details regarding your business size or specific query..."
                      className="input-field text-xs resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn-primary py-3.5 px-8 rounded-xl font-bold flex items-center justify-center gap-2 mt-2 w-full sm:w-auto"
                  >
                    Submit Request <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>


    </div>
  );
};
