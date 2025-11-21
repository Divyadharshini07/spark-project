import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-display font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy policy</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-bold mb-4">Contact us</h3>
            <ul className="space-y-2">
              <li><a href="tel:+917010317122" className="text-sm text-muted-foreground hover:text-primary transition-colors">+91 70103 17122</a></li>
              <li><a href="mailto:femoratek@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">femoratek@gmail.com</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-bold mb-4">Address</h3>
            <p className="text-sm text-muted-foreground">
              Thiruvannamalai (Remote)
            </p>
          </div>
          
          <div>
            <h3 className="font-display font-bold mb-4">Follow us on</h3>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/femoratek" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/femoratek" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/femoratek" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
