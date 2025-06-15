"use client"

import { Button } from "@/components/ui/button"
import { ThumbsUp, ThumbsDown } from "lucide-react"

interface DocFeedbackProps {
  onPositiveFeedback?: () => void
  onNegativeFeedback?: () => void
}

export function DocFeedback({ onPositiveFeedback, onNegativeFeedback }: DocFeedbackProps) {
  return (
    <div className="mt-12 pt-6 border-t">
      <h3 className="text-lg font-semibold mb-4">Cette page vous a-t-elle été utile ?</h3>
      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm" onClick={onPositiveFeedback}>
          <ThumbsUp className="mr-2 h-4 w-4" />
          Oui, c'était utile
        </Button>
        <Button variant="outline" size="sm" onClick={onNegativeFeedback}>
          <ThumbsDown className="mr-2 h-4 w-4" />
          Non, j'ai besoin d'aide
        </Button>
      </div>
    </div>
  )
}
