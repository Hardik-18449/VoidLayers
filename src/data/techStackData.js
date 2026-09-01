export const techStackCategories = [
  {
    id: 'frontend',
    name: 'Web Frontend',
    iconName: 'Layout',
    techs: [
      { name: 'React.js', level: 'Expert', desc: 'Component Architecture & State Management' },
      { name: 'Next.js', level: 'Expert', desc: 'Server-Side Rendering (SSR) & App Router' },
      { name: 'TypeScript', level: 'Expert', desc: 'Type-Safe Web Application Development' },
      { name: 'Vite', level: 'Expert', desc: 'Ultra-Fast Web Bundling & Dev Tooling' },
      { name: 'Tailwind CSS', level: 'Expert', desc: 'Modern Responsive Design & Styling' },
      { name: 'HTML5 / CSS3', level: 'Expert', desc: 'Semantic Markup & Responsive Layouts' }
    ]
  },
  {
    id: 'backend',
    name: 'Web Backend & APIs',
    iconName: 'Server',
    techs: [
      { name: 'Node.js', level: 'Expert', desc: 'Asynchronous Event-Driven Runtime' },
      { name: 'Express.js', level: 'Expert', desc: 'Robust RESTful API Architecture' },
      { name: 'GraphQL', level: 'Advanced', desc: 'Flexible Web Data Querying' },
      { name: 'WebSockets', level: 'Advanced', desc: 'Real-Time Bi-Directional Web Feeds' },
      { name: 'JWT & OAuth 2.0', level: 'Expert', desc: 'Secure Web Authentication & RBAC' },
      { name: 'Prisma ORM', level: 'Expert', desc: 'Type-Safe Web Database Access' }
    ]
  },
  {
    id: 'cloud',
    name: 'Cloud & Web Hosting',
    iconName: 'Cloud',
    techs: [
      { name: 'AWS', level: 'Advanced', desc: 'EC2, S3, CloudFront, Route53, RDS' },
      { name: 'Vercel / Netlify', level: 'Expert', desc: 'Edge Hosting & Next.js Deployment' },
      { name: 'Docker', level: 'Advanced', desc: 'Containerized Web Applications' },
      { name: 'GitHub Actions', level: 'Expert', desc: 'Automated CI/CD Web Pipelines' },
      { name: 'Nginx', level: 'Advanced', desc: 'Web Server & Reverse Proxy SSL' },
      { name: 'Terraform', level: 'Intermediate', desc: 'Infrastructure as Code (IaC)' }
    ]
  },
  {
    id: 'database',
    name: 'Databases & Storage',
    iconName: 'Database',
    techs: [
      { name: 'PostgreSQL', level: 'Expert', desc: 'Relational Web Database Engine' },
      { name: 'MongoDB', level: 'Expert', desc: 'Document Database for Dynamic Schemas' },
      { name: 'Redis', level: 'Advanced', desc: 'In-Memory Web Caching & Rate Limiting' },
      { name: 'Supabase / Firebase', level: 'Advanced', desc: 'Backend-as-a-Service & Auth' }
    ]
  },
  {
    id: 'monitoring',
    name: 'Web Monitoring & Testing',
    iconName: 'Activity',
    techs: [
      { name: 'Sentry', level: 'Expert', desc: 'Real-Time Frontend & API Error Tracking' },
      { name: 'Datadog', level: 'Advanced', desc: 'Web Telemetry & APM Performance' },
      { name: 'Postman', level: 'Expert', desc: 'API Testing & Documentation' },
      { name: 'Jest / Vitest', level: 'Expert', desc: 'Automated Unit & Integration Testing' }
    ]
  }
];
