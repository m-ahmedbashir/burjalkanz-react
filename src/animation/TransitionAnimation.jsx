import React from "react";
import { motion } from "framer-motion";

const TransitionAnimation = ({ children }) => {
  return (
    <motion.div
      initial={{ x: -600 }} // Start with a negative x value (off-screen to the left)
      animate={{ x: 0 }} // Slide to x: 0 (current position)
      transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default TransitionAnimation;
