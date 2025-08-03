'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Mail, Sparkles, Calendar, Gift } from 'lucide-react';
import { getRandomPickupLine } from '@/data/pickupLines';
import { getRandomHoverMessage } from '@/data/hoverMessages';
import { useToast } from '@/hooks/use-toast';
import { Toaster } from '@/components/ui/toaster';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

export default function Home() {
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [pickupLine, setPickupLine] = useState('');
  const [closeButtonPosition, setCloseButtonPosition] = useState({ x: 0, y: 0 });
  const [dodgeCount, setDodgeCount] = useState(0);
  const [currentHoverMessage, setCurrentHoverMessage] = useState('');
  const [showCelebrationDialog, setShowCelebrationDialog] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setPickupLine(getRandomPickupLine());
    setMounted(true); // Set mounted to true after component mounts
  }, []);

  const openLetter = () => {
    setIsLetterOpen(true);
    setTimeout(() => setShowContent(true), 800);
    // Get a new joke each time the letter opens
    setPickupLine(getRandomPickupLine());
    setDodgeCount(0);
    setCloseButtonPosition({ x: 0, y: 0 });
    setCurrentHoverMessage('');
  };

  const closeLetter = () => {
    setShowContent(false);
    setTimeout(() => setIsLetterOpen(false), 300);
  };

  const handleCloseHover = () => {
    if (dodgeCount < 10) {
      // Make the button jump to a random position (smaller range for mobile)
      const maxX = typeof window !== 'undefined' && window.innerWidth < 640 ? 80 : 200;
      const maxY = typeof window !== 'undefined' && window.innerWidth < 640 ? 60 : 100;
      
      const newX = (Math.random() - 0.5) * maxX;
      const newY = (Math.random() - 0.5) * maxY;
      setCloseButtonPosition({ x: newX, y: newY });
      
      // Get a random hover message from the data file
      const randomMessage = getRandomHoverMessage(dodgeCount);
      setCurrentHoverMessage(randomMessage);
      
      setDodgeCount(prev => prev + 1);
    }
  };

  const handleYesClick = () => {
    // Show the large celebration dialog
    setShowCelebrationDialog(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 bg-gradient-to-br from-pink-100 via-rose-100 to-pink-200">
      {/* Large Celebration Dialog */}
      <Dialog open={showCelebrationDialog} onOpenChange={setShowCelebrationDialog}>
        <DialogContent className="max-w-lg mx-auto bg-gradient-to-br from-pink-50 to-rose-50 border-pink-300 shadow-2xl">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
          >
            <DialogHeader className="text-center space-y-4">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 2 }}
                className="mx-auto text-6xl"
              >
                🎉
              </motion.div>
              
              <DialogTitle className="text-3xl font-bold text-pink-800 font-dancing">
                Yaaay! Amazing! 💕
              </DialogTitle>
              
              <DialogDescription className="text-xl text-pink-700 space-y-4">
                <div className="flex items-center justify-center gap-2">
                  <Calendar className="w-6 h-6" />
                  <span>Let's plan something incredible together!</span>
                </div>
                
                <div className="flex items-center justify-center gap-2">
                  <Gift className="w-6 h-6" />
                  <span>I promise the date will be better than my pickup lines!</span>
                </div>
                
                <div className="flex items-center justify-center gap-2 text-2xl font-semibold text-pink-800">
                  <Sparkles className="w-7 h-7" />
                  <span>Get ready for the most romantic evening ever!</span>
                </div>
              </DialogDescription>
            </DialogHeader>
            
            {/* Floating hearts in the dialog */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {mounted && [...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-2xl"
                  initial={{ 
                    x: 200 + (i * 25), // Use deterministic initial positions
                    y: 300,
                    opacity: 0
                  }}
                  animate={{ 
                    y: -50,
                    opacity: [0, 1, 0],
                    scale: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 3,
                    delay: i * 0.2,
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                >
                  💖
                </motion.div>
              ))}
            </div>
          </motion.div>
        </DialogContent>
      </Dialog>

      <AnimatePresence>
        {!isLetterOpen ? (
          // Closed Letter
          <motion.div
            key="closed-letter"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="cursor-pointer w-full max-w-sm"
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
              {/* Envelope - Responsive sizing */}
              <div className="w-full aspect-[4/3] max-w-80 mx-auto bg-gradient-to-br from-pink-300 to-rose-400 rounded-lg shadow-2xl relative overflow-hidden">
                {/* Envelope flap */}
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-br from-pink-400 to-rose-500 transform origin-top"></div>
                
                {/* Heart seal */}
                <div className="absolute top-4 sm:top-6 left-1/2 transform -translate-x-1/2 text-2xl sm:text-4xl">
                  💌
                </div>
                
                {/* Envelope body */}
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-br from-pink-200 to-rose-300"></div>
              </div>
              
              {/* Click instruction */}
              <motion.p
                className="text-center mt-4 sm:mt-6 text-pink-700 font-medium text-sm sm:text-base"
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
            className="w-full max-w-2xl mx-auto"
          >
            {/* Letter Paper */}
            <motion.div
              className="bg-white rounded-lg shadow-2xl p-4 sm:p-6 md:p-8 lg:p-12 relative"
              initial={{ rotateX: -90 }}
              animate={{ rotateX: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ 
                background: 'linear-gradient(135deg, #fef7f7 0%, #fdf2f8 100%)',
                backgroundImage: `
                  repeating-linear-gradient(
                    0deg,
                    transparent,
                    transparent 20px,
                    rgba(236, 72, 153, 0.1) 21px
                  )
                `
              }}
            >
              {/* Letter holes - Hidden on mobile for cleaner look */}
              <div className="absolute left-3 sm:left-6 top-0 bottom-0 hidden sm:flex flex-col justify-center space-y-6 md:space-y-8">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-full shadow-inner border-2 border-pink-200"></div>
                ))}
              </div>

              {/* Letter Content */}
              <div className="sm:ml-8">
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
                        className="text-center mb-6 sm:mb-8"
                      >
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-dancing text-gradient font-bold mb-2">
                          Hey Beautiful! 💕
                        </h1>
                        <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto rounded-full"></div>
                      </motion.div>

                      {/* Pickup Line */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mb-6 sm:mb-8"
                      >
                        <div className="bg-pink-50 border-l-4 border-pink-400 p-4 sm:p-6 rounded-r-lg mb-4 sm:mb-6">
                          <p className="text-base sm:text-lg md:text-xl text-pink-800 italic font-medium leading-relaxed">
                            "{pickupLine}"
                          </p>
                        </div>
                      </motion.div>

                      {/* The Ask */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="text-center mb-6 sm:mb-8"
                      >
                        <p className="text-lg sm:text-xl md:text-2xl text-pink-700 font-semibold mb-3 sm:mb-4">
                          So... wanna go on a date? 🌹
                        </p>
                        <p className="text-pink-600 text-base sm:text-lg">
                          I promise I have better jokes in person! 😄
                        </p>
                      </motion.div>

                      {/* Buttons */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
                      >
                        <motion.button
                          className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 sm:px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center gap-2 justify-center group text-sm sm:text-base"
                          whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0 15px 30px rgba(236, 72, 153, 0.4)"
                          }}
                          whileTap={{ scale: 0.95 }}
                          onClick={handleYesClick}
                        >
                          <Heart className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
                          Yes, I'd love to! 💕
                        </motion.button>

                        <div className="relative flex justify-center">
                          <motion.button
                            className="bg-pink-100 hover:bg-pink-200 text-pink-700 px-6 sm:px-8 py-3 rounded-full font-semibold transition-colors duration-300 flex items-center gap-2 justify-center group text-sm sm:text-base"
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
                            onTouchStart={handleCloseHover} // Add touch support for mobile
                            onClick={dodgeCount >= 100 ? closeLetter : undefined}
                            style={{ 
                              cursor: dodgeCount >= 100 ? 'pointer' : 'not-allowed',
                              opacity: dodgeCount >= 100 ? 1 : 0.8
                            }}
                          >
                            <Mail className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-300" />
                            {dodgeCount >= 100 ? 'Fine, Close Letter' : 'Close Letter'}
                          </motion.button>
                          
                          {dodgeCount > 0 && dodgeCount < 100 && currentHoverMessage && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0 }}
                              className="absolute -top-10 sm:-top-12 left-1/2 transform -translate-x-1/2 bg-pink-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm whitespace-nowrap z-10"
                            >
                              {currentHoverMessage}
                            </motion.div>
                          )}
                        </div>
                      </motion.div>

                      {/* Signature */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.0 }}
                        className="text-right mt-6 sm:mt-8"
                      >
                        <p className="text-pink-600 font-dancing text-lg sm:text-xl">
                          With love,
                        </p>
                        <p className="text-pink-700 font-dancing text-xl sm:text-2xl font-bold">
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

      {/* Floating hearts background - Only render after mount */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {mounted && [...Array(typeof window !== 'undefined' && window.innerWidth < 640 ? 4 : 6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-lg sm:text-2xl opacity-20"
            initial={{ 
              x: 100 + (i * 200), // Use deterministic initial positions
              y: typeof window !== 'undefined' ? window.innerHeight + 50 : 800,
            }}
            animate={{ 
              y: -100,
              x: 150 + (i * 180) // Use more predictable animation
            }}
            transition={{ 
              duration: 6 + (i * 0.5), // Vary duration slightly
              repeat: Infinity,
              delay: i * 1, // Stagger delays
              ease: "linear"
            }}
          >
            💕
          </motion.div>
        ))}
      </div>

      {/* Made by Arwin Credit */}
      <div className="fixed bottom-4 right-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-pink-200"
        >
          <a
            href="https://github.com/sthaarwin/AskHerOut"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-pink-700 hover:text-pink-800 font-medium transition-colors duration-200 flex items-center gap-2"
          >
            <span>Made by Arwin</span>
            <motion.span
              whileHover={{ scale: 1.1 }}
              className="text-pink-500"
            >
              💖
            </motion.span>
          </a>
        </motion.div>
      </div>

      <Toaster />
    </div>
  );
}