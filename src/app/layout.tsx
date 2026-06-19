import type {Metadata, Viewport} from 'next';
import '../styles/global.css';
import themes from '../../themes.json';

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
        <head>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        try {
                            const themes = ${JSON.stringify(themes)};
                            let themeName = localStorage.getItem('theme') || 'default';
                            if (!themes[themeName]) themeName = 'default';
                            const theme = themes[themeName];
                            const root = document.documentElement;
                            for (const key in theme.light) {
                                root.style.setProperty('--theme-light-' + key, theme.light[key]);
                            }
                            for (const key in theme.dark) {
                                root.style.setProperty('--theme-dark-' + key, theme.dark[key]);
                            }
                            let mode = localStorage.getItem('mode');
                            if (!mode) {
                                mode = 'dark';
                                localStorage.setItem('mode', mode);
                            }
                            if (mode === 'dark') {
                                root.classList.add('dark');
                            } else {
                                root.classList.remove('light');
                            }
                        } catch (e) {}
                    `
                }}
            />
            <title>Terminal-themed personal portfolio website.</title>
        </head>
        <body className="bg-light-background dark:bg-dark-background text-light-foreground dark:text-dark-foreground">
        {children}
        </body>
        </html>
    );
}