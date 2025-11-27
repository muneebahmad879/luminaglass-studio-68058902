import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

export const Footer = () => {
  const socialLinks = [
    { name: "YouTube", icon: Youtube, url: "https://www.youtube.com/@muneebgondal" },
    { name: "Instagram", icon: Instagram, url: "https://instagram.com/muneebgondal" },
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/muneebgondal" },
    { name: "Twitter", icon: Twitter, url: "https://twitter.com/muneebgondal" },
  ];

  return (
    <footer className="border-t border-white/20 mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand with Profile Picture */}
          <div className="flex items-center gap-4">
            <img 
              src={profileImage} 
              alt="Muneeb Gondal" 
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-light mb-1">Muneeb Gondal</h3>
              <p className="text-muted-foreground font-light">Professional Video Editor</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative glass-card p-3 rounded-full transition-transform duration-300 shadow-[inset_0_2px_10px_rgba(255,255,255,0.2)] hover:scale-110 group"
                aria-label={social.name}
              >
                <div className="absolute inset-0 rounded-full instagram-border-animated opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <social.icon className="w-5 h-5 relative z-10" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 pt-8 border-t border-white/10">
          <p className="text-sm text-muted-foreground font-light">
            © {new Date().getFullYear()} Muneeb Gondal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
