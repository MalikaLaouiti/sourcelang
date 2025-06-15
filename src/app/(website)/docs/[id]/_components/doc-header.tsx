import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"
import { type Post } from "types/Post"
import { formatDate } from "@/lib/markdown"

interface DocHeaderProps {
  doc: Partial<Post>
}

export function DocHeader({ doc }: DocHeaderProps) {
  return (
    <div className="mb-8">
      <div className="flex flex-wrap items-center gap-2 mb-2">
        {doc.categories?.map((category) => (
          <Badge key={category.title}>{category.title}</Badge>
        ))}
        <Badge variant="outline" className="text-xs">
          {doc.version}
        </Badge>
      </div>
      <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">{doc.title}</h1>
      <p className="text-xl text-slate-600 dark:text-slate-300 mb-6">{doc.description}</p>

      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="flex items-center space-x-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src={doc.author?.image ?? "/placeholder.svg"} alt={doc.author?.name} />
            <AvatarFallback>{doc.author?.name?.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">{doc.author?.name}</p>
            {/* <p className="text-xs text-slate-500 dark:text-slate-400">{doc.author.role}</p> */}
          </div>
        </div>
        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
          <div className="flex items-center">
            <Calendar className="mr-1 h-4 w-4" />
            Mis à jour le {doc._createdAt && formatDate(doc._createdAt.toString())}
          </div>
          <div className="flex items-center">
            <Clock className="mr-1 h-4 w-4" />
            {doc.readTime} min de lecture
          </div>
        </div>
      </div>
    </div>
  )
}
