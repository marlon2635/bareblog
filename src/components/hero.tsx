import React from "react";
import HeroGraphic from "@/components/herographic";
import { Github } from 'lucide-react';
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="w-full mx-auto my-5 rounded-3xl border border-gray-200 px-4 sm:px-6 lg:px-10 py-10 sm:py-14 lg:py-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left Text Content */}
                <div>
                    <div className="inline-block mb-4 px-3 py-1 text-sm font-medium bg-black text-white rounded-full">
                        Blog Starter
                    </div>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                        Bareblog is the only template you will need for a Blog made with Next.js & Markdown.
                    </h1>

                    <p className="text-base sm:text-lg lg:text-xl font-medium mb-8 max-w-xl text-gray-700">
                        The template uses Markdown files for content. It features tag functionality and dynamic routing by slug. It has a very simple setup with very little dependencies aside from what is included in a default Next.js project. This is the Hero Section, Below are the Latest Articles.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a href="#latestarticles">
                            <button className="px-6 py-3 bg-black text-white font-medium rounded-xl hover:bg-gray-700 transition">
                                Browse Latest Articles
                            </button>
                        </a>
                        <Link href="https://github.com/marlon2635/bareblog" target="_blank">
                            <div
                                className="flex items-center gap-2 px-6 py-3 bg-black text-white font-medium rounded-xl hover:bg-gray-700 transition cursor-pointer">
                                <Github className="w-4 h-4" />
                                Fork on GitHub
                            </div>
                        </Link>
                    </div>
                </div>
                {/* Right Image Placeholder */}
                <div className="w-full">
                    <HeroGraphic />
                </div>
            </div>
        </section>
    );
}