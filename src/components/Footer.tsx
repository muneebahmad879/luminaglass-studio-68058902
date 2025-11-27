import { Instagram, Linkedin, Twitter, Youtube, Mail, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import profileImage from "@/assets/profile.jpg";

export const Footer = () => {
  const socialLinks = [
    { name: "YouTube", icon: Youtube, url: "https://www.youtube.com/@muneebgondal" },
    { name: "Instagram", icon: Instagram, url: "https://instagram.com/muneebgondal" },
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/muneebgondal" },
    { name: "Twitter", icon: Twitter, url: "https://twitter.com/muneebgondal" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative mt-32 overflow-hidden">
      {/* Decorative top border with gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="glass-card rounded-3xl p-8 md:p-12 shadow-[inset_0_2px_20px_rgba(255,255,255,0.15),0_0_40px_rgba(255,255,255,0.05)]">
          <div className="grid md:grid-cols-3 gap-12 items-center">
            {/* Profile Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center md:items-start gap-4"
            >
              <div className="relative group">
                <div className="absolute -inset-[3px] rounded-full instagram-glow-animated opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                <img 
                  src={profileImage} 
                  alt="Muneeb Gondal" 
                  className="relative w-20 h-20 rounded-full object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-light mb-2 tracking-tight">Muneeb Gondal</h3>
                <p className="text-muted-foreground font-light text-sm">Professional Video Editor</p>
                <p className="text-muted-foreground/70 font-light text-xs mt-1">Crafting Stories, Frame by Frame</p>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col items-center gap-6"
            >
              <p className="text-sm font-light text-muted-foreground uppercase tracking-wider">Connect</p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                    whileHover={{ scale: 1.15, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative glass-card p-4 rounded-2xl transition-all duration-300 shadow-[inset_0_2px_10px_rgba(255,255,255,0.2)] group"
                    aria-label={social.name}
                  >
                    <div className="absolute inset-0 rounded-2xl instagram-border-animated opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <social.icon className="w-5 h-5 relative z-10" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact & Scroll to Top */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center md:items-end gap-6"
            >
              <a 
                href="mailto:contact@muneebgondal.com"
                className="group flex items-center gap-2 glass-card px-6 py-3 rounded-full hover:scale-105 transition-all duration-300 shadow-[inset_0_2px_10px_rgba(255,255,255,0.2)]"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm font-light">Get in Touch</span>
              </a>
              
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.9 }}
                className="glass-card p-4 rounded-full shadow-[inset_0_2px_10px_rgba(255,255,255,0.2)] hover:shadow-[inset_0_2px_15px_rgba(255,255,255,0.3),0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Copyright */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-8"
        >
          <p className="text-xs text-muted-foreground/60 font-light">
            © {new Date().getFullYear()} Muneeb Gondal. All rights reserved. Designed with passion.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
