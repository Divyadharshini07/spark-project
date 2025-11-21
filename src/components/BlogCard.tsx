import { motion } from "framer-motion";

interface BlogCardProps {
  title: string;
  date: string;
  excerpt: string;
  image: string;
  index: number;
}

const BlogCard = ({ title, date, excerpt, image, index }: BlogCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
    >
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <div className="p-6">
        <p className="text-xs text-primary mb-2">{date}</p>
        <h3 className="text-xl font-display font-bold mb-3">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {excerpt}
        </p>
        
        <button className="text-sm text-primary hover:text-accent transition-colors font-semibold">
          Learn more →
        </button>
      </div>
    </motion.div>
  );
};

export default BlogCard;
