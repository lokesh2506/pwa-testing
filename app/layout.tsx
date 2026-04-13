import type { Metadata, Viewport } from "next";
import "./globals.css";
import "../styles/theme.css";
import { SafeArea } from "../components/pwa/SafeArea";
import RegisterSW from "../components/pwa/RegisterSW";
import { Inter } from "next/font/google";
import ThemeProvider from "@/components/providers/ThemeProvider";


//  Inter Font (100–900)
const inter = Inter({
  subsets: ["latin"],
  weight: [
    "100", "200", "300", "400",
    "500", "600", "700", "800", "900"
  ],
  display: "swap",
  variable: "--font-inter",
});

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
  maximumScale: 1,
  userScalable: false, // native app feel
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <head>
        {/*for a quick switching of mood */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              try {
                const stored = localStorage.getItem('theme');
                const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const theme = stored || (systemDark ? 'dark' : 'light');

                document.documentElement.classList.toggle('dark', theme === 'dark');
              } catch(e) {}
            })();
            `,
          }}
        />

        {/* iOS Safari PWA support */}
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="My PWA App" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>

      <body className="antialiased font-sans">
        <ThemeProvider>
          {/* Service Worker */}
          <RegisterSW />
          {/* Safe Area */}
          <SafeArea>{children}</SafeArea>
        </ThemeProvider>
      </body>
    </html>
  );
}