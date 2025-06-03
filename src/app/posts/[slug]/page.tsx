import { getPostBySlug, getAllPosts } from '@/lib/posts';
import { remark } from 'remark';
import html from 'remark-html';
import Link from 'next/link';
import { Hash } from 'lucide-react';

type Params = { slug: string };

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map(post => ({ slug: post.slug }));
}

export default async function PostPage({ params }: { params: Params }) {
    const post = getPostBySlug(params.slug);
    const processedContent = await remark().use(html).process(post.content);
    const contentHtml = processedContent.toString();

    return (
        <article className="p-6 w-2/3 mx-auto">
            <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
            <p className="text-gray-500 text-sm mb-4">{post.date}</p>
            <div
                className="prose"
                dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
            <div className="mt-4 flex flex-wrap gap-3">
                {post.tags.map(tag => (
                    <Link
                        key={tag}
                        href={`/tags/${tag.toLowerCase()}`}
                        className="flex items-center gap-2 px-4 py-2 text-sm border-2 border-gray-300 rounded-xl bg-white text-gray-800 hover:bg-gray-100 transition"
                    >
                        <Hash className="w-4 h-4" />
                        <span className="capitalize font-medium">{tag}</span>
                    </Link>
                ))}
            </div>
        </article>
    );
}