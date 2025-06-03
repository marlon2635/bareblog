import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export default function PostList() {
    const posts = getAllPosts();

    return (
        <div className="mt-16 mb-16 mx-auto" id="latestarticles">
            <h1 className="text-4xl font-bold mb-10">Latest Articles</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {posts.map((post) => (
                    <div key={post.slug} className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-shadow">
                        <Link href={`/posts/${post.slug}`}>
                            <h2 className="text-2xl font-semibold hover:underline cursor-pointer mb-2">
                                {post.title}
                            </h2>
                        </Link>
                        <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                        <p className="text-sm text-gray-700 mb-2">{post.excerpt}</p>
                        <div className="text-sm space-x-2">
                            {post.tags.map((tag) => (
                                <Link
                                    key={tag}
                                    href={`/tags/${tag.toLowerCase()}`}
                                    className="hover:underline"
                                >
                                    #{tag}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
