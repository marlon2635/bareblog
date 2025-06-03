import Link from 'next/link'
import React from 'react'
import HeroSection from '@/components/hero'
import PostList from '@/components/postlist'
import TagButtonGrid from '@/components/tagsection'
import { getAllPosts } from '@/lib/posts'

export default function HomePage() {
    const posts = getAllPosts()

    const tagCounts: Record<string, number> = {}
    posts.forEach(post => {
        post.tags?.forEach(tag => {
            tagCounts[tag] = (tagCounts[tag] || 0) + 1
        })
    })

    return (
        <main className="mx-auto w-5/6">
            <h1 className="text-4xl font-bold mt-20">All Articles</h1>
            <PostList />
        </main>
    )
}
