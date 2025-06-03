"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "@/components/logo";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="w-full mx-auto left-0 right-0">
            <div className="container w-2/3 mx-auto px-4 py-2 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2">
                    <Logo />
                    <div className="text-3xl font-medium">Starter Blog</div>
                </Link>

                {/* Desktop nav (only visible on lg+) */}
                <div className="hidden lg:flex items-center gap-6">
                    <a className="ml-10" href="#solutions">
                        <button className="hover:text-gray-400 transition text-xl font-medium">
                            Browse By Tag
                        </button>
                    </a>
                    <a href="/about">
                        <button className="hover:text-gray-400 transition text-xl font-medium">
                            About
                        </button>
                    </a>
                    <a href="#formblock">
                        <button className="px-8 text-white py-3 border-2 border-gray-200/20 bg-black hover:bg-gray-600 transition rounded-xl text-xl font-medium">
                            Latest Articles
                        </button>
                    </a>
                </div>

                {/* Mobile menu toggle (hidden on lg+) */}
                <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile menu dropdown (visible below lg) */}
            {isMenuOpen && (
                <div className="lg:hidden border-t border-white/10 py-4">
                    <div className="container mx-auto px-4 flex flex-col gap-4">
                        <a href="#solutions">
                            <button className="hover:text-gray-400 transition text-xl font-medium">
                                Solutions
                            </button>
                        </a>
                        <a href="/about">
                            <button className="hover:text-gray-400 transition text-xl font-medium">
                                About
                            </button>
                        </a>
                        <a href="#formblock">
                            <button className="px-8 py-3 text-white border-2 border-gray-200/20 bg-black hover:bg-gray-600 transition text-white rounded-xl text-xl font-medium">
                                Get In Touch
                            </button>
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
