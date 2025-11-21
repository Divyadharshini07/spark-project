import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppFloat = () => {
  const handleClick = () => {
    window.open("https://wa.me/917010317122", "_blank");
  };

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1 }}
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
      <span className="absolute right-16 bg-card border border-border px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with us
      </span>
    </motion.button>
  );
};

export default WhatsAppFloat;
