import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const skillCategories = [
  {
    title: "Front-end",
    color: "primary",
    skills: [
      { name: "HTML/CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React.js", level: 80 },
      { name: "Tailwind CSS", level: 85 }
    ]
  },
  {
    title: "Back-end", 
    color: "secondary",
    skills: [
      { name: "Laravel", level: 85 },
      { name: "PHP", level: 90 }
    ]
  },
  {
    title: "Mobile",
    color: "accent", 
    skills: [
      { name: "Flutter", level: 50 },
      { name: "Dart", level: 50 }
    ]
  },
  {
    title: "Base de données",
    color: "primary",
    skills: [
      { name: "MySQL", level: 90 },
      { name: "Firebase", level: 80 }
    ]
  }
];

interface SkillBarProps {
  skill: { name: string; level: number };
  delay: number;
  color: string;
}

function SkillBar({ skill, delay, color }: SkillBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="mb-4"
    >
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: delay + 0.2 }}
          viewport={{ once: true }}
          className={`h-2 rounded-full ${
            color === 'primary' ? 'gradient-primary' : 
            color === 'secondary' ? 'bg-secondary' : 
            'bg-accent'
          } ${color === 'primary' ? 'glow-primary' : 
            color === 'secondary' ? 'glow-secondary' : 
            'glow-accent'}`}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 relative">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-float delay-1000"></div>
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
            Mes <span className="text-gradient">Compétences</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technologies et outils que je maîtrise pour créer des solutions 
            web et mobile innovantes et performantes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="animate-fade-in-up"
            >
              <Card className="glassmorphism shadow-card h-full hover:shadow-floating transition-smooth">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6 text-center">
                    <span className={`${
                      category.color === 'primary' ? 'text-gradient' :
                      category.color === 'secondary' ? 'text-secondary' :
                      'text-accent'
                    }`}>
                      {category.title}
                    </span>
                  </h3>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <SkillBar
                        key={skill.name}
                        skill={skill}
                        delay={categoryIndex * 0.1 + skillIndex * 0.1}
                        color={category.color}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional tools section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="glassmorphism shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">
                <span className="text-gradient">Outils & Environnements</span>
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {['WordPress', 'Laravel Filament', 'Firebase', 'Git', 'VS Code'].map((tool, index) => (
                  <motion.span
                    key={tool}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 bg-muted/30 rounded-full text-sm font-medium text-foreground border border-border hover:border-primary/50 transition-smooth"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}