'use client';

import { motion } from 'framer-motion';

export function FloatingHeart() {
  return (
    <motion.div
      className="fixed bottom-8 right-8 text-4xl cursor-pointer z-50"
      animate={{ 
        y: [0, -10, 0],
        rotate: [0, 5, -5, 0] 
      }}
      transition={{ 
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut" 
      }}
      whileHover={{ 
        scale: 1.2,
        rotate: 15 
      }}
      whileTap={{ scale: 0.9 }}
    >
      💖
    </motion.div>
  );
}