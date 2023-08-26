import React from "react";
import { motion } from "framer-motion";

const GestureAnimation = ({ children }) => (
  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
    {children}
  </motion.div>
);

export default GestureAnimation;
