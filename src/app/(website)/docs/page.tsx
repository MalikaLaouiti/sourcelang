// app/docs/page.tsx

import DocsPageClient from "@/app/(website)/docs/_components/docs-client"
import { getPostsWithoutDetails } from '@/sanity/sanity-utils'
import { type Post } from 'types/Post'

// Métadonnées pour la page
export const metadata = {
  title: 'Documentation Sourcelang',
  description: 'Explorez notre documentation complète pour maîtriser Sourcelang',
}

// Composant serveur pour récupérer les données
export default async function DocsPage() {

  const posts: Partial<Post>[] = await getPostsWithoutDetails();

  return <DocsPageClient docs={posts} />
}