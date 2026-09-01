import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import LifecyclePipeline from './components/LifecyclePipeline.jsx';
import Services from './components/Services.jsx';
import CostEstimator from './components/CostEstimator.jsx';
import Portfolio from './components/Portfolio.jsx';
import TechStack from './components/TechStack.jsx';
import SlaSection from './components/SlaSection.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import NotificationToast from './components/NotificationToast.jsx';

export default function App() {
  const [prefilledContactData, setPrefilledContactData] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('voidlayer_theme') || 'dark';
  });

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
    localStorage.setItem('voidlayer_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const scrollToEstimator = () => {
    const el = document.getElementById('estimator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProposalFromEstimator = (estimateSummary) => {
    setPrefilledContactData(estimateSummary);
    setToastMessage('Estimate copied to consultation form below!');
  };

  const handleSelectServiceForContact = (serviceObj) => {
    setPrefilledContactData(serviceObj);
    setToastMessage(`Service "${serviceObj.title}" selected and pre-filled.`);
  };

  const handleRequestSlaTier = (tierObj) => {
    setPrefilledContactData(tierObj);
    setToastMessage(`SLA Tier "${tierObj.name}" selected and pre-filled.`);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Navigation Bar */}
      <Navbar 
        onOpenEstimator={scrollToEstimator} 
        theme={theme} 
        onToggleTheme={toggleTheme} 
      />

      {/* Main Body */}
      <main style={{ flexGrow: 1 }}>
        <Hero onOpenEstimator={scrollToEstimator} />
        <Services onSelectServiceForContact={handleSelectServiceForContact} />
        <LifecyclePipeline />
        <CostEstimator onRequestProposal={handleProposalFromEstimator} />
        <Portfolio />
        <TechStack />
        <SlaSection onRequestSlaTier={handleRequestSlaTier} />
        <Contact 
          prefilledData={prefilledContactData} 
          onSubmitSuccess={(msg) => setToastMessage(msg)} 
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Toast Feedback */}
      <NotificationToast 
        message={toastMessage} 
        onClose={() => setToastMessage(null)} 
      />
    </div>
  );
}
