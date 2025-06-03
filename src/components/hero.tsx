import React from "react";
import HeroGraphic from "@/components/herographic";

export default function HeroSection() {
    return (
        <section className="w-full mx-auto my-5 rounded-3xl border border-gray-200 px-4 sm:px-10 md:px-10 py-10 sm:py-14 md:py-10">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Left Text Content */}
                <div>
                    <div className="inline-block mb-4 px-3 py-1 text-sm font-medium bg-black text-white rounded-full">
                        Blog Starter
                    </div>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                        The only template you will need for a Blog made with Next.js & Markdown.
                    </h1>

                    <p className="text-base sm:text-lg font-medium mb-8 max-w-xl">
                        The template uses Markdown files for content. It features tag functionality and dynamic routing by slug. It has a very simple setup without many dependencies aside from what is included in a default Next.js project. This is the Hero Section, Below are the Latest Articles
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a href="#latestarticles">
                            <button className="px-6 py-3 bg-black text-white font-medium rounded-xl hover:bg-gray-600 transition">
                                Browse Latest Articles
                            </button>
                        </a>
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
