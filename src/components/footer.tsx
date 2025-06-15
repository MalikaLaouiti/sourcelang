import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Github, Twitter, MessageCircle, Mail, Heart } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
export function Footer() {
  const currentYear = new Date().getFullYear()

  const links = {
    product: [
      { name: "Documentation", href: "/docs" },
      { name: "Blog", href: "/blog" },
      { name: "Télécharger", href: "/download" },
      { name: "Exemples", href: "/docs/examples" },
      { name: "Guide de démarrage", href: "/docs/quick-start" },
    ],
    community: [
      { name: "GitHub", href: "#", icon: Github },
      { name: "Discord", href: "#", icon: MessageCircle },
      { name: "Twitter", href: "#", icon: Twitter },
      { name: "Contact", href: "#", icon: Mail },
    ],
    resources: [
      { name: "Blog", href: "#" },
      { name: "Changelog", href: "#" },
      { name: "Roadmap", href: "#" },
      { name: "Support", href: "#" },
    ],
  }

  return (
    <footer className="border-t bg-slate-50/50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Avatar className="h-18 w-18">
                <AvatarImage src="/logo.png" />
                <AvatarFallback>SourceLange</AvatarFallback>
              </Avatar>
              <span className="font-bold text-xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Sourcelang
              </span>
              <Badge variant="secondary">v1.0</Badge>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-xs">
              Le langage de programmation moderne qui révolutionne le développement.
            </p>
            <div className="flex items-center space-x-4">
              {links.community.map((item) => {
                const IconComponent = item.icon
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                  >
                    <IconComponent className="h-5 w-5" />
                    <span className="sr-only">{item.name}</span>
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Produit</h3>
            <ul className="space-y-2">
              {links.product.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Ressources</h3>
            <ul className="space-y-2">
              {links.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Restez informé</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
              Recevez les dernières nouvelles et mises à jour de Sourcelang.
            </p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="votre@email.com"
                className="w-full px-3 py-2 text-sm border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button className="w-full px-3 py-2 text-sm bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors">
                S'abonner
              </button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-4 text-sm text-slate-600 dark:text-slate-300">
            <span>© {currentYear} Sourcelang.</span>
            <Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Politique de confidentialité
            </Link>
            <Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Conditions d'utilisation
            </Link>
          </div>
          <div className="flex items-center space-x-1 text-sm text-slate-600 dark:text-slate-300">
            <span>Fait avec</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>par l'équipe Sourcelang</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
