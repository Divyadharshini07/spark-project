import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  rating: number;
  text: string;
  author: string;
  index: number;
}

const TestimonialCard = ({ rating, text, author, index }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300"
    >
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-accent text-accent" />
        ))}
      </div>
      
      <Quote className="w-8 h-8 text-primary/30 mb-4" />
      
      <p className="text-muted-foreground mb-6 leading-relaxed italic">
        {text}
      </p>
      
      <p className="text-sm font-semibold">— {author}</p>
    </motion.div>
  );
};

export default TestimonialCard;
