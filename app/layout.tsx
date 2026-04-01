import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My PWA App",
  description: "My PWA built with Next.js",
  manifest: "/manifest.json",
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