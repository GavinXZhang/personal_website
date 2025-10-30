import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; // Removed AnimatePresence

const WelcomeText = ({ text, onComplete }: { text: string; onComplete?: () => void }) => {
  const [showEmoji, setShowEmoji] = useState(false);

  useEffect(() => {
    // Show emoji after text appears
    const timer = setTimeout(() => {
      setShowEmoji(true);
      onComplete?.();
    }, 500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        fontSize: '72px',
        fontFamily: 'Inter, sans-serif',
        color: '#000',
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        fontWeight: '600'
      }}
    >
      {text}
      {showEmoji && (
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: [0, 20, 0] }}
          transition={{ 
            scale: { duration: 0.3 },
            rotate: { duration: 0.5, repeat: Infinity, repeatDelay: 0.5 }
          }}
          style={{ display: 'inline-block', fontSize: '72px' }}
        >
          👋
        </motion.span>
      )}
    </motion.div>
  );
};

export default function Welcome() {
  // 'step' state is no longer needed
  const navigate = useNavigate();

  const handleStep1Complete = () => {
    // Instead of setting step 2, navigate to home after a delay
    setTimeout(() => navigate('/home'), 1500);
  };

  // handleStep2Complete is no longer needed

  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#fff',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 9999
    }}>
      {/* AnimatePresence is no longer needed as we're not switching components */}
      <WelcomeText
        key="step1"
        text="Welcome!"
        onComplete={handleStep1Complete}
      />
      {/* The entire 'step === 2' block has been removed */}
    </div>
  );
}