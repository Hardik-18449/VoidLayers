export const servicesData = [
  // --- DEVELOPMENT SERVICES ---
  {
    id: 'dev-fullstack',
    category: 'development',
    badge: 'Development',
    badgeClass: 'badge-dev',
    title: 'Custom Full-Stack Web Applications',
    iconName: 'Code',
    shortDesc: 'End-to-end web applications, reactive SaaS platforms, and enterprise web solutions built with React, Next.js, Node.js, and TypeScript.',
    longDesc: 'VoidLayer architects resilient, scalable web applications engineered from the ground up for maximum performance and seamless user experience. We build clean, unit-tested codebases optimized for business growth.',
    features: [
      'High-performance React & Next.js frontend architectures',
      'Scalable Express / Node.js REST & GraphQL API backends',
      'Real-time WebSocket & Event-Driven web applications',
      'Strict TypeScript type safety & automated unit testing'
    ],
    deliverables: ['Production Ready Web Codebase', 'API Documentation', 'Automated Test Suite', 'Architecture Blueprint']
  },
  {
    id: 'dev-apis',
    category: 'development',
    badge: 'Development',
    badgeClass: 'badge-dev',
    title: 'REST & GraphQL Web API Services',
    iconName: 'GitBranch',
    shortDesc: 'Secure, high-concurrency Web APIs, database integrations, and third-party SaaS API connections.',
    longDesc: 'Building robust Web APIs with Node.js and Express that power frontend dashboards, handle authentication, manage payment gateways, and integrate seamlessly with external services.',
    features: [
      'Secure JWT & OAuth 2.0 Web Authentication',
      'PostgreSQL, MongoDB, and Redis data layer design',
      'Stripe & payment gateway API integrations',
      'OpenAPI / Swagger interactive documentation'
    ],
    deliverables: ['REST / GraphQL API Service', 'Interactive Swagger Specs', 'Database Migration Scripts']
  },
  {
    id: 'dev-ai',
    category: 'development',
    badge: 'Development',
    badgeClass: 'badge-dev',
    title: 'AI & Web Automation Integration',
    iconName: 'Cpu',
    shortDesc: 'Custom OpenAI/LLM API integrations, web data automation, and intelligent web chatbots built for your web platform.',
    longDesc: 'Empower your web applications with intelligent AI agent workflows, automated web data processing, and custom vector search APIs to automate repetitive business tasks.',
    features: [
      'OpenAI / Anthropic API web integration',
      'Vector database (Pinecone/pgvector) RAG web search',
      'Automated background process queuing in Node.js',
      'Custom web admin control dashboards'
    ],
    deliverables: ['AI Agent Web Integration', 'Vector Search Engine', 'Admin Control Portal']
  },

  // --- DEPLOYMENT SERVICES ---
  {
    id: 'deploy-cloud',
    category: 'deployment',
    badge: 'Deployment',
    badgeClass: 'badge-deploy',
    title: 'Cloud Infrastructure & Hosting',
    iconName: 'Cloud',
    shortDesc: 'Scalable cloud web hosting environments on AWS, GCP, and Vercel with Infrastructure as Code and auto-scaling.',
    longDesc: 'We design production cloud topology configured for high availability, SSL security, automatic scaling, cost optimization, and strict VPC network isolation.',
    features: [
      'AWS / GCP / Vercel cloud environment setup',
      'Terraform Infrastructure as Code scripts',
      'VPC networking, NAT Gateways & SSL security',
      'Zero-downtime database clusters (Postgres/Redis)'
    ],
    deliverables: ['Terraform Scripts', 'Cloud Architecture Diagram', 'Security Policy Config', 'Cost Optimization Plan']
  },
  {
    id: 'deploy-k8s',
    category: 'deployment',
    badge: 'Deployment',
    badgeClass: 'badge-deploy',
    title: 'Docker Containerization & Web Deployments',
    iconName: 'Box',
    shortDesc: 'Containerizing web applications into Docker images orchestrated for high reliability and instant scaling.',
    longDesc: 'Transform monolithic web setups into clean Docker containers with automated load balancing, ingress SSL control, and zero-downtime rolling releases.',
    features: [
      'Dockerization & multi-stage lean container builds',
      'Kubernetes / ECS container orchestration setup',
      'Automated load balancing & Let\'s Encrypt SSL certificates',
      'Zero-downtime Rolling Updates & Canary releases'
    ],
    deliverables: ['Dockerfiles & Container Setup', 'Cloud Deployment Manifests', 'SSL & Domain DNS Setup']
  },
  {
    id: 'deploy-cicd',
    category: 'deployment',
    badge: 'Deployment',
    badgeClass: 'badge-deploy',
    title: 'Automated CI/CD Web Pipelines',
    iconName: 'GitBranch',
    shortDesc: 'Streamlined GitHub Actions pipelines for automated testing and instant 1-click web deployment.',
    longDesc: 'Eliminate manual web deployments with automated testing, linting, security audits, container pushing, and instant production deployment.',
    features: [
      'GitHub Actions & GitLab CI web workflow automation',
      'Automated vulnerability scanning & lint checks',
      'Rollback safety strategies & version tracking',
      'Slack & email deployment notification webhooks'
    ],
    deliverables: ['CI/CD Pipeline Configuration', 'Automated Test Runner', 'Deployment Webhooks']
  },

  // --- AFTER-DEPLOYMENT SERVICES ---
  {
    id: 'ops-monitoring',
    category: 'post-deployment',
    badge: 'Post-Deployment',
    badgeClass: 'badge-ops',
    title: '24/7 Web Monitoring & Incident Response',
    iconName: 'Activity',
    shortDesc: 'Real-time uptime tracking, error monitoring, and round-the-clock incident response guarantees for your web app.',
    longDesc: 'VoidLayer keeps watch over your web applications with proactive health checks, error tracing, log monitoring, and sub-15 minute emergency incident resolution.',
    features: [
      'Datadog / Prometheus / Grafana live monitoring',
      'Sentry error tracking & synthetic uptime checks',
      'Automated incident alert escalation',
      'Guaranteed emergency response SLA'
    ],
    deliverables: ['Live Monitoring Dashboard', 'Alert Escalation Integration', 'Weekly Health Reports']
  },
  {
    id: 'ops-maintenance',
    category: 'post-deployment',
    badge: 'Post-Deployment',
    badgeClass: 'badge-ops',
    title: 'Web Maintenance & Security Operations',
    iconName: 'ShieldCheck',
    shortDesc: 'Continuous web application security updates, daily database backups, dependency upgrades, and SSL management.',
    longDesc: 'Prevent unexpected downtime and security vulnerabilities. VoidLayer performs recurring Node.js dependency upgrades, database backups, and SSL renewals.',
    features: [
      'Automated daily database backups & recovery testing',
      'Security patch application & npm package upgrades',
      'SSL cert auto-renewals & domain DNS management',
      'Web server performance & resource optimization'
    ],
    deliverables: ['Monthly Audit Report', 'Backup Verification', 'Security Updates']
  },
  {
    id: 'ops-scaling',
    category: 'post-deployment',
    badge: 'Post-Deployment',
    badgeClass: 'badge-ops',
    title: 'Web Performance & Query Tuning',
    iconName: 'TrendingUp',
    shortDesc: 'Database query optimization, CDN caching strategies, web speed optimization, and load stress-testing.',
    longDesc: 'As your web application scales, VoidLayer tunes database queries, configures Redis caching layers, and optimizes frontend asset loading for maximum speed.',
    features: [
      'Database query indexing & execution plan optimization',
      'Global CDN (Cloudflare/AWS CloudFront) web caching setup',
      'Web page speed & Core Web Vitals optimization',
      'API bottleneck elimination'
    ],
    deliverables: ['Performance Speed Report', 'Redis Caching Setup', 'Cloud Cost Optimization']
  }
];
