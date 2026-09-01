export const portfolioData = [
  {
    id: 'case-devflow',
    title: 'DevFlow - Enterprise AI Engine',
    category: 'Full-Stack & Cloud',
    client: 'SaaS Tech Inc',
    stats: [
      { label: 'Uptime', value: '99.99%' },
      { label: 'Deploy Time', value: '3.2m' },
      { label: 'Daily Users', value: '120k+' }
    ],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop',
    description: 'Designed, engineered, and deployed a high-concurrency real-time AI workflow engine. Handled complete full-stack development, AWS EKS infrastructure setup, and automated post-deployment monitoring.',
    tags: ['React', 'Node.js', 'Kubernetes', 'AWS EKS', 'Datadog'],
    scope: ['Full-Stack Dev', 'Cloud Infra', '24/7 Monitoring']
  },
  {
    id: 'case-novapay',
    title: 'NovaPay Global Payment Gateway',
    category: 'Cloud & Security',
    client: 'FinTech Corp',
    stats: [
      { label: 'Transactions', value: '$45M+' },
      { label: 'Latency', value: '< 18ms' },
      { label: 'PCI-DSS', value: 'Level 1' }
    ],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop',
    description: 'Zero-downtime microservices payment pipeline with multi-region AWS topology, Terraform IaC, and automated fraud-prevention telemetry.',
    tags: ['Go', 'Docker', 'Terraform', 'PostgreSQL Cluster', 'Redis'],
    scope: ['Microservices Dev', 'CI/CD Pipelines', 'Security Audit']
  },
  {
    id: 'case-cloudnexus',
    title: 'CloudNexus Legacy Migration',
    category: 'DevOps & Migration',
    client: 'Logistics Enterprise',
    stats: [
      { label: 'Cloud Savings', value: '42%' },
      { label: 'Downtime', value: '0 sec' },
      { label: 'Clusters', value: '18 EKS' }
    ],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
    description: 'Migrated 45+ legacy monolithic VM services into containerized Kubernetes pods with zero client interruption. Provisioned continuous Grafana alerting and incident automation.',
    tags: ['Kubernetes', 'GCP', 'Ansible', 'Prometheus', 'Grafana'],
    scope: ['Cloud Migration', 'DevOps Automation', 'SLA Support']
  },
  {
    id: 'case-pulsehealth',
    title: 'PulseHealth Real-Time Telemetry',
    category: 'Post-Deployment Ops',
    client: 'HealthTech Provider',
    stats: [
      { label: 'Active Devices', value: '500k+' },
      { label: 'MTTR', value: '< 8 mins' },
      { label: 'Alert Acc.', value: '99.8%' }
    ],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop',
    description: 'Implemented 24/7 continuous health monitoring, synthetic endpoint checks, auto-scaling disaster recovery, and automated database backups.',
    tags: ['Python', 'TimescaleDB', 'Datadog', 'PagerDuty', 'Kafka'],
    scope: ['24/7 Managed Ops', 'Database Tuning', 'Incident Response']
  }
];
