import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Creative Developer | Portfolio",
  description: "A cinematic scrollytelling portfolio experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
