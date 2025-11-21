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
import abstractFlow1 from "@/assets/abstract-flow-1.jpg";
import abstractFlow2 from "@/assets/abstract-flow-2.jpg";
import abstractPurpleSphere from "@/assets/abstract-purple-sphere.png";
import abstractGoldenShape from "@/assets/abstract-golden-shape.png";
import abstractColorfulRibbon from "@/assets/abstract-colorful-ribbon.png";
import abstractCyanSphere from "@/assets/abstract-cyan-sphere.png";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const heroImageRef = useRef<HTMLImageElement>(null);
  const flow1Ref = useRef<HTMLImageElement>(null);
  const flow2Ref = useRef<HTMLImageElement>(null);
  const purpleSphereRef = useRef<HTMLImageElement>(null);
  const goldenShapeRef = useRef<HTMLImageElement>(null);
  const colorfulRibbonRef = useRef<HTMLImageElement>(null);
  const cyanSphereRef = useRef<HTMLImageElement>(null);

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

    // Abstract flow shapes animations
    const shapes = [flow1Ref.current, flow2Ref.current];
    shapes.forEach((shape, index) => {
      if (shape) {
        gsap.fromTo(
          shape,
          { opacity: 0, scale: 0.5, rotation: -45 },
          {
            opacity: 0.7,
            scale: 1,
            rotation: 0,
            duration: 1.8,
            ease: "power3.out",
            delay: 0.3 * index,
            scrollTrigger: {
              trigger: shape,
              start: "top 80%",
            }
          }
        );

        // Continuous floating and subtle rotation
        gsap.to(shape, {
          y: index === 0 ? -40 : -30,
          rotation: index === 0 ? 15 : -15,
          duration: 4 + index,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      }
    });

    // Additional 3D abstract shapes animations
    const additionalShapes = [
      { ref: purpleSphereRef.current, delay: 0.4 },
      { ref: goldenShapeRef.current, delay: 0.6 },
      { ref: colorfulRibbonRef.current, delay: 0.5 },
      { ref: cyanSphereRef.current, delay: 0.7 }
    ];

    additionalShapes.forEach(({ ref, delay }, index) => {
      if (ref) {
        gsap.fromTo(
          ref,
          { opacity: 0, scale: 0.3, rotation: -60 },
          {
            opacity: 0.8,
            scale: 1,
            rotation: 0,
            duration: 2,
            ease: "power3.out",
            delay: delay,
            scrollTrigger: {
              trigger: ref,
              start: "top 85%",
            }
          }
        );

        // Individual floating animations
        gsap.to(ref, {
          y: index % 2 === 0 ? -35 : -25,
          rotation: index % 2 === 0 ? 20 : -20,
          duration: 3.5 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
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
        {/* 3D Abstract Flow Shapes */}
        <img 
          ref={flow1Ref}
          src={abstractFlow1} 
          alt="" 
          className="absolute -top-10 -right-20 w-80 h-80 opacity-30 pointer-events-none blur-sm"
        />
        <img 
          ref={flow2Ref}
          src={abstractFlow2} 
          alt="" 
          className="absolute -bottom-20 -left-10 w-96 h-96 opacity-25 pointer-events-none blur-sm"
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
                FemoraTek is a creative-tech studio that builds modern websites, clean interfaces, secure integrations, and strong brand identities. We focus on simple, effective design and reliable development that help businesses work smarter and grow with confidence.
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
        {/* 3D Abstract Shapes for Services */}
        <img 
          ref={purpleSphereRef}
          src={abstractPurpleSphere} 
          alt="" 
          className="absolute top-20 right-10 w-64 h-64 opacity-60 pointer-events-none"
        />
        <img 
          ref={colorfulRibbonRef}
          src={abstractColorfulRibbon} 
          alt="" 
          className="absolute bottom-10 right-20 w-56 h-56 opacity-50 pointer-events-none"
        />
        
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
        {/* 3D Abstract Shape for Testimonials */}
        <img 
          ref={goldenShapeRef}
          src={abstractGoldenShape} 
          alt="" 
          className="absolute top-10 right-16 w-72 h-72 opacity-50 pointer-events-none"
        />
        <img 
          ref={cyanSphereRef}
          src={abstractCyanSphere} 
          alt="" 
          className="absolute bottom-20 left-10 w-60 h-60 opacity-40 pointer-events-none"
        />
        
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
              text="Working with FemoraTek was super smooth. The website came out clean, fast, and exactly how we imagined."
              author="JVC Hallmark"
              index={0}
            />
            <TestimonialCard
              rating={5}
              text="FemoraTek handled our branding beautifully. Professional team, quick response, and very reliable."
              author="J3SIXTEEN"
              index={1}
            />
            <TestimonialCard
              rating={5}
              text="Great service and clean execution. They delivered on time and the support after launch was amazing."
              author="Grace and Amour"
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
