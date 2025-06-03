// pages/about.tsx
import React from 'react';
import Head from 'next/head';

const About = () => {
    return (
        <>
            <Head>
                <title>About - StarterBlog</title>
            </Head>
            <main className="w-2/3 mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4">About</h1>
                <p className="mb-4">
                    Welcome to <strong>StarterBlog</strong>, a minimalist Next.js blog template.
                </p>
                <p className="mb-4">
                    This project is designed to be as simple and lightweight as possible. It features basic blog
                    functionality including dynamic slugs and tag filtering, with minimal dependencies.
                </p>
                <p>
                    Ideal for developers who want a clean starting point without the complexity of most modern
                    templates.
                </p>
            </main>
        </>
    );
};

export default About;