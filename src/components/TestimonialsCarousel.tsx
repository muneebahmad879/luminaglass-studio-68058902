import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechCorp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    quote: "Absolutely phenomenal work! The editing transformed our corporate video into something truly engaging."
  },
  {
    name: "Michael Chen",
    role: "Content Creator",
    company: "Digital Dreams",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    quote: "Fast turnaround, creative vision, and technical excellence. Couldn't ask for more!"
  },
  {
    name: "Emily Rodriguez",
    role: "CEO",
    company: "Startup Inc",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    quote: "The attention to detail and storytelling ability is unmatched. Highly recommend!"
  },
  {
    name: "David Park",
    role: "Brand Manager",
    company: "Creative Studio",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    quote: "Brought our brand story to life in ways we never imagined. Absolutely brilliant!"
  },
  {
    name: "Lisa Thompson",
    role: "Social Media Manager",
    company: "Viral Media",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    quote: "Perfect for social content! The edits always perform incredibly well with our audience."
  }
];

export const TestimonialsCarousel = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => prev - 0.5);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="py-20 overflow-hidden relative">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="text-4xl md:text-5xl font-light text-center mb-16"
      >
        Client Testimonials
      </motion.h2>

      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      {/* Scrolling testimonials */}
      <div className="relative">
        <motion.div
          className="flex gap-6"
          animate={{
            x: offset
          }}
          transition={{
            duration: 0,
            ease: "linear"
          }}
          onAnimationComplete={() => {
            if (offset <= -(400 * testimonials.length)) {
              setOffset(0);
            }
          }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card rounded-3xl p-8 min-w-[350px] md:min-w-[400px] flex-shrink-0"
            >
              <Quote className="text-primary mb-6" size={32} strokeWidth={1.5} />
              <p className="text-lg font-light mb-6 leading-relaxed">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-light">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground font-light">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
