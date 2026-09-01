export const slaTiers = [
  {
    id: 'bronze',
    name: 'Starter Care',
    price: '$499',
    period: '/month',
    subtitle: 'Essential Post-Deployment Maintenance',
    featured: false,
    badge: 'Standard SLA',
    features: [
      '99.5% Uptime Target SLA',
      'Daily Automated Database Backups',
      'Monthly Security OS & Package Audits',
      '24-Hour Emergency Response Time',
      'SSL Certificate Management',
      'Basic Email Support'
    ]
  },
  {
    id: 'silver',
    name: 'Professional Ops',
    price: '$1,499',
    period: '/month',
    subtitle: 'Recommended for Growing SaaS & Apps',
    featured: true,
    badge: 'Most Popular',
    features: [
      '99.9% Guaranteed Uptime SLA',
      'Hourly Backups with 30-Day Retention',
      'Continuous APM & Prometheus Telemetry',
      '1-Hour Incident Response Guarantee',
      'Automated Vulnerability & Patching',
      'Dedicated Slack / Teams Channel',
      'Weekly Health & Performance Reports'
    ]
  },
  {
    id: 'gold',
    name: 'Enterprise 24/7 SLA',
    price: '$3,499',
    period: '/month',
    subtitle: 'Mission-Critical & Zero-Downtime Infrastructure',
    featured: false,
    badge: '24/7 Managed',
    features: [
      '99.99% Ultra-High Uptime SLA',
      'Sub-15 Minute Emergency Incident Response',
      '24/7 On-Call DevOps Engineers (PagerDuty)',
      'Multi-Region Disaster Recovery & Automated Failover',
      'Custom Load Testing & Scaling Engine',
      'Dedicated Principal Engineer Assignee',
      'Unlimited Hotfixes & Infra Code Tweaks'
    ]
  }
];
