import { getPost } from "@/sanity/sanity-utils"
import DocPage from "./_components/page-content"



export default async function Page({ params }: { params: { id: string } }) {
  const data = await getPost(params.id)

  return (
    <DocPage doc={data} />
  )
}
