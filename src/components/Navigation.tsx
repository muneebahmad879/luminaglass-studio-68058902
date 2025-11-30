import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "@/components/NavLink";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import profileImage from "@/assets/profile.jpg";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Pricing", path: "/pricing" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="fixed top-4 left-4 right-4 z-50 glass-card rounded-full"
    >
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <motion.div 
              className="relative"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                duration: 0.8,
                ease: [0.34, 1.56, 0.64, 1]
              }}
              whileHover={{ 
                scale: 1.1, 
                rotate: 5,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <div className="absolute -inset-[3px] rounded-full instagram-border-animated" style={{ zIndex: -1 }} />
              <div className="absolute -inset-[5px] rounded-full instagram-glow-animated" style={{ zIndex: -2 }} />
              <div className="w-10 h-10 rounded-full overflow-hidden relative z-10">
                <img
                  src={profileImage}
                  alt="Muneeb"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <span className="text-xl font-light">Muneeb</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className="relative text-sm font-light text-muted-foreground hover:text-foreground transition-all px-4 py-2 rounded-full group"
              >
                {({ isActive }) => (
                  <>
                    <span className={isActive ? "text-foreground" : ""}>{item.name}</span>
                    {isActive && (
                      <>
                        <motion.div
                          layoutId="activeLink"
                          className="absolute inset-0 glass-card rounded-full -z-10 shadow-[inset_0_2px_10px_rgba(255,255,255,0.3),0_0_20px_rgba(255,255,255,0.1)]"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                        <div className="absolute -inset-0.5 rounded-full instagram-border-animated opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-20" />
                        <div className="absolute -inset-2 rounded-full instagram-glow-animated opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-20" />
                      </>
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <button
            className="md:hidden glass-card p-2 rounded-full"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-2 pt-4 pb-2">
                {navItems.map((item, index) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    className="relative text-sm font-light text-muted-foreground hover:text-foreground transition-all px-4 py-3 rounded-2xl group"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {({ isActive }) => (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <span className={isActive ? "text-foreground" : ""}>{item.name}</span>
                        {isActive && (
                          <motion.div
                            layoutId="activeLinkMobile"
                            className="absolute inset-0 glass-card rounded-2xl -z-10 shadow-[inset_0_2px_10px_rgba(255,255,255,0.3)]"
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                      </motion.div>
                    )}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
