import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-primary" />
            <span className="text-xl font-display font-bold">TECHENERGY</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm hover:text-primary transition-colors">Home</a>
            <a href="#services" className="text-sm hover:text-primary transition-colors">Services</a>
            <a href="#about" className="text-sm hover:text-primary transition-colors">About us</a>
            <a href="#blog" className="text-sm hover:text-primary transition-colors">Blog</a>
          </div>
          
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary">
            Contact us
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
