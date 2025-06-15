import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, ArrowRight } from "lucide-react"
import { Post } from "types/Post"
import { formatDate } from "@/lib/markdown"
import { get } from "http"
import {  getRelatedPosts } from "@/sanity/sanity-utils"
interface DocRelatedProps {
  relatedDocs: Partial<Post>[]
  slug: { current: string }
}

export async function DocRelated({ relatedDocs, slug }: DocRelatedProps) {
    
  relatedDocs = await getRelatedPosts([], slug.current);
  if (relatedDocs.length === 0) return null

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">Documents liés</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedDocs.map((relatedDoc) => (
          <Card
            key={relatedDoc.slug}
            className="hover:shadow-lg transition-all duration-200 hover:-translate-y-1 cursor-pointer"
          >
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <BookOpen className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2" />
                <Badge variant="outline">{relatedDoc.tag}</Badge>
              </div>
              <h3 className="font-semibold mb-2 line-clamp-2">{relatedDoc.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-2 mb-4">{relatedDoc.description}</p>
              <div className="flex justify-between items-center">
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Mis à jour le {formatDate(relatedDoc._createdAt?.toString() || "")}
                </div>
                <Button asChild variant="ghost" size="sm">
                  <Link href={`/docs/${relatedDoc.slug}`}>
                    Lire <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
