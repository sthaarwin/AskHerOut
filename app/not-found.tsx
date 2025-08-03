'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Home, Heart } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        className="text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6, type: "spring", bounce: 0.6 }}
          className="text-8xl mb-8"
        >
          💔
        </motion.div>

        <motion.h1
          className="text-5xl md:text-6xl font-dancing text-gradient font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Page Not Found
        </motion.h1>

        <motion.p
          className="text-xl text-pink-700 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Looks like this page got lost in love! 💕
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <Link href="/">
            <motion.button
              className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center gap-2 justify-center mx-auto group"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 15px 30px rgba(236, 72, 153, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Home className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              Back to Love Central
              <Heart className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}