import { motion } from "framer-motion";
import { Code, Database, Globe, Shield, Palette, Image, Award, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import ContactForm from "@/components/ContactForm";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Footer from "@/components/Footer";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroCharacter from "@/assets/hero-3d-character.png";
import abstractSphere from "@/assets/abstract-sphere.png";
import abstractCube from "@/assets/abstract-cube.png";
import abstractTorus from "@/assets/abstract-torus.png";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const heroImageRef = useRef<HTMLImageElement>(null);
  const sphere1Ref = useRef<HTMLImageElement>(null);
  const sphere2Ref = useRef<HTMLImageElement>(null);
  const sphere3Ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Hero character animation
    if (heroImageRef.current) {
      gsap.fromTo(
        heroImageRef.current,
        { opacity: 0, y: 100, scale: 0.8 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          duration: 1.2, 
          ease: "power3.out",
          delay: 0.3
        }
      );
      
      // Floating animation
      gsap.to(heroImageRef.current, {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    }

    // Abstract shapes animations
    const shapes = [sphere1Ref.current, sphere2Ref.current, sphere3Ref.current];
    shapes.forEach((shape, index) => {
      if (shape) {
        gsap.fromTo(
          shape,
          { opacity: 0, scale: 0, rotation: 0 },
          {
            opacity: 1,
            scale: 1,
            rotation: 360,
            duration: 1.5,
            ease: "power2.out",
            delay: 0.2 * index,
            scrollTrigger: {
              trigger: shape,
              start: "top 80%",
            }
          }
        );

        // Continuous floating and rotation
        gsap.to(shape, {
          y: -30,
          rotation: 360,
          duration: 3 + index,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut"
        });
      }
    });
  }, []);

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
            
            <div className="relative hidden lg:flex justify-center items-center">
              <img 
                ref={heroImageRef}
                src={heroCharacter} 
                alt="3D Character working on laptop" 
                className="w-full max-w-md relative z-10"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-24 relative overflow-hidden">
        {/* 3D Abstract Shapes */}
        <img 
          ref={sphere1Ref}
          src={abstractSphere} 
          alt="" 
          className="absolute top-10 right-10 w-32 h-32 opacity-60 pointer-events-none"
        />
        <img 
          ref={sphere2Ref}
          src={abstractCube} 
          alt="" 
          className="absolute bottom-20 left-20 w-40 h-40 opacity-50 pointer-events-none"
        />
        <img 
          ref={sphere3Ref}
          src={abstractTorus} 
          alt="" 
          className="absolute top-1/2 right-1/4 w-36 h-36 opacity-40 pointer-events-none"
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">ABOUT US</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Femoratek has established itself in India and across the Middle East as a leading developer in web and mobile applications. We specialize in building innovative solutions for various types of businesses, delivering superior quality that sets us apart from other agencies and companies.
              </p>
              
              <Button variant="outline" className="border-primary/50 hover:bg-primary hover:text-primary-foreground">
                Learn more
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">OUR SERVICES</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={Code}
              title="Website Development"
              description="Build modern, responsive websites tailored to your business needs."
              index={0}
            />
            <ServiceCard
              icon={Database}
              title="CRM & Web App Development"
              description="Custom CRM solutions and web applications for your business."
              index={1}
            />
            <ServiceCard
              icon={Globe}
              title="Web Hosting & Integration"
              description="Reliable hosting solutions with seamless third-party integrations."
              index={2}
            />
            <ServiceCard
              icon={Shield}
              title="Website Security"
              description="Comprehensive security measures to protect your digital assets."
              index={3}
            />
            <ServiceCard
              icon={Palette}
              title="UI/UX Design"
              description="Create intuitive and engaging user experiences."
              index={4}
            />
            <ServiceCard
              icon={Image}
              title="Graphic Design"
              description="Professional graphics that elevate your brand identity."
              index={5}
            />
            <ServiceCard
              icon={Award}
              title="Branding & Identity Design"
              description="Build a strong brand identity that resonates with your audience."
              index={6}
            />
            <ServiceCard
              icon={Video}
              title="Video Editing & Social Media Cuts"
              description="Engaging video content optimized for social media platforms."
              index={7}
            />
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-24 relative overflow-hidden">
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
