import React from "react";
import Image from "next/image";

export default function HeroGraphic() {
    return (
        <section className="w-full flex justify-center my-8">
            <Image
                src="/logo.png"
                alt="BareBlog Logo"
                width={540}
                height={540}
                className="w-100 h-100"
            />
        </section>
    );
}
