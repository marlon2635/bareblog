import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export default function HomePage() {
    const posts = getAllPosts();

    return (
        <main className="p-6">
            <h1 className="text-3xl font-bold mb-6">My Blog</h1>
            {posts.map(post => (
                <div key={post.slug} className="mb-4">
                    <Link href={`/posts/${post.slug}`}>
                        <h2 className="text-xl font-semibold">{post.title}</h2>
                    </Link>
                    <p className="text-sm text-gray-500">{post.date}</p>
                    <div className="text-blue-600 text-sm">
                        {post.tags.map(tag => (
                            <Link
                                key={tag}
                                href={`/tags/${tag.toLowerCase()}`}
                                className="mr-2 hover:underline"
                            >
                                #{tag}
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </main>
    );
}
