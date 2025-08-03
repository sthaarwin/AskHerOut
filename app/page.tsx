'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Mail } from 'lucide-react';
import { getRandomPickupLine } from '@/data/pickupLines';
import { useToast } from '@/hooks/use-toast';
import { Toaster } from '@/components/ui/toaster';

export default function Home() {
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [pickupLine, setPickupLine] = useState('');
  const [closeButtonPosition, setCloseButtonPosition] = useState({ x: 0, y: 0 });
  const [dodgeCount, setDodgeCount] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    setPickupLine(getRandomPickupLine());
  }, []);

  const openLetter = () => {
    setIsLetterOpen(true);
    setTimeout(() => setShowContent(true), 800);
    // Get a new joke each time the letter opens
    setPickupLine(getRandomPickupLine());
    setDodgeCount(0);
    setCloseButtonPosition({ x: 0, y: 0 });
  };

  const closeLetter = () => {
    setShowContent(false);
    setTimeout(() => setIsLetterOpen(false), 300);
  };

  const handleCloseHover = () => {
    if (dodgeCount < 10) {
      // Make the button jump to a random position
      const newX = (Math.random() - 0.5) * 200;
      const newY = (Math.random() - 0.5) * 100;
      setCloseButtonPosition({ x: newX, y: newY });
      setDodgeCount(prev => prev + 1);
    }
  };

  const handleYesClick = () => {
    // Beautiful themed popups instead of alerts
    setTimeout(() => {
      toast({
        title: "🎉 Yay! Amazing!",
        description: "Let's plan something incredible together! 💕",
        className: "bg-gradient-to-r from-pink-50 to-rose-50 border-pink-200 text-pink-800",
      });
    }, 100);
    
    setTimeout(() => {
      toast({
        title: "😄 Promise Time!",
        description: "I promise the date will be better than my pickup lines!",
        className: "bg-gradient-to-r from-pink-50 to-rose-50 border-pink-200 text-pink-800",
      });
    }, 1500);
    
    setTimeout(() => {
      toast({
        title: "🌹✨ Get Ready!",
        description: "Get ready for the most romantic evening ever!",
        className: "bg-gradient-to-r from-pink-50 to-rose-50 border-pink-200 text-pink-800",
      });
    }, 3000);
  };
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-pink-100 via-rose-100 to-pink-200">
      <AnimatePresence>
        {!isLetterOpen ? (
          // Closed Letter
          <motion.div
            key="closed-letter"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="cursor-pointer"
            onClick={openLetter}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 2, -2, 0] 
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            >
              {/* Envelope */}
              <div className="w-80 h-56 bg-gradient-to-br from-pink-300 to-rose-400 rounded-lg shadow-2xl relative overflow-hidden">
                {/* Envelope flap */}
                <div className="absolute top-0 left-0 w-full h-28 bg-gradient-to-br from-pink-400 to-rose-500 transform origin-top"></div>
                
                {/* Heart seal */}
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-4xl">
                  💌
                </div>
                
                {/* Envelope body */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-br from-pink-200 to-rose-300"></div>
              </div>
              
              {/* Click instruction */}
              <motion.p
                className="text-center mt-6 text-pink-700 font-medium"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Click to open your letter 💕
              </motion.p>
            </motion.div>
          </motion.div>
        ) : (
          // Open Letter
          <motion.div
            key="open-letter"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            {/* Letter Paper */}
            <motion.div
              className="bg-white rounded-lg shadow-2xl p-8 md:p-12 relative"
              initial={{ rotateX: -90 }}
              animate={{ rotateX: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ 
                background: 'linear-gradient(135deg, #fef7f7 0%, #fdf2f8 100%)',
                backgroundImage: `
                  repeating-linear-gradient(
                    0deg,
                    transparent,
                    transparent 24px,
                    rgba(236, 72, 153, 0.1) 25px
                  )
                `
              }}
            >
              {/* Letter holes */}
              <div className="absolute left-6 top-0 bottom-0 flex flex-col justify-center space-y-8">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-white rounded-full shadow-inner border-2 border-pink-200"></div>
                ))}
              </div>

              {/* Letter Content */}
              <div className="ml-8">
                <AnimatePresence>
                  {showContent && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, staggerChildren: 0.2 }}
                    >
                      {/* Header */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-center mb-8"
                      >
                        <h1 className="text-3xl md:text-4xl font-dancing text-gradient font-bold mb-2">
                          Hey Beautiful! 💕
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto rounded-full"></div>
                      </motion.div>

                      {/* Pickup Line */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mb-8"
                      >
                        <div className="bg-pink-50 border-l-4 border-pink-400 p-6 rounded-r-lg mb-6">
                          <p className="text-lg md:text-xl text-pink-800 italic font-medium leading-relaxed">
                            "{pickupLine}"
                          </p>
                        </div>
                      </motion.div>

                      {/* The Ask */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="text-center mb-8"
                      >
                        <p className="text-xl md:text-2xl text-pink-700 font-semibold mb-4">
                          So... wanna go on a date? 🌹
                        </p>
                        <p className="text-pink-600 text-lg">
                          I promise I have better jokes in person! 😄
                        </p>
                      </motion.div>

                      {/* Buttons */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                      >
                        <motion.button
                          className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center gap-2 justify-center group"
                          whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0 15px 30px rgba(236, 72, 153, 0.4)"
                          }}
                          whileTap={{ scale: 0.95 }}
                          onClick={handleYesClick}
                        >
                          <Heart className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                          Yes, I'd love to! 💕
                        </motion.button>

                        <div className="relative">
                          <motion.button
                            className="bg-pink-100 hover:bg-pink-200 text-pink-700 px-8 py-3 rounded-full font-semibold transition-colors duration-300 flex items-center gap-2 justify-center group"
                            animate={{ 
                              x: closeButtonPosition.x,
                              y: closeButtonPosition.y
                            }}
                            transition={{ 
                              type: "spring",
                              stiffness: 300,
                              damping: 20
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onMouseEnter={handleCloseHover}
                            onClick={dodgeCount >= 3 ? closeLetter : undefined}
                            style={{ 
                              cursor: dodgeCount >= 3 ? 'pointer' : 'not-allowed',
                              opacity: dodgeCount >= 3 ? 1 : 0.8
                            }}
                          >
                            <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                            {dodgeCount >= 3 ? 'Fine, Close Letter' : 'Close Letter'}
                          </motion.button>
                          
                          {dodgeCount > 0 && dodgeCount < 3 && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0 }}
                              className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-pink-600 text-white px-3 py-1 rounded-full text-sm whitespace-nowrap"
                            >
                              {dodgeCount === 1 && "Hey! I moved! 😏"}
                              {dodgeCount === 2 && "Not so fast! 😜"}
                            </motion.div>
                          )}
                        </div>
                      </motion.div>

                      {/* Signature */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.0 }}
                        className="text-right mt-8"
                      >
                        <p className="text-pink-600 font-dancing text-xl">
                          With love,
                        </p>
                        <p className="text-pink-700 font-dancing text-2xl font-bold">
                          Your Secret Admirer 💖
                        </p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating hearts background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl opacity-20"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: typeof window !== 'undefined' ? window.innerHeight + 50 : 800,
            }}
            animate={{ 
              y: -100,
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200)
            }}
            transition={{ 
              duration: Math.random() * 4 + 6,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
          >
            💕
          </motion.div>
        ))}
      </div>

      <Toaster />
    </div>
  );
}