import type {Metadata, Viewport} from 'next';
import '../styles/global.css';

export const metadata: Metadata = {
    title: 'anilcan.dev',
    description:
        'Anılcan İpsalalı – terminal-themed personal portfolio website.',
    icons: {
        icon: '/assets/favicon.ico',
        apple: '/assets/apple-icon.png',
        shortcut: '/assets/favicon-16x16.png',
    },
    manifest: '/assets/manifest.json',
};

export const viewport: Viewport = {
    initialScale: 1,
    width: 'device-width',
    maximumScale: 1,
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className="bg-light-background dark:bg-dark-background text-light-foreground dark:text-dark-foreground">
          {children}
        </body>
        </html>
    );
}