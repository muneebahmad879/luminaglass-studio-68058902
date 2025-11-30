import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: "blue" | "purple" | "teal" | "orange";
  delay: number;
  children?: ReactNode;
}

const colorMap = {
  blue: "text-blue",
  purple: "text-purple",
  teal: "text-teal",
  orange: "text-orange",
};

const glowMap = {
  blue: "shadow-[0_0_30px_rgba(59,130,246,0.3)]",
  purple: "shadow-[0_0_30px_rgba(168,85,247,0.3)]",
  teal: "shadow-[0_0_30px_rgba(20,184,166,0.3)]",
  orange: "shadow-[0_0_30px_rgba(251,146,60,0.3)]",
};

export const ProcessStep = ({
  number,
  title,
  description,
  icon: Icon,
  color,
  delay,
}: ProcessStepProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay,
      }}
      className="relative"
    >
      {/* Connecting line (hidden on first and last) */}
      <div className="hidden lg:block absolute top-20 -right-1/2 w-full h-px bg-gradient-to-r from-border via-border/50 to-transparent" />

      <div className="glass-card rounded-3xl p-8 h-full hover:shadow-[inset_0_2px_20px_rgba(255,255,255,0.2),0_0_40px_rgba(255,255,255,0.1)] transition-all duration-500 group">
        {/* Number badge */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: delay + 0.1,
          }}
          className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl glass-card mb-6 ${colorMap[color]} font-light text-2xl ${glowMap[color]} group-hover:scale-110 transition-transform duration-300`}
        >
          {number}
        </motion.div>

        {/* Icon */}
        <motion.div
          initial={{ scale: 0, rotate: 90 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 12,
            delay: delay + 0.2,
          }}
          className="mb-6"
        >
          <div className={`inline-flex p-4 rounded-2xl glass-card ${colorMap[color]} group-hover:scale-110 transition-transform duration-300`}>
            <Icon size={32} strokeWidth={1.5} />
          </div>
        </motion.div>

        {/* Content */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.3 }}
          className="text-2xl font-light mb-4"
        >
          {title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.4 }}
          className="text-muted-foreground font-light leading-relaxed"
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
};
