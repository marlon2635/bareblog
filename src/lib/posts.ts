import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type PostMeta = {
    slug: string;
    title: string;
    date: string;
    tags: string[];
    excerpt: string;
};

export type Post = PostMeta & {
    content: string;
};

const postsDirectory = path.join(process.cwd(), 'src/content');

export function getAllPosts(): Post[] {
    const files = fs.readdirSync(postsDirectory);

    return files.map((file) => {
        const slug = file.replace(/\.md$/, '');
        const filePath = path.join(postsDirectory, file);
        const raw = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(raw);

        return {
            slug,
            title: data.title,
            date: data.date,
            excerpt: data.excerpt,
            tags: data.tags || [],
            content,
        };
    });
}

export function getPostBySlug(slug: string): Post {
    const filePath = path.join(postsDirectory, `${slug}.md`);
    const raw = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(raw);

    return {
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        tags: data.tags || [],
        content,
    };
}

// src/lib/posts.ts (add below existing functions)
export function getPostsByTag(tag: string): Post[] {
    const allPosts = getAllPosts();
    const normalizedTag = tag.toLowerCase().trim();
    return allPosts.filter(post =>
        post.tags.some(t => t.toLowerCase().trim() === normalizedTag)
    );
}
