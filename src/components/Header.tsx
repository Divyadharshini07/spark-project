import { Button } from "@/components/ui/button";
import femoratekLogo from "@/assets/femoratek-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={femoratekLogo} alt="Femoratek" className="h-8 w-8" />
            <span className="text-xl font-display font-bold">FEMORATEK</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm hover:text-primary transition-colors">Home</a>
            <a href="#services" className="text-sm hover:text-primary transition-colors">Services</a>
            <a href="#about" className="text-sm hover:text-primary transition-colors">About us</a>
            <a href="#contact" className="text-sm hover:text-primary transition-colors">Contact</a>
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
