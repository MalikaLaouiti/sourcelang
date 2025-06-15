// "use client"

// import { useState, useEffect } from "react"
// import { Card, CardContent } from "@/components/ui/card"
// import { cn } from "@/lib/utils"
// import type { Heading } from "@/types/docs"

// interface DocTableOfContentsProps {
//   headings: Heading[]
// }

// export function DocTableOfContents({ headings }: DocTableOfContentsProps) {
//   const [activeId, setActiveId] = useState<string>("")

//   // Observer les titres pour le scroll
//   useEffect(() => {
//     if (typeof window === "undefined" || headings.length === 0) return

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setActiveId(entry.target.id)
//           }
//         })
//       },
//       { rootMargin: "0px 0px -80% 0px" },
//     )

//     headings.forEach((heading) => {
//       const element = document.getElementById(heading.id)
//       if (element) observer.observe(element)
//     })

//     return () => {
//       headings.forEach((heading) => {
//         const element = document.getElementById(heading.id)
//         if (element) observer.unobserve(element)
//       })
//     }
//   }, [headings])

//   if (headings.length === 0) return null

//   return (
//     <Card>
//       <CardContent className="p-4">
//         <h3 className="font-semibold mb-4 text-slate-900 dark:text-white">Sur cette page</h3>
//         <ul className="space-y-2 text-sm">
//           {headings.map((heading) => (
//             <li
//               key={heading.id}
//               className={cn("transition-colors", heading.level === 1 ? "" : "ml-3", heading.level === 3 ? "ml-6" : "")}
//             >
//               <a
//                 href={`#${heading.id}`}
//                 className={cn(
//                   "inline-block py-1 hover:text-indigo-600 dark:hover:text-indigo-400 line-clamp-2",
//                   activeId === heading.id
//                     ? "text-indigo-600 dark:text-indigo-400 font-medium"
//                     : "text-slate-600 dark:text-slate-300",
//                 )}
//               >
//                 {heading.text}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </CardContent>
//     </Card>
//   )
// }
