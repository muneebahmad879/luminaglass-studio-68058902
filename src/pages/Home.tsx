import { motion } from "framer-motion";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";

const Home = () => {
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
              className="bg-blue text-white px-8 py-4 rounded-full text-lg font-light transition-all shadow-[inset_0_2px_15px_rgba(255,255,255,0.4),0_0_40px_rgba(59,130,246,0.5)]"
            >
              Watch My Work
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Showreel Section */}
      <section className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 150, damping: 20 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative group">
            {/* Instagram-colored animated rotating glow */}
            <div 
              className="absolute -inset-4 rounded-3xl opacity-70 instagram-glow-animated transition-all duration-700 group-hover:opacity-90"
              style={{ zIndex: -1 }}
            />
            
            {/* Glass frame */}
            <div className="relative glass-card rounded-3xl p-4 shadow-[inset_0_2px_20px_rgba(255,255,255,0.2),0_0_40px_rgba(255,255,255,0.1)] backdrop-blur-xl">
              <div className="relative overflow-hidden rounded-2xl aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Showreel"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Testimonials */}
      <TestimonialsCarousel />
    </div>
  );
};

export default Home;
