import React from 'react'
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Download, BookOpen, Zap } from "lucide-react"
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Hero() {
    return (
        <section className="relative overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] dark:bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.900),theme(colors.slate.900))] opacity-20" />
            <div className="mx-auto max-w-4xl text-center">
                <Badge variant="secondary" className="mb-4 px-4 py-2">
                    <Zap className="mr-2 h-4 w-4" />
                    Nouveau langage révolutionnaire
                </Badge>
                <h1 className="text-5xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-7xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text">
                    Sourcelang
                </h1>
                <p className="mt-6 text-xl leading-8 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                    Le langage de programmation moderne qui révolutionne le développement. Simple, puissant et conçu pour
                    l&apos;avenir.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Button
                        asChild
                        size="lg"
                        className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                    >
                        <Link href="/docs">
                            <BookOpen className="mr-2 h-5 w-5" />
                            Commencer
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                        <Link href="/download">
                            <Download className="mr-2 h-5 w-5" />
                            Télécharger
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
