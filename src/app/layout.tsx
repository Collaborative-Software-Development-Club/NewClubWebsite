import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';

const firaCode = Fira_Code({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'CSDC',
    description: 'Website of students organization the Collaborative Software Development Club',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={firaCode.className}>
                <Navigation />
                {children}
            </body>
        </html>
    );
}
