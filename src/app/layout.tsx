import './globals.css';
import { Geist } from 'next/font/google';

const geist = Geist({ subsets: ['latin'], weight: '400' });

export const metadata = {
    title: 'My Blog',
    description: 'A Markdown blog with Next.js',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={geist.className}>
        <body
            style={{
                display: 'flex',
                justifyContent: 'center',
                padding: '2rem',
                minHeight: '100vh',
                backgroundColor: '#f9fafb',
            }}
        >
        <div
            style={{
                width: '80vw',  // 4/5 of viewport width
                maxWidth: '960px',
            }}
        >
            {children}
        </div>
        </body>
        </html>
    );
}
