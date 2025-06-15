"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Search, BookOpen } from "lucide-react"
import { type Post } from 'types/Post'
import DocCard from "./doc-card"


interface DocsPageClientProps {
  docs: Partial<Post>[]
}

export default function DocsPageClient({ docs }: DocsPageClientProps) {


  const [searchTerm, setSearchTerm] = useState("")
  // const [filteredDocs, setFilteredDocs] = useState<Post[]>(initialDocs)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Documentation Sourcelang</h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Explorez notre documentation complète pour maîtriser Sourcelang
          </p>
        </div>

        {/* Search and Filters */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Rechercher dans la documentation..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 text-lg"
            />
          </div>


          {/* Documentation Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
                Documentation ({docs.length})
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {docs.map((doc) => (
                <DocCard key={doc._id} doc={doc} />
              ))}
            </div>

            {docs.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="mx-auto h-12 w-12 text-slate-400 mb-4" />
                <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">Aucun résultat trouvé</h3>
                <p className="text-slate-500 dark:text-slate-400">
                  Essayez de modifier vos critères de recherche ou de filtrage
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}