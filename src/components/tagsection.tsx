import { slug } from 'github-slugger'
import Link from 'next/link'
import { Hash } from 'lucide-react'
type TagButtonGridProps = {
    tagCounts: Record<string, number>
}

export default function TagButtonGrid({ tagCounts }: TagButtonGridProps) {
    const sortedTags = Object.keys(tagCounts).sort(
        (a, b) => tagCounts[b] - tagCounts[a]
    )

    return (
        <section className="w-full bg-gray-100 border border-gray-300 rounded-3xl flex flex-col items-center justify-center py-20 px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-3 text-center">
                Search by Tags
            </h2>
            <p className="text-gray-600 dark:text-gray-600 mb-12 text-center max-w-2xl">
                Explore our diverse array of articles using tags.
            </p>

            <div className="flex flex-wrap justify-center gap-6 max-w-5xl">
                {sortedTags.map((tag) => (
                    <Link
                        key={tag}
                        href={`/tags/${slug(tag)}`}
                        className="flex items-center gap-3 px-6 py-4 text-lg border-2 border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                    >
                        <Hash className="w-6 h-6" />
                        <span className="capitalize font-medium">{tag}</span>
                        <span className="text-base text-gray-500 dark:text-gray-400">
              ({tagCounts[tag]})
            </span>
                    </Link>
                ))}
            </div>
        </section>
    )
}
