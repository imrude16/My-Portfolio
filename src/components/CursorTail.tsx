// Create new file: src/components/CursorTrail.tsx
import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

const CursorTrail = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed w-6 h-6 rounded-full border-2 border-primary pointer-events-none z-[9999] mix-blend-difference"
      animate={{
        x: mousePosition.x - 12,
        y: mousePosition.y - 12,
      }}
      transition={{ type: "spring", damping: 30, stiffness: 200 }}
    />
  );
};
export default CursorTrail;