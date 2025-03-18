import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-gray-950 flex items-center justify-center z-50"
    >
      <span className="loader"></span>
    </motion.div>
  );
};

export default LoadingScreen;