import React, { useState } from 'react';
import { Check, Clock, Send } from 'lucide-react';

export default function CostEstimator({ onRequestProposal }) {
  const [selectedServices, setSelectedServices] = useState(['dev-web', 'deploy-cloud']);
  const [timeline, setTimeline] = useState('standard');
  const [slaTier, setSlaTier] = useState('silver');

  const serviceOptions = [
    { id: 'dev-web', name: 'Custom Web Application (React / Next.js)', basePrice: 2200, timeWeeks: 2.5 },
    { id: 'dev-backend', name: 'REST / GraphQL Web API (Node.js & Express)', basePrice: 1800, timeWeeks: 2 },
    { id: 'dev-ai', name: 'AI & Web Automation Integration', basePrice: 1500, timeWeeks: 1.5 },
    { id: 'deploy-cloud', name: 'Cloud Infrastructure & Web Hosting (AWS/Vercel)', basePrice: 1400, timeWeeks: 1 },
    { id: 'deploy-cicd', name: 'Automated CI/CD Pipelines & Domain SSL', basePrice: 900, timeWeeks: 0.5 },
    { id: 'ops-monitoring', name: '24/7 Web Error & Health Monitoring (Sentry)', basePrice: 800, timeWeeks: 0.5 }
  ];

  const slaOptions = [
    { id: 'none', name: 'No Monthly SLA', monthlyPrice: 0 },
    { id: 'bronze', name: 'Starter Care SLA ($299/mo)', monthlyPrice: 299 },
    { id: 'silver', name: 'Pro 99.9% Ops SLA ($799/mo)', monthlyPrice: 799 },
    { id: 'gold', name: 'Enterprise 24/7 SLA ($1,499/mo)', monthlyPrice: 1499 }
  ];

  const toggleService = (id) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length === 1) return;
      setSelectedServices(selectedServices.filter(s => s !== id));
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  let initialCost = selectedServices.reduce((sum, id) => {
    const srv = serviceOptions.find(s => s.id === id);
    return sum + (srv ? srv.basePrice : 0);
  }, 0);

  let initialTime = selectedServices.reduce((sum, id) => {
    const srv = serviceOptions.find(s => s.id === id);
    return sum + (srv ? srv.timeWeeks : 0);
  }, 0);

  let speedMultiplier = timeline === 'fast' ? 1.25 : timeline === 'relaxed' ? 0.9 : 1.0;
  let estimatedTotal = Math.round(initialCost * speedMultiplier);
  let estimatedWeeks = Math.max(1, Math.round(initialTime * (timeline === 'fast' ? 0.75 : 1)));

  const selectedSlaObj = slaOptions.find(s => s.id === slaTier);

  const handleSendEstimate = () => {
    const summary = {
      services: selectedServices.map(id => serviceOptions.find(s => s.id === id)?.name),
      timeline,
      estimatedTotal,
      estimatedWeeks,
      sla: selectedSlaObj?.name
    };
    onRequestProposal(summary);
  };

  return (
    <section id="estimator" style={{ padding: '5rem 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 2.5rem auto' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
            Interactive Web Project Cost Estimator
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            Select your web application & hosting requirements to calculate estimated delivery time and budget.
          </p>
        </div>

        <div className="card" style={{ padding: '2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem' }} className="estimator-grid">
            
            <div>
              {/* Step 1 */}
              <div style={{ marginBottom: '1.75rem' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.85rem' }}>
                  1. Select Web Services Scope
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '0.65rem' }}>
                  {serviceOptions.map((srv) => {
                    const isSelected = selectedServices.includes(srv.id);
                    return (
                      <div
                        key={srv.id}
                        onClick={() => toggleService(srv.id)}
                        style={{
                          background: isSelected ? 'var(--accent-light)' : 'var(--bg-primary)',
                          border: isSelected ? '1px solid var(--accent)' : '1px solid var(--border-color)',
                          borderRadius: '10px',
                          padding: '0.85rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.65rem'
                        }}
                      >
                        <div style={{
                          width: '18px',
                          height: '18px',
                          borderRadius: '4px',
                          background: isSelected ? 'var(--accent)' : 'transparent',
                          border: isSelected ? 'none' : '1px solid var(--text-muted)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}>
                          {isSelected && <Check size={12} style={{ color: '#fff' }} />}
                        </div>
                        <div>
                          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', display: 'block' }}>
                            {srv.name}
                          </span>
                          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                            ${srv.basePrice.toLocaleString()} • {srv.timeWeeks} wks
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 2 */}
              <div style={{ marginBottom: '1.75rem' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.85rem' }}>
                  2. Delivery Pace
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
                  {[
                    { id: 'relaxed', label: 'Standard Pace' },
                    { id: 'standard', label: 'Fast Track' },
                    { id: 'fast', label: 'Sprint / Rush' }
                  ].map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setTimeline(t.id)}
                      style={{
                        background: timeline === t.id ? 'var(--accent-light)' : 'var(--bg-primary)',
                        border: timeline === t.id ? '1px solid var(--accent)' : '1px solid var(--border-color)',
                        color: timeline === t.id ? 'var(--accent)' : 'var(--text-secondary)',
                        borderRadius: '8px',
                        padding: '0.65rem',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        cursor: 'pointer'
                      }}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3 */}
              <div>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.85rem' }}>
                  3. Post-Deployment SLA Maintenance Tier
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.5rem' }}>
                  {slaOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setSlaTier(opt.id)}
                      style={{
                        background: slaTier === opt.id ? 'var(--badge-ops-bg)' : 'var(--bg-primary)',
                        border: slaTier === opt.id ? '1px solid var(--badge-ops-text)' : '1px solid var(--border-color)',
                        color: slaTier === opt.id ? 'var(--badge-ops-text)' : 'var(--text-secondary)',
                        borderRadius: '8px',
                        padding: '0.65rem 0.85rem',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        textAlign: 'left'
                      }}
                    >
                      {opt.name}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Summary Column */}
            <div style={{
              background: 'var(--bg-primary)',
              border: '1px solid var(--border-color)',
              borderRadius: '14px',
              padding: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1.25rem' }}>
                  Estimate Summary
                </h4>

                <div style={{ background: 'var(--bg-card)', padding: '1.25rem', borderRadius: '12px', border: '1px solid var(--border-color)', marginBottom: '1.25rem' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', uppercase: true, fontWeight: 600 }}>Estimated Build & Cloud Setup</span>
                  <div style={{ fontSize: '2.25rem', fontWeight: 700, color: 'var(--accent)', marginTop: '0.2rem', fontFamily: 'var(--font-heading)' }}>
                    ${estimatedTotal.toLocaleString()} <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>USD</span>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Clock size={14} style={{ color: 'var(--accent)' }} />
                    Timeline: <strong>{estimatedWeeks} - {estimatedWeeks + 1} Weeks</strong>
                  </div>
                </div>

                {selectedSlaObj && selectedSlaObj.monthlyPrice > 0 && (
                  <div style={{ background: 'var(--badge-ops-bg)', padding: '0.85rem 1rem', borderRadius: '10px', border: '1px solid var(--badge-ops-text)', marginBottom: '1.25rem', color: 'var(--badge-ops-text)', fontSize: '0.85rem', fontWeight: 600 }}>
                    Monthly SLA: ${selectedSlaObj.monthlyPrice.toLocaleString()} / month
                  </div>
                )}
              </div>

              <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={handleSendEstimate}>
                <Send size={16} />
                Send Estimate Proposal
              </button>
            </div>

          </div>
        </div>

      </div>

      <style>{`
        @media (min-width: 992px) {
          .estimator-grid {
            grid-template-columns: 1.2fr 0.8fr !important;
          }
        }
      `}</style>
    </section>
  );
}
