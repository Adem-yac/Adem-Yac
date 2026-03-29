import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, Flame, Plus, Store } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type Project = {
  slug: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  technologies: string[];
  category: string;
  color: 'primary' | 'secondary' | 'accent';
  liveUrl: string;
  detailsPath: string;
  isPlaceholder?: boolean;
};

const projects: Project[] = [
  {
    slug: 'r3p-store',
    title: 'R3P — Boutique E-commerce (Vêtements)',
    description:
      'Boutique personnalisée avec admin (suivi commandes, produits), catégories/genres, codes promo et statistiques. Responsive mobile/tablette.',
    icon: Store,
    technologies: ['React', 'API PHP', 'PostgreSQL', 'Admin', 'Responsive'],
    category: 'E-commerce',
    color: 'primary',
    liveUrl: 'https://r3p-store.vercel.app',
    detailsPath: '/projects/r3p-store',
  },
  {
    slug: 'bougie-beaute',
    title: 'L’Atelier Bougie — Boutique E-commerce (Bougies artisanales)',
    description:
      'Boutique e-commerce avec commande en ligne + admin (produits, commandes, vidéos, promos). Expérience moderne et responsive.',
    icon: Flame,
    technologies: ['React', 'API PHP', 'PostgreSQL', 'Admin', 'Vidéos'],
    category: 'E-commerce',
    color: 'accent',
    liveUrl: 'https://bougie-beaute.vercel.app',
    detailsPath: '/projects/bougie-beaute',
  },
  {
    slug: 'next',
    title: 'Prochain projet (à venir)',
    description:
      'Ajout rapide d’un nouveau projet ici: titre, stack, lien live et page détails. Donne-moi le prochain projet et je l’intègre.',
    icon: Plus,
    technologies: ['Soon'],
    category: 'Nouveau',
    color: 'secondary',
    liveUrl: '',
    detailsPath: '',
    isPlaceholder: true,
  },
];

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const IconComponent = project.icon;
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="animate-fade-in-up"
    >
      <Card
        className={`glassmorphism shadow-card hover:shadow-floating transition-smooth h-full group ${
          project.isPlaceholder ? 'border-dashed border-border/60' : ''
        }`}
      >
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between mb-4">
            <div
              className={`p-3 rounded-lg ${
                project.color === 'primary'
                  ? 'gradient-primary'
                  : project.color === 'secondary'
                    ? 'bg-secondary'
                    : 'bg-accent'
              } ${
                project.color === 'primary'
                  ? 'glow-primary'
                  : project.color === 'secondary'
                    ? 'glow-secondary'
                    : 'glow-accent'
              }`}
            >
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
          <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

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

          <div className="flex gap-3 flex-wrap">
            <Button
              size="sm"
              className="flex-1 min-w-[170px] gradient-primary hover:scale-105 transition-smooth"
              disabled={project.isPlaceholder}
              onClick={() => project.detailsPath && navigate(project.detailsPath)}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Voir Détails
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="flex-1 min-w-[170px] glassmorphism hover:scale-105 transition-smooth"
              disabled={project.isPlaceholder || !project.liveUrl}
              onClick={() =>
                project.liveUrl && window.open(project.liveUrl, '_blank', 'noopener,noreferrer')
              }
            >
              Visiter
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
            Mes deux boutiques e-commerce (pages détails + captures + lien live).
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