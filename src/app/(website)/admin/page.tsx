"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Lock, User, FileText, Plus, Edit, Trash2, Save, Eye, BarChart3 } from "lucide-react"

export type Doc = {
  id: number
  title: string
  status: "published" | "draft"
  version: string
  lastEdit: string
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [credentials, setCredentials] = useState({ username: "", password: "" })
  const [selectedDoc, setSelectedDoc] = useState<null | Doc>(null)
  const [markdownContent, setMarkdownContent] = useState("")

  // Mock data pour l'admin
  const mockStats = {
    totalDocs: 24,
    totalViews: 15420,
    activeUsers: 342,
    lastUpdate: "2024-01-28",
  }



  const mockDocsList = [
    { id: 1, title: "Introduction à Sourcelang", status: "published", version: "1.0", lastEdit: "2024-01-15" },
    { id: 2, title: "Installation et Configuration", status: "draft", version: "1.1", lastEdit: "2024-01-20" },
    { id: 3, title: "Syntaxe et Types", status: "published", version: "1.0", lastEdit: "2024-01-18" },
  ]

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulation d'authentification
    if (credentials.username === "admin" && credentials.password === "sourcelang2024") {
      setIsAuthenticated(true)
    } else {
      alert("Identifiants incorrects")
    }
  }

  const handleDocEdit = (doc: any) => {
    setSelectedDoc(doc)
    setMarkdownContent(`# ${doc.title}

## Introduction

Contenu de la documentation pour ${doc.title}...

### Exemple de code

\`\`\`sourcelang
function hello() {
    print("Hello, Sourcelang!")
}
\`\`\`

### Points importants

- Point 1
- Point 2
- Point 3
`)
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600">
              <Lock className="h-6 w-6 text-white" />
            </div>
            <CardTitle className="text-2xl">Administration Sourcelang</CardTitle>
            <CardDescription>Connectez-vous pour accéder à l'interface d'administration</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Nom d'utilisateur</Label>
                <Input
                  id="username"
                  type="text"
                  value={credentials.username}
                  onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                  placeholder="admin"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Mot de passe</Label>
                <Input
                  id="password"
                  type="password"
                  value={credentials.password}
                  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                  placeholder="sourcelang2024"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                <User className="mr-2 h-4 w-4" />
                Se connecter
              </Button>
            </form>
            <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p className="text-sm text-blue-700 dark:text-blue-300">
                <strong>Demo:</strong> admin / sourcelang2024
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Administration Sourcelang</h1>
            <p className="text-slate-600 dark:text-slate-300">Gérez le contenu et les versions de la documentation</p>
          </div>
          <Button variant="outline" onClick={() => setIsAuthenticated(false)}>
            Déconnexion
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Documents</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockStats.totalDocs}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Vues totales</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockStats.totalViews.toLocaleString()}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Utilisateurs actifs</CardTitle>
              <User className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockStats.activeUsers}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Dernière MAJ</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{new Date(mockStats.lastUpdate).toLocaleDateString("fr-FR")}</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="documents" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="editor">Éditeur</TabsTrigger>
            <TabsTrigger value="settings">Paramètres</TabsTrigger>
          </TabsList>

          <TabsContent value="documents" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Gestion des documents</h2>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Nouveau document
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Liste des documents</CardTitle>
                <CardDescription>Gérez vos documents de documentation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockDocsList.map((doc) => (
                    <div key={doc.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-medium">{doc.title}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant={doc.status === "published" ? "default" : "secondary"}>
                            {doc.status === "published" ? "Publié" : "Brouillon"}
                          </Badge>
                          <Badge variant="outline">v{doc.version}</Badge>
                          <span className="text-sm text-slate-500">
                            Modifié le {new Date(doc.lastEdit).toLocaleDateString("fr-FR")}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" onClick={() => handleDocEdit(doc)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="editor" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">
                Éditeur Markdown
                {selectedDoc && <span className="text-lg font-normal text-slate-500 ml-2">- {selectedDoc.title}</span>}
              </h2>
              <div className="flex gap-2">
                <Button variant="outline">
                  <Eye className="mr-2 h-4 w-4" />
                  Aperçu
                </Button>
                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  Sauvegarder
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Métadonnées</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="doc-title">Titre</Label>
                    <Input id="doc-title" value={selectedDoc?.title || ""} placeholder="Titre du document" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="doc-category">Catégorie</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionner une catégorie" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="getting-started">Démarrage</SelectItem>
                        <SelectItem value="reference">Référence</SelectItem>
                        <SelectItem value="advanced">Avancé</SelectItem>
                        <SelectItem value="integration">Intégration</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="doc-version">Version</Label>
                    <Input id="doc-version" value={selectedDoc?.version || "1.0"} placeholder="1.0" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="doc-tags">Tags (séparés par des virgules)</Label>
                    <Input id="doc-tags" placeholder="syntaxe, types, variables" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contenu Markdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea
                    value={markdownContent}
                    onChange={(e) => setMarkdownContent(e.target.value)}
                    placeholder="Écrivez votre contenu en Markdown..."
                    className="min-h-[400px] font-mono text-sm"
                  />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <h2 className="text-2xl font-semibold">Paramètres</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Configuration générale</CardTitle>
                  <CardDescription>Paramètres globaux de la documentation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="site-title">Titre du site</Label>
                    <Input id="site-title" value="Documentation Sourcelang" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="site-description">Description</Label>
                    <Textarea id="site-description" value="Documentation officielle du langage Sourcelang" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="current-version">Version actuelle</Label>
                    <Input id="current-version" value="1.0.0" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Gestion des versions</CardTitle>
                  <CardDescription>Contrôlez les versions de la documentation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Versions disponibles</Label>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 border rounded">
                        <span>v1.0 (Actuelle)</span>
                        <Badge>Active</Badge>
                      </div>
                      <div className="flex items-center justify-between p-2 border rounded">
                        <span>v0.9 (Beta)</span>
                        <Badge variant="secondary">Archivée</Badge>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full">
                    <Plus className="mr-2 h-4 w-4" />
                    Créer nouvelle version
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
