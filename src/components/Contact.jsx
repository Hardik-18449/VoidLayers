import React, { useState, useEffect } from 'react';
import { Mail, Send, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';

export default function Contact({ prefilledData, onSubmitSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '$5k - $15k',
    details: ''
  });

  useEffect(() => {
    if (prefilledData) {
      let customText = '';
      if (prefilledData.services) {
        customText = `[Calculated Estimate]\nServices: ${prefilledData.services.join(', ')}\nTimeline: ${prefilledData.estimatedWeeks} Weeks\nBudget Estimate: $${prefilledData.estimatedTotal.toLocaleString()} USD\nSLA Plan: ${prefilledData.sla || 'None'}`;
      } else if (prefilledData.title) {
        customText = `Inquiry regarding service: ${prefilledData.title}`;
      } else if (prefilledData.name) {
        customText = `Inquiry regarding SLA Plan: ${prefilledData.name} (${prefilledData.price})`;
      }

      setFormData((prev) => ({
        ...prev,
        details: customText
      }));

      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [prefilledData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    onSubmitSuccess(`Thank you ${formData.name}! VoidLayer's team will contact you within 4 hours with a custom proposal.`);

    setFormData({
      name: '',
      email: '',
      company: '',
      budget: '$5k - $15k',
      details: ''
    });
  };

  return (
    <section id="contact" style={{ padding: '5rem 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
      <div className="container">

        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 2.5rem auto' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
            Start a Conversation
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            Get in touch with our engineering lead to discuss your software development or cloud infrastructure needs.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }} className="contact-grid">

          {/* Info Card */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem' }}>
                Why Partner With VoidLayer?
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '0.85rem' }}>
                  <div className="icon-box" style={{ width: '36px', height: '36px' }}>
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>Direct Senior Engineer Access</h4>
                    <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', marginTop: '0.1rem' }}>
                      Work directly with experienced developers and architects. Zero middle management layers.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.85rem' }}>
                  <div className="icon-box" style={{ width: '36px', height: '36px' }}>
                    <Clock size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>4-Hour Proposal Turnaround</h4>
                    <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', marginTop: '0.1rem' }}>
                      We analyze your project specifications and return technical feedback quickly.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.85rem' }}>
                  <div className="icon-box" style={{ width: '36px', height: '36px' }}>
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>100% Source Code Ownership</h4>
                    <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', marginTop: '0.1rem' }}>
                      Full ownership of repositories, cloud topologies, and IP rights.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{
              background: 'var(--bg-primary)',
              border: '1px solid var(--border-color)',
              borderRadius: '10px',
              padding: '1rem',
              marginTop: '2rem'
            }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>Direct Email Contact</span>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--accent)', marginTop: '0.2rem', fontFamily: 'var(--font-mono)' }}>
                voidlayerinfra@gmail.com
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="card">
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Alex Mercer"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    placeholder="VoidLayer Tech"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                    Estimated Budget Scope
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  >
                    <option value="< $5k">Under $5,000</option>
                    <option value="$5k - $15k">$5,000 - $15,000</option>
                    <option value="$15k - $40k">$15,000 - $40,000</option>
                    <option value="$40k+">$40,000+ Enterprise</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                  Project Overview & Specifications
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe your software development or deployment requirements..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                />
              </div>

              <button type="submit" className="btn-primary" style={{ justifyContent: 'center' }}>
                <Send size={16} />
                Send Proposal Request
              </button>

            </form>
          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 992px) {
          .contact-grid {
            grid-template-columns: 0.9fr 1.1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
