import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Post } from "types/Post"

interface DocNavigationProps {
  currentDoc: Post
  allDocs: Post[]
}

export function DocNavigation({ currentDoc, allDocs }: DocNavigationProps) {
  const currentIndex = allDocs.findIndex((doc) => doc.slug === currentDoc.slug)
  const previousDoc = currentIndex > 0 ? allDocs[currentIndex - 1] : null
  const nextDoc = currentIndex < allDocs.length - 1 ? allDocs[currentIndex + 1] : null

  if (!previousDoc && !nextDoc) return null

  return (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
      {previousDoc && (
        <Link
          href={`/docs/${previousDoc.slug}`}
          className="p-4 border rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
        >
          <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-2">
            <ArrowLeft className="mr-1 h-4 w-4" />
            Document précédent
          </div>
          <div className="font-medium">{previousDoc.title}</div>
        </Link>
      )}
      {nextDoc && (
        <Link
          href={`/docs/${nextDoc.slug}`}
          className="p-4 border rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors md:text-right"
        >
          <div className="flex items-center justify-end text-sm text-slate-500 dark:text-slate-400 mb-2">
            Document suivant
            <ArrowRight className="ml-1 h-4 w-4" />
          </div>
          <div className="font-medium">{nextDoc.title}</div>
        </Link>
      )}
    </div>
  )
}
