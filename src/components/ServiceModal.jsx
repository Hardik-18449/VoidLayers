import React from 'react';
import { X, CheckCircle2, PackageCheck, ArrowRight } from 'lucide-react';

export default function ServiceModal({ service, onClose, onSelectService }) {
  if (!service) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 2000,
      background: 'rgba(0, 0, 0, 0.65)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem'
    }}>
      <div 
        className="card" 
        style={{
          width: '100%',
          maxWidth: '600px',
          maxHeight: '85vh',
          overflowY: 'auto',
          padding: '2rem',
          position: 'relative',
          background: 'var(--bg-card)'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-color)',
            color: 'var(--text-primary)',
            borderRadius: '8px',
            padding: '0.35rem',
            cursor: 'pointer'
          }}
        >
          <X size={18} />
        </button>

        <div style={{ marginBottom: '1.25rem' }}>
          <span className={service.badgeClass}>{service.badge}</span>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', marginTop: '0.4rem' }}>
            {service.title}
          </h3>
        </div>

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.75rem' }}>
          {service.longDesc || service.shortDesc}
        </p>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
            Core Capabilities
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {service.features.map((feat, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--accent)', marginTop: '2px', flexShrink: 0 }} />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
            Deliverables Included
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {service.deliverables.map((deliv, idx) => (
              <span key={idx} style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)',
                padding: '0.25rem 0.65rem',
                borderRadius: '6px',
                fontSize: '0.8rem',
                fontWeight: 600
              }}>
                ✓ {deliv}
              </span>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
          <button className="btn-secondary" onClick={onClose}>
            Close
          </button>
          <button 
            className="btn-primary" 
            onClick={() => {
              onSelectService(service);
              onClose();
            }}
          >
            Request This Service
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </div>
  );
}
