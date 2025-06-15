"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Share2, Bookmark } from "lucide-react"

interface DocActionsProps {
  githubUrl: string
  onShare?: () => void
  onBookmark?: () => void
}

export function DocActions({ githubUrl, onShare, onBookmark }: DocActionsProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <h3 className="font-semibold mb-4 text-slate-900 dark:text-white">Actions</h3>
        <div className="space-y-2">
          <Button variant="outline" className="w-full justify-start" asChild>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Modifier sur GitHub
            </a>
          </Button>
          <Button variant="outline" className="w-full justify-start" onClick={onShare}>
            <Share2 className="mr-2 h-4 w-4" />
            Partager
          </Button>
          <Button variant="outline" className="w-full justify-start" onClick={onBookmark}>
            <Bookmark className="mr-2 h-4 w-4" />
            Sauvegarder
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
