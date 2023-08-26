import React from "react";
import { motion } from "framer-motion";

const SlideAnimation = ({ children }) => {
  return (
    <motion.div
      initial={{ y: -300 }} // Start with a negative x value (off-screen to the left)
      animate={{ y: 0 }} // Slide to x: 0 (current position)
      transition={{ type: "spring", stiffness: 100 }}
    >
      {children}
    </motion.div>
  );
};

export default SlideAnimation;
