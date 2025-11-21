import { motion } from "framer-motion";
import { Cloud, Network, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import ContactForm from "@/components/ContactForm";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Footer from "@/components/Footer";
import abstractShape1 from "@/assets/abstract-shape-1.png";
import abstractShape2 from "@/assets/abstract-shape-2.png";
import abstractShape3 from "@/assets/abstract-shape-3.png";
import abstractShape4 from "@/assets/abstract-shape-4.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <WhatsAppFloat />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
                Revolutionizing business with{" "}
                <span className="gradient-text">Femoratek</span>
              </h1>
              
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary mt-6">
                Get started
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <img 
                src={abstractShape1} 
                alt="Abstract 3D Shape" 
                className="w-full max-w-md mx-auto animate-float"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">ABOUT US</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We are Founded in Calicut, India. Techfive has established itself in India and whole over Middle East and is developer market and presence, building the way in development of web and mobile on various kinds of business based development mobile apps and web, which many users report from either agencies at our superior foreign company.
              </p>
              
              <Button variant="outline" className="border-primary/50 hover:bg-primary hover:text-primary-foreground">
                Learn more
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src={abstractShape2} 
                alt="Abstract 3D Shape" 
                className="w-full max-w-md mx-auto animate-float"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 opacity-30">
          <img src={abstractShape3} alt="" className="w-full h-full object-contain animate-float" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">OUR SERVICES</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={Cloud}
              title="Cloud solutions"
              description="Design your apps with interactive and dark canvas with our extensive ready to use components."
              index={0}
            />
            <ServiceCard
              icon={Network}
              title="Network settings"
              description="Design your apps with interactive and dark canvas with our extensive ready to use components working technologies."
              index={1}
            />
            <ServiceCard
              icon={Palette}
              title="UI UX design"
              description="Design your apps with interactive and dark canvas with our extensive ready to use components."
              index={2}
            />
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 opacity-30">
          <img src={abstractShape4} alt="" className="w-full h-full object-contain animate-float" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold">TESTIMONIALS</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              rating={5}
              text="At Cul the printing and typer era. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to operating, whit make a essentially unchanged."
              author="Tech buttomy , Thriventhurum"
              index={0}
            />
            <TestimonialCard
              rating={5}
              text="Lorem Ipsum is simply dummy text of the printing and type era. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the operating, whit leap into essentially unchanged."
              author="Tech buttomy , Thriventhurum"
              index={1}
            />
            <TestimonialCard
              rating={5}
              text="Lorem Ipsum is simply dummy text of the printing and type era. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              author="Tech buttomy , Thriventhurum"
              index={2}
            />
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">CONTACT US</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can help bring your ideas to life.
            </p>
          </motion.div>
          
          <ContactForm />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
