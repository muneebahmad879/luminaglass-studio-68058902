import { motion } from "framer-motion";
import { GlowIcon } from "./GlowIcon";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  color: "blue" | "purple" | "teal" | "orange" | "red";
  delay?: number;
}

export const StatsCard = ({ icon, value, label, color, delay = 0 }: StatsCardProps) => {
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
      className="glass-card rounded-3xl p-6 text-center"
    >
      <div className="flex justify-center mb-4">
        <GlowIcon icon={icon} color={color} size={32} />
      </div>
      <div className="text-4xl font-light mb-2">{value}</div>
      <div className="text-muted-foreground font-light">{label}</div>
    </motion.div>
  );
};
