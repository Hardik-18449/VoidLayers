import React, { useState } from 'react';
import { Layers, Menu, X, ArrowRight, Sun, Moon } from 'lucide-react';

export default function Navbar({ onOpenEstimator, theme, onToggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Lifecycle', href: '#lifecycle' },
    { label: 'Tech Stack', href: '#techstack' },
    { label: 'Case Studies', href: '#portfolio' },
    { label: 'Estimator', href: '#estimator' },
    { label: '24/7 SLA', href: '#sla' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backgroundColor: 'var(--bg-primary)',
      borderBottom: '1px solid var(--border-color)',
      padding: '0.85rem 0'
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Brand Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <div className="icon-box" style={{ width: '36px', height: '36px', borderRadius: '10px' }}>
            <Layers size={20} />
          </div>
          <div>
            <span style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.02em', fontFamily: 'var(--font-heading)' }}>
              VoidLayer
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '1.75rem' }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                fontSize: '0.875rem',
                fontWeight: 500,
                transition: 'color 0.15s ease'
              }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--text-primary)')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action & Theme Toggle */}
        <div style={{ display: 'none', alignItems: 'center', gap: '0.75rem' }} className="desktop-actions">
          <button
            onClick={onToggleTheme}
            style={{
              padding: '0.55rem',
              borderRadius: '10px',
              border: '1px solid var(--border-color)',
              background: 'var(--bg-card)',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button onClick={onOpenEstimator} className="btn-primary" style={{ padding: '0.55rem 1.15rem', fontSize: '0.85rem' }}>
            <span>Estimate Scope</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} className="mobile-actions">
          <button
            onClick={onToggleTheme}
            style={{
              padding: '0.5rem',
              borderRadius: '8px',
              border: '1px solid var(--border-color)',
              background: 'var(--bg-card)',
              color: 'var(--text-secondary)',
              cursor: 'pointer'
            }}
            className="mobile-toggle"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              padding: '0.5rem',
              borderRadius: '8px',
              border: '1px solid var(--border-color)',
              background: 'var(--bg-card)',
              color: 'var(--text-primary)',
              cursor: 'pointer'
            }}
            className="mobile-toggle"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          background: 'var(--bg-secondary)',
          borderBottom: '1px solid var(--border-color)',
          padding: '1.25rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.85rem'
        }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: 'var(--text-primary)',
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: 500,
                padding: '0.4rem 0'
              }}
            >
              {link.label}
            </a>
          ))}
          <button 
            className="btn-primary" 
            style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenEstimator();
            }}
          >
            Estimate Scope
            <ArrowRight size={14} />
          </button>
        </div>
      )}

      <style>{`
        @media (min-width: 992px) {
          .desktop-nav { display: flex !important; }
          .desktop-actions { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
}
