
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { type Post } from 'types/Post'
import { Separator } from "@/components/ui/separator"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function DocCard({ doc }: { doc: Partial<Post> }) {
    return (
        <Card key={doc._id} className="hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
            <CardHeader>
                <ScrollArea className="w-56 rounded-md whitespace-nowrap">
                    <div className="flex items-start space-x-2 mb-2">
                        {doc.categories?.map(category =>
                        (<Badge variant="secondary" className="mb-2" key={category._id}>
                            {category.title}
                        </Badge>)
                        )}
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
                <CardTitle className="text-lg">{doc.title}</CardTitle>
                <CardDescription>{doc.description}</CardDescription>
            </CardHeader>
            <CardContent>
                <Separator className="mb-4" />
                <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                    <Button asChild variant="ghost" size="sm">
                        <Link href={`/docs/${doc.slug}`}>
                            Lire <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
