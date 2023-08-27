import React from "react";
import { motion } from "framer-motion";

const TransitionAnimation = ({ children, point, left }) => {
  return (
    <motion.div
      initial={{ x: left || -600 }} // Start with a negative x value (off-screen to the left)
      animate={{ x: 0 }} // Slide to x: 0 (current position)
      transition={{ type: "spring", stiffness: 40, delay: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default TransitionAnimation;
