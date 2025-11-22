import { motion } from "framer-motion";
import { Film, Camera, Sparkles } from "lucide-react";
import { GlassProjectCard } from "@/components/GlassProjectCard";
import { CategoryBadge } from "@/components/CategoryBadge";
import { useState } from "react";

const projects = {
  longForm: [
    { title: "Corporate Documentary", category: "Documentary", thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=450&fit=crop" },
    { title: "Brand Story", category: "Narrative", thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&h=450&fit=crop" },
    { title: "Event Coverage", category: "Event", thumbnail: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=450&fit=crop" },
  ],
  shortForm: [
    { title: "Product Launch Reel", category: "Social Media", thumbnail: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&h=450&fit=crop" },
    { title: "Instagram Showcase", category: "Reel", thumbnail: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&h=450&fit=crop" },
    { title: "TikTok Campaign", category: "Viral Content", thumbnail: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=800&h=450&fit=crop" },
  ],
  animations: [
    { title: "Logo Animation", category: "Branding", thumbnail: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=450&fit=crop" },
    { title: "Motion Graphics Package", category: "VFX", thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=450&fit=crop" },
    { title: "Kinetic Typography", category: "Animation", thumbnail: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=450&fit=crop" },
  ],
};

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState<"longForm" | "shortForm" | "animations">("longForm");

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
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <button 
            onClick={() => setActiveTab("longForm")}
            className={activeTab === "longForm" ? "shadow-[inset_0_2px_10px_rgba(255,255,255,0.3)]" : ""}
          >
            <CategoryBadge icon={Film} label="Long Form" color="blue" />
          </button>
          <button 
            onClick={() => setActiveTab("shortForm")}
            className={activeTab === "shortForm" ? "shadow-[inset_0_2px_10px_rgba(255,255,255,0.3)]" : ""}
          >
            <CategoryBadge icon={Camera} label="Short Form" color="purple" />
          </button>
          <button 
            onClick={() => setActiveTab("animations")}
            className={activeTab === "animations" ? "shadow-[inset_0_2px_10px_rgba(255,255,255,0.3)]" : ""}
          >
            <CategoryBadge icon={Sparkles} label="Animations" color="teal" />
          </button>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects[activeTab].map((project, index) => (
            <GlassProjectCard key={project.title} delay={index * 0.1}>
              <div className="relative overflow-hidden rounded-2xl mb-4 aspect-video">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-light mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground font-light">{project.category}</p>
            </GlassProjectCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
