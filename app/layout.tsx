import type { Metadata } from "next";
import "./globals.css";
import { MotionEffects } from "./motion-effects";

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
      <body className="antialiased">{children}<MotionEffects /></body>
    </html>
  );
}
