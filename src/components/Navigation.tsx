import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { NavLink } from "@/components/NavLink";
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
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img
                src={profileImage}
                alt="Muneeb"
                className="w-full h-full object-cover"
              />
            </div>
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

          <div className="md:hidden">
            {/* Mobile menu would go here */}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
