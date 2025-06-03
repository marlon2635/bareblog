import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import { notFound } from 'next/navigation';

interface TagPageProps {
    params: {
        tag: string;
    };
}

export default function TagPage({ params }: TagPageProps) {
    const { tag } = params;
    const allPosts = getAllPosts();

    // Filter posts by the specific tag (case-insensitive)
    const filteredPosts = allPosts.filter((post) =>
        post.tags.some((postTag: string) =>
            postTag.toLowerCase() === tag.toLowerCase()
        )
    );

    // If no posts found for this tag, return 404
    if (filteredPosts.length === 0) {
        notFound();
    }

    // Capitalize the tag for display
    const displayTag = tag.charAt(0).toUpperCase() + tag.slice(1);

    return (
        <div className="mx-auto mt-16 mb-16 w-2/3">
            <h1 className="text-6xl font-bold mb-10">
                Articles tagged with "{displayTag}"
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredPosts.map((post) => (
                    <div key={post.slug} className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-shadow">
                        <Link href={`/posts/${post.slug}`}>
                            <h2 className="text-2xl font-semibold hover:underline cursor-pointer mb-2">
                                {post.title}
                            </h2>
                        </Link>
                        <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                        <div className="text-sm space-x-2">
                            {post.tags.map((postTag) => (
                                <Link
                                    key={postTag}
                                    href={`/tags/${postTag.toLowerCase()}`}
                                    className="hover:underline"
                                >
                                    #{postTag}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}