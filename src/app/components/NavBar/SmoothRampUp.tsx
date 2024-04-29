import { useEffect, useRef } from 'react';
import { motion, useAnimation, AnimationControls } from 'framer-motion';

interface SmoothRampUpProps {
  children: string;
}

const SmoothRampUp: React.FC<SmoothRampUpProps> = ({ children }) => {
  const lines = children.split('\n').filter(Boolean);
  const controls = useAnimation();
  const refAnimation = useRef<AnimationControls | null>(null);

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <span style={{ overflow: 'hidden' }}>
      {lines.map((line, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: '100%' }}
          animate={controls}
          transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
        >
          {line}
        </motion.div>
      ))}
    </span>
  );
};

export default SmoothRampUp;
