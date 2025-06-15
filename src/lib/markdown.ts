// Fonction pour extraire les titres du contenu markdown
export function extractHeadings(markdown: string): { id: string; text: string; level: number }[] {
  const headingRegex = /^(#{1,3})\s+(.+)$/gm
  const matches = Array.from(markdown.matchAll(headingRegex))

  return matches.map((match) => {
    const level = match[1]?.length ?? 0
    const text = match[2] ?? ''
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
    return { id, text, level }
  })
}

// Fonction pour convertir le markdown en HTML (version simplifiée)
export function markdownToHtml(markdown: string): string {
  const html = markdown
    // Titres avec IDs pour la navigation
    .replace(/^# (.*$)/gm, (match, title) => {
      const id = title
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
      return `<h1 id="${id}" class="scroll-m-20 text-3xl font-bold tracking-tight mt-10 mb-4">${title}</h1>`
    })
    .replace(/^## (.*$)/gm, (match, title) => {
      const id = title
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
      return `<h2 id="${id}" class="scroll-m-20 text-2xl font-semibold tracking-tight mt-8 mb-3">${title}</h2>`
    })
    .replace(/^### (.*$)/gm, (match, title) => {
      const id = title
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
      return `<h3 id="${id}" class="scroll-m-20 text-xl font-semibold tracking-tight mt-6 mb-2">${title}</h3>`
    })
    // Paragraphes
    .replace(/^\s*(\n)?(.+)/gm, (m) =>
      /^<(\/)?(h|ul|ol|li|blockquote|pre|img)/.test(m) ? m : '<p class="leading-7 mb-4">' + m + "</p>",
    )
    // Blocs de code avec coloration syntaxique
    .replace(
      /```(.*)\n([\s\S]*?)```/g,
      '<pre class="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg overflow-x-auto mb-6 relative group"><div class="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity"><button class="copy-button bg-slate-200 dark:bg-slate-700 p-1 rounded hover:bg-slate-300 dark:hover:bg-slate-600" aria-label="Copier le code"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4"><path d="M5 2V1H10V2H5ZM4.75 0C4.33579 0 4 0.335786 4 0.75V1H3.5C2.67157 1 2 1.67157 2 2.5V12.5C2 13.3284 2.67157 14 3.5 14H11.5C12.3284 14 13 13.3284 13 12.5V2.5C13 1.67157 12.3284 1 11.5 1H11V0.75C11 0.335786 10.6642 0 10.25 0H4.75ZM11 2V2.25C11 2.66421 10.6642 3 10.25 3H4.75C4.33579 3 4 2.66421 4 2.25V2H3.5C3.22386 2 3 2.22386 3 2.5V12.5C3 12.7761 3.22386 13 3.5 13H11.5C11.7761 13 12 12.7761 12 12.5V2.5C12 2.22386 11.7761 2 11.5 2H11Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg></button></div><code class="language-$1">$2</code></pre>',
    )
    // Code inline
    .replace(/`([^`]+)`/g, '<code class="bg-slate-100 dark:bg-slate-800 px-1 rounded text-sm">$1</code>')
    // Listes
    .replace(/^\s*\n\*/gm, "<ul>\n*")
    .replace(/^(\*.+)\s*\n([^*])/gm, "$1\n</ul>\n\n$2")
    .replace(/^\*(.+)/gm, '<li class="ml-6 list-disc">$1</li>')
    // Liens
    .replace(
      /\[([^\]]+)\]$$([^)]+)$$/g,
      '<a href="$2" class="text-indigo-600 dark:text-indigo-400 hover:underline">$1</a>',
    )
    // Mise en forme
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>")
    // Nettoyage
    .replace(/\n/g, "<br />")

  return html
}

// Fonction pour formater les dates
export function formatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" }
  return new Date(dateString).toLocaleDateString("fr-FR", options)
}
