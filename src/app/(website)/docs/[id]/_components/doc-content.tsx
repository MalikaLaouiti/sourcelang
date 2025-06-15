"use client"

import {  useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { FileText, Code, MessageSquare} from "lucide-react"
import { type Post } from "types/Post";
import { PortableText } from "@portabletext/react";
import { type ImageValue, urlFor } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export interface DocContentProps {
  content: Partial<Post>
  onCopyCode?: (code: string) => void
}

export const ptComponents = {
  types: {
    image: ({ value }: { value: ImageValue }) => {
      if (!value?.asset?._ref) {
        return null;
      }

      return (
        <div className="relative my-6 h-96 w-full">
          <Image
            alt={value.alt ?? ''}
            loading="lazy"
            src={urlFor(value).width(800).height(384).fit('max').auto('format').url()}
            fill
            className="object-contain"
            quality={90}
          />
        </div>
      );
    },
  },
  block: {
    h1: ({ children }: { children: React.ReactNode }) => (
      <h1 className="my-4 text-4xl font-bold tracking-tight">{children}</h1>
    ),
    h2: ({ children }: { children: React.ReactNode }) => (
      <h2 className="my-4 text-3xl font-semibold tracking-tight">{children}</h2>
    ),
    h3: ({ children }: { children: React.ReactNode }) => (
      <h3 className="my-4 text-2xl font-medium tracking-tight">{children}</h3>
    ),
    h4: ({ children }: { children: React.ReactNode }) => (
      <h4 className="my-4 text-xl font-medium tracking-tight">{children}</h4>
    ),
    blockquote: ({ children }: { children: React.ReactNode }) => (
      <blockquote className="my-6 border-l-4 border-gray-200 pl-4 italic text-gray-600 dark:border-gray-700 dark:text-gray-400">
        {children}
      </blockquote>
    ),
    normal: ({ children }: { children: React.ReactNode }) => (
      <p className="my-4 leading-7">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }: { children: React.ReactNode }) => (
      <ul className="my-6 ml-6 list-disc space-y-2">{children}</ul>
    ),
  },
  listItem: {
    bullet: ({ children }: { children: React.ReactNode }) => (
      <li className="leading-7">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }: { children: React.ReactNode }) => (
      <strong className="font-semibold">{children}</strong>
    ),
    em: ({ children }: { children: React.ReactNode }) => (
      <em className="italic">{children}</em>
    ),
    link: ({ children, value }: { children: React.ReactNode; value: { href: string } }) => {
      const rel = !value.href.startsWith('/') ? 'noopener noreferrer' : undefined;
      const target = !value.href.startsWith('/') ? '_blank' : undefined;
      
      return (
        <Link
          href={value.href}
          rel={rel}
          target={target}
          className="underline decoration-primary underline-offset-4 transition-colors hover:text-primary"
        >
          {children}
        </Link>
      );
    },
  },
};


export function DocContent({ content }: DocContentProps) {
  const [activeTab, setActiveTab] = useState("content")

  return (
    <>
      <Tabs defaultValue="content" value={activeTab} onValueChange={setActiveTab} className="mb-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="content">
            <FileText className="mr-2 h-4 w-4" />
            Contenu
          </TabsTrigger>
          <TabsTrigger value="examples">
            <Code className="mr-2 h-4 w-4" />
            Exemples
          </TabsTrigger>
          <TabsTrigger value="discussions">
            <MessageSquare className="mr-2 h-4 w-4" />
            Discussions
          </TabsTrigger>
        </TabsList>

        <TabsContent value="content" className="mt-6">
          <div className="prose prose-slate dark:prose-invert max-w-none">
             <div className="mt-6">
              {/* @ts-expect-error hello */}
              <PortableText value={content.body} components={ptComponents} />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="examples" className="mt-6">
          <div className="bg-slate-100 dark:bg-slate-800 p-8 rounded-lg text-center">
            <Code className="h-12 w-12 mx-auto mb-4 text-indigo-600 dark:text-indigo-400" />
            <h3 className="text-xl font-semibold mb-2">Exemples interactifs</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Des exemples interactifs seront bientôt disponibles pour cette section de documentation.
            </p>
            <Button>Explorer les exemples existants</Button>
          </div>
        </TabsContent>

        <TabsContent value="discussions" className="mt-6">
          <div className="bg-slate-100 dark:bg-slate-800 p-8 rounded-lg text-center">
            <MessageSquare className="h-12 w-12 mx-auto mb-4 text-indigo-600 dark:text-indigo-400" />
            <h3 className="text-xl font-semibold mb-2">Discussions communautaires</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Rejoignez la conversation et posez vos questions sur cette section de documentation.
            </p>
            <Button>Voir les discussions</Button>
          </div>
        </TabsContent>
      </Tabs>
    </>
  )
}
