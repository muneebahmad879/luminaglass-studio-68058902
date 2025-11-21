import { motion } from "framer-motion";
import { Video, Sparkles, Film, Camera, Clapperboard, Wand2 } from "lucide-react";
import { GlassProjectCard } from "@/components/GlassProjectCard";
import { GlowIcon } from "@/components/GlowIcon";

const services = [
  {
    icon: Video,
    color: "blue" as const,
    title: "Long Form Video Editing",
    description: "Comprehensive editing for documentaries, YouTube videos, corporate content, and narrative projects. Expert pacing, color grading, and storytelling.",
  },
  {
    icon: Sparkles,
    color: "purple" as const,
    title: "Short Form Content",
    description: "Viral-ready content for Instagram Reels, TikTok, and YouTube Shorts. Fast-paced editing optimized for social media engagement.",
  },
  {
    icon: Film,
    color: "teal" as const,
    title: "Motion Graphics & Animations",
    description: "Eye-catching 2D/3D animations, kinetic typography, logo animations, and motion design that brings your brand to life.",
  },
  {
    icon: Camera,
    color: "orange" as const,
    title: "Color Grading & Correction",
    description: "Professional color grading to achieve cinematic looks and maintain consistency across your entire project.",
  },
  {
    icon: Clapperboard,
    color: "red" as const,
    title: "Commercial & Advertising",
    description: "Compelling commercial edits that drive conversions. From product launches to brand campaigns.",
  },
  {
    icon: Wand2,
    color: "purple" as const,
    title: "Visual Effects (VFX)",
    description: "Seamless compositing, green screen work, and visual effects integration for that extra creative touch.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="container mx-auto px-6 py-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="text-5xl md:text-7xl font-light text-center mb-6"
        >
          Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
          className="text-xl text-center text-muted-foreground font-light mb-20 max-w-3xl mx-auto"
        >
          Professional video editing services tailored to your creative vision and business goals
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <GlassProjectCard key={service.title} delay={index * 0.1}>
              <div className="flex justify-center mb-6">
                <GlowIcon icon={service.icon} color={service.color} size={40} />
              </div>
              <h3 className="text-2xl font-light mb-4 text-center">{service.title}</h3>
              <p className="text-muted-foreground font-light text-center leading-relaxed">
                {service.description}
              </p>
            </GlassProjectCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
