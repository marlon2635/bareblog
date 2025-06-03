import Link from 'next/link';
import React from 'react';
import HeroSection from "@/components/hero";
import PostList from "@/components/postlist";

export default function HomePage() {

    return (
        <main className="mx-auto w-5/6">
            <HeroSection />
            <PostList />
        </main>
    );
}
