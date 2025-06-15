"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type Heading = {
  id: string
  text: string
  level: number
}

export function TableOfContents({ content }: { content: string }) {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState<string>("")

  // Extraire les titres du contenu markdown
  useEffect(() => {
    if (!content) return

    const extractHeadings = (markdown: string) => {
      const headingRegex = /^(#{1,3})\s+(.+)$/gm
      const matches = Array.from(markdown.matchAll(headingRegex))

      return matches.map((match, index) => {
        const level = match[1].length
        const text = match[2]
        const id = `heading-${index}`
        return { id, text, level }
      })
    }

    setHeadings(extractHeadings(content))
  }, [content])

  // Observer les titres pour le scroll
  useEffect(() => {
    if (typeof window === "undefined" || headings.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "0px 0px -80% 0px" },
    )

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id)
      if (element) observer.observe(element)
    })

    return () => {
      headings.forEach((heading) => {
        const element = document.getElementById(heading.id)
        if (element) observer.unobserve(element)
      })
    }
  }, [headings])

  if (headings.length === 0) return null

  return (
    <Card className="sticky top-20">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">Table des matières</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <ul className="space-y-1 text-sm">
          {headings.map((heading) => (
            <li key={heading.id} className={cn("transition-colors", heading.level > 1 && "ml-3")}>
              <a
                href={`#${heading.id}`}
                className={cn(
                  "inline-block py-1 hover:text-indigo-600 dark:hover:text-indigo-400",
                  activeId === heading.id
                    ? "text-indigo-600 dark:text-indigo-400 font-medium"
                    : "text-slate-600 dark:text-slate-300",
                )}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
