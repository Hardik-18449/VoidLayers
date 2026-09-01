import React, { useState } from 'react';
import { techStackCategories } from '../data/techStackData.js';
import { Layout, Server, Cloud, Database, Activity } from 'lucide-react';

const iconMap = { Layout, Server, Cloud, Database, Activity };

export default function TechStack() {
  const [activeTabId, setActiveTabId] = useState('cloud');
  const currentCategory = techStackCategories.find(c => c.id === activeTabId) || techStackCategories[0];

  return (
    <section id="techstack" style={{ padding: '5rem 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 2.5rem auto' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
            Technology & Cloud Ecosystem
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            Production-proven software tools and infrastructure frameworks we utilize daily.
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2.5rem' }}>
          {techStackCategories.map((cat) => {
            const Icon = iconMap[cat.iconName] || Server;
            const isActive = activeTabId === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTabId(cat.id)}
                style={{
                  background: isActive ? 'var(--accent)' : 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  color: isActive ? '#fff' : 'var(--text-secondary)',
                  padding: '0.55rem 1.25rem',
                  borderRadius: '10px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <Icon size={16} />
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem' }}>
          {currentCategory.techs.map((tech, idx) => (
            <div key={idx} className="card" style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {tech.name}
                </h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                  {tech.desc}
                </p>
              </div>
              <span className="badge-ops">{tech.level}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
