import { getAllPosts } from '@/lib/posts'
import TagButtonGrid from '@/components/tagsection'

export default function TagsPage() {
    const posts = getAllPosts()

    // Count tags from posts
    const tagCounts: Record<string, number> = {}
    posts.forEach((post) => {
        post.tags.forEach((tag: string) => {
            tagCounts[tag] = (tagCounts[tag] || 0) + 1
        })
    })

    return (
        <main className="mx-auto w-3/4 py-16">
            <TagButtonGrid tagCounts={tagCounts} />
        </main>
    )
}
