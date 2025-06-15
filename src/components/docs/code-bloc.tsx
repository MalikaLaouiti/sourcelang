"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { cn } from "@/lib/utils"

interface CodeBlockProps {
  language: string
  code: string
  fileName?: string
  showLineNumbers?: boolean
}

export function CodeBlock({ language, code, fileName, showLineNumbers = false }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative my-6 overflow-hidden rounded-lg border bg-slate-950 dark:bg-slate-900">
      {fileName && (
        <div className="flex items-center justify-between border-b bg-slate-900 px-4 py-2 text-xs text-slate-400 dark:bg-slate-800">
          <span>{fileName}</span>
          <span className="text-slate-500">{language}</span>
        </div>
      )}
      <div className="relative">
        <pre
          className={cn("overflow-x-auto p-4 text-sm text-slate-50", showLineNumbers && "pl-12 [counter-reset:line]")}
        >
          <code className={`language-${language}`}>{code}</code>
        </pre>
        <button
          onClick={copyToClipboard}
          className="absolute right-2 top-2 rounded-md bg-slate-800 p-2 text-slate-400 hover:bg-slate-700 hover:text-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-500"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          <span className="sr-only">Copier le code</span>
        </button>
      </div>
    </div>
  )
}
