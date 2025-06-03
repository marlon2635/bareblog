import Link from 'next/link';
import { getPostsByTag, getAllPosts } from '@/lib/posts';

type Props = { params: { tag: string } };

export function generateStaticParams() {
    const posts = getAllPosts();
    const tags = Array.from(new Set(posts.flatMap(post => post.tags)));

    return tags.map(tag => ({ tag }));
}

export default function TagPage({ params }: Props) {
    const { tag } = params;
    const posts = getPostsByTag(tag);

    return (
        <main className="p-6">
            <h1 className="text-3xl font-bold mb-6">Posts tagged with "{tag}"</h1>
            {posts.length === 0 ? (
                <p>No posts found for this tag.</p>
            ) : (
                posts.map(post => (
                    <div key={post.slug} className="mb-4">
                        <Link href={`/posts/${post.slug}`}>
                            <h2 className="text-xl font-semibold">{post.title}</h2>
                        </Link>
                        <p className="text-sm text-gray-500">{post.date}</p>
                    </div>
                ))
            )}
        </main>
    );
}
