import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassProjectCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export const GlassProjectCard = ({ children, delay = 0, className = "" }: GlassProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        type: "spring", 
        stiffness: 200, 
        damping: 15,
        delay 
      }}
      whileHover={{ scale: 1.02 }}
      className={`glass-card rounded-3xl p-6 glass-hover ${className}`}
    >
      {children}
    </motion.div>
  );
};
