import React, { useState, useEffect } from 'react';
import { Terminal, Play, CheckCircle2, ShieldCheck, Server, RefreshCw, Cpu } from 'lucide-react';

export default function TerminalPreview() {
  const [activeTab, setActiveTab] = useState('build');
  const [isBuilding, setIsBuilding] = useState(false);
  const [logs, setLogs] = useState([]);

  const tabConfigs = {
    build: {
      cmd: 'voidlayer build --stack=react-node-ts',
      output: [
        '⚡ [VoidLayer Engine v4.2] Initializing workspace build...',
        '✔ [1/4] Compiling TypeScript AST & validating schema definitions',
        '✔ [2/4] Bundling React Vite asset graph (Gzip size: 48.2 KB)',
        '✔ [3/4] Running 142 unit tests & end-to-end integration suite [100% Passed]',
        '✔ [4/4] Generating OCI compliant Docker image: voidlayer/app:v2.4.0',
        '✨ BUILD SUCCESSFUL (Completed in 1.48 seconds)'
      ]
    },
    deploy: {
      cmd: 'voidlayer deploy --provider=aws-eks --region=us-east-1',
      output: [
        '🚀 [VoidLayer Cloud Orchestrator] Connecting to AWS VPC...',
        '✔ Provisioning Terraform Infrastructure as Code manifests',
        '✔ Registering EKS NodeGroups (3x t3.xlarge auto-scaling instances)',
        '✔ Injecting Let\'s Encrypt SSL TLS 1.3 wildcard certificates',
        '✔ Executing Zero-Downtime Blue/Green Pod Traffic Migration',
        '🎉 DEPLOYMENT COMPLETE! Live Endpoint: https://api.voidlayer.io (SSL Active)'
      ]
    },
    monitor: {
      cmd: 'voidlayer monitor --sla=gold-24x7',
      output: [
        '🛡 [VoidLayer Sentinel] Active 24/7 Monitoring Enabled...',
        '● Cluster CPU Load: 14% | RAM Usage: 2.1 GB / 16 GB',
        '● Global Response Latency: 14.8ms avg (Edge CDN Cache Hit: 99.4%)',
        '● Synthetic Health Checks: 24/24 Global Nodes [HEALTHY]',
        '● Database Auto-Backups: Daily Snapshot Encrypted & Synced to S3',
        '🟢 SYSTEM STATUS: ALL SYSTEMS OPERATIONAL (99.999% SLA UPTIME)'
      ]
    }
  };

  useEffect(() => {
    let currentLine = 0;
    setIsBuilding(true);
    setLogs([]);
    const lines = tabConfigs[activeTab]?.output || [];

    const interval = setInterval(() => {
      if (currentLine < lines.length) {
        const lineContent = lines[currentLine];
        if (lineContent) {
          setLogs((prev) => [...prev, lineContent]);
        }
        currentLine++;
      } else {
        setIsBuilding(false);
        clearInterval(interval);
      }
    }, 300);

    return () => clearInterval(interval);
  }, [activeTab]);

  const handleReRun = () => {
    const lines = tabConfigs[activeTab]?.output || [];
    setLogs([]);
    setIsBuilding(true);
    let currentLine = 0;

    const interval = setInterval(() => {
      if (currentLine < lines.length) {
        const lineContent = lines[currentLine];
        if (lineContent) {
          setLogs((prev) => [...prev, lineContent]);
        }
        currentLine++;
      } else {
        setIsBuilding(false);
        clearInterval(interval);
      }
    }, 300);
  };

  return (
    <div className="terminal-window">
      {/* Terminal Header Bar */}
      <div className="terminal-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div className="terminal-dots">
            <span className="terminal-dot dot-red"></span>
            <span className="terminal-dot dot-yellow"></span>
            <span className="terminal-dot dot-green"></span>
          </div>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <Terminal size={14} style={{ color: '#00f2fe' }} />
            voidlayer-cli ~ zsh
          </span>
        </div>

        {/* Tab Buttons */}
        <div style={{ display: 'flex', gap: '0.35rem' }}>
          {Object.keys(tabConfigs).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                background: activeTab === tab ? 'rgba(0, 242, 254, 0.15)' : 'transparent',
                border: activeTab === tab ? '1px solid rgba(0, 242, 254, 0.4)' : '1px solid transparent',
                color: activeTab === tab ? '#00f2fe' : 'var(--text-muted)',
                padding: '0.25rem 0.65rem',
                borderRadius: '6px',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                cursor: 'pointer',
                textTransform: 'uppercase',
                fontWeight: 600,
                transition: 'all 0.2s ease'
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Terminal Body */}
      <div className="terminal-body" style={{ minHeight: '260px' }}>
        <div style={{ color: 'var(--cyan-bright)', marginBottom: '0.85rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span>$ {tabConfigs[activeTab].cmd}</span>
          <button 
            onClick={handleReRun}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
              fontSize: '0.75rem'
            }}
            title="Re-run command"
          >
            <RefreshCw size={12} className={isBuilding ? 'animate-spin' : ''} />
            Run
          </button>
        </div>

        {/* Logs Output */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
          {logs.map((log, idx) => {
            if (!log) return null;
            let color = '#cbd5e1';
            if (log.includes?.('SUCCESSFUL') || log.includes?.('COMPLETE') || log.includes?.('OPERATIONAL')) color = '#00ff87';
            if (log.includes?.('✔') || log.includes?.('🚀') || log.includes?.('🛡')) color = '#38bdf8';
            if (log.includes?.('●')) color = '#94a3b8';

            return (
              <div key={idx} style={{ color, wordBreak: 'break-word', transition: 'all 0.2s ease' }}>
                {log}
              </div>
            );
          })}

          {isBuilding && (
            <div style={{ color: 'var(--cyan-bright)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.25rem' }}>
              <span className="font-mono">Processing...</span>
              <span className="status-dot"></span>
            </div>
          )}
        </div>
      </div>

      {/* Terminal Footer Indicator */}
      <div style={{
        background: '#070911',
        padding: '0.5rem 1rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '0.75rem',
        color: 'var(--text-muted)',
        fontFamily: 'var(--font-mono)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Server size={12} style={{ color: '#00ff87' }} />
          Cluster: aws-us-east-1a
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Cpu size={12} style={{ color: '#00f2fe' }} />
          Engine: VoidLayer v4.2
        </div>
      </div>
    </div>
  );
}
