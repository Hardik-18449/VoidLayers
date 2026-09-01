import React from 'react';
import { ArrowRight, Sparkles, Code, Cloud, ShieldCheck, Zap, Server } from 'lucide-react';

export default function Hero({ onOpenEstimator }) {
  return (
    <section style={{ padding: '5rem 0 4rem 0' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        
        {/* Eyebrow Pill */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.4rem 1rem',
          borderRadius: '9999px',
          background: 'var(--accent-light)',
          border: '1px solid var(--border-color)',
          color: 'var(--accent)',
          fontSize: '0.8rem',
          fontWeight: 500,
          marginBottom: '1.5rem',
          letterSpacing: '0.02em'
        }}>
          <Sparkles size={14} />
          <span>Full-Lifecycle Software & Cloud Engineering</span>
        </div>

        {/* Main Headline */}
        <h1 style={{
          fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
          fontWeight: 600,
          lineHeight: 1.15,
          letterSpacing: '-0.03em',
          color: 'var(--text-primary)',
          maxWidth: '850px',
          margin: '0 auto 1.25rem auto'
        }}>
          Software Services Built for High-Performance Companies
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: '1.05rem',
          color: 'var(--text-secondary)',
          maxWidth: '650px',
          margin: '0 auto 2.25rem auto',
          lineHeight: 1.65,
          fontWeight: 400
        }}>
          VoidLayer delivers end-to-end digital solutions — from custom React/Node application development to automated Kubernetes cloud deployment and 24/7 post-deployment maintenance.
        </p>

        {/* Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '4.5rem' }}>
          <a href="#services" className="btn-primary">
            <span>Explore Services</span>
            <ArrowRight size={16} />
          </a>
          <button onClick={onOpenEstimator} className="btn-secondary">
            <Zap size={16} style={{ color: 'var(--accent)' }} />
            <span>Scope & Cost Calculator</span>
          </button>
        </div>

        {/* 4 Feature Pillars Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.25rem',
          textAlign: 'left'
        }}>
          
          <div className="card">
            <div className="icon-box" style={{ marginBottom: '1.25rem' }}>
              <Code size={20} />
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
              1. Custom Development
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
              Full-stack web applications, REST & GraphQL APIs, and AI web integrations built with React, Next.js, Node.js, and TypeScript.
            </p>
          </div>

          <div className="card">
            <div className="icon-box" style={{ marginBottom: '1.25rem', background: 'rgba(168, 85, 247, 0.12)', color: '#c084fc' }}>
              <Cloud size={20} />
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
              2. Cloud Deployment
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
              AWS/GCP infrastructure setup, Terraform IaC, Docker containerization, and zero-downtime CI/CD pipelines.
            </p>
          </div>

          <div className="card">
            <div className="icon-box" style={{ marginBottom: '1.25rem', background: 'rgba(16, 185, 129, 0.12)', color: '#34d399' }}>
              <ShieldCheck size={20} />
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
              3. 24/7 SLA Maintenance
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
              Post-deployment telemetry monitoring, automated daily backups, security patching, and sub-15 minute emergency response.
            </p>
          </div>

          <div className="card">
            <div className="icon-box" style={{ marginBottom: '1.25rem' }}>
              <Server size={20} />
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
              Dedicated Engineers
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
              Direct access to senior cloud architects and developers with zero technical debt and 100% IP ownership.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
