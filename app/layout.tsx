import type { Metadata } from "next";
import "./globals.css";
import "./expressive-motion.css";
import "./mobile-story.css";
import AuthCallback from "./auth-callback";

export const metadata: Metadata = {
  title: "Pawprint Health",
  description: "A calmer way to choose preventative care for the animal who counts on you.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased"><AuthCallback />{children}</body>
    </html>
  );
}
