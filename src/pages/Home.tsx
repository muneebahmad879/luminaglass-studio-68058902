import { motion } from "framer-motion";
import { Film, Sparkles, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlowIcon } from "@/components/GlowIcon";
import { GlassProjectCard } from "@/components/GlassProjectCard";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="text-6xl md:text-8xl font-light mb-6 tracking-tight"
          >
            Cinematic Stories,
            <br />
            <span className="text-primary">Frame by Frame</span>
          </motion.h1>


          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 font-light max-w-3xl mx-auto"
          >
            Professional video editor crafting compelling narratives through expert editing, motion graphics, and creative storytelling
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://www.youtube.com/@muneebgondal', '_blank')}
              className="glass-card px-8 py-4 rounded-full text-lg font-light hover:glass-hover transition-all shadow-[inset_0_2px_10px_rgba(255,255,255,0.3),0_0_30px_rgba(255,255,255,0.1)]"
            >
              Watch My Work
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="container mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="text-4xl md:text-5xl font-light text-center mb-16"
        >
          What I Bring to Your Vision
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <GlassProjectCard delay={0}>
            <div className="flex justify-center mb-6">
              <GlowIcon icon={Video} color="blue" size={40} />
            </div>
            <h3 className="text-2xl font-light mb-4 text-center">Long Form Editing</h3>
            <p className="text-muted-foreground font-light text-center">
              Documentaries, interviews, and narrative content
            </p>
          </GlassProjectCard>

          <GlassProjectCard delay={0.1}>
            <div className="flex justify-center mb-6">
              <GlowIcon icon={Sparkles} color="purple" size={40} />
            </div>
            <h3 className="text-2xl font-light mb-4 text-center">Short Form Content</h3>
            <p className="text-muted-foreground font-light text-center">
              Social media reels, ads, and viral content
            </p>
          </GlassProjectCard>

          <GlassProjectCard delay={0.2}>
            <div className="flex justify-center mb-6">
              <GlowIcon icon={Film} color="teal" size={40} />
            </div>
            <h3 className="text-2xl font-light mb-4 text-center">Motion Graphics</h3>
            <p className="text-muted-foreground font-light text-center">
              Dynamic animations and visual effects
            </p>
          </GlassProjectCard>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsCarousel />
    </div>
  );
};

export default Home;
