import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Sparkles,
  Rocket,
  Code2,
  Zap,
  ExternalLink,
  Heart,
  ArrowRight,
  Mail,
  Monitor,
  Shield,
  Hammer,
  Key,
  Server,
  Blocks,
} from "lucide-react"

function App() {
  const features = [
    {
      icon: Zap,
      title: "React 19",
      description: "Dernière version stable avec Concurrent Features",
      gradient: "from-blue-400 to-blue-600",
    },
    {
      icon: Sparkles,
      title: "Vite 8",
      description: "Build tool ultra-rapide avec HMR instantané",
      gradient: "from-purple-400 to-purple-600",
    },
    {
      icon: Code2,
      title: "TypeScript",
      description: "Typage statique pour un code plus robuste",
      gradient: "from-sky-400 to-sky-600",
    },
    {
      icon: Hammer,
      title: "Tailwind CSS",
      description: "Framework utility-first pour un style rapide",
      gradient: "from-cyan-400 to-cyan-600",
    },
    {
      icon: Blocks,
      title: "shadcn/ui",
      description: "Composants UI accessibles et personnalisables",
      gradient: "from-orange-400 to-orange-600",
    },
    {
      icon: Key,
      title: "Lucide Icons",
      description: "Icônes cohérentes et magnifiques",
      gradient: "from-pink-400 to-pink-600",
    },
  ]

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/30 via-background to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent/20 via-background to-transparent" />
        {/* Grain texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz9paWQ9IiNkZWRhNDRhLWE5ZDYtNDkzZS04NjY0LWFhNDE3ZjA3MmRmMyIgZmlsbD1ub25lIHN0cm9rZT1ub25lIHRyYW5zZm9ybT1yb3RhdGUoMTRzKSBmaWxsPSIjZmZmIi8+')] opacity-20" />
      </div>

      {/* Navigation */}
      <nav className="border-b border-white/10 backdrop-blur-lg bg-white/5 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold text-foreground">React Starter</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Stack</a>
            <a href="#stack" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Fonctionnalités</a>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-foreground/70 hover:text-foreground">
              <ExternalLink className="w-4 h-4" />
            </Button>
            <Button variant="glass" size="sm">
              Documentation
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <Badge variant="glass" className="gap-1.5 py-1.5 px-3 text-sm">
              <Sparkles className="w-3.5 h-3.5" />
              Template 2026 • Stable • Prêt pour la production
            </Badge>
          </div>

          {/* Main headline */}
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              <span className="text-foreground">Démarrez vos projets</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-purple-500 bg-clip-text text-transparent">
                avec une base moderne
              </span>
            </h1>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed">
              Une template complète et parfaitement configurée.
              React, Vite, TypeScript, Tailwind CSS, shadcn/ui et Lucide Icons — tout ce dont vous avez besoin pour créer de belles applications.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" className="gap-2 text-base px-8 h-12 shadow-lg shadow-primary/25">
              <Rocket className="w-5 h-5" />
              Commencer maintenant
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            <Button variant="glassOutline" size="lg" className="text-base px-8 h-12">
              Voir la documentation
            </Button>
          </div>

          {/* Terminal Window Preview */}
          <div className="max-w-4xl mx-auto">
            <Card className="glass-card border-white/15 overflow-hidden">
              <CardHeader className="border-b border-white/10 pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-sm text-foreground/50 ml-2">terminal</span>
                  </div>
                  <Badge variant="glass" className="text-xs">
                    <Server className="w-3 h-3 mr-1.5" />
                    Stack complète
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6 font-mono text-sm">
                <div className="space-y-2">
                  <div className="text-foreground/60">
                    <span className="text-primary">$</span> git clone <span className="text-accent">votre-template</span>
                  </div>
                  <div className="text-foreground/60">
                    <span className="text-primary">$</span> cd votre-template && npm install
                  </div>
                  <div className="text-foreground/60">
                    <span className="text-primary">$</span> npm run dev
                  </div>
                  <div className="mt-4 p-3 rounded-md bg-white/5 border border-white/10 text-foreground/80">
                    <span className="text-green-400">✓</span> Local: http://localhost:5173/
                    <span className="ml-2 text-foreground/50">• HMR activé</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-32 px-6 relative">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-primary/10 blur-[150px] rounded-full" />

        <div className="max-w-7xl mx-auto relative">
          {/* Section header */}
          <div className="text-center mb-16">
            <Badge variant="glass" className="mb-4">Stack Technique Complète</Badge>
            <h2 className="text-4xl font-bold mb-4">
              Tous les outils pour réussir
            </h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              Les dernières versions stables, parfaitement compatibles et prêtes à l'emploi.
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, description, gradient }) => (
              <Card
                key={title}
                className="glass-card border-white/10 hover:border-primary/50 transition-all group"
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>{title}</CardTitle>
                  <CardDescription>{description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTAs Section */}
      <section id="stack" className="py-32 px-6 relative">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Quick start */}
            <Card className="glass-card border-white/10">
              <CardHeader>
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-3">
                  <Rocket className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-lg">Démarrage rapide</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/60">
                  Copiez la template, installez les dépendances et commencez à coder immédiatement.
                </p>
              </CardContent>
            </Card>

            {/* Customisable */}
            <Card className="glass-card border-white/10">
              <CardHeader>
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-3">
                  <Code2 className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-lg">100% personnalisable</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/60">
                  Composants shadcn/ui copiables, modifiez-les selon vos besoins exacts.
                </p>
              </CardContent>
            </Card>

            {/* Production ready */}
            <Card className="glass-card border-white/10">
              <CardHeader>
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-3">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-lg">Prêt pour la prod</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/60">
                  Optimisations, type safety, accessibilité — tout est déjà configuré.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter / Contact */}
      <section className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="glass-card border-white/10 p-12 md:p-16">
            <CardHeader className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-4xl md:text-5xl mb-4">
                Restez informé
              </CardTitle>
              <CardDescription className="text-lg max-w-xl mx-auto">
                Recevez les dernières nouveautés et astuces pour vos projets React & TypeScript.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Input
                type="email"
                placeholder="votre@email.com"
                className="w-full sm:w-72 h-12 glass-input text-center sm:text-left"
              />
              <Button size="lg" className="gap-2 px-6 h-12 shadow-lg shadow-primary/25">
                S'abonner
                <ArrowRight className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 backdrop-blur-md bg-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold text-foreground">React Starter</span>
            <span className="text-foreground/40 text-sm">• Template 2026</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="h-10 w-10 rounded-lg glass-button flex items-center justify-center hover:scale-105 transition-transform" aria-label="GitHub">
              <ExternalLink className="w-5 h-5" />
            </a>
            <a href="#" className="h-10 w-10 rounded-lg glass-button flex items-center justify-center hover:scale-105 transition-transform" aria-label="Discord">
              <Server className="w-5 h-5" />
            </a>
          </div>

          <p className="text-foreground/40 text-sm flex items-center gap-1.5">
            Fabriqué avec <Heart className="w-4 h-4 text-red-500" fill="currentColor" /> et React
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
