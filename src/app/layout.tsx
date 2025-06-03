import '../app/globals.css';
import { Geist } from 'next/font/google';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geist = Geist({ subsets: ['latin'], weight: '400' });

export const metadata = {
    title: 'Bareblog',
    description: 'A Markdown blog using Next.js',
    icons: {
        icon: "/favicon.png",
    },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={geist.className}>
        <body className="bg-gray-50 min-h-screen items-center justify-center p-8">
        <Navbar />
        <div className="w-full">{children}</div>
        <Footer />
        </body>
        </html>
    );
}
