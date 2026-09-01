import React, { useState } from 'react';
import { Code, Cloud, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export default function LifecyclePipeline() {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      step: 'STAGE 01',
      badge: 'Development',
      badgeClass: 'badge-dev',
      title: 'Architect & Build',
      icon: Code,
      desc: 'We transform product specifications into clean, scalable software using modern frameworks, clean code standards, and automated unit test suites.',
      highlights: [
        'Domain-Driven Web System Design & Database Schemas',
        'Responsive Frontend Web & Dashboard Prototyping',
        'Scalable REST & GraphQL Web API Services',
        'Automated Unit & Integration Testing'
      ],
      techStack: ['React', 'Next.js', 'Node.js', 'Express', 'TypeScript', 'PostgreSQL'],
      deliverable: 'Clean, type-safe codebase with 90%+ test coverage'
    },
    {
      step: 'STAGE 02',
      badge: 'Deployment',
      badgeClass: 'badge-deploy',
      title: 'Provision & Deploy',
      icon: Cloud,
      desc: 'We automate cloud infrastructure provisioning, setup zero-downtime CI/CD pipelines, and orchestrate containerized microservices.',
      highlights: [
        'Terraform & Ansible Infrastructure as Code',
        'Docker Containerization & Kubernetes (EKS/GKE) Clusters',
        'GitHub Actions / GitLab CI Automated Pipelines',
        'Zero-Downtime Blue/Green & Canary Deployments'
      ],
      techStack: ['AWS', 'GCP', 'Kubernetes', 'Docker', 'Terraform', 'GitHub Actions'],
      deliverable: 'Fully automated cloud topology with zero manual deployment steps'
    },
    {
      step: 'STAGE 03',
      badge: 'Post-Deployment',
      badgeClass: 'badge-ops',
      title: 'Monitor & Maintain',
      icon: ShieldCheck,
      desc: 'We provide 24/7 managed operations, APM telemetry, security patching, auto-scaling, and guaranteed SLA support.',
      highlights: [
        '24/7 Datadog / Grafana Real-Time APM Telemetry',
        'Sub-15 Minute Emergency Incident Escalation (PagerDuty)',
        'Daily Automated Backups & Disaster Recovery Drills',
        'Database Query Indexing & High-Traffic Tuning'
      ],
      techStack: ['Datadog', 'Prometheus', 'Grafana', 'PagerDuty', 'Sentry', 'Cloudflare'],
      deliverable: 'Guaranteed 99.99% Uptime SLA & continuous operational peace of mind'
    }
  ];

  const current = stages[activeStage];

  return (
    <section id="lifecycle" style={{ padding: '4rem 0', borderTop: '1px solid var(--border-color)', background: 'var(--bg-secondary)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 3rem auto' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
            Full-Lifecycle Service Pipeline
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            A systematic engineering process from initial code architecture to zero-downtime deployment and 24/7 maintenance.
          </p>
        </div>

        {/* Stage Selector Buttons */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          {stages.map((st, idx) => {
            const isActive = activeStage === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveStage(idx)}
                style={{
                  background: 'var(--bg-card)',
                  border: isActive ? '1px solid var(--accent)' : '1px solid var(--border-color)',
                  borderRadius: '12px',
                  padding: '1.25rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span className={st.badgeClass}>{st.step}</span>
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)' }}>
                  {st.title}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Selected Stage Detail Card */}
        <div className="card" style={{ padding: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <span className={current.badgeClass}>{current.badge}</span>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              {current.title}
            </h3>
          </div>

          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
            {current.desc}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div>
              <h4 style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
                Key Scope & Deliverables
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {current.highlights.map((h, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--accent)', marginTop: '2px', flexShrink: 0 }} />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
                Technologies Used
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
                {current.techStack.map((tech) => (
                  <span key={tech} style={{
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-color)',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '6px',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                <strong>Deliverable:</strong> {current.deliverable}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
