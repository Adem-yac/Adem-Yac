import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Smartphone, Database, Globe } from 'lucide-react';

const features = [
  {
    icon: Code,
    title: "Développement Web",
    description: "Création d'applications web modernes avec React.js, Laravel et des technologies de pointe"
  },
  {
    icon: Smartphone,
    title: "Applications Mobile",
    description: "Développement d'apps mobiles natives avec Flutter et Kotlin pour iOS et Android"
  },
  {
    icon: Database,
    title: "Bases de Données",
    description: "Conception et gestion de bases de données MySQL et Firebase pour des solutions scalables"
  },
  {
    icon: Globe,
    title: "Solutions Complètes",
    description: "Développement full-stack de la conception à la mise en production"
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 px-6 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-50"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            À <span className="text-gradient">Propos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Développeur web et mobile polyvalent avec une passion pour l'innovation. 
            Actuellement en formation de Technicien Supérieur en Développement Web et Mobile, 
            je crée des solutions logicielles efficaces et centrées sur l'utilisateur.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="animate-fade-in-up"
            >
              <Card className="glassmorphism shadow-card hover:shadow-floating transition-smooth h-full">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full gradient-primary">
                    <feature.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Formation Section removed per request */}
      </div>
    </section>
  );
}