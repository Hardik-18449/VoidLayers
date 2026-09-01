import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData.js';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Full-Stack & Cloud', 'Cloud & Security', 'DevOps & Migration', 'Post-Deployment Ops'];

  const filteredItems = activeCategory === 'All'
    ? portfolioData
    : portfolioData.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" style={{ padding: '5rem 0' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 2.5rem auto' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
            Case Studies & Portfolio
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            Real-world systems engineered, deployed, and managed by VoidLayer.
          </p>
        </div>

        {/* Category Filters */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2.5rem' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                background: activeCategory === cat ? 'var(--accent)' : 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                color: activeCategory === cat ? '#fff' : 'var(--text-secondary)',
                padding: '0.45rem 1rem',
                borderRadius: '8px',
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.25rem' }}>
          {filteredItems.map((item) => (
            <div key={item.id} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span className="badge-dev" style={{ marginBottom: '0.75rem', display: 'inline-block' }}>{item.category}</span>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  {item.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {item.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                  {item.tags.map((tg) => (
                    <span key={tg} style={{
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-primary)',
                      padding: '0.2rem 0.55rem',
                      borderRadius: '6px',
                      fontSize: '0.75rem',
                      fontWeight: 600
                    }}>
                      {tg}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                borderRadius: '10px',
                padding: '0.75rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                textAlign: 'center'
              }}>
                {item.stats.map((st, i) => (
                  <div key={i}>
                    <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)' }}>{st.value}</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{st.label}</div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
