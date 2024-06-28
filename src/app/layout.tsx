import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import WebsiteFooter from '@/components/WebsiteFooter';
import FlexContainer from '@/ui_library/components/FlexContainer';
import content from '@/websiteContent';

const firaCode = Fira_Code({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: content.TITLE,
    metadataBase: new URL(content.URL),
    description: content.DESCRIPTION,
    openGraph: {
        title: content.TITLE,
        description: content.DESCRIPTION,
        url: content.URL,
        //siteName: "Next.js",
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        title: content.TITLE,
        description: content.DESCRIPTION,
        //siteId: '1467726470533754880',
        //creator: '@nextjs',
        //creatorId: '1467726470533754880',
        //images: ['https://nextjs.org/og.png'], // Must be an absolute URL
    },
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
                <WebsiteFooter />
            </body>
        </html>
    );
}
