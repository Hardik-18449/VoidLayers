import React, { useState } from 'react';
import { servicesData } from '../data/servicesData.js';
import ServiceModal from './ServiceModal.jsx';
import { 
  Code, Smartphone, Cpu, Cloud, Box, GitBranch, 
  Activity, ShieldCheck, TrendingUp, ArrowRight 
} from 'lucide-react';

const iconMap = {
  Code, Smartphone, Cpu, Cloud, Box, GitBranch, 
  Activity, ShieldCheck, TrendingUp
};

export default function Services({ onSelectServiceForContact }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedService, setSelectedService] = useState(null);

  const filterTabs = [
    { key: 'all', label: 'All Services' },
    { key: 'development', label: '1. Development' },
    { key: 'deployment', label: '2. Cloud Deployment' },
    { key: 'post-deployment', label: '3. Post-Deployment Ops' }
  ];

  const filteredServices = activeFilter === 'all' 
    ? servicesData 
    : servicesData.filter(s => s.category === activeFilter);

  return (
    <section id="services" style={{ padding: '5rem 0' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 2.5rem auto' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
            Comprehensive Software Services
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            Explore our specialized development, cloud deployment, and post-deployment service offerings.
          </p>
        </div>

        {/* Filter Categories Navbar */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '0.5rem',
          marginBottom: '2.5rem'
        }}>
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key)}
              style={{
                background: activeFilter === tab.key ? 'var(--accent)' : 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                color: activeFilter === tab.key ? '#fff' : 'var(--text-secondary)',
                padding: '0.5rem 1.2rem',
                borderRadius: '10px',
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '1.25rem'
        }}>
          {filteredServices.map((service) => {
            const IconComponent = iconMap[service.iconName] || Code;
            return (
              <div key={service.id} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                    <div className="icon-box">
                      <IconComponent size={20} />
                    </div>
                    <span className={service.badgeClass}>{service.badge}</span>
                  </div>

                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                    {service.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {service.shortDesc}
                  </p>
                </div>

                <div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1.25rem', paddingTop: '0.85rem', borderTop: '1px solid var(--border-color)' }}>
                    {service.features.slice(0, 2).map((feat, i) => (
                      <div key={i} style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <span style={{ color: 'var(--accent)' }}>•</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={() => setSelectedService(service)}
                    className="btn-secondary"
                    style={{ width: '100%', justifyContent: 'center', fontSize: '0.8rem', padding: '0.55rem' }}
                  >
                    View Specifications & Deliverables
                    <ArrowRight size={14} />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Modal Popup */}
        <ServiceModal 
          service={selectedService} 
          onClose={() => setSelectedService(null)}
          onSelectService={(srv) => {
            if (onSelectServiceForContact) {
              onSelectServiceForContact(srv);
            }
          }}
        />

      </div>
    </section>
  );
}
