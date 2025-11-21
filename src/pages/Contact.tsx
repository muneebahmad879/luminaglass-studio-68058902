import { motion } from "framer-motion";
import { Mail, Phone, Instagram, Facebook, Briefcase } from "lucide-react";
import { GlassProjectCard } from "@/components/GlassProjectCard";
import { GlowIcon } from "@/components/GlowIcon";

const contactMethods = [
  {
    icon: Phone,
    color: "blue" as const,
    label: "Phone",
    value: "+92 327 7250607",
    href: "tel:+923277250607",
  },
  {
    icon: Mail,
    color: "purple" as const,
    label: "Email",
    value: "hello.muneb@gmail.com",
    href: "mailto:hello.muneb@gmail.com",
  },
];

const socialLinks = [
  {
    icon: Instagram,
    color: "red" as const,
    label: "Instagram",
    handle: "@muneebcreative",
    href: "https://www.instagram.com/muneebcreative/",
  },
  {
    icon: Facebook,
    color: "blue" as const,
    label: "Facebook",
    handle: "MuneebCreative",
    href: "https://www.facebook.com/MuneebCreative",
  },
  {
    icon: Briefcase,
    color: "teal" as const,
    label: "Behance",
    handle: "muhammadmuneeb112",
    href: "https://www.behance.net/muhammadmuneeb112",
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen pt-24">
      <section className="container mx-auto px-6 py-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="text-5xl md:text-7xl font-light text-center mb-6"
        >
          Let's Create Together
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
          className="text-xl text-center text-muted-foreground font-light mb-20 max-w-3xl mx-auto"
        >
          Have a project in mind? Let's discuss how we can bring your vision to life
        </motion.p>

        <div className="max-w-4xl mx-auto">
          {/* Contact Methods */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="text-3xl font-light text-center mb-12"
          >
            Get In Touch
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6 mb-20">
            {contactMethods.map((method, index) => (
              <GlassProjectCard key={method.label} delay={index * 0.1}>
                <a
                  href={method.href}
                  className="flex items-center gap-6 p-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GlowIcon icon={method.icon} color={method.color} size={32} />
                  <div>
                    <div className="text-sm text-muted-foreground font-light mb-1">
                      {method.label}
                    </div>
                    <div className="text-lg font-light">{method.value}</div>
                  </div>
                </a>
              </GlassProjectCard>
            ))}
          </div>

          {/* Social Links */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="text-3xl font-light text-center mb-12"
          >
            Connect on Social
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {socialLinks.map((social, index) => (
              <GlassProjectCard key={social.label} delay={index * 0.1}>
                <a
                  href={social.href}
                  className="flex flex-col items-center gap-4 p-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GlowIcon icon={social.icon} color={social.color} size={32} />
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground font-light mb-1">
                      {social.label}
                    </div>
                    <div className="text-lg font-light">{social.handle}</div>
                  </div>
                </a>
              </GlassProjectCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
