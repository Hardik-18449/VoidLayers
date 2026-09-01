import React from 'react';
import { Layers } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg-card)',
      borderTop: '1px solid var(--border-color)',
      padding: '3rem 0 2rem 0',
      color: 'var(--text-secondary)'
    }}>
      <div className="container">
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.25rem',
          textAlign: 'center'
        }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <div className="icon-box" style={{ width: '32px', height: '32px', borderRadius: '8px' }}>
              <Layers size={18} />
            </div>
            <span style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              VoidLayer
            </span>
          </div>

          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', maxWidth: '500px' }}>
            Software Engineering & Cloud Operations Organization. Development • Deployment • 24/7 SLA Ops.
          </p>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            fontSize: '0.8rem',
            fontWeight: 600,
            marginTop: '0.5rem'
          }}>
            <a href="#services" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Services</a>
            <a href="#lifecycle" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Lifecycle</a>
            <a href="#portfolio" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Case Studies</a>
            <a href="#estimator" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Estimator</a>
            <a href="#contact" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Contact</a>
          </div>

          <div style={{
            fontSize: '0.775rem',
            color: 'var(--text-muted)',
            paddingTop: '1.5rem',
            borderTop: '1px solid var(--border-color)',
            width: '100%',
            marginTop: '1rem'
          }}>
            © {new Date().getFullYear()} <strong>VoidLayer Organization</strong>. All rights reserved.
          </div>

        </div>

      </div>
    </footer>
  );
}
