'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
        >
          <div className="relative flex flex-col items-center">
            <motion.div
              animate={{
                filter: [
                  'drop-shadow(0 0 0 #0dcaf0)',
                  'drop-shadow(0 0 10px #0dcaf0)',
                  'drop-shadow(0 0 20px #0dcaf0)',
                  'drop-shadow(0 0 10px #0dcaf0)',
                  'drop-shadow(0 0 0 #0dcaf0)',
                ],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              className="glitch-wrapper"
            >
              <Image
                src="/images/devslogo.png" // 👈 Make sure this exists in public/images
                alt="DEVS Logo"
                width={250}
                height={250}
                className="w-[250px] h-[250p] object-contain"
                priority
              />
            </motion.div>
            <motion.h1
              className="mt-6 text-2xl font-bold text-white"
              animate={{
                textShadow: [
                  '0 0 0px #ff00ff',
                  '0 0 5px #ff00ff',
                  '0 0 10px #ff00ff',
                  '0 0 5px #ff00ff',
                  '0 0 0px #ff00ff',
                ],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            >
              Made with 💓
            </motion.h1>
            <div className="glitch-line"></div>
            <div className="mt-8 flex space-x-2">
              <div className="h-3 w-3 rounded-full bg-cyan-400 animate-pulse"></div>
              <div className="h-3 w-3 rounded-full bg-fuchsia-400 animate-pulse delay-150"></div>
              <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse delay-300"></div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
