import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
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
  const location = useLocation();

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
          
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative font-light transition-colors hover:text-primary"
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
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
