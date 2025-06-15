import { Button } from "@/components/ui/button"
import { FileQuestion } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center">
      <div className="text-center max-w-md px-4">
        <FileQuestion className="h-20 w-20 text-indigo-600 dark:text-indigo-400 mx-auto mb-6" />
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Document introuvable</h1>
        <p className="text-slate-600 dark:text-slate-300 mb-8">
          Le document que vous recherchez n'existe pas ou a été déplacé.
        </p>
        <Button asChild>
          <Link href="/docs">Retour à la documentation</Link>
        </Button>
      </div>
    </div>
  )
}
