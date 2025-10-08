import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, Github, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "yacefadem03@gmail.com",
    link: "mailto:yacefadem03@gmail.com",
    color: "primary"
  },
  {
    icon: Phone,
    title: "Téléphone",
    value: "+213-773-10-10-94",
    link: "tel:+213773101094",
    color: "secondary"
  },
  {
    icon: Github,
    title: "GitHub",
    value: "github.com/Adem-yac",
    link: "https://github.com/Adem-yac",
    color: "accent"
  },
  {
    icon: MapPin,
    title: "Localisation",
    value: "Algérie",
    link: "#",
    color: "primary"
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message envoyé !",
      description: "Je vous répondrai dans les plus brefs délais.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-6 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-30"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-primary rounded-full animate-glow-pulse"></div>
        <div className="absolute top-1/2 right-16 w-1 h-1 bg-secondary rounded-full animate-glow-pulse delay-700"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-accent rounded-full animate-glow-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Me <span className="text-gradient">Contacter</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Prêt à collaborer ? N'hésitez pas à me contacter pour discuter 
            de vos projets ou opportunités professionnelles.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="glassmorphism shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-gradient">
                  Envoyez-moi un message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom complet</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Votre nom"
                        className="glassmorphism border-border/50 focus:border-primary"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="votre@email.com"
                        className="glassmorphism border-border/50 focus:border-primary"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Sujet</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Sujet de votre message"
                      className="glassmorphism border-border/50 focus:border-primary"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Décrivez votre projet ou votre demande..."
                      rows={6}
                      className="glassmorphism border-border/50 focus:border-primary resize-none"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full gradient-primary hover:scale-105 transition-smooth glow-primary"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Envoyer le Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gradient">
                Informations de contact
              </h3>
              <p className="text-muted-foreground">
                Vous préférez un contact direct ? Utilisez les informations ci-dessous 
                ou connectons-nous sur les réseaux professionnels.
              </p>
            </div>

            <div className="grid gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="glassmorphism shadow-card hover:shadow-floating transition-smooth">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-lg ${
                          info.color === 'primary' ? 'gradient-primary glow-primary' : 
                          info.color === 'secondary' ? 'bg-secondary glow-secondary' : 
                          'bg-accent glow-accent'
                        }`}>
                          <info.icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{info.title}</h4>
                          <a 
                            href={info.link}
                            className="text-muted-foreground hover:text-primary transition-smooth"
                            target={info.link.startsWith('http') ? '_blank' : undefined}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {info.value}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Call to action removed per request */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}