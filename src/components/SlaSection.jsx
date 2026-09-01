import React from 'react';
import { slaTiers } from '../data/slaData.js';
import { CheckCircle2, ShieldCheck } from 'lucide-react';

export default function SlaSection({ onRequestSlaTier }) {
  return (
    <section id="sla" style={{ padding: '5rem 0' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 2.5rem auto' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
            24/7 SLA & Managed Support Plans
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            Post-deployment monitoring, security patching, and emergency incident resolution guarantees.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem'
        }}>
          {slaTiers.map((tier) => (
            <div
              key={tier.id}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: tier.featured ? '2px solid var(--accent)' : '1px solid var(--border-color)',
                position: 'relative'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                    {tier.name}
                  </h3>
                  {tier.featured && (
                    <span className="badge-dev">Popular</span>
                  )}
                </div>

                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
                  {tier.subtitle}
                </p>

                <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'baseline', gap: '0.25rem' }}>
                  <span style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                    {tier.price}
                  </span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                    {tier.period}
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.75rem' }}>
                  {tier.features.map((feat, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      <CheckCircle2 size={16} style={{ color: 'var(--accent)', marginTop: '2px', flexShrink: 0 }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                className={tier.featured ? 'btn-primary' : 'btn-secondary'}
                style={{ width: '100%', justifyContent: 'center' }}
                onClick={() => onRequestSlaTier(tier)}
              >
                Select {tier.name}
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
