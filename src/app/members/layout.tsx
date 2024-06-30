import content from '@/websiteContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: content.OFFICERS_HEADING,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return children;
}
