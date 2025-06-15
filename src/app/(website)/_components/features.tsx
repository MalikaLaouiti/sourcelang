import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Zap, Users } from "lucide-react"


export default function Features() {
    return (
        <section className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                        Pourquoi choisir Sourcelang ?
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                        Découvrez les fonctionnalités qui font de Sourcelang le choix idéal pour vos projets
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        <div className="flex flex-col">
                            <Card className="h-full hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600">
                                        <Code className="h-6 w-6 text-white" />
                                    </div>
                                    <CardTitle>Syntaxe intuitive</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>
                                        Une syntaxe claire et moderne qui accélère le développement et réduit les erreurs
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="flex flex-col">
                            <Card className="h-full hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600">
                                        <Zap className="h-6 w-6 text-white" />
                                    </div>
                                    <CardTitle>Performance optimale</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>
                                        Compilation ultra-rapide et exécution optimisée pour des applications haute performance
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="flex flex-col">
                            <Card className="h-full hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-600">
                                        <Users className="h-6 w-6 text-white" />
                                    </div>
                                    <CardTitle>Communauté active</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>
                                        Rejoignez une communauté grandissante de développeurs passionnés et innovants
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </div>
                    </dl>
                </div>
            </div>
        </section>
    )
}
