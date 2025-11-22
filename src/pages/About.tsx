import { motion } from "framer-motion";
import { Award, Users, Clock, Sparkles } from "lucide-react";
import { GlassProjectCard } from "@/components/GlassProjectCard";
import { StatsCard } from "@/components/StatsCard";
import profileImage from "@/assets/profile.jpg";

const About = () => {
  return (
    <div className="min-h-screen pt-24">
      <section className="container mx-auto px-6 py-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="text-5xl md:text-7xl font-light text-center mb-20"
        >
          About Me
        </motion.h1>

        {/* Profile Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              rotate: 0,
            }}
            transition={{ 
              type: "spring", 
              stiffness: 150, 
              damping: 10,
              duration: 0.5
            }}
            whileHover={{ 
              scale: 1.05,
              rotate: 5,
              transition: { 
                type: "spring", 
                stiffness: 300, 
                damping: 15 
              }
            }}
            className="relative w-64 h-64 mx-auto mb-12 cursor-pointer"
          >
            {/* Instagram-colored animated glow */}
            <div 
              className="absolute inset-0 rounded-full blur-3xl opacity-70 instagram-glow"
              style={{
                background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                backgroundSize: "200% 200%",
              }}
            />
            
            {/* Glass frame */}
            <div className="relative glass-card rounded-full p-2 h-full w-full">
              <img
                src={profileImage}
                alt="Muneeb - Video Editor"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-light mb-4">Muhammad Muneeb</h2>
            <p className="text-xl text-muted-foreground font-light">Cinematic Video Editor & Motion Designer</p>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20">
          <StatsCard icon={Sparkles} value="500+" label="Projects Completed" color="blue" delay={0.1} />
          <StatsCard icon={Award} value="5+" label="Years Experience" color="purple" delay={0.2} />
          <StatsCard icon={Users} value="200+" label="Happy Clients" color="teal" delay={0.3} />
          <StatsCard icon={Clock} value="10k+" label="Hours Edited" color="orange" delay={0.4} />
        </div>

        {/* Why Choose Me */}
        <div className="max-w-4xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="text-4xl font-light text-center mb-12"
          >
            Why Choose Me
          </motion.h2>

          <div className="space-y-6">
            <GlassProjectCard delay={0.1}>
              <h3 className="text-2xl font-light mb-3">Cinematic Excellence</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Every project is treated as a unique story. I combine technical expertise with creative vision to deliver content that not only looks stunning but resonates with your audience.
              </p>
            </GlassProjectCard>

            <GlassProjectCard delay={0.2}>
              <h3 className="text-2xl font-light mb-3">Fast Turnaround</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Time is valuable. I deliver high-quality edits within agreed timelines without compromising on quality. Clear communication throughout ensures we stay on track.
              </p>
            </GlassProjectCard>

            <GlassProjectCard delay={0.3}>
              <h3 className="text-2xl font-light mb-3">Versatile Skillset</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                From long-form documentaries to viral social content, from motion graphics to VFX – I bring a comprehensive toolkit to every project.
              </p>
            </GlassProjectCard>
          </div>
        </div>

        {/* My Mission */}
        <div className="max-w-4xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="text-4xl font-light text-center mb-12"
          >
            My Mission
          </motion.h2>

          <GlassProjectCard delay={0.1}>
            <p className="text-lg text-muted-foreground font-light leading-relaxed text-center">
              To transform raw footage into compelling visual narratives that captivate, inspire, and drive results. 
              I believe every frame matters, and every edit should serve the story. My goal is to help creators and 
              brands amplify their message through the power of expertly crafted video content.
            </p>
          </GlassProjectCard>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="text-4xl font-light text-center mb-12"
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-6">
            <GlassProjectCard delay={0.1}>
              <h3 className="text-xl font-light mb-2">What's your typical turnaround time?</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                For most projects, I deliver within 3-7 business days. Rush orders are available for urgent needs, and longer projects are scheduled based on complexity.
              </p>
            </GlassProjectCard>

            <GlassProjectCard delay={0.2}>
              <h3 className="text-xl font-light mb-2">What video formats do you work with?</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                I work with all major video formats including MP4, MOV, AVI, and professional codecs like ProRes. I can deliver in any format you need for your platform.
              </p>
            </GlassProjectCard>

            <GlassProjectCard delay={0.3}>
              <h3 className="text-xl font-light mb-2">Do you offer revisions?</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Yes! I include up to 3 rounds of revisions with every project to ensure you're completely satisfied with the final result.
              </p>
            </GlassProjectCard>

            <GlassProjectCard delay={0.4}>
              <h3 className="text-xl font-light mb-2">What software do you use?</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                I primarily use Adobe Premiere Pro, After Effects, and DaVinci Resolve. I'm also experienced with Final Cut Pro and various motion graphics tools.
              </p>
            </GlassProjectCard>

            <GlassProjectCard delay={0.5}>
              <h3 className="text-xl font-light mb-2">How do we share files?</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                I accept files via Google Drive, Dropbox, WeTransfer, or Frame.io. I can work with whatever platform is most convenient for you.
              </p>
            </GlassProjectCard>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
