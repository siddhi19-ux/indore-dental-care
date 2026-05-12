import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { 
  Stethoscope, Shield, Baby, Clock, Calendar, Phone, 
  Mail, MapPin, Star, Menu, X, Facebook, Instagram, Twitter
} from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import heroImg from "/images/hero.png";
import drPriyaImg from "/images/dr-priya.png";
import serviceImplantsImg from "/images/service-implants.png";
import serviceRootCanalImg from "/images/service-root-canal.png";
import servicePediatricImg from "/images/service-pediatric.png";

import avatar1 from "/images/avatar-1.png";
import avatar2 from "/images/avatar-2.png";
import avatar3 from "/images/avatar-3.png";
import avatar4 from "/images/avatar-4.png";
import avatar5 from "/images/avatar-5.png";

import gallery1 from "/images/gallery-1.jpg";
import gallery2 from "/images/gallery-2.jpg";
import gallery3 from "/images/gallery-3.jpg";

const contactFormSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().email("Valid email is required"),
  service: z.string().min(1, "Please select a service"),
  date: z.string().min(1, "Please select a preferred date"),
  message: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      service: "",
      date: "",
      message: "",
    },
  });

  function onSubmit(data: ContactFormValues) {
    toast({
      title: "Appointment Requested",
      description: "We'll be in touch shortly to confirm your schedule.",
    });
    form.reset();
  }

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="font-serif text-2xl font-bold text-foreground">
                Dr. Priya's <span className="text-primary font-sans text-xl font-medium tracking-wide ml-1">Dental Care</span>
              </Link>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">About</a>
              <a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">Services</a>
              <a href="#reviews" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">Reviews</a>
              <Button onClick={scrollToContact} data-testid="btn-nav-book">Book Appointment</Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-foreground hover:text-primary p-2"
                data-testid="btn-mobile-menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-border absolute w-full">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg">
              <a href="#about" className="block px-3 py-2 text-foreground hover:text-primary" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#services" className="block px-3 py-2 text-foreground hover:text-primary" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#reviews" className="block px-3 py-2 text-foreground hover:text-primary" onClick={() => setIsMenuOpen(false)}>Reviews</a>
              <div className="px-3 py-2">
                <Button className="w-full" onClick={() => { scrollToContact(); setIsMenuOpen(false); }}>Book Appointment</Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative bg-muted pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="Modern Dental Clinic" className="w-full h-full object-cover opacity-20 mix-blend-multiply" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden" animate="visible" variants={staggerContainer}
            className="max-w-2xl"
          >
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Premium care for your <span className="text-primary italic">perfect smile.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              Led by Dr. Priya, Indore's most trusted specialist. We combine advanced technology with a warm, pain-free environment.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Button size="lg" className="text-base px-8 h-14 rounded-full shadow-lg" onClick={scrollToContact} data-testid="btn-hero-cta">
                Schedule Your Visit
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="relative"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <img src={drPriyaImg} alt="Dr. Priya" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl max-w-xs">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">15+ Years</h4>
                    <p className="text-sm text-muted-foreground">Experience</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-4xl font-bold mb-6">Meet Dr. Priya</h2>
              <h3 className="text-xl text-primary font-medium mb-6">BDS, MDS (Prosthodontics)</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                With a passion for creating beautiful, healthy smiles, Dr. Priya brings over 15 years of specialized experience to Indore. Her approach is rooted in empathy, ensuring that every patient—from anxious children to seniors—feels completely at ease.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our clinic is designed to rethink the dental experience. No clinical smells, no intimidating environments. Just world-class expertise in a space that feels like a premium lounge.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-xl mb-2 text-foreground">10k+</h4>
                  <p className="text-sm text-muted-foreground">Happy Patients</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-foreground">100%</h4>
                  <p className="text-sm text-muted-foreground">Sterilization</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Specialities</h2>
            <p className="text-muted-foreground">Comprehensive care using the latest international standards and technology.</p>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {/* Service 1 */}
            <motion.div variants={fadeUp} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={serviceImplantsImg} alt="Dental Implants" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <Stethoscope className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Dental Implants</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">Permanent, natural-looking tooth replacements using premium titanium implants for a lifetime smile.</p>
                <a href="#contact" className="text-primary font-medium text-sm hover:underline">Learn More &rarr;</a>
              </div>
            </motion.div>

            {/* Service 2 */}
            <motion.div variants={fadeUp} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={serviceRootCanalImg} alt="Root Canal" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <Shield className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Root Canal Treatment</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">Painless, single-sitting root canals using advanced rotary endodontics to save your natural tooth.</p>
                <a href="#contact" className="text-primary font-medium text-sm hover:underline">Learn More &rarr;</a>
              </div>
            </motion.div>

            {/* Service 3 */}
            <motion.div variants={fadeUp} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={servicePediatricImg} alt="Pediatric Dentistry" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <Baby className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Pediatric Dentistry</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">Gentle, fun, and fear-free dental care specially designed to keep your little ones smiling.</p>
                <a href="#contact" className="text-primary font-medium text-sm hover:underline">Learn More &rarr;</a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                <Shield size={32} />
              </div>
              <h4 className="font-bold text-foreground mb-2">Experienced Team</h4>
              <p className="text-sm text-muted-foreground">Led by specialists</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                <Stethoscope size={32} />
              </div>
              <h4 className="font-bold text-foreground mb-2">Advanced Tech</h4>
              <p className="text-sm text-muted-foreground">Modern equipment</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                <Star size={32} />
              </div>
              <h4 className="font-bold text-foreground mb-2">100% Sterilized</h4>
              <p className="text-sm text-muted-foreground">Autoclave hygiene</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                <Baby size={32} />
              </div>
              <h4 className="font-bold text-foreground mb-2">Child-Friendly</h4>
              <p className="text-sm text-muted-foreground">Warm atmosphere</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-24 bg-muted overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Patient Stories</h2>
            <p className="text-muted-foreground">Hear from our community in Indore.</p>
          </motion.div>

          <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar">
            {[
              { name: "Rahul S.", avatar: avatar1, treatment: "Root Canal", text: "Dr. Priya made my root canal completely painless. The clinic is incredibly clean and the staff is very polite. Best dentist in Indore!" },
              { name: "Anjali M.", avatar: avatar2, treatment: "Dental Implants", text: "Got my mother's implants done here. The whole process was smooth, and she is so happy with her new smile. Highly recommend." },
              { name: "Vikram P.", avatar: avatar3, treatment: "General Checkup", text: "Very professional and transparent about the treatment costs. No unnecessary procedures recommended. Trustworthy." },
              { name: "Kavita D.", avatar: avatar4, treatment: "Teeth Whitening", text: "The ambiance of the clinic instantly puts you at ease. Loving the results of my whitening treatment!" },
              { name: "Suresh K.", avatar: avatar5, treatment: "Pediatric Care", text: "My 6-year-old was terrified of dentists until we met Dr. Priya. She was so patient and friendly." },
            ].map((review, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl min-w-[300px] md:min-w-[400px] snap-center shadow-sm"
              >
                <div className="flex items-center gap-1 text-yellow-400 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                </div>
                <p className="text-foreground italic mb-6">"{review.text}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h5 className="font-bold text-sm text-foreground">{review.name}</h5>
                    <p className="text-xs text-muted-foreground">{review.treatment}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <img src={gallery1} alt="Clinic interior" className="w-full h-64 object-cover rounded-xl" />
            <img src={gallery2} alt="Dental equipment" className="w-full h-64 object-cover rounded-xl" />
            <img src={gallery3} alt="Consultation room" className="w-full h-64 object-cover rounded-xl" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-foreground text-white relative">
        <div className="absolute inset-0 bg-primary/10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-4xl font-bold mb-6 text-white">Schedule Your Visit</h2>
              <p className="text-blue-100 mb-10 max-w-md">
                Take the first step towards a healthier smile. Fill out the form, and our team will get back to you to confirm your appointment.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Clinic Address</h4>
                    <p className="text-blue-100 text-sm">123 Health Avenue, Vijay Nagar<br/>Indore, Madhya Pradesh 452010</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Phone</h4>
                    <p className="text-blue-100 text-sm">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Email</h4>
                    <p className="text-blue-100 text-sm">care@drpriyasdental.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Hours</h4>
                    <p className="text-blue-100 text-sm">Mon - Sat: 10:00 AM - 8:00 PM<br/>Sunday: By Appointment</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-white rounded-2xl p-8 shadow-2xl"
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} className="bg-muted/50" data-testid="input-name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="+91..." {...field} className="bg-muted/50" data-testid="input-phone" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Email</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" {...field} className="bg-muted/50" data-testid="input-email" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Service</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-muted/50" data-testid="select-service">
                                <SelectValue placeholder="Select Service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="implants">Dental Implants</SelectItem>
                              <SelectItem value="root-canal">Root Canal</SelectItem>
                              <SelectItem value="pediatric">Pediatric Dentistry</SelectItem>
                              <SelectItem value="general">General Checkup</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Preferred Date</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} className="bg-muted/50" data-testid="input-date" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Message (Optional)</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Any specific concerns?" {...field} className="bg-muted/50 resize-none" data-testid="input-message" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full h-12 text-base" data-testid="btn-submit-contact">Request Appointment</Button>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white/80 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              <div className="font-serif text-2xl font-bold text-white mb-4">
                Dr. Priya's <span className="text-primary font-sans text-xl font-medium tracking-wide">Dental Care</span>
              </div>
              <p className="max-w-xs mb-6 text-sm leading-relaxed">
                Premium dental care in Indore. We believe in creating beautiful smiles through pain-free, advanced treatments in a luxurious environment.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Treatments</a></li>
                <li><a href="#reviews" className="hover:text-primary transition-colors">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Dr. Priya's Dental Care. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
