import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { GlassProjectCard } from "@/components/GlassProjectCard";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechFlow Inc.",
    quote: "Muneeb transformed our corporate videos into cinematic masterpieces. His attention to detail and creative vision exceeded our expectations.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces"
  },
  {
    name: "David Chen",
    role: "Content Creator",
    company: "Viral Media",
    quote: "Working with Muneeb elevated my content game. His edits are not just professional—they're art. Every frame tells a story.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces"
  },
  {
    name: "Emma Williams",
    role: "Brand Manager",
    company: "Creative Studios",
    quote: "Fast turnaround without compromising quality. Muneeb understands brand vision and brings it to life through exceptional editing.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces"
  },
  {
    name: "Michael Rodriguez",
    role: "Documentary Filmmaker",
    company: "Story Films",
    quote: "His motion graphics skills are unmatched. Muneeb added layers of depth to our documentary that we never imagined possible.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces"
  },
  {
    name: "Lisa Anderson",
    role: "Social Media Strategist",
    company: "Digital Pulse",
    quote: "Muneeb knows exactly how to make content go viral. His short-form edits consistently deliver engagement and results.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=faces"
  }
];

export const TestimonialsCarousel = () => {
  return (
    <section className="container mx-auto px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="text-4xl md:text-5xl font-light text-center mb-16"
      >
        Client Testimonials
      </motion.h2>

      <div className="max-w-5xl mx-auto">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <GlassProjectCard delay={0}>
                  <div className="flex flex-col items-center text-center p-6">
                    <div className="mb-6">
                      <Quote className="w-12 h-12 text-primary opacity-50" />
                    </div>
                    
                    <p className="text-lg text-muted-foreground font-light leading-relaxed mb-8 italic">
                      "{testimonial.quote}"
                    </p>

                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full overflow-hidden mb-4 glass-card p-1">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                      <h4 className="text-xl font-light mb-1">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground font-light">{testimonial.role}</p>
                      <p className="text-sm text-primary font-light">{testimonial.company}</p>
                    </div>
                  </div>
                </GlassProjectCard>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="glass-card hover:glass-hover border-primary/20" />
          <CarouselNext className="glass-card hover:glass-hover border-primary/20" />
        </Carousel>
      </div>
    </section>
  );
};
