import type { Metadata, Viewport } from 'next';
import '../styles/global.css';

export const metadata: Metadata = {
  title: 'anilcandev',
  description:
    'Anılcan İpsalalı – terminal-themed personal portfolio website.',
};

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
