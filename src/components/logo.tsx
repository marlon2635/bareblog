import React from "react";
import Image from "next/image";

export default function Logo() {
    return (
        <Image
            src="/logo.png"
            alt="BareBlog Logo"
            width={40}
            height={40}
            className="w-10 h-10"
        />
    );
}
