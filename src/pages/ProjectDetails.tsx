import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ExternalLink, ArrowLeft } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getShowcaseProject } from "@/data/projectShowcase";

export default function ProjectDetails() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getShowcaseProject(slug) : undefined;

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <Card className="glassmorphism shadow-card">
            <CardHeader>
              <CardTitle>Projet introuvable</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-between gap-4 flex-wrap">
              <p className="text-muted-foreground">
                Le projet demandé n’existe pas (ou l’URL est incorrecte).
              </p>
              <Button asChild className="gradient-primary">
                <Link to={{ pathname: "/", hash: "#projects" }}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Retour aux projets
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="max-w-6xl mx-auto px-6 py-10 md:py-14">
        <div className="flex items-center justify-between gap-4 flex-wrap mb-8">
          <Button asChild variant="outline" className="glassmorphism">
            <Link to={{ pathname: "/", hash: "#projects" }}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour
            </Link>
          </Button>

          <Button
            className="gradient-primary hover:scale-105 transition-smooth"
            onClick={() => window.open(project.liveUrl, "_blank", "noopener,noreferrer")}
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Ouvrir le site
          </Button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-10"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            {project.title.split("—")[0].trim()}{" "}
            <span className="text-gradient">—</span>{" "}
            {project.title.split("—").slice(1).join("—").trim()}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-5">
            {project.subtitle}
          </p>
          <p className="text-muted-foreground leading-relaxed max-w-3xl">
            {project.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="glassmorphism shadow-card lg:col-span-1 h-fit">
            <CardHeader>
              <CardTitle>Stack & fonctionnalités</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <p className="text-sm text-muted-foreground mb-3">Stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <Badge key={s} variant="secondary" className="bg-muted/30">
                      {s}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-3">Points clés</p>
                <ul className="space-y-2 text-sm">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span className="text-foreground/90">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl md:text-3xl font-semibold">Captures</h2>
              <p className="text-sm text-muted-foreground">
                Clique sur une image pour l’ouvrir en grand.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {project.images.map((img) => (
                <button
                  key={img.alt}
                  type="button"
                  className="group relative overflow-hidden rounded-xl border border-border/30 glassmorphism shadow-card transition-smooth hover:shadow-floating"
                  onClick={() => window.open(img.src, "_blank", "noopener,noreferrer")}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover aspect-[16/10] transition-smooth group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-smooth bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-smooth">
                    <p className="text-sm text-white/90">{img.alt}</p>
                  </div>
                </button>
              ))}
            </div>

            <Card className="glassmorphism shadow-card mt-8">
              <CardHeader className="pb-3">
                <CardTitle>Lien</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-between gap-3 flex-wrap">
                <p className="text-muted-foreground break-all">{project.liveUrl}</p>
                <Button
                  className="gradient-primary"
                  onClick={() => window.open(project.liveUrl, "_blank", "noopener,noreferrer")}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visiter
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}

