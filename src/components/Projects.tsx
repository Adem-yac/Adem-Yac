import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Smartphone, Globe, Database, Users } from 'lucide-react';

const projects = [
  {
    title: "Application de Réservation d'Hôtel",
    description: "Solution complète de réservation hôtelière avec application mobile Flutter pour les clients et interface web d'administration React.js. Système en temps réel avec Firebase.",
    icon: Smartphone,
    technologies: ["Flutter", "React.js", "Firebase", "API REST"],
    category: "Full-Stack",
    color: "primary",
    link: ""
  },
  {
    title: "Système de Gestion RH",
    description: "Application web de gestion des ressources humaines avec système de pointage ZKteco intégré. Interface moderne avec Laravel Filament.",
    icon: Users,
    technologies: ["Laravel", "Filament", "MySQL", "ZKteco API"],
    category: "Web App",
    color: "secondary",
    link: "https://github.com/amaraadelyazid/zkteco1"
  },
  {
    title: "Sites E-commerce",
    description: "Développement de plusieurs sites e-commerce incluant une boutique de fleuriste avec système de commande en ligne et gestion des stocks.",
    icon: Globe,
    technologies: ["WordPress", "WooCommerce", "PHP", "MySQL"],
    category: "E-commerce",
    color: "accent",
    link: ""
  },
  {
    title: "Applications de Gestion",
    description: "Suite d'applications pour la gestion d'employés et de stocks avec interfaces intuitives et reporting avancé.",
    icon: Database,
    technologies: ["PHP", "MySQL", "JavaScript", "CSS3"],
    category: "Business Apps",
    color: "primary",
    link: ""
  }
];

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const IconComponent = project.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="animate-fade-in-up"
    >
      <Card className="glassmorphism shadow-card hover:shadow-floating transition-smooth h-full group">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-lg ${
              project.color === 'primary' ? 'gradient-primary' : 
              project.color === 'secondary' ? 'bg-secondary' : 
              'bg-accent'
            } ${
              project.color === 'primary' ? 'glow-primary' : 
              project.color === 'secondary' ? 'glow-secondary' : 
              'glow-accent'
            }`}>
              <IconComponent className="h-6 w-6 text-white" />
            </div>
            <Badge variant="outline" className="text-xs">
              {project.category}
            </Badge>
          </div>
          <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth">
            {project.title}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="pt-0">
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <Badge 
                key={tech} 
                variant="secondary" 
                className="text-xs bg-muted/30 hover:bg-muted transition-smooth"
              >
                {tech}
              </Badge>
            ))}
          </div>
          
          <div className="flex gap-3">
            <Button 
              size="sm" 
              className="flex-1 gradient-primary hover:scale-105 transition-smooth"
              onClick={() => project.link && window.open(project.link, '_blank')}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Voir Détails
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 relative">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-glow-pulse"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-secondary/5 rounded-full blur-2xl animate-glow-pulse delay-500"></div>
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
            Mes <span className="text-gradient">Projets</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez une sélection de mes réalisations, des applications web aux 
            solutions mobiles, démontrant ma polyvalence technique et créative.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              index={index} 
            />
          ))}
        </div>

      </div>
    </section>
  );
}