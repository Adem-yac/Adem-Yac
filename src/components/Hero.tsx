import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Scene3D from './Scene3D';
import { ChevronDown, Github, Mail, Phone } from 'lucide-react';

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Scene3D />
      </div>
      
      {/* Animated background particles */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-glow-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-secondary rounded-full animate-glow-pulse delay-300"></div>
        <div className="absolute bottom-32 left-16 w-3 h-3 bg-accent rounded-full animate-glow-pulse delay-700"></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-primary rounded-full animate-glow-pulse delay-1000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="text-gradient">Adem</span>
            <br />
            <span className="text-foreground">Yac</span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Développeur web et mobile passionné par l'innovation et la création 
            de solutions logicielles efficaces centrées sur l'utilisateur
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Button 
              size="lg"
              className="gradient-primary hover:scale-105 transition-smooth glow-primary font-semibold"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-5 w-5" />
              Me Contacter
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="glassmorphism hover:scale-105 transition-smooth border-primary/30 hover:border-primary"
              onClick={() => window.open('https://github.com/Adem-yac', '_blank')}
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>yacefadem03@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+213-773-10-10-94</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-muted-foreground hover:text-primary transition-smooth"
      >
        <ChevronDown className="h-8 w-8 animate-bounce" />
      </motion.button>
    </section>
  );
}