import React from "react";
import { Globe } from "lucide-react";

export default function HeroGraphic() {
    return (
        <section className="w-full flex justify-center my-8">
            <Globe
                size={500}
                strokeWidth={1.5}
                color="#3b82f6" // Tailwind blue-500
                aria-label="Global crypto exchange licensing icon"
                role="img"
            />
        </section>
    );
}
