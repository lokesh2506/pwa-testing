// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My PWA App",
  description: "A native-like PWA",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "My PWA App",
  },
  formatDetection: { telephone: false },
  openGraph: {
    type: "website",
    title: "My PWA App",
    description: "A native-like PWA built with Next.js",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale:1,
  userScalable: false, // native app feel
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* iOS Safari PWA support */}
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="My PWA App" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}