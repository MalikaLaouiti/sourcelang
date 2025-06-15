"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { DocHeader } from "@/app/(website)/docs/[id]/_components/doc-header"
import { DocSidebar } from "@/components/docs/doc-sidebar"
import { DocContent } from "@/app/(website)/docs/[id]/_components/doc-content"
import { DocRelated } from "@/components/docs/doc-related"
import { type Post } from 'types/Post'



export default function DocPage({ doc }: { doc: Partial<Post> }) {

    const handleCopyCode = (code: string) => {
        console.log("Code copié:", code.substring(0, 50) + "...")
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
            <div className="container mx-auto px-4 py-8">
                {/* Navigation retour */}
                <div className="mb-8">
                    <Button variant="ghost" asChild>
                        <Link href="/docs">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Retour à la documentation
                        </Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Sidebar - Navigation de la documentation */}
                    <div className="hidden lg:block lg:col-span-2">
                        <DocSidebar docs={[]} currentDocId={doc.slug ?? ""} />
                    </div>

                    {/* Contenu principal */}
                    <div className="lg:col-span-7">
                        <DocHeader doc={doc} />
                        <DocContent content={doc} onCopyCode={handleCopyCode} />
                    </div>
                </div>

                {/* Documents liés */}
                <DocRelated relatedDocs={[doc]} slug={{ current: doc.slug ?? "" }} />
            </div>
        </div>
    )
}
