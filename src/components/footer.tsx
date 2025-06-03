import React from "react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full border-t border-gray-200 py-6 px-4 mt-20">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-center text-sm text-gray-600">
                <p className="mb-2 sm:mb-0">&copy; {new Date().getFullYear()} StarterBlog 2025</p>
                <Link href="/about">
                    <div className="text-gray-600 hover:text-black transition font-medium">About</div>
                </Link>
            </div>
        </footer>
    );
}
