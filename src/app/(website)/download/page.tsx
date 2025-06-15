import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Download, Monitor, Globe, CheckCircle, Star, Users, Calendar } from "lucide-react"

export default function DownloadPage() {
  const platforms = [
    {
      name: "Windows",
      icon: Monitor,
      version: "1.0.0",
      size: "45 MB",
      downloadUrl: "#",
      requirements: "Windows 10 ou supérieur",
    },
    {
      name: "macOS",
      icon: Monitor,
      version: "1.0.0",
      size: "42 MB",
      downloadUrl: "#",
      requirements: "macOS 10.15 ou supérieur",
    },
    {
      name: "Linux",
      icon: Monitor,
      version: "1.0.0",
      size: "38 MB",
      downloadUrl: "#",
      requirements: "Ubuntu 18.04+ / CentOS 7+",
    },
    {
      name: "Web IDE",
      icon: Globe,
      version: "1.0.0",
      size: "En ligne",
      downloadUrl: "#",
      requirements: "Navigateur moderne",
    },
  ]

  const features = [
    "Compilation ultra-rapide",
    "Syntaxe moderne et intuitive",
    "Gestion d'erreurs avancée",
    "Support multi-plateforme",
    "Intégration IDE complète",
    "Documentation interactive",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            <Star className="mr-2 h-4 w-4" />
            Version stable
          </Badge>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Télécharger Sourcelang</h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Obtenez la dernière version de Sourcelang et commencez à développer dès maintenant
          </p>
        </div>

        {/* Version Info */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl text-white">Sourcelang v1.0.0</CardTitle>
                  <CardDescription className="text-indigo-100">
                    Version stable - Sortie le 28 janvier 2024
                  </CardDescription>
                </div>
                <div className="flex items-center gap-4 text-indigo-100">
                  <div className="flex items-center">
                    <Users className="mr-2 h-5 w-5" />
                    <span>10K+ téléchargements</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-5 w-5" />
                    <span>Mise à jour récente</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 text-white">Nouveautés v1.0.0</h3>
                  <ul className="space-y-2 text-indigo-100">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Amélioration des performances de 40%
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Nouveau système de modules
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Support des types génériques
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Débogueur intégré amélioré
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-white">Fonctionnalités principales</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center text-indigo-100">
                        <CheckCircle className="mr-2 h-4 w-4 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Download Options */}
        <div className="max-w-6xl mx-auto mb-12">
          <h2 className="text-2xl font-semibold text-center mb-8 text-slate-900 dark:text-white">
            Choisissez votre plateforme
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform) => {
              const IconComponent = platform.icon
              return (
                <Card key={platform.name} className="hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-indigo-600">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle>{platform.name}</CardTitle>
                    <CardDescription>{platform.requirements}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Version:</span>
                        <Badge variant="outline">{platform.version}</Badge>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Taille:</span>
                        <span className="text-slate-600 dark:text-slate-300">{platform.size}</span>
                      </div>
                    </div>
                    <Separator />
                    <Button className="w-full" asChild>
                      <a href={platform.downloadUrl}>
                        <Download className="mr-2 h-4 w-4" />
                        Télécharger
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Installation Instructions */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Instructions d'installation</CardTitle>
              <CardDescription>Guide rapide pour installer Sourcelang sur votre système</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-600 text-white font-bold text-xl">
                    1
                  </div>
                  <h3 className="font-semibold mb-2">Télécharger</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Choisissez votre plateforme et téléchargez l'installateur
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white font-bold text-xl">
                    2
                  </div>
                  <h3 className="font-semibold mb-2">Installer</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Exécutez l'installateur et suivez les instructions
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600 text-white font-bold text-xl">
                    3
                  </div>
                  <h3 className="font-semibold mb-2">Commencer</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Ouvrez votre terminal et tapez{" "}
                    <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded">sourcelang --version</code>
                  </p>
                </div>
              </div>

              <Separator />

              <div className="bg-slate-900 rounded-lg p-6">
                <h4 className="text-white font-semibold mb-3">Installation via ligne de commande</h4>
                <div className="space-y-2">
                  <div className="text-slate-300 text-sm">
                    <span className="text-green-400">$</span> curl -fsSL https://get.sourcelang.dev | sh
                  </div>
                  <div className="text-slate-300 text-sm">
                    <span className="text-green-400">$</span> sourcelang --version
                  </div>
                  <div className="text-slate-400 text-sm">Sourcelang v1.0.0</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Support Section */}
        <div className="max-w-4xl mx-auto text-center">
          <Card>
            <CardHeader>
              <CardTitle>Besoin d'aide ?</CardTitle>
              <CardDescription>Notre communauté est là pour vous accompagner</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" asChild>
                  <a href="/docs">📚 Documentation</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#" target="_blank" rel="noreferrer">
                    💬 Discord
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#" target="_blank" rel="noreferrer">
                    🐙 GitHub
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#" target="_blank" rel="noreferrer">
                    🐦 Twitter
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
