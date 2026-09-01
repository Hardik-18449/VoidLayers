import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

export default function NotificationToast({ message, onClose }) {
  if (!message) return null;

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 6000);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  return (
    <div className="toast-container">
      <div className="glass-card" style={{
        padding: '1rem 1.25rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.85rem',
        background: '#0d111a',
        border: '1px solid rgba(0, 255, 135, 0.4)',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 255, 135, 0.2)',
        maxWidth: '420px'
      }}>
        <div style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          background: 'rgba(0, 255, 135, 0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}>
          <CheckCircle2 size={18} style={{ color: '#00ff87' }} />
        </div>
        
        <div style={{ flexGrow: 1 }}>
          <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff' }}>
            Request Received!
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.15rem' }}>
            {message}
          </div>
        </div>

        <button
          onClick={onClose}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--text-muted)',
            cursor: 'pointer',
            padding: '0.2rem'
          }}
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
