import { motion } from "framer-motion";
import { Film, Camera, Sparkles, Briefcase } from "lucide-react";
import { GlassProjectCard } from "@/components/GlassProjectCard";
import { CategoryBadge } from "@/components/CategoryBadge";
import { useState } from "react";

const projects = {
  longForm: [
    { title: "Corporate Documentary", category: "Documentary", videoId: "dQw4w9WgXcQ" },
    { title: "Brand Story", category: "Narrative", videoId: "dQw4w9WgXcQ" },
    { title: "Event Coverage", category: "Event", videoId: "dQw4w9WgXcQ" },
  ],
  shortForm: [
    { title: "Product Launch Reel", category: "Social Media", videoId: "dQw4w9WgXcQ" },
    { title: "Instagram Showcase", category: "Reel", videoId: "dQw4w9WgXcQ" },
    { title: "TikTok Campaign", category: "Viral Content", videoId: "dQw4w9WgXcQ" },
  ],
  animations: [
    { title: "Logo Animation", category: "Branding", videoId: "dQw4w9WgXcQ" },
    { title: "Motion Graphics Package", category: "VFX", videoId: "dQw4w9WgXcQ" },
    { title: "Kinetic Typography", category: "Animation", videoId: "dQw4w9WgXcQ" },
  ],
  business: [
    { title: "Brand Identity Video", category: "Corporate", videoId: "dQw4w9WgXcQ" },
    { title: "Product Showcase", category: "Commercial", videoId: "dQw4w9WgXcQ" },
    { title: "Company Culture", category: "Recruitment", videoId: "dQw4w9WgXcQ" },
  ],
};

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState<"longForm" | "shortForm" | "animations" | "business">("longForm");

  return (
    <div className="min-h-screen pt-24">
      <section className="container mx-auto px-6 py-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="text-5xl md:text-7xl font-light text-center mb-6"
        >
          Portfolio
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
          className="text-xl text-center text-muted-foreground font-light mb-12 max-w-3xl mx-auto"
        >
          A showcase of creative storytelling and technical excellence
        </motion.p>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
          className="flex justify-center mb-16"
        >
          <div className="glass-card rounded-full p-2 inline-flex gap-2">
            <button 
              onClick={() => setActiveTab("longForm")}
              className={`relative px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 ${
                activeTab === "longForm" 
                  ? "bg-blue text-white shadow-[inset_0_2px_10px_rgba(255,255,255,0.3),0_0_20px_rgba(59,130,246,0.4)]" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Film size={18} strokeWidth={1.5} />
              <span className="font-light">Long Form</span>
            </button>
            <button 
              onClick={() => setActiveTab("shortForm")}
              className={`relative px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 ${
                activeTab === "shortForm" 
                  ? "bg-purple text-white shadow-[inset_0_2px_10px_rgba(255,255,255,0.3),0_0_20px_rgba(147,51,234,0.4)]" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Camera size={18} strokeWidth={1.5} />
              <span className="font-light">Short Form</span>
            </button>
            <button 
              onClick={() => setActiveTab("animations")}
              className={`relative px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 ${
                activeTab === "animations" 
                  ? "bg-teal text-white shadow-[inset_0_2px_10px_rgba(255,255,255,0.3),0_0_20px_rgba(20,184,166,0.4)]" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Sparkles size={18} strokeWidth={1.5} />
              <span className="font-light">Animations</span>
            </button>
            <button 
              onClick={() => setActiveTab("business")}
              className={`relative px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 ${
                activeTab === "business" 
                  ? "bg-orange text-white shadow-[inset_0_2px_10px_rgba(255,255,255,0.3),0_0_20px_rgba(251,146,60,0.4)]" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Briefcase size={18} strokeWidth={1.5} />
              <span className="font-light">Business & Brand</span>
            </button>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects[activeTab].map((project, index) => (
            <GlassProjectCard key={project.title} delay={index * 0.1}>
              <div className="relative overflow-hidden rounded-2xl aspect-video">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${project.videoId}`}
                  title={project.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </GlassProjectCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
