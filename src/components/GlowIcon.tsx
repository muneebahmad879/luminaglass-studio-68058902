import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface GlowIconProps {
  icon: LucideIcon;
  color: "blue" | "purple" | "teal" | "orange" | "red";
  size?: number;
}

const colorMap = {
  blue: "bg-blue text-white",
  purple: "bg-purple text-white",
  teal: "bg-teal text-white",
  orange: "bg-orange text-white",
  red: "bg-red text-white",
};

export const GlowIcon = ({ icon: Icon, color, size = 48 }: GlowIconProps) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="relative inline-flex"
    >
      <div className={`absolute inset-0 ${colorMap[color]} rounded-2xl blur-xl opacity-50 animate-glow`} />
      <div className={`relative ${colorMap[color]} p-4 rounded-2xl`}>
        <Icon size={size} strokeWidth={1.5} />
      </div>
    </motion.div>
  );
};
