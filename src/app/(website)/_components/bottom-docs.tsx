import React from 'react'
import { Button } from "@/components/ui/button"
import { BookOpen, Star } from "lucide-react"
import Link from "next/link"

export default function BottomDocs() {
    return (
        <section className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                        Prêt à commencer ?
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                        Explorez la documentation complète et téléchargez Sourcelang dès maintenant
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Button
                            asChild
                            size="lg"
                            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                        >
                            <Link href="/docs">
                                <BookOpen className="mr-2 h-5 w-5" />
                                Documentation
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg">
                            <Link href="/admin">
                                <Star className="mr-2 h-5 w-5" />
                                Espace Admin
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
