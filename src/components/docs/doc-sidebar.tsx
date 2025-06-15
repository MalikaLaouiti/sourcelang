import Link from "next/link"
import { cn } from "@/lib/utils"
import { Post } from "types/Post"

interface DocSidebarProps {
  docs: Post[]
  currentDocId: string
}

export function DocSidebar({ docs, currentDocId }: DocSidebarProps) {
  // Grouper les documents par catégorie
  const groupedDocs = docs.reduce(
    (acc, doc) => {
      const tag = doc.tag
      if (!acc[tag]) {
        acc[tag] = []
      }
      acc[tag]!.push(doc)
      return acc
    },
    {} as Record<string, Post[]>,
  )

  return (
    <div className="sticky top-20">
      <h3 className="font-semibold mb-4 text-slate-900 dark:text-white">Documentation</h3>
      <div className="space-y-6">
        {Object.entries(groupedDocs).map(([category, categoryDocs]) => (
          <div key={category} className="space-y-2">
            <h4 className="font-medium text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wide">
              {category}
            </h4>
            <ul className="space-y-1">
              {categoryDocs.map((doc) => (
                <li key={doc.slug}>
                  <Link
                    href={`/docs/${doc.slug}`}
                    className={cn(
                      "block py-2 px-3 rounded-md text-sm transition-colors",
                      doc.slug === currentDocId
                        ? "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-medium"
                        : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800",
                    )}
                  >
                    {doc.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
