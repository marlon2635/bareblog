import { getPostBySlug, getAllPosts } from '@/lib/posts';
import { remark } from 'remark';
import html from 'remark-html';

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
        <article className="p-6">
            <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
            <p className="text-gray-500 text-sm mb-4">{post.date}</p>
            <div
                className="prose"
                dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
            <div className="mt-4 text-sm text-blue-600">
                {post.tags.map(tag => <span key={tag}>#{tag} </span>)}
            </div>
        </article>
    );
}
