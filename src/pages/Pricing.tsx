import { motion } from "framer-motion";
import { Check, Zap, Crown, Star } from "lucide-react";
import { GlassProjectCard } from "@/components/GlassProjectCard";
import { GlowIcon } from "@/components/GlowIcon";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const pricingPlans = [
  {
    name: "Basic",
    icon: Star,
    color: "blue" as const,
    price: "$150",
    period: "per project",
    description: "Perfect for simple edits and social content",
    features: [
      "Up to 5 minutes of footage",
      "Basic color correction",
      "Simple transitions",
      "2 rounds of revisions",
      "3-5 day delivery",
      "HD export (1080p)",
    ],
  },
  {
    name: "Professional",
    icon: Zap,
    color: "purple" as const,
    price: "$450",
    period: "per project",
    description: "Ideal for businesses and content creators",
    features: [
      "Up to 15 minutes of footage",
      "Advanced color grading",
      "Motion graphics & animations",
      "Sound design & mixing",
      "Unlimited revisions",
      "1-3 day delivery",
      "4K export",
      "Project file included",
    ],
    popular: true,
  },
  {
    name: "Premium",
    icon: Crown,
    color: "teal" as const,
    price: "$1,200",
    period: "per project",
    description: "For high-end productions and campaigns",
    features: [
      "30+ minutes of footage",
      "Cinematic color grading",
      "Advanced VFX & compositing",
      "Custom motion graphics",
      "Professional sound design",
      "Unlimited revisions",
      "Priority 24-48h delivery",
      "Multiple format exports",
      "Raw project files",
      "Dedicated support",
    ],
  },
];

const Pricing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-24">
      <section className="container mx-auto px-6 py-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="text-5xl md:text-7xl font-light text-center mb-6"
        >
          Pricing
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
          className="text-xl text-center text-muted-foreground font-light mb-20 max-w-3xl mx-auto"
        >
          Flexible pricing options to match your project needs and budget
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <GlassProjectCard
              key={plan.name}
              delay={index * 0.1}
              className={plan.popular ? "ring-2 ring-primary" : ""}
            >
              {plan.popular && (
                <div className="bg-primary text-primary-foreground text-sm font-light px-4 py-1 rounded-full inline-block mb-4">
                  Most Popular
                </div>
              )}
              
              <div className="flex justify-center mb-6">
                <GlowIcon icon={plan.icon} color={plan.color} size={40} />
              </div>
              
              <h3 className="text-3xl font-light mb-2 text-center">{plan.name}</h3>
              
              <div className="mb-4 text-center">
                <span className="text-5xl font-light">{plan.price}</span>
                <span className="text-muted-foreground font-light ml-2">{plan.period}</span>
              </div>
              
              <p className="text-muted-foreground font-light mb-8 text-center">{plan.description}</p>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="text-primary mt-0.5 flex-shrink-0" size={20} />
                    <span className="font-light">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/contact")}
                className={`w-full rounded-full font-light transition-all px-5 py-2 text-sm ${
                  plan.popular
                    ? "bg-primary text-primary-foreground shadow-[inset_0_2px_10px_rgba(255,255,255,0.3),0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[inset_0_2px_10px_rgba(255,255,255,0.4),0_0_25px_rgba(59,130,246,0.4)]"
                    : "glass-card hover:glass-hover shadow-[inset_0_2px_10px_rgba(255,255,255,0.3),0_0_20px_rgba(255,255,255,0.1)]"
                }`}
              >
                Get Started
              </motion.button>
            </GlassProjectCard>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground font-light mb-4">
            Need a custom package or have questions about pricing?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/contact")}
            className="glass-card rounded-full px-5 py-2 text-sm font-light hover:glass-hover transition-all shadow-[inset_0_2px_10px_rgba(255,255,255,0.3),0_0_20px_rgba(255,255,255,0.1)]"
          >
            Contact Me
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default Pricing;
